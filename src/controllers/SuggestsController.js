import Controller from '@/controllers/BaseController'
import Report from '@/models/ReportModel'
const COLLECTION = 'reports'

export default class ReportController extends Controller {
  constructor() {
    super()
  }

  async update(docId, payload) {
    return super.update(COLLECTION, docId, payload)
  }

  async readAll() {
    const docs = await super.readAll(COLLECTION)
    return docs.map((doc) => new Report(doc))
  }

  async getById(docId) {
    try {
      console.log(`Fetching data for report ID: ${docId}`);
      const res = await super.readOne(COLLECTION, docId);
  
      if (res.exists) {
        return new Report(Object.assign({ id: res.id }, res.data()));
      } else {
        console.warn(`Document with ID ${docId} not found.`);
        return null;
      }
    } catch (error) {
      console.error("Error fetching report data:", error);
      throw error;
    }
  }
}
