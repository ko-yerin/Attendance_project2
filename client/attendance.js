//회원가입추가, 로그인안됫을때 attendance안가게
//attendance에 로그아웃추가

import { Attendance } from "../lib/collection";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.attendance_list.helpers({
  // todo: 사용하지 않는 헬퍼로 보입니다... 사용하고 있다면 어디에서 사용하고 있는지 알려주세요.
  type() {
    // console.log("this", this)
    return this.type === "출근";
  },

  list() {
    const user = Meteor.user();
    console.log("user", user);
    // let test1 = Attendance.find({user_id: user?._id}, {limit: 20, sort: {createdAt: -1}}).collection.queries
    // console.log('test', test1 )
    return Attendance.find(
      { user_id: user?._id },
      { limit: 20, sort: { createdAt: -1 } }
    );
  },

  getDate(date) {
    // console.log("date",date)
    return date?.toLocaleString();
  },
});

let in_submit = false;
let out_submit = false;

Template.attendance_system.helpers({
  isLogin() {
    // todo: 한줄로 줄여볼까요?
    if (Meteor.userId()) {
      console.log("로그인 중");
      return true;
    } else {
      console.log("로그인 x");
      return false;
    }
  },
});

//버튼 한개로 바꿔!!!!!!!!!
//업그레이드될꺼

Template.attendance_system.events({
  "click .go_to_work": function () {
    // console.log("출근")
    const user = Meteor.user();

    // console.log(user)

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
    // console.log("퇴근")
  },
});
