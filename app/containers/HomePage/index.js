/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './style.css';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>CopraML</title>
          <meta name="description" content="Monsoon is coming" />
        </Helmet>
        <div className="text-center back-img-things">
          <div className="copraLogo"><span className="wireframe-logo">WireFramer</span></div>
          <h1 className="hero-headline">Build App Prototypes using the power of AI.</h1>
          <div className="create-project">
            <Link to="/create" className="btn btn-primary btn-lg">Create your prototype <i className="ion-chevron-right mx-2"></i></Link>
          </div>
        </div>
      </article>
    );
  }
}
