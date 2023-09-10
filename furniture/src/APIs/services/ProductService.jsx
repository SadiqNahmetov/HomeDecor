import { HttpClient } from "../HttpClient";

class ProductService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  GetAll = () => this.get("products");
}

export default new ProductService();
