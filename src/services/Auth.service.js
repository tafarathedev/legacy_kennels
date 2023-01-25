import axios from '../api/axios.js'
import { GetCookie } from '../hooks/getCookies.js';
import { SetCookies } from '../hooks/SetCookies.js';
import { RemoveCookie } from '../hooks/removeCookies.js';


const signup = (email, password, firstName,lastName, agree) => {
  return axios
    .post("create", {
        email,
        password,
        firstName,
        lastName,
        agree
    })
    .then((res) => {
      if (res.data) {
        SetCookies("user", JSON.stringify(res.data))
        //localStorage.setItem("user", JSON.stringify(res.data));
      }

      return res.data;
    });
};

const login = (email, password) => {
  return axios
    .post("login", {
      email,
      password,
    })
    .then((res) => {
      if (res.data) {
        SetCookies("user", JSON.stringify(res.data))
        //localStorage.setItem("user", JSON.stringify(res.data));
      }

      return res.data;
    });
};

const logout = () => {
 return  RemoveCookie("user")
 
};

const getCurrentUser = () => {
 return GetCookie("user")

}


const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;