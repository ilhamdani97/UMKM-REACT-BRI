import axios from 'axios';
import * as types from '../types/type';

export default () => ({
  type: types.SHOW_DATA_PROFILE,
  payload: axios({
    method: 'GET'
  })
});
