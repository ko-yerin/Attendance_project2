import {FlowRouter} from "meteor/ostrio:flow-router-extra";

// 11.28 추가
Template.home.events({
  "click .go_attendance": function () {
    if (Meteor.userId()) {
      FlowRouter.go("/attendance")
    } else {
      alert('로그인이 필요합니다!')
    }

  }
})
// 11.28 추가