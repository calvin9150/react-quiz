import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer, addAnswerFB } from "../redux/quiz";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 700px;
  background-color: #c7c7c7;
`;

const Content = styled.div`
  margin: 100px 0 0;
  font-size: 30px;

  button {
    width: 50%;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 20px;
  background-color: gray;
`;

const Highlight = styled.div`
  background: orange;
  transition: 1s;
  width: ${(props) => props.width};
  height: 20px;
`;

const Quiz = () => {
  const [count, setCount] = useState(0);

  const history = useHistory();
  const dispatch = useDispatch();

  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const selected_list = useSelector((state) => state.quiz.selected_list);

  // const setAnswer = (select) => {
  //   dispatch(addAnswer(select));
  // };

  const addAnswerList = (seleted) => {
    dispatch(addAnswerFB(seleted));
  };

  useEffect(() => {
    if (selected_list?.length === quiz_list?.length) {
      history.push("/score");
      return;
    }
  }, [selected_list]);

  return (
    <Container>
      <Bar>
        <Highlight width={((count + 1) / quiz_list.length) * 100 + "%"} />
      </Bar>
      <Content>
        <div>{count + 1}번 문제</div>
        <div>{quiz_list[count]?.["question"]}</div>
        <div>
          <button
            onClick={() => {
              setCount(count + 1);
              addAnswerList(true);
            }}
          >
            O
          </button>
          <button
            onClick={() => {
              setCount(count + 1);
              addAnswerList(false);
            }}
          >
            X
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default Quiz;
