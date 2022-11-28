import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.header.helpers({
  is_login() {
    // todo: 코드를 한 줄로 줄여볼까요?---->완료
    return !!Meteor.user();
  },
});

Template.header.events({
  "click .logout": function () {
    Meteor.logout();
    FlowRouter.go("/login");
  },
  "click .signin": function () {
    FlowRouter.go("/signin");
  },
  "click .login": function () {
    FlowRouter.go("/login");
  },
});
