import {FlowRouter} from "meteor/ostrio:flow-router-extra";

// 11.28 추가
Template.signin.helpers({
  type_change() {
    if (Session.get('password_text') === 'password') {
      return 'text';
    } else {
      return 'password';
    }
  }

});
// 11.28 추가

Template.signin.events({
  "click .button_sign"(evt, tmpl) {
    SignIn(evt, tmpl)
  },

  // todo: 잘 하셨습니다만, a 테그가 아닌 버튼 이벤트로 라우팅을 핸들링 했어야 하는 이유가 있었을까요?
  // todo: 웹 접근성이 무엇인지와 이렇게 하신 의도가 궁금합니다.
  "click .button_cancel"() {
    FlowRouter.go("/")
  },

  'keyup input': function (evt, tmpl) {
    // todo: 맨 위 이벤트 로직과 이곳에서부터의 로직은 동일해보입니다. 프로그래머는 중복코드를 매우 싫어하고, 비효율적이라 생각하는데 더 좋게 고쳐볼 수 있을까요.
    // solution : 함수로 변경하였습니다.
    if (evt.which === 13) {
      SignIn(evt, tmpl)
    }
  },

  // 11.28 추가
  "change [type=checkbox]": function (evt, tmpl) {
    const checkbox = document.getElementById('password_check')
    const is_checked = checkbox.checked;

    if (is_checked) {
      Session.set('password_text', 'password')
    } else {
      Session.set('password_text', 'text')
    }
  }
  // 11.28 추가

});

function SignIn(event, template) {
  const username = template.find("input[name=username]").value;
  const email = template.find("input[name=email]").value;
  const name = template.find("input[name=name]").value;
  const password = template.find("input[name=password]").value;
  const password2 = template.find("input[name=password2]").value;

  if (password2 === password) {
    const userInfo = {username, email, password, profile: {name}}; // 미티어는 몽고디비의 user 컬렉션에서 사용자와 접속자 정보를 관리하므로 이 스키마를 임의로 변경하면 안됨
    Accounts.createUser(userInfo, function (error) {
      if (!!error) {
        alert(error.reason);
      } else {
        alert("회원가입 성공 !")
        FlowRouter.go("/login")
      }
    })
  } else {
    alert("비밀번호가 일치하지 않습니다!")
  }
}
