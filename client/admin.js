//어드민 페이지
//1. 리스트가 띄워져야한다
//2. 검색창 => 그 유저 출퇴근 기록 확인 서칭
//3. 컴플레인 받으면 DB지워지게

import {Attendance} from "../lib/collection";

Template.admin.helpers({
  type() {
    return this.type === "출근";

  },

  list(){
    // console.log("sadsa",Attendance.find({}))
  return Attendance.find({})
  },
  // in_List() {
  //   return Attendance.find({ type: "출근" });
  // },
  Times(date) {
    // console.log(date);
    return date?.toLocaleString();
  },
  // out_List() {
  //   return Attendance.find({ type: "퇴근" });
  // },

});
