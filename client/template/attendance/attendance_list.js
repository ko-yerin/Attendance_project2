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
  // todo: 사용하지 않는 헬퍼로 보입니다.사용하고 있다면 어디에서 사용하고 있는지 알려주세요.
  //   -->attendance.html 파일의 15번째줄 attendance_list template 에서
  //   현재파일 14번째줄 list 함수 return 값을 통해  createdAt를 랜더시키고 있고
  //   9번째줄 type 함수는 if 문법을 사용해 불리언값에따라 출근퇴근을 구분해주는 역할로
  //   사용되고 있습니다.

  //   ===
  //   수정>attendance.html 파일의 8번째줄 attendance_list template 에서
  //   현재파일 9번째줄 list 함수 return 값을 통해 createdAt를 랜더시키고 있고
  //   12번째줄 type 함수는 if 문법을 사용해 루프를 통한 각 list 아이템 구성중 type 이라는 불리언값에따라 출근퇴근을 구분해주는 역할로
  //   사용되고 있습니다.
  //   ~의 의도는 알고 있었습니다. {{#each some in all }} 과 같이 사용해야 한다고
  //   첫날 누군가에게 알려드렸는데 공유가 안되는거 같습니다.
  //   한글: https://meteorjs.kr/styles/blaze-spacebars.html#each
  //   작업본이지만 참고하고 코드는 수정 바랍니다.
  //   또한 헬퍼 내에서 this 를 사용하면 한달 두달 뒤에 이 this 에서 나온 type 은 도대체 어디서 나온거야?
  //   하게 되기 때문에 명확하게 코드를 바꿔야 합니다.
  //   헬퍼에 파라미터를 전달할 수 있는데 일단 이부분은 수정하기 어려우면 내일(수) 물어봐 주시기 바랍니다.
  //todo: ---> 알려주신대로 수정완료 했습니다



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
      {limit: 20, sort: {createdAt: -1}}
    );
  },

  getDate(date) {
    return date?.toLocaleString();
  },
});