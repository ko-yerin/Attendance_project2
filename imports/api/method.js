import Attendance from "/lib/collection";

Meteor.methods({
  "Attendance.removeAll"() {
    // check()

    if (!Meteor.userId()) {
      throw new Meteor.Error("not Authorized!!!")
    }
    const userId = Meteor.userId()
    // todo - 로그인한 유저이기만 하면 누구든지 이 메서드 콜 할 경우 다 지울수 있는 거네요?
    Attendance.remove({
      // user_id:userId
    })
  }
})
