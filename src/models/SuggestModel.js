import { Timestamp } from "firebase/firestore"

export default class Suggest {
    constructor({
        suggestAuthorId, suggestDescription, suggestPic, suggestVotes
    } = {},
    ) {
        this.suggestAuthorId = suggestAuthorId
        this.suggestDescription = suggestDescription
        this.suggestPic = suggestPic
        this.suggestVotes = suggestVotes
        this.lastUpdate = Timestamp
    }
    static toSuggest(data) {
        return new Suggest({
            ...data,
        })
    }

    toFirestore() {
        return {
            suggestAuthorId: this.suggestAuthorId,
            suggestDescription: this.suggestDescription,
            suggestPic: this.suggestPic,
            suggestVotes: this.suggestVotes,
            lastUpdate: this.lastUpdate
        }
    }
}