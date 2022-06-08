import { userService } from '../services/user-service';
import { userActions } from './user-slice'

export const login = ({ username, password }) => {
  return async (dispatch) => {
    const sendData = async () => {
      const user = await userService.login(username, password);
    };
    try {
      sendData()
    } catch (err) {
      console.log(err);
    }
  };
};


export const signup = ({ username, password }) => {
  return async (dispatch) => {
    const sendData = async () => {
      const user = await userService.signup(username, password);
    };
    try {
      sendData()
    } catch (err) {
      console.log(err);
    }
  };
};
