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

import Attendance from "../../../lib/collection";

Template.attendance_list.helpers({
  type(item) {
    // const a = Template.instance()
    // console.log("123",a)
    // console.log("this",this)
    return item === "출근";
  },

  list() {
    const user = Meteor.user();
    return Attendance.find(
      {user_id: user?._id},
      {limit: 10, sort: {createdAt: -1}}
    );
  },

  getDate(date) {
    return date?.toLocaleString();
  },

  getPagination(){
    // console.log("totalCount",totalCount)
    // return totalCount;
  }
});

Template.attendance_list.events({
  "click #page_button": function () {
    const user = Meteor.user()
    let pageText = document.getElementById("page_button")
    let pageInnerText = pageText.innerText//현재 페이지//1
    let getDataCount = Attendance.find({name:user.username}).count();//데이터숫자//16

    function pagination(totalData, currentPage) {//16   1

      const dataPerPage = 10;
      //화면에 10개씩
      const pageCount = 10;
      //1~10까지보이게

      //현재게시물의 전체개수가 10개이하면 숨긴다
      if (totalData <= 10) {
        return
      }

      let totalCount = Math.ceil(totalData / dataPerPage);//2
      //총 페이지수는 전체 데이터를 10으로 나눈다
      //102개면  총 페이지 개수는 올림해서 11개가 나온다
      let pageGroup = Math.ceil(currentPage / pageCount);//1
      //현재 페이지가 1~10까지는 그룹1이나옴
      //페이지그룹은 총11페이지가 나와야되면
      //난10개씩보여주고 싶으니 2그룹
      //현재페이지를 보여줄 페이지 갯수로 나눈다

      let lastNumber = pageGroup * pageCount//10
      //페이지의 마지막숫자
      //ex)20

      // 근데 총페이지개수가 11이믄 11개만 보여야되니..20개가보임안됨

      let firstNumber = lastNumber - (pageCount - 1)//20-9=11 //1

      if (lastNumber > totalCount) {
        lastNumber = totalCount//2
      }

      const next = lastNumber + 1 //3
      const prev = firstNumber - 1 //0
      // console.log("totalCount", next)
      // console.log("totalCount", prev)
      //totalcount 수 만큼 버튼을 만들어야한

    }
    pagination(getDataCount, pageInnerText)
  }
})
/*
현재 16개데이터
총페이지수(totalCount)는 난 10개씩 나타내니 ===2
페이지그룹(pageGroup)은 1그룹
마지막 숫자는 1*10===10(그러나 2를 대입)
첫숫자는 10-(10-1)=1
그럼 다음은 3,  이전은 0
*/
