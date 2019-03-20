import { argv } from 'optimist';

const config = {
  http: {
    port: process.env.PORT || 3000
  },
  useLiveData: argv.useLiveData === 'true',
  useServerRender: argv.ServerRender === 'true'
};

export default config;
