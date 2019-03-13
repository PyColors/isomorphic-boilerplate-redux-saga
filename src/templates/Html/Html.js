import React, { Component } from 'react';

class Html extends Component {
  render() {
    /* eslint-disable */
    return (
      <html lang="en-gb">
        <head>
          <title>Isomorphic react application</title>
        </head>
        <body className="container mt-5">
          <div
            id="root"
            dangerouslySetInnerHTML={{ __html: this.props.children }}
          />
        </body>
      </html>
    );
  }
}

export default Html;
