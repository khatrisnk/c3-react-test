import axios from 'axios';
import { _REQ_URL_PEARSON_USERS } from '../constants/apiEndpoints';

const makeRequest = (urlExtension, data = {}) => {
  return axios.get(urlExtension, { crossdomain: true });
};
export default {
  getPearsonUsers: () => makeRequest(_REQ_URL_PEARSON_USERS)
};
