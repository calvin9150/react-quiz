import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addRank } from "../redux/rank";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 700px;
  background-color: #c7c7c7;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

const Comment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const input_comment = useRef(null);
  const user_name = useSelector((state) => state.user.user_name);
  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const selected_list = useSelector((state) => state.quiz.selected_list);

  const [score, setScore] = useState(0);

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < selected_list.length; i++) {
      if (quiz_list[i].answer === selected_list[i]) {
        console.log(quiz_list[i].answer, selected_list[i]);
        count += 10;
        continue;
      }
    }
    setScore(count);
  }, []);

  console.log(quiz_list, selected_list, score);

  const onClickBtn = useCallback(() => {
    let rank_info = {
      score: parseInt(score),
      name: user_name,
      comment: input_comment.current.value,
    };
    dispatch(addRank(rank_info));
    history.push("/rank");
    console.log(rank_info);
  }, [score, input_comment, user_name]);

  return (
    <Container>
      <div style={{ fontSize: "30px" }}>{user_name}의 한마디...</div>
      <Inputs>
        <input
          ref={input_comment}
          type="text"
          placeholder="한 마디 하기"
          style={{ height: "30px" }}
        />
        <button onClick={onClickBtn}>제출</button>
      </Inputs>
    </Container>
  );
};

export default Comment;
