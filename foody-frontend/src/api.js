import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class FoodyApi {
  static token = null;
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    // const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCurrentUser() {
    let res = await axios.get(`${BASE_URL}/auth/profile`);
    console.log(res);
    return res;
  }
  static async checkUser(id) {
    console.log(id);
    const res = await axios.get(`${BASE_URL}/auth/check-user/${id}`);
    return res;
  }

  static async addMeal(meal) {
    console.log(meal);
    const data = meal;
    console.log(data);
    let res = await axios.post(`${BASE_URL}/meals/add-meal`, data);
  }
  static async removeMeal(id) {
    console.log(id);
    const data = { id: id };
    console.log(data);
    let res = await axios.post(`${BASE_URL}/meals/remove-meal`, data);
  }
}
export default FoodyApi;
