export default class User {
    constructor({
        RA, name, accessLevel, email, myReports, mySuggests, userAvatar , userDescription, userCourse
    } = {},
    ) {
        this.RA = RA
        this.name = name
        this.accessLevel = accessLevel
        this.email = email
        this.myReports = myReports
        this.mySuggests = mySuggests
        this.userAvatar = userAvatar
        this.userDescription = userDescription
        this.userCourse = userCourse
    }
    static toUser(data) {
        return new User({
            ...data,
        })
    }

    toFirestore() {
        return {
            RA: this.RA,
            name: this.name,
            accessLevel: this.accessLevel,
            email: this.email,
            myReports: this.myReports,
            mySuggests: this.mySuggests,
            userAvatar: this.userAvatar,
            userDescription: this.userDescription,
            userCouse: this.userCourse
        }
    }
}