import { HttpClient } from "../HttpClient";

class FooterService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  GetAll = () => this.get("footer");
}
export default new FooterService();
