import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import * as actions from "../../store/actions";
import Spinner from "../Spinner/Spinner";
import withError from "../../hoc/withError";
import defaultImage from "./default-movie.png";

const MovieContainer = styled.div`
  width: 100%;

  @media (min-width: 540px) {
    display: grid;
    grid-template-columns: 35% 65%;
  }
`;

const Poster = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${props =>
    props.url && props.url.includes("http") ? props.url : defaultImage});
  padding-top: 150%;
  width: 100%;
`;

const MovieDetails = styled.div`
  width: 100%;
  margin-top: 1em;

  @media (min-width: 540px) {
    margin-top: 0;
    justify-self: end;
    padding-left: 2em;
  }
`;

const MovieTitle = styled.h2`
  font-weight: bold;
  font-size: 1em;

  @media (min-width: 540px) {
    font-size: 1.1em;
  }
`;

const MovieYear = styled.p`
  font-weight: bold;
  font-size: 0.8em;
  padding-bottom: 0.5em;
`;

const MoviePlot = styled.p`
  padding-top: 0.5em;
  font-size: 0.8em;
  line-height: 1.4em;
  @media (min-width: 540px) {
    width: 80%;
  }
`;

const MovieGenre = styled.span`
  font-size: 0.8em;
  display: inline-block;
  color: grey;
  padding-bottom: 0.5em;
`;

const MovieRating = styled.span`
  font-size: 0.8em;
  display: inline-block;
  padding-bottom: 0.5em;
  font-weight: bold;
  color: ${props => (Number(props.rating) < 5 ? "red" : "green")};
`;

const Movie = ({ match, movie, loading, error, getMovie }) => {
  let { id } = useParams();
  console.log(match);
  // const id = "tt1300854";
  console.log("id", id);
  let movieContent = null;
  useEffect(() => {
    if (id) {
      getMovie(id);
    }
  }, [id]);

  if (movie && !error) {
    movieContent = (
      <MovieContainer>
        <Poster url={movie.Poster} />
        <MovieDetails>
          <MovieTitle>{movie.Title}</MovieTitle>
          <MovieYear>({movie.Year})</MovieYear>
          <MovieGenre>{movie.Genre}</MovieGenre>

          <div>
            <bold>
              Imdb rating:{" "}
              <MovieRating rating={movie.imdbRating}>
                {movie.imdbRating}
              </MovieRating>
            </bold>
          </div>
          <div>
            <bold>Plot:</bold>
          </div>
          <MoviePlot>{movie.Plot}</MoviePlot>
        </MovieDetails>
      </MovieContainer>
    );
  }

  if (loading) {
    movieContent = <Spinner />;
  }

  return <>{movieContent}</>;
};

const mapStateToProps = ({ movie }) => ({
  movie: { ...movie.movie },
  loading: movie.loading,
  error: movie.error
});
const mapDispatchToProps = dispatch => ({
  getMovie: id => dispatch(actions.getMovie(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withError(Movie));
