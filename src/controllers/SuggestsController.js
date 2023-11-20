import Controller from '@/controllers/BaseController'
import Suggest from '@/models/SuggestModel'
const COLLECTION = 'suggests'

export default class SuggestController extends Controller {
  constructor() {
    super()
  }

  async update(docId, payload) {
    return super.update(COLLECTION, docId, payload)
  }

  async readAll() {
    const docs = await super.readAll(COLLECTION)
    return docs.map((doc) => new Suggest(doc))
  }

  async getById(docId) {
    try {
      const res = await super.readOne(COLLECTION, docId);
  
      if (res.exists) {
        return new Suggest(Object.assign({ id: res.id }, res.data()));
      } else {
        console.warn(`Document with ID ${docId} not found.`);
        return null;
      }
    } catch (error) {
      console.error("Error fetching Suggest data:", error);
      throw error;
    }
  }
}
