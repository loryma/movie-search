import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import defaultImage from "./default-movie.png";

const MovieContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  padding-bottom: 2em;
  text-decoration: none;
  color: black;
`;

const Poster = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${props =>
    props.url && props.url.includes("http") ? props.url : defaultImage});
  padding-top: 100%;
  width: 70%;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 1em;
  padding-bottom: 1em;
  text-align: center;
`;

const Year = styled.p`
  font-weight: bold;
  margin-top: 1em;
  font-size: 0.8em;
`;

const MovieItem = ({ id, posterUrl, title, year }) => {
  return (
    <MovieContainer to={{ pathname: `/movies/${id}` }}>
      <Title>{title}</Title>
      <Poster url={posterUrl} />
      <Year>({year})</Year>
    </MovieContainer>
  );
};

export default MovieItem;
