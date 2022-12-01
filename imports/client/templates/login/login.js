import './login.html'
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

// 11.28 추가
Template.login.helpers({
  type_change2() {
    if (Session.get('password_text') === 'password') {
      return 'text';
    } else {
      return 'password';
    }
  }
});
// 11.28 추가

Template.login.events({

  "click .check"(evt, tmpl) {
    LogIn(evt,tmpl);
  },

  // 라우팅말고 a 태그로 변경
  // "click #button_cancel"() {
  //   FlowRouter.go("/");
  // },

  "keyup input": function (evt, tmpl) {
    if (evt.which === 13) {

      LogIn(evt,tmpl);
    }
  },

  // 11.28 추가
  "change [type=checkbox]": function () {
    const checkbox = document.getElementById('password_check2')
    const is_checked = checkbox.checked;

    if (is_checked) {
      Session.set('password_text', 'password')
    } else {
      Session.set('password_text', 'text')
    }
  }
});

// 11.28 추가
function LogIn(event, template) {
  const username = template.find("input[name=username]").value;
  const password = template.find("input[name=password]").value;
  console.log("hey", username, password)

  // 11.30 추가
  // 아이디 또는 패스워드를 입력하지 않은 상태에서 로그인 버튼을 누르면 메서드를 날리는 것을 수정하기 위함
  if(!(username&&password)){
    alert('아이디와 패스워드를 입력해주세요!')
    return
  }
  // 11.30 추가

  Meteor.loginWithPassword(username, password, function (error) {
    // todo - 코드를 좀 더 깔끔하게 바꿀수 있는지 고민해봅시다.
    if (!error) {
      const checkAdmin = Meteor.user().username;

      if (checkAdmin === "admin") {
        FlowRouter.go("/admin");
      } else {
        alert("로그인 되었습니다");
        Meteor.logoutOtherClients();
        FlowRouter.go("/attendance");
      }
    } else {
      console.log(error)
      alert("로그인 실패"); // 실패경우 2가지 - 비번 불일치, 사용자 없음
      // todo - 아래 코드는 필요한 부분일까요?
      FlowRouter.go("/login");
    }
})


}
