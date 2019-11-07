import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  oveflow-x: scroll;
`;

const PageLink = styled.span`
  display: inline-block;
  font-size: 0.6em;
  cursor: pointer;
  padding: 0.5em;
  color: violet;
  margin-right: 0.3em;
  background-color: ${props => (props.activePage ? "green;" : "white;")};
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
  pageNumber: state.page,
  query: state.query,
  pageNow: state.pageNow
});
const mapDispatchToProps = dispatch => ({
  getPage: (query, page) => dispatch(actions.searchQuery(query, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
