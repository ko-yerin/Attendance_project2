import Attendance from "../../../lib/collection";

Template.attendance_system.helpers({
  isLogin() {
    return Meteor.userId()
  },

  no_login() {
    alert('로그인이 필요한 기능입니다!')
    history.back();  // 11.29 수정.. (그냥 검색해서 찾아낸..라우터 훅?에 대해서는 다시 공부필요)
    // const move = FlowRouter.go("/login")
    // return move   // 이동하는 방법을 모르겠네..
  }
});

Template.attendance_system.events({
  "click .check": function () {
    const user = Meteor.user();
    let testText = document.getElementById("text");
    console.log(testText)

    if (testText.textContent === "출근") {
      in_creverse();
    } else {
      exit_creverse();
    }

    function in_creverse() {
      testText.style.color = "pink"
      testText.innerText = "퇴근";

      Attendance.insert({
        name: user.username,
        user_id: user._id,
        createdAt: new Date(),
        type: "출근",
      });
      alert("출근되셨습니다");
    }

    function exit_creverse() {
      testText.style.color = "lightgreen"
      testText.innerHTML = "출근";

      Attendance.insert({
        name: user.username,
        user_id: user._id,
        createdAt: new Date(),
        type: "퇴근",
      });
      alert("퇴근되셨습니다");
    }
  }
});
