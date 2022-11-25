//어드민 페이지
//1. 리스트가 띄워져야한다
//2. 검색창 => 그 유저 출퇴근 기록 확인 서칭
//3. 컴플레인 받으면 DB지워지게

import {Attendance} from "../lib/collection";
import {FlowRouter} from "meteor/ostrio:flow-router-extra";

Template.admin.helpers({
  type() {
    return this.type === "출근";

  },

  list(){
  return Attendance.find({})
  },

  Times(date) {
    return date?.toLocaleString();
  },
});

Template.admin.events({
  "click .back": function () {
    FlowRouter.go("/attendance");
  },

  "click .btn-search":function (event){


  },

  "click .delete":function(){
    console.log("삭제")
    console.log(this)

    Attendance.remove({_id : this._id})
  }
})
