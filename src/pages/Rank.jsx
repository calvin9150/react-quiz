import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 700px;
  background-color: #c7c7c7;
`;

const Wrap = styled.div`
  width: 90%;
`;

const RankWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid gray;
  margin: 20px 0;

  h2 {
    padding: 0 30px;
    border-right: 1px solid gray;
  }
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10% 0;
`;

const Rank = () => {
  const rank = useSelector((state) => state.rank.ranking);

  const rank_array = rank.sort((a, b) => {
    return b.score - a.score;
  });

  console.log(rank_array);

  return (
    <Container>
      <Wrap>
        {rank_array.map((v, i) => (
          <RankWrapper key={i}>
            <h2>{i + 1 + "등"}</h2>
            <CommentWrapper>
              <div>{v.name}</div>
              <div>{v.comment}</div>
            </CommentWrapper>
          </RankWrapper>
        ))}
      </Wrap>
    </Container>
  );
};

export default Rank;
