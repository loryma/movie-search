import React from "react";
import Search from "../components/Search/Search";
import MovieList from "../components/MovieList/MovieList";
import Pagination from "../components/Pagination/Pagination";
import InitialMessage from "../components/InitialMessage/InitialMessage";

const Home = () => {
  return (
    <>
      <Search />
      <InitialMessage />
      <MovieList />
      <Pagination />
    </>
  );
};

export default Home;
