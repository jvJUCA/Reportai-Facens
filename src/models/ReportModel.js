import { Timestamp } from "firebase/firestore"

export default class Report {
    constructor({
        reportAuthorId, reportDescription, reportAuthorName, reportAuthorAvatar, reportPic, reportVotes, type
    } = {},
    ) {
        this.reportAuthorId = reportAuthorId
        this.reportDescription = reportDescription
        this.reportAuthorName = reportAuthorName
        this.reportAuthorAvatar = reportAuthorAvatar
        this.reportPic = reportPic
        this.reportVotes = reportVotes
        this.lastUpdate = Timestamp
        this.type = type
    }
    static toReport(data) {
        return new Report({
            ...data,
        })
    }

    toFirestore() {
        return {
            reportAuthorId: this.reportAuthorId,
            reportDescription: this.reportDescription,
            reportAuthorName: this.reportAuthorName,
            reportAuthorAvatar: this.reportAuthorAvatar,
            reportPic: this.reportPic,
            reportVotes: this.reportVotes,
            lastUpdate: this.lastUpdate,
            type: this.type
        }
    }
}