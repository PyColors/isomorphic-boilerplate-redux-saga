import React, { Component, Fragment } from 'react';

class Html extends Component {
  static renderSnare(isNotLocal) {
    if (isNotLocal) {
      return (
        <Fragment>
          <input type="hidden" id="ioBlackBox" />
          <script src="https://mpsnare.iesnare.com/snare.js" />
        </Fragment>
      );
    }
  }

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

          {/* eslint-disable-next-line */}
        </body>
      </html>
    );
    /* eslint-enable */
  }
}

export default Html;
