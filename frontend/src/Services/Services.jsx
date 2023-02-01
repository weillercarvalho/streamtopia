import axios from "axios";

const BASE_URL = `http://localhost:5000`;


function creatingHeaders() {
  const auth = JSON.parse(localStorage.getItem('streamtopia'));
  const header = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    }
  }
  return header;
}

function signin(body) {
  const promise = axios.post(`${BASE_URL}/signin`, body);
  return promise;
}

function signup(body) {
  const promise = axios.post(`${BASE_URL}/signup`, body);
  return promise;
}

function getPayment() {
  const auth = creatingHeaders();
  const promise = axios.get(`${BASE_URL}/payment`, auth);
  return promise;
}

function postPayment(body) {
  const auth = creatingHeaders();
  const promise = axios.post(`${BASE_URL}/payment`, body, auth);
  return promise;
}

function homeScreen() {
  const promise = axios.get(`${BASE_URL}/home`);
  return promise;
}


export {signin, signup, homeScreen, getPayment, postPayment }