import axios from "axios";

const BASE_URL = 'http://54.208.23.134';


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
  const promise = axios.post(`${BASE_URL}/api/signin`, body);
  return promise;
}

function signup(body) {
  const promise = axios.post(`${BASE_URL}/api/signup`, body);
  return promise;
}

function getPayment() {
  const auth = creatingHeaders();
  const promise = axios.get(`${BASE_URL}/api/payment`, auth);
  return promise;
}

function postPayment(body) {
  const auth = creatingHeaders();
  const promise = axios.post(`${BASE_URL}/api/payment`, body, auth);
  return promise;
}

function homeScreen() {
  const promise = axios.get(`${BASE_URL}/api/home`);
  return promise;
}


export {signin, signup, homeScreen, getPayment, postPayment }