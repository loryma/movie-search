import React from "react";
import Search from "../components/Search/Search";
import MovieList from "../components/MovieList/MovieList";
import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  return (
    <>
      <Search />
      <MovieList />
      <Pagination />
    </>
  );
};

export default Home;
