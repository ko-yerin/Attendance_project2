import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.header.events({
    "click .button_sign":function(){
        console.log("dfsdf_")
        FlowRouter.go("/signin")
    },
    "click .button_login":function(){
        FlowRouter.go("/login")
    }
})


