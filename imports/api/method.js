import Attendance from "/lib/collection";

Meteor.methods({
  "Attendance.removeAll"() {
    // check()

    if (!Meteor.userId()) {
      throw new Meteor.Error("not Authorized!!!")
    }
    const userId = Meteor.userId()
    Attendance.remove({
      // user_id:userId
    })
  }
})