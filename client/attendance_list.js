//출근이 찍혀야 퇴근이 찍히게
//하루한번만
//createdAt를 찾는다 그걸 timestamp 로 바꾼다
//그거와 오늘날짜 타임스탬프를 비교
//없으면 출근찍히고(퇴근찍히면 안됨) 있으면 퇴근이 찍히게
//퇴근을 누를시 출근을 먼저찍어달라고 alert 창
//근데 하루한번만 찍혀야되니 날짜랑 타입비교해서 있으면 찍히면 안됨

//db에 클릭했는지 안했는지 구분값을 둔후 if 문으로

//외출,복귀

import Attendance from "../lib/collection";

Template.attendance_list.helpers({
  // todo: 사용하지 않는 헬퍼로 보입니다.사용하고 있다면 어디에서 사용하고 있는지 알려주세요.
  //   -->attendance.html 파일의 15번째줄 attendance_list template 에서
  //   현재파일 14번째줄 list 함수 return 값을 통해  createdAt를 랜더시키고 있고
  //   9번째줄 type 함수는 if 문법을 사용해 불리언값에따라 출근퇴근을 구분해주는 역할로
  //   사용되고 있습니다.
  // button_switch(){
  //   console.log("state",this.state)
  //   return  this.state === "true"
  // },
  type() {
    // const db_date = this.createdAt
    // // console.log("this", db_date)
    //
    // const timestamp = new Date();
    // console.log("timestamp",timestamp)
    console.log("state",this.state)

    return this.type === "출근";
  },

  list() {
    const user = Meteor.user();

    return Attendance.find(
      {user_id: user?._id},
      {limit: 20, sort: {createdAt: -1}}
    );
  },

  getDate(date) {
    return date?.toLocaleString();
  },
});