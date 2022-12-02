import './attendance.html'
import Attendance from "/imports/collections";

Session.set('now', new Date())//초기화작업

//oncreated를 안쓰면 문서를 다 읽기전 실행
//쓰면 문서 읽은후 실행
Template.attendance_system.onCreated(function () {
  alert("출퇴근후 1시간이내에만 삭제가 가능합니다")
  Meteor.setInterval(function () {
    Session.set('now', new Date())
  }, 1000)
})
//isdisabled()를 실행시켜야해서 (===1시간지낫는지 안지낫는지 게속 확인해야됨)
//1초마다 한번씩 new Date()값을 받아오기위해 위코드처럼 작성

Template.attendance_system.helpers({
  isdisabled() {
    //몽고디비 마지막시간과 현재시간을 비교해 1시간이상차이나면 버튼을 막음
    //우선 확인을 위해 3초로 하겠음
    const attendance = Attendance.findOne({user_id: Meteor?.userId()}, {sort: {createdAt: -1}})
    const last_data = attendance.createdAt
    const now = Session.get('now')

    if (!attendance) {
      return true
    } else {
      return now - last_data > 3000;
    }
  },//1시간 === 3600000

  attendance_button() {
    const attendance = Attendance.findOne({user_id: Meteor.userId()}, {sort: {createdAt: -1}})
    if (attendance?.type === "출근") {
      return "퇴근"
    } else {
      return "출근"
    }
  },
  button_color() {
    const attendance = Attendance.findOne({user_id: Meteor.userId()}, {sort: {createdAt: -1}})
    if (attendance?.type === "출근") {
      return "pink"
    } else {
      return "lightgreen"
    }
  },

  isLogin() {
    return Meteor.userId()
  },

  no_login() {
    alert('로그인이 필요한 기능입니다!')
    history.back();  // 11.29 수정.. (그냥 검색해서 찾아낸..라우터 훅?에 대해서는 다시 공부필요)
    // const move = FlowRouter.go("/login")
    // return move   // 이동하는 방법을 모르겠네..
  }
});

Template.attendance_system.events({
  "click .check": function () {
    const user = Meteor.user();
    const attendance = Attendance.findOne({user_id: Meteor.userId()}, {sort: {createdAt: -1}})

    if (attendance?.type === "출근") {
      Attendance.insert({
        name: user.username,
        user_id: user._id,//유저의 고유한 아디
        createdAt: new Date(),
        type: "퇴근",
      });
      alert("퇴근되셨습니다");

      return "퇴근"
    } else {
      Attendance.insert({
        name: user.username,
        user_id: user._id,
        createdAt: new Date(),
        type: "출근",
      });
      alert("출근되셨습니다");

      return "출근"
    }

  },
  "click .delete_button": function () {
    const AttendanceId = Attendance.findOne({user_id: Meteor?.userId()}, {sort: {createdAt: -1}})._id
    Attendance.remove({_id: AttendanceId})
  }
});
