import Attendance from "../lib/collection";

Template.attendance_system.helpers({
  isLogin() {
    // todo: 한줄로 줄여볼까요?
    //  --->완료
    return Meteor.userId()
  },

  no_login(){
    alert('로그인이 필요한 기능입니다!')
    // const move = FlowRouter.go("/login")
    // return move   // 이동하는 방법을 모르겠네..
  }
});

let in_submit = false;
let out_submit = false;

Template.attendance_system.events({
  "click .go_to_work": function () {
    const user = Meteor.user();

    function submit_check() {
      if (in_submit) {
        return in_submit;
      } else {
        in_submit = true;
        return false;
      }
    }

    if (submit_check()) {
      alert("이미 출근되셨습니다");
    } else {
      Attendance.insert({
        name: user.username,
        user_id: user._id,
        createdAt: new Date(),
        type: "출근",
        state: true,
      });
      alert("출근되셨습니다");
    }
  },
  "click .finish_work": function () {

    const user = Meteor.user();

    function submit_check() {
      if (out_submit) {
        return out_submit;
      } else {
        out_submit = true;
        return false;
      }
    }

    if (submit_check()) {
      alert("이미 퇴근되셨습니다");
    } else {
      Attendance.insert({
        name: user.username,
        user_id: user._id,
        createdAt: new Date(),
        type: "퇴근",
      });
      alert("퇴근되셨습니다");
    }
  },
});
