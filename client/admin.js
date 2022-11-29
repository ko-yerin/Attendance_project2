//어드민 페이지
//1. 리스트가 띄워져야한다
//2. 검색창 => 그 유저 출퇴근 기록 확인 서칭
//3. 컴플레인 받으면 DB지워지게

import  Attendance  from "../lib/collection";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Session } from "meteor/session";

Template.admin.helpers({
  // todo : 사용되고 있다면 어디에 사용하고 있나요? ✅출퇴근 버튼에 사용중입니다 !
  //  attendance_list.js 와 같은 내용이라 별말 안쓰겠습니다.
  type() {
    return this.type === "출근";
  },
  searchName(){
    const searchInput = Session.get("searchInput");
    return !searchInput
  },
  searchList() {
    const searchInput = Session.get("searchInput");
    return Attendance.find({ name: searchInput });
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
    return Meteor.user().username === "admin";
  },
});

Template.admin.events({
  "click #back": function () {
    FlowRouter.go("/attendance");
  },

  "click #btn-search": function (event, tmpl) {
    const Input = tmpl.find("input[name=username]").value;

    Session.set("searchInput", Input);
    tmpl.find("input[name=username]").value = "";
  }, //this, event, instance(tmpl) 이거 세개만 자주씀

  "click .delete": function () {
    Attendance.remove({ _id: this._id });
  },
});

Template.searchAttendanceList.helpers({
  type2() {
    console.log("this", this.type);
    return this.type === "출근";
  },
  searchList() {
    const searchInput = Session.get("searchInput");
    return Attendance.find({ name: searchInput });
  },
  getDate(date) {
    return date?.toLocaleString();
  },
});
