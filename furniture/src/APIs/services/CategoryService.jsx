import { HttpClient } from "../HttpClient";

class CategoryService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  GetAll = () => this.get("categories");
}

export default new CategoryService();
