import axios, {AxiosResponse} from 'axios';
import {User} from '../../redux/reducers/authentication/_interfaces';

export function getUsersService(): Promise<AxiosResponse<Array<User>>> {
  return axios.get('/users');
}
