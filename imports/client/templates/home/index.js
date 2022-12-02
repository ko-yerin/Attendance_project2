import './home.html'
import { FlowRouter } from "meteor/ostrio:flow-router-extra"

Template.home.events({
  "click .go_attendance": function() {
    // todo - 조금 더 간결한 코드를 만들수 있는지 고민 해봅시다.
    if (Meteor.userId()) {
      FlowRouter.go("/attendance")
    } else {
      alert('로그인이 필요합니다!')
    }
  }
})