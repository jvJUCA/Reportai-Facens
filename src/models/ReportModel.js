import { Timestamp } from "firebase/firestore"

export default class Report {
    constructor({
        reportAuthorId, reportDescription, reportPic, reportVotes
    } = {},
    ) {
        this.reportAuthorId = reportAuthorId
        this.reportDescription = reportDescription
        this.reportPic = reportPic
        this.reportVotes = reportVotes
        this.lastUpdate = Timestamp
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
            reportPic: this.reportPic,
            reportVotes: this.reportVotes,
            lastUpdate: this.lastUpdate
        }
    }
}