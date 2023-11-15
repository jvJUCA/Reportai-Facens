// imports

import Controller from "@/controllers/BaseController";
import User from "@/models/UserModel";
const COLLECTION = "users";

export default class UserController extends Controller {
  constructor() {
    super();
  }

  async update(docId, payload) {
    return super.update(COLLECTION, docId, payload);
  }

  async readAll() {
    const docs = await super.readAll(COLLECTION);
    return docs.map((doc) => new User(doc));
  }

  async getById(docId) {
      const res = await super.readOne(COLLECTION, docId);

      if (res.exists) {
        return new User(Object.assign({ id: res.id }, res.data()));
      } else {
        return null;
      }
  }
}
