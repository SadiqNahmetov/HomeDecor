import { HttpClient } from "../HttpClient";

class MainHeaderService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  GetAll = () => this.get("mainHeader");
}

export default new MainHeaderService();