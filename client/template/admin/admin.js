//admin 아이디로 로그인 후에 확인가능
import  Attendance  from "../../../imports/collections";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Session } from "meteor/session";

Template.admin.helpers({
  // ✅출퇴근 버튼에 사용중입니다 !
  //
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
  isAdmin() {
    return Meteor.user().username === "admin";
  },
});

Template.admin.events({
  "click #back": function () {
    FlowRouter.go("/attendance");
  },

  "click #btn-DeleteAll": function () {
    Meteor.call("Attendance.removeAll",(err)=>{
      console.log(err)
    })
  },

  "click #btn-search": function (event, tmpl) {
    const Input = tmpl.find("input[name=username]").value;

    Session.set("searchInput", Input);
    tmpl.find("input[name=username]").value = "";
  }, //this, event, instance(tmpl) 이거 세개만 자주씀

  // 12.1 수정
  "keyup input": function (evt, tmpl) {
    if (evt.which === 13) {
      const Input = tmpl.find("input[name=username]").value;

      Session.set("searchInput", Input);
      tmpl.find("input[name=username]").value = "";
    }
  },
  // 12.1 수정

  "click .delete": function () {
    Attendance.remove({ _id: this._id });
  },

  "click .delete_all" : function () {
    Attendance.remove({});
  }
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
