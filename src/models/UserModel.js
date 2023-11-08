/**
 * Create a User.
 * @param {number} accessLevel - The accessLevel value.
 * @param {string} email - The email value.
 * @param {Object[]} myReports - An array of UserAnswer value.
 * @param {Object[]} mySuggests - An array of UserTest value.
 */

export default class User {
    constructor({
        id, accessLevel, email, myReports, mySuggests,
    } = {},
    ) {
        this.id = id
        this.accessLevel = accessLevel
        this.email = email
        this.myReports = myReports
        this.mySuggests = mySuggests
    }
    static toUser(data) {
        return new User({
            ...data,
        })
    }

    toFirestore() {
        return {
            accessLevel: this.accessLevel,
            email: this.email,
            notifications: this.notifications,
            myReports: this.myReports,
            mySuggests: this.mySuggests,
        }
    }
}