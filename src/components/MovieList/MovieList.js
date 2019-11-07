import React, { useEffect } from "react";
import MovieItem from "../MovieItem/MovieItem";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
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

const MovieList = ({ movies, loading, initial, fetchInitialMovies }) => {
  let movieContent = null;

  useEffect(() => {
    if (initial) {
      fetchInitialMovies("man");
    }
  }, [initial]);

  if (loading) {
    movieContent = <Spinner />;
  } else if (movies) {
    movieContent = (
      <Grid>
        {movies.map(movie => (
          <MovieItem
            posterUrl={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            imbdId={movie.imbdID}
          />
        ))}
      </Grid>
    );
  }
  return <> {movieContent} </>;
};

const mapStateToProps = ({ movies, loading, initial }) => ({
  movies,
  loading,
  initial
});
const mapDispatchToProps = dispatch => ({
  fetchInitialMovies: query => dispatch(actions.fetchInitialMovies(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
