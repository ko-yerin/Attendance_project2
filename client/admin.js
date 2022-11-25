//어드민 페이지
//1. 리스트가 띄워져야한다
//2. 검색창 => 그 유저 출퇴근 기록 확인 서칭
//3. 컴플레인 받으면 DB지워지게

import { Attendance } from "../lib/collection";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Session } from "meteor/session";

Template.admin.helpers({
  type() {
    // console.log("this", this.type);
    return this.type === "출근";
  },

  list() {
    return Attendance.find({});
  },

  Times(date) {
    return date?.toLocaleString();
  },
  SearchList() {
    // return 세션쓸거임
  },
  isAdmin() {
    if (Meteor.user().username === "admin") {
      console.log("ok");
      return true;
    } else {
      console.log("nope");
      return false;
    }
  },
});

Template.admin.events({
  "click .back": function () {
    FlowRouter.go("/attendance");
  },

  "click .btn-search": function (event, tmpl) {
    const Input = tmpl.find("input[name=username]").value;
    // const check = Attendance.find({ name: Input }).fetch();
    console.log(Input);

    Session.set("searchInput", Input);
    console.log("세션", Session.get("searchInput"));
    tmpl.find("input[name=username]").value = "";
  }, //this, event, instance(tmpl) 이거 세개만 자주씀

  "click .delete": function () {
    console.log("삭제");
    console.log(this);

    Attendance.remove({ _id: this._id });
  },
});

Template.searchAttendanceList.helpers({
  type2() {
    console.log("this", this.type);
    return this.type === "출근";
  },
  searchList() {
    // console.log(Session.get("searchInput"));
    const searchInput = Session.get("searchInput");
    return Attendance.find({ name: searchInput });
  },
  getDate(date) {
    // console.log("date", date);
    return date?.toLocaleString();
  },
});
