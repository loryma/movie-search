import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const Pagination = ({ pageNumber = 0 }) => {
  const onPageClick = page => {};
  const pages = Array(pageNumber).map((_, index) => <span>{index}</span>);
  return <div>{pages}</div>;
};

const mapStateToProps = state => ({ pageNumber: state.page });
const mapDispatchToProps = dispatch => ({
  getPage: page => dispatch(actions.getPage(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
