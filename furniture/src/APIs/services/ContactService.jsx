import { HttpClient } from "../HttpClient";

class ContactService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  GetAll = () => this.get("contacts");
}

export default new ContactService();