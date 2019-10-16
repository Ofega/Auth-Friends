import axios from 'axios';

// Build a module that "creates" a new "instance" of the axios object
// - baseURL
// - headers object -> authorization header with the token

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://nchampag-watermyplants.herokuapp.com/',
    headers: {
      Authorization: token
    }
  });
};
