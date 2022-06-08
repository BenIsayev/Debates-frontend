import {userService} from '../services/user-service';

export const login = ({username, password}) => {
  return async (dispatch) => {
    const sendData = async () => {
      const user = await userService.login(username, password);
    };
    try {
    } catch (err) {
      console.log(err);
    }
  };
};
