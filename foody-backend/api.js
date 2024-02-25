const axios = require("axios");

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class FoodyApi {
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
    let res = await this.request(`/profile`);
    console.log(res);
    return res;
  }
}
