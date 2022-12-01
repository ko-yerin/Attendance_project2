import Attendance from "../../../lib/collection";
Session.set('now', new Date())


Template.attendance_system.onCreated(function() {
  Meteor.setInterval(function() {
    Session.set('now', new Date())
  }, 1000)


});

Template.attendance_system.helpers({
  isDisabled() {
    const attendance = Attendance.findOne({user_id:Meteor.userId()},{sort:{createdAt:-1}})
    console.log(1)
    if (!attendance) {
      return 'true'
    } else {
      const 마지막시간 = attendance.createdAt
      const 지금 = Session.get('now')
      const 시간차이 = 지금 - 마지막시간
      if (시간차이 > 3000) { //시간 이상임
        console.log(1)
        return 'true'
      } else { //아직 시간 안됨
        console.log(2)
          return undefined
      }
    }
  },
  출퇴근(){
    const attendance = Attendance.findOne({user_id:Meteor.userId()},{sort:{createdAt:-1}})
    if (attendance?.type === '출근') return '퇴근'
    else return '출근'
  },
  출퇴근색깔() {
    const attendance = Attendance.findOne({user_id:Meteor.userId()},{sort:{createdAt:-1}})
    if (attendance?.type === '출근') return 'lightgreen'
    else return 'pink'
  },
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
    //DB에서 가장 최근 1건을 꺼내서 그게 출근이면 퇴근 시키고 퇴근이면 출근시킨다.
    const user = Meteor.user();
    const attendance = Attendance.findOne({user_id:Meteor.userId()},{sort:{createdAt:-1}})
    if (attendance?.type === '출근') {
      Attendance.insert({
        name: user.username,
        user_id: user._id,
        createdAt: new Date(),
        type: "퇴근",
      });
      alert("출근되셨습니다");
    }
    else {
      Attendance.insert({
        name: user.username,
        user_id: user._id,//유저의 고유한 아디
        createdAt: new Date(),
        type: "출근",
      });
      alert("퇴근되셨습니다");
    }


  },
  "click #last_deleted":function(){
    // #디비에서 내꺼중에 가장 최신거보다 1시간이 지나면 디스에이블 해라
    const user = Meteor.user();
    const attendance = Attendance.findOne({user_id:Meteor.userId()},{sort:{createdAt:-1}})

    const 마지막시간 = attendance.createdAt
    const 지금 = new Date()
    const 시간차이 = 지금 - 마지막시간
    if (시간차이 < 3600000) { //1시간 이내임

    }

    // const user = Meteor.user();
    // const target = document.getElementById("last_deleted");
    //
    // if(target.disabled === false){
    //   setTimeout(()=>{
    //     target.disabled === true
    //     alert("출퇴근후 1시간이후에는 삭제가 불가")
    //   },3000)
    // }
    //
    // const AttendanceId = Attendance.findOne({user_id:user._id},{sort:{createdAt: -1}})._id
    // Attendance.remove({_id: AttendanceId})
    //
    // target.disabled = true;



  }
});
