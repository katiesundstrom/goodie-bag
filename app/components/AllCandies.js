import candiesReducer, { getCandies } from '../reducers/candiesReducer';

import React from 'react';
import { connect } from 'react-redux';

const AllCandies = props => {
  console.log('PROPS!!!  ', props);
  return null;
};

const mapStateToProps = state => {
  console.log('Mapping STATE to props!!!');
  return {
    candies: state.candies,
  };
};

const mapDispatchToProps = dispatch => {
  console.log('Mapping DISPATCH to props!!!');
  return {
    getCandies: () => dispatch(getCandies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCandies);
