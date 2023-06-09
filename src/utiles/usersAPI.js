import axios from 'axios';
axios.defaults.baseURL = 'https://6464b688127ad0b8f8a5e893.mockapi.io/';

export async function fetchUsersInfo() {
  try {
    const response = await axios(`users`);
    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function updateUserInfo(userID, data) {
  try {
    const response = await axios.put(`users/${userID}`, data);
    return response.data;
  } catch (error) {
    return error.message;
  }
}
