// imports

import Controller from '@/controllers/BaseController'
import User from '@/models/UserModel'
const COLLECTION = 'users'

export default class UserController extends Controller {
  constructor() {
    super()
  }

  async update(docId, payload) {
    return super.update(COLLECTION, docId, payload)
  }

  async readAll() {
    const docs = await super.readAll(COLLECTION)
    return docs.map((doc) => new User(doc))
  }

  async getById(docId) {
    try {
      console.log(`Fetching data for user ID: ${docId}`);
      const res = await super.readOne(COLLECTION, docId);
  
      if (res.exists) {
        return new User(Object.assign({ id: res.id }, res.data()));
      } else {
        console.warn(`Document with ID ${docId} not found.`);
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }

}