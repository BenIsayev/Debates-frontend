import { httpService } from './http-service';


const login = (username, password) => {
    httpService.post('auth/login', { username, password })
}

const signup = (username, password) => {
    httpService.post('auth/signup', { username, password })
}

export const userService = {
    login,
    signup
}