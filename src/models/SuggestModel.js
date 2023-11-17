import { Timestamp } from "firebase/firestore"

export default class Suggest {
    constructor({
        suggestAuthorId, suggestDescription, suggestAuthorName, suggestAuthorAvatar, suggestPic, suggestVotes, type
    } = {},
    ) {
        this.suggestAuthorId = suggestAuthorId
        this.suggestDescription = suggestDescription
        this.suggestAuthorName = suggestAuthorName
        this.suggestAuthorAvatar = suggestAuthorAvatar
        this.suggestPic = suggestPic
        this.suggestVotes = suggestVotes
        this.lastUpdate = Timestamp
        this.type = type
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
            suggestAuthorName: this.suggestAuthorName,
            suggestAuthorAvatar: this.suggestAuthorAvatar,
            suggestPic: this.suggestPic,
            suggestVotes: this.suggestVotes,
            lastUpdate: this.lastUpdate,
            type: this.type
        }
    }
}