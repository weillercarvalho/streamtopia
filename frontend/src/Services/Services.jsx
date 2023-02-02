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
  const promise = axios.post(`http://18.210.20.135/api/signin`, body);
  return promise;
}

function signup(body) {
  const promise = axios.post(`http://18.210.20.135/api/signup`, body);
  return promise;
}

function getPayment() {
  const auth = creatingHeaders();
  const promise = axios.get(`http://18.210.20.135/api/payment`, auth);
  return promise;
}

function postPayment(body) {
  const auth = creatingHeaders();
  const promise = axios.post(`http://18.210.20.135/api/payment`, body, auth);
  return promise;
}

function homeScreen() {
  const promise = axios.get(`http://18.210.20.135/api/home`);
  return promise;
}


export {signin, signup, homeScreen, getPayment, postPayment }