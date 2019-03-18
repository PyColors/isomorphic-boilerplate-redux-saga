import React from 'react';
import PropTypes from 'prop-types';

const DefaultTemplate = ({ header, children, routes, footer, ...props }) => {
  return (
    <main {...props}>
      <header>{header}</header>
      <section>{routes}</section>
      <footer>{footer}</footer>
      <div>{children}</div>
    </main>
  );
};

DefaultTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  routes: PropTypes.any.isRequired
};

export default DefaultTemplate;
