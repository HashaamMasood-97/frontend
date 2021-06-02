import axios from "axios";
import { ip } from "../ip/ip";
import AsyncStorage from "@react-native-community/async-storage";
import React, { Component } from "react";

export const register = (newUser) => {
  return axios
    .post(ip + ":3700/gift/register", {
      full_name: newUser.full_name,
      email: newUser.email,
      password: newUser.password,
      address: newUser.address,
      contact: newUser.contact,
    })
    .then((response) => {
      console.log("Registered");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const login = (user) => {
  return axios
    .post(ip + ":3700/gift/login", {
      email: user.email,
      password: user.password,
     
    })
    .then((response) => {
      console.log(response.data);

      const datas = {
        name: response.data.body.full_name,
        Email: response.data.body.email,
        address: response.data.body.address,
        contact: response.data.body.contact,
        id: response.data.body._id,
      };
      
        AsyncStorage.setItem("token", JSON.stringify(datas))
          .then(() => {
            console.log("It was saved successfully");
          })
          .catch(() => {
            console.log("There was an error saving the product");
          });
    
      

      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/*export const getProfile = (token) => {
  return axios
    .get("http://localhost:3500/homemedic/profile/doctor", {
      headers: { Authorization: ` ${token}` },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}; */
