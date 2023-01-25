import axios from '../api/axios.js'
import { GetCookie } from '../hooks/getCookie.js';
import { SetCookie } from '../hooks/setCookie.js';
import { RemoveCookie } from '../hooks/removeCookie.js';


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
        SetCookie("user", JSON.stringify(res.data))
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
        SetCookie("user", JSON.stringify(res.data))
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