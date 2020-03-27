import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import ScrollBar from '../components/Scrollbars';
import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import "../assets/scss/black-dashboard-react.scss";



export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = true;

  if (!signed && isPrivate) {
    return < Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  // const Layout = signed ? DefaultLayout : AuthLayout;
  const Layout = DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <ScrollBar
            autoHeight
            autoHeightMin={600}
          >
            <Component {...props} />
          </ScrollBar>
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

RouteWrapper.propTypes = {
  isPrivate: false,
};