import {FlowRouter} from "meteor/ostrio:flow-router-extra";

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

  "click #check"(evt, tmpl) {
    LogIn(evt,tmpl);
  },

  "click #button_cancel"() {
    FlowRouter.go("/");
  },

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

  Meteor.loginWithPassword(username, password, function (error) {
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
      FlowRouter.go("/login");
    }
  })
}
