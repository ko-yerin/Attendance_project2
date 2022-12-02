import './attendance_list.html'
import Attendance from "/imports/collections";
//하루한번씩만
//createdAt를 찾는다 년월일에서 자른다
// 그걸 timestamp 로 바꾼다
//그거와 오늘날짜 타임스탬프를 비교
//없으면 출근이찍히고 ,있는데
// type 이 출근이면 퇴근찍히고
// type 이 퇴근이면 찍히면 안됨
// 타입도비교!!!

//버튼색

//외출,복귀,야근

Template.attendance_list.helpers({
  type(item) {
    return item === "출근";
  },

  list() {
    const user = Meteor.user();
    return Attendance.find(
      {user_id: user?._id},
      {limit: 10, skip: Session.get('pageSkip'), sort: {createdAt: -1}}
    );
  },

  getDate(date) {
    return date?.toLocaleString();
  },
});
