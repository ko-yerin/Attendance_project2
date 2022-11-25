import {FlowRouter} from "meteor/ostrio:flow-router-extra";

Template.header.helpers({
  is_login(){
    if(Meteor.user()){
      return true;
    }
    else{
      return false;
    }
  }
})

Template.header.events({
  "click .logout" : function (){
    Meteor.logout();
  },
  "click .signin":function(){
    FlowRouter.go("/signin")
  },
  "click .login":function(){
    FlowRouter.go("/login")
  }
})


