import axios from "axios";

export class HttpClient {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  async get(endpoint) {
    const response = await axios.get(`${this.url}/${endpoint}`);
    return response.data;
  }

  async post(endpoint, model) {
    const response = await axios.post(`${this.baseUrl}/${endpoint}`, model);
    return response.data;
  }

  async put(endpoint, model, id) {
    const response = await axios.put(`${this.baseUrl}/${endpoint}`, model);
    return response.data;
  }

  async delete(endpoint, id) {
    const response = await axios.delete(`${this.baseUrl}/${endpoint}`);
    return response.data;
  }
}
