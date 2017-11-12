/*
 * UIPrediction
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import UXCard from 'components/UXComponents/CardGroup';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import './style.css';

export class UIPrediction extends React.Component { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
      selectedScreens: [],
    };
  }

  render() {
    return (
      <article>
        <Helmet>
          <title></title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col col-sm-12 col-md-6">
              <UXCard />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

UIPrediction.propTypes = {
};

export function mapDispatchToProps() {
  return {
  };
}

const withConnect = connect(null, mapDispatchToProps);

const withReducer = injectReducer({ key: 'categorySelection', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UIPrediction);
