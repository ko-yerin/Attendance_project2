import Attendance from "../../../lib/collection";

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
