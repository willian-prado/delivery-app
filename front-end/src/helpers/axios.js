import axios from 'axios';
import jwt from 'jsonwebtoken';

const axiosPost = async (URL, data) => {
  try {
    const res = await axios.post(URL, data);
    console.log(res);

    const { token } = res.data;
    const decoded = jwt.verify(token, 'secret_key');

    localStorage.setItem('token', token);

    console.log(decoded.role);
    return decoded.role;
  } catch (err) {
    console.log(err);
  }
};

export default axiosPost;
