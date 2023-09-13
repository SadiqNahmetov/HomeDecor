import { HttpClient } from "../HttpClient";

class DiscountService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  GetAll = () => this.get("bannerDiscount");
}

export default new DiscountService();