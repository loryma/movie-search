import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import styled from "styled-components";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";

const Grid = styled.div`
  width: 100%;

  @media (min-width: 540px) {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, minmax(200px, 50%));
  }
  @media (min-width: 780px) {
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 25%));
  }
`;

const MovieList = ({ movies, loading }) => {
  let movieContent = null;

  if (loading) {
    movieContent = <Spinner />;
  } else if (movies) {
    movieContent = movies.map(movie => (
      <MovieItem
        posterUrl={movie.Poster}
        title={movie.Title}
        year={movie.Year}
        imbdId={movie.imbdID}
      />
    ));
  }
  return <Grid>{movieContent}</Grid>;
};

const mapStateToProps = ({ movies, loading }) => ({ movies, loading });

export default connect(mapStateToProps)(MovieList);
