import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 500px;
  height: 700px;
  background-color: #c7c7c7;
`;

const Score = () => {
  const history = useHistory();

  const [score, setScore] = useState(0);

  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const selected_list = useSelector((state) => state.quiz.selected_list);
  const user_name = useSelector((state) => state.user.user_name);

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

  return (
    <Container>
      <div>{user_name}의 점수는...</div>
      <h1>{score}</h1>
      <button
        onClick={() => {
          history.push("/comment");
        }}
      >
        {user_name}의 한마디
      </button>
    </Container>
  );
};

export default Score;
