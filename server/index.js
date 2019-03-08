import config from './config';
import app from './app';

app.listen(config.http.port, '0.0.0.0', () =>
  console.info(
    `App listening on ${config.http.port} - http://localhost:${
      config.http.port
    }`
  )
);
