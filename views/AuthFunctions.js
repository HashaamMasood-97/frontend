import axios from 'axios'
import { ip } from "../ip/ip";
import AsyncStorage from '@react-native-community/async-storage';

export const register = newUser => {
  return axios
    .post(ip + ":3700/gift/register", {
      full_name: newUser.full_name,
      email: newUser.email,
      password: newUser.password,
    })
    .then(response => {
      console.log('Registered')
    }).catch(err => {
      console.log(err)
    })  
}

export const login = user => {
  
        return axios
          .post(ip + ":3700/gift/login", {
            email: user.email,
            password: user.password
          })
          .then(response => {
            console.log(response.data);
            if (typeof response.data === 'string'){
            AsyncStorage.setItem('token', response.data)
            } else {
              return ("password incorrect");
            }
            return response.data
          })
          .catch(err => {
            console.log(err)
          })   
}

export const getProfile = token => {
  return axios
    .get('http://localhost:3500/homemedic/profile/doctor', {
      headers: { Authorization: ` ${token}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}