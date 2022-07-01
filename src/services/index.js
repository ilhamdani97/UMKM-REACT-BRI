/* eslint-disable no-alert */
import axios from 'axios';
import CONFIG from '../config';

const fullURL = (path) => {
  return `${CONFIG.API_URL}/${path}`;
};

export const handleNetworkError = (error) => {
  if (error.message === 'Network request failed') {
    alert(
      'Kesalahan Jaringan',
      'Silakan periksa koneksi Anda dan coba kembali.',
      'iconNoInet'
    );
  }
  throw error;
};

export const handleCommonError = (error) => {
  if (error && error.data.msg === 'invalid token') {
    alert(
      'Session kamu telah habis',
      'Silakan login kembali dengan akun kamu yg telah terdaftar'
    );
    throw new Error({
      logout: true
    });
  } else {
    throw error;
  }
};

const post =
  (api) =>
  (data, timemout = true) => {
    const tokens = localStorage.getItem('token');
    return axios.post(
      fullURL(api),
      data,
      {
        method: 'POST',
        headers: {
          Authorization: tokens
        }
      },
      timemout
    );
  };

const patch =
  (api) =>
  (data, timemout = true) => {
    const tokens = localStorage.getItem('token');
    return axios
      .patch(
        fullURL(api),
        data,
        {
          method: 'POST',
          headers: {
            Authorization: tokens
          }
        },
        timemout
      )
      .catch((err) => {
        const {
          history: { push }
        } = this.props;
        push('/');
        localStorage.clear();
      });
  };

const postData =
  (api) =>
  (data, timemout = true) => {
    const tokens = localStorage.getItem('token');
    return axios
      .post(
        fullURL(api),
        data,
        {
          method: 'POST',
          headers: {
            Authorization: tokens
          }
        },
        { handleNetworkError, handleCommonError },
        timemout
      )
      .catch((err) => {
        const {
          history: { push }
        } = this.props;
        push('/');
        localStorage.clear();
      });
  };

const get =
  (api) =>
  (params, timemout = true) => {
    const tokens = localStorage.getItem('token');

    return axios(
      fullURL(api),
      {
        method: 'GET',
        headers: {
          Authorization: tokens
        }
      },
      { handleNetworkError, handleCommonError },
      timemout
    ).catch((err) => {
      // const {
      //   history: { push }
      // } = this.props;
      // push('/');
      // localStorage.clear();
    });
  };

const getWithSlug =
  (api) =>
  (slug, timemout = true) => {
    const tokens = localStorage.getItem('token');
    return axios(
      `${fullURL(api)}${slug}`,
      {
        method: 'GET',
        headers: {
          Authorization: tokens
        }
      },
      { handleNetworkError, handleCommonError },
      timemout
    ).catch((err) => {
      const {
        history: { push }
      } = this.props;
      push('/');
      localStorage.clear();
    });
  };

// Auth
export const login = post('authentication/login/');
export const register = post('authentication/register/');
export const changePin = post('authentication/change-pin/');
export const resetPin = post('authentication/reset-pin/');
export const sentOtp = post('authentication/send-otp/');
export const setPin = post('authentication/set-pin/');
export const verifyOtp = post('authentication/verify-otp/');
// Survey
export const adminitrativeDistrict = getWithSlug(
  'survey/adminitrative/district/'
);
export const adminitrativeProvince = get('survey/adminitrative/province/');
export const adminitrativeProvinceId = getWithSlug(
  'survey/adminitrative/province/'
);
export const adminitrativeRegency = getWithSlug(
  'survey/adminitrative/regency/'
);
export const adminitrativeKelurahan = getWithSlug(
  'survey/adminitrative/kelurahan/'
);
export const answerBulk = postData('survey/answer/bulk-answer/');
export const answerId = getWithSlug('survey/answer/');
export const surveyGroup = getWithSlug('survey/group/');
export const surveyGroupId = getWithSlug('survey/group/');
export const getprofileBussines = get('survey/profile/business/');
export const profileBussines = post('survey/profile/business/');
export const getprofileBussinesId = getWithSlug('survey/profile/business/');
export const getExample = getWithSlug('survey/question/');
export const getProfileUser = get('survey/profile/user');
export const getProfileCheckPoint = get('survey/profile/checkpoint/');
export const getHistorySurvey = getWithSlug('survey/survey/');
export const getDataHistorySurvey = get('survey/survey/');
export const updateDataUser = patch('survey/profile/user');

const API = {
  login,
  register,
  changePin,
  resetPin,
  sentOtp,
  setPin,
  verifyOtp,
  adminitrativeDistrict,
  adminitrativeProvince,
  adminitrativeProvinceId,
  adminitrativeKelurahan,
  adminitrativeRegency,
  answerBulk,
  answerId,
  surveyGroup,
  surveyGroupId,
  getprofileBussines,
  profileBussines,
  getprofileBussinesId,
  getExample,
  getProfileUser,
  getProfileCheckPoint,
  getHistorySurvey,
  getDataHistorySurvey,
  updateDataUser
};

export default API;
