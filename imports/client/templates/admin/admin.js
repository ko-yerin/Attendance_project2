import './admin.html'
//admin 아이디로 로그인 후에 확인가능
import  Attendance  from "/imports/collections";
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
    // todo - 왜 이 템플릿에서만 리스트가 0개가 조회되죠;; 이상하네요
    //  됐다 안됐다 그러는데 왜 그러는걸까요;;;;
    //  제 컴에서만 그러는게 아니면 본부장님께 도움을 받아봐야 겠는데요
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

// todo - 이건 어디에 쓰이나요?
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
