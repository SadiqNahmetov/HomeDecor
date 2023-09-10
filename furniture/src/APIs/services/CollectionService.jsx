import { HttpClient } from "../HttpClient";

class CollectionService extends HttpClient{
    constructor(){
        super('http://localhost:3000');
    }

    GetAll = ()=> this.get('collections');
}

export default new CollectionService();