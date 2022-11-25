import { FlowRouter } from "meteor/ostrio:flow-router-extra";

// todo: 이곳도 중복 코드로 되어 있네요. 이걸 해결하는 방법은 여러가지 입니다. 해결이 필요합니다.
Template.login.events({
  "click .check"(evt, tmpl) {
    const username = tmpl.find("input[name=username]").value;
    const password = tmpl.find("input[name=password]").value;

    // console.log("admin",Meteor.user())
    // todo: 값의 유효성 검사는 안하시는 건가요?

    Meteor.loginWithPassword(username, password, function (error) {
      if (!error) {
        const checkAdmin = Meteor.user().username;

        if (checkAdmin == "admin") {
          console.log("어드민입니다");
          FlowRouter.go("/admin");
        } else {
          alert("로그인되었습니다");
          Meteor.logoutOtherClients();
          FlowRouter.go("/attendance");
        }
      } else {
        alert("로그인 실패"); // 실패경우 2가지 - 비번 불일치, 사용자 없음
        FlowRouter.go("/login");
      }
    });
    // const user = Meteor.user();
    // console.log("admin",user.username)
    //
    // if(user.username === "admin"){
    //     alert("admin확인")
    //     // Meteor.logoutOtherClients();
    //     FlowRouter.go("/admin")
    // }
    //
    // console.log("!@#",user)
  },
  "click .button_cancel"() {
    FlowRouter.go("/");
  },

  "keyup input": function (evt, tmpl) {
    if (evt.which === 13) {
      const username = tmpl.find("input[name=username]").value;
      const password = tmpl.find("input[name=password]").value;

      Meteor.loginWithPassword(username, password, function (error) {
        if (!error) {
          const checkAdmin = Meteor.user().username;

          if (checkAdmin == "admin") {
            console.log("어드민입니다");
            FlowRouter.go("/admin");
          } else {
            alert("로그인되었습니다");
            Meteor.logoutOtherClients();
            FlowRouter.go("/attendance");
          }
        } else {
          alert("로그인 실패"); // 실패경우 2가지 - 비번 불일치, 사용자 없음
          FlowRouter.go("/login");
        }
      });
    }
  },
});
