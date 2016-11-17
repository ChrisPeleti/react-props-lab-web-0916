const React = require('react');

const Spaceship = require('./components/Spaceship');

ReactDOM.render(
  <Spaceship name="Millennium Falcon" />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
