import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  margin-top: auto;
  padding-bottom: 0.8em;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }
`;

const PageLink = styled.span`
  display: inline-block;
  font-size: 0.6em;
  cursor: pointer;
  padding: 0.5em;
  color: violet;
  margin-right: 0.3em;
  background-color: ${props => (props.activePage ? "#D3D3D3" : "white")};
`;

const Pagination = ({ pageNumber, getPage, query, pageNow }) => {
  const onPageClick = page => {
    getPage(query, page);
  };
  let pages = null;
  if (pageNumber > 1) {
    pages = [...Array(pageNumber)].map((_, index) => (
      <PageLink
        activePage={pageNow === index + 1}
        onClick={onPageClick.bind(this, index + 1)}
      >
        {index + 1}
      </PageLink>
    ));
  }

  return <PaginationContainer>{pages}</PaginationContainer>;
};

const mapStateToProps = state => ({
  pageNumber: state.search.page,
  query: state.search.query,
  pageNow: state.search.pageNow
});
const mapDispatchToProps = dispatch => ({
  getPage: (query, page) => dispatch(actions.searchQuery(query, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
