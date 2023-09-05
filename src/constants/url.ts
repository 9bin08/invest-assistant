import { isProd } from './mode';

const SNS_LOGIN_ORIGIN = isProd ? '' : ''; // hub't auth server Url
const SNS_LOGIN_CLIENT = isProd ? '' : ''; // hub't client Url

export const KAKAO_LOGIN_URL ='';
export const NAVER_LOGIN_URL = '';
export const GOOGLE_LOGIN_URL = '';
export const APPLE_LOGIN_URL ='';

export default {
  KAKAO_LOGIN_URL,
  NAVER_LOGIN_URL,
  GOOGLE_LOGIN_URL,
  APPLE_LOGIN_URL,
};
