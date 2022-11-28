import { FlowRouter } from "meteor/ostrio:flow-router-extra";

// 11.28 추가
Template.login.helpers({
  type_change2(){
    if(Session.get('password_text') === 'password'){
      return 'text';
    }
    else{
      return 'password';
    }
  }
});
// 11.28 추가

// todo: 이곳도 중복 코드로 되어 있네요. 이걸 해결하는 방법은 여러가지 입니다. 해결이 필요합니다.
// solution : 함수로 변경하였습니다.
Template.login.events({
  "click .check"(evt, tmpl) {
    LogIn(evt,tmpl);
  },


  "click .button_cancel"() {
    FlowRouter.go("/");
  },

  "keyup input": function (evt, tmpl) {
    if (evt.which === 13) {
      LogIn(evt,tmpl);
    }
  },

  // 11.28 추가
  "change [type=checkbox]": function(evt,tmpl){
    const checkbox = document.getElementById('password_check2')
    const is_checked = checkbox.checked;

    if (is_checked){
      Session.set('password_text', 'password')
    }
    else{
      Session.set('password_text', 'text')
    }
  }
});
  // 11.28 추가

function LogIn(event,template){
  const username = template.find("input[name=username]").value;
  const password = template.find("input[name=password]").value;

  // todo: 값의 유효성 검사는 안하시는 건가요?
  // solution : 이전에 가입되지 않은 사용자이거나 비번이 불일치하면 로그인이 실패되며 비번이나 아이디를 칸에 입력하지 않았을 경우에도 오류가 발생합니다.
  Meteor.loginWithPassword(username, password, function (error) {
    if (!error) {
      const checkAdmin = Meteor.user().username;

      if (checkAdmin == "admin") {
        FlowRouter.go("/admin");
      } else {
        alert("로그인 되었습니다");
        Meteor.logoutOtherClients();
        FlowRouter.go("/attendance");
      }
    } else {
      alert("로그인 실패"); // 실패경우 2가지 - 비번 불일치, 사용자 없음
      FlowRouter.go("/login");
    }
  })
}
