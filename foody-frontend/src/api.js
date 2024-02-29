import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class FoodyApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${FoodyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCurrentUser(id) {
    const data = { id };
    const res = await this.request(`auth/get-user/${id}`);
    return res;
  }
  static async checkUser(id) {
    const res = await axios.get(`${BASE_URL}/auth/check-user/${id}`);
    return res.data;
  }

  static async updateProfile(data) {
    const res = await this.request("auth/profile/update", data, "patch");
    return res;
  }

  static async addMeal(meal) {
    const data = meal;
    const res = await this.request("meals/add-meal", data, "post");
    return res;
  }
  static async removeMeal(data) {
    const res = await this.request("meals/remove-meal", data, "post");
    return res;
  }

  static async addExercise(data) {
    const res = await this.request("exercises/add-exercise", data, "post");
    return res;
  }
  static async removeExercise(data) {
    const res = await this.request("exercises/remove-exercise", data, "post");
    return res;
  }
}
export default FoodyApi;
