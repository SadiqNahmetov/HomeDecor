import { HttpClient } from "../HttpClient";

class StatsService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  GetAll = () => this.get("stats");
}

export default new StatsService();
