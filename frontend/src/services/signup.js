import axios from "axios";
const url = "http://localhost:5000/api/users";

const signup = async (credentials) => {
  const response = await axios.post(url, credentials);
  return response.data;
};

export default { signup };
