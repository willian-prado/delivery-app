import axios from 'axios';
import jwt from 'jsonwebtoken';
import addUserToLocalStorage from './addUserToLocalStorage';

const axiosPost = async (URL, data) => {
  try {
    const res = await axios.post(URL, data);

    const { token } = res.data;
    const decoded = jwt.verify(token, 'secret_key');

    addUserToLocalStorage(decoded, token);

    return decoded;
  } catch (err) {
    console.log(err);
  }
};

export const axiosGetAll = async (URL, token) => {
  try {
    const res = await axios({
      method: 'get',
      url: URL,
      headers: { Authorization: token },
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default axiosPost;
