import { db } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const ADD_ANSWER = "quiz/ADD_ANSWER";
const LOAD_QUIZ = "quiz/LOAD_QUIZ";

export const addAnswer = (selected_list) => {
  return { type: ADD_ANSWER, selected_list };
};

export const loadQuiz = (quiz_list) => {
  return { type: LOAD_QUIZ, quiz_list };
};

// 파이어베이스랑 통신하는 부분
export const loadQuizFB = () => {
  return async function (dispatch) {
    // 데이터를 가져와요!
    const quiz_data = await getDocs(collection(db, "quiz"));

    let quiz_list = [];

    // 하나씩 우리가 쓸 수 있는 배열 데이터로 만들어줍시다!
    quiz_data.forEach((b) => {
      // 콘솔로 확인해요!
      console.log(b.id, b.data());
      quiz_list.push({ id: b.id, ...b.data() });
    });

    // 잘 만들어졌는 지 리스트도 확인해봐요! :)
    console.log(quiz_list);
    dispatch(loadQuiz(quiz_list));
  };
};

export const addAnswerFB = (seleted) => {
  return async function (dispatch) {
    // 파이어스토어에 추가하기를 기다려요!
    await addDoc(collection(db, "quiz"));
    // 그럼 이제 액션을 일으키자! (수정해달라고 요청하자!)
    dispatch(addAnswer(seleted));
  };
};

const initialState = {
  quiz_list: [
    { question: "맥주는 배가 부르다", answer: true },
    { question: "맥주는 배가 부르다2", answer: true },
    { question: "소주는 부르다", answer: false },
  ],
  selected_list: [],
};

const quiz_reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "quiz/ADD_ANSWER": {
      const new_selected_list = [...state.selected_list, action.selected_list];
      return { ...state, selected_list: new_selected_list };
    }
    case "quiz/LOAD_QUIZ": {
      return { quiz_list: action.quiz_list };
    }
    default:
      return state;
  }
};

export default quiz_reducer;
