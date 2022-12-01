import Attendance from "/imports/collections"

Meteor.methods({
  "Attendance.removeAll"() {
    // todo - 로그인한 상태일 경우 누구라도 이 메서드를 쓸 수 있는 상태인데,
    //  특정 유저가 아니면 애러처리로 바꿔봅시다.
    if (!Meteor.userId()) {
      throw new Meteor.Error("not Authorized!!!")
    }

    Attendance.remove({})
  }
})
