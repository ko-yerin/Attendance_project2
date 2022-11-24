import {FlowRouter} from "meteor/ostrio:flow-router-extra";


// Template.login_check.helpers({
//     login_checking(){
//         console.log("asfas",Meteor.userId())
//
//         if(Meteor.userId()){
//             console.log("아디있다")
//             return true;
//         }else{
//             console.log("아디없다")
//             return false;
//         }
//     }
// })

Template.login.events({
    "click .check" (evt,tmpl) {
        const username = tmpl.find("input[name=username]").value;
        const password = tmpl.find("input[name=password]").value;

        Meteor.loginWithPassword(username, password, function(error){
        if(!error){
            alert("로그인되었습니다")
            Meteor.logoutOtherClients();
            FlowRouter.go("/attendance")
        }
        else{
            alert("로그인 실패") // 실패경우 2가지 - 비번 불일치, 사용자 없음
            FlowRouter.go("/")

        }
        })

    },
    "click .button_cancel" (){
        FlowRouter.go("/")
    },

    'keyup input' : function (evt, tmpl){
        if(evt.which === 13){
            const username = tmpl.find("input[name=username]").value;
            const password = tmpl.find("input[name=password]").value;

            Meteor.loginWithPassword(username, password, function(error){
                if(!error){
                    alert("로그인되었습니다")
                    Meteor.logoutOtherClients();
                    FlowRouter.go("/attendance")
                }
                else{
                    alert("로그인 실패") // 실패경우 2가지 - 비번 불일치, 사용자 없음

                }
            })
        }
    }
})