import { argv } from 'optimist';

const useLiveData = argv.useLiveData === 'true';
const useServerRender = argv.ServerRender === 'true';

const config = {
  http: {
    port: process.env.PORT || 4040
  },
  useLiveData,
  useServerRender
};

export default config;
