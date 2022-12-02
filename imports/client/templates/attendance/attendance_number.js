import './attendance_number.html'
import Attendance from "/imports/collections";

Template.attendance_number.helpers({
  pageNumbers() {
    //데이터 전체 갯수를 통해 총 몇 페인지를 계산 한 후
    //현재 페이지가 포함 된 5개 단위의 일련의 자연수
    //그 수 5개 집단을 리턴

    const dataPerPage = 10//10개의 데이터
    const pageCount = 10//10개의 페이지

    let total_data = Attendance.find().count()//17
    let totalPage = Math.ceil(total_data / dataPerPage);
    //한페이지에10개씩나오게할거라
    //페이지2개필요

    let pageGroup = Math.ceil(2 / pageCount);//1
    let lastNumber = pageGroup * pageCount//10
    //페이지의 마지막숫자
    //ex)20


    let firstNumber = lastNumber - (pageCount - 1)//20-9=11 //1

    if (lastNumber > totalPage) {
      lastNumber = totalPage//2
    }
    //근데 총페이지개수가 11이믄 11개만 보여야되니..20개가보임안됨

    let next = lastNumber + 1 //3
    let prev = firstNumber - 1 //0

    if (totalPage === 1) {//10
      console.log(1)
      return [1]
    } else if (totalPage === 2) {//11~20
      console.log(2)
      return [1, totalPage]
    } else if (totalPage - 1 > 1) {//21~

      return [5]
    }


  }
  //이걸로버튼을만듬
  //1번을 누르면 최근10개
  //2번은 skip,limit를 써서 그담부터 10개
  //(누른버튼-1)*10   이만큼스킵시키고 그담부터 보여주게
  //근데 안에값을 게속다르게 받아오려면 세션으로
  ,
})

Template.attendance_number.events({
  "click #nextButton"() {
    //다음 버튼이 눌리면
    //현재 페이지에서 5를 더한 수를 현재 페이지로 저장
    //단 총 데이터 갯수 / 총 페이지 갯수 보다 초과 된 페이지로 갈려고 하는것이면...
  },
  "click .page_button": function () {
    // Session.set('pageSkip', (this-1)*10)
    // console.log("this",this)
  }
})
