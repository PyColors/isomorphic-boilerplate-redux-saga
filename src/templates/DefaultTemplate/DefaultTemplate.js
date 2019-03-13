import React from 'react';
import PropTypes from 'prop-types';

const DefaultTemplate = ({ header, children, routes, ...props }) => {
  return (
    <main {...props}>
      <header>{header}</header>
      <section>{routes}</section>
      <div>{children}</div>
    </main>
  );
};

DefaultTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  routes: PropTypes.any.isRequired
};

export default DefaultTemplate;
