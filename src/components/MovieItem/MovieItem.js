import React from "react";
import styled from "styled-components";
import defaultImage from "./default-movie.png";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  padding-bottom: 2em;
`;

const Poster = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${props =>
    props.url ? props.url : "./default-movie.png"});
  padding-top: 100%;
  width: 70%;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 1.1em;
  padding-bottom: 1em;
`;

const Year = styled.p`
  font-weight: bold;
  margin-top: 0.8em;
`;

const MovieItem = ({ posterUrl, title, year }) => {
  return (
    <MovieContainer>
      <Title>{title}</Title>
      <Poster url={posterUrl} />
      <Year>{year}</Year>
    </MovieContainer>
  );
};

export default MovieItem;
