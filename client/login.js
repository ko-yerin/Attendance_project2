import {FlowRouter} from "meteor/ostrio:flow-router-extra";

Template.login.events({
    "click .check" (evt,tmpl) {
        const username = tmpl.find("input[name=username]").value;
        const password = tmpl.find("input[name=password]").value;
        const user = Meteor.user();
        // 디비에 있는거랑 가입된 아이디랑 확인해서 넘어가
        console.log("user",user)
        // console.log("username",username);
        // console.log("user.username",user.username)

        if(!user){
            alert('가입이 안됐어!')
        }
        else {
            FlowRouter.go("/attendance")
        }


    },
    "click .button_cancel" (evt,tmpl){
        FlowRouter.go("/")
    },
})