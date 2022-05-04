import axios from "axios";
const url = "https://shan-expenses-backend.herokuapp.com/api/login";

const login = async (credentials) => {
  const response = await axios.post(url, credentials);
  return response.data;
};

export default { login };
