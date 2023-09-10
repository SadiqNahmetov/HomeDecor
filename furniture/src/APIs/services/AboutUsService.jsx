import { HttpClient } from "../HttpClient";

class AboutUsService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  GetAll = () => this.get("abouts");
}
export default new AboutUsService();