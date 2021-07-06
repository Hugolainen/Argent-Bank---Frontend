import axios from './axios';
import { loginResponse } from '../models/loginResponse';
import { AxiosResponse } from 'axios';

const logIn = (email: string, password: string): Promise<AxiosResponse<loginResponse>> =>
  axios.post<loginResponse>('/tokens', { email: email, password: password });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logIn,
};
