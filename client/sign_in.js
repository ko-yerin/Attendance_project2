import {FlowRouter} from "meteor/ostrio:flow-router-extra";

Template.signin.events({
    "click .button_sign" (evt,tmpl){
        const username = tmpl.find("input[name=username]").value;
        const email = tmpl.find("input[name=email]").value;
        const name = tmpl.find("input[name=name]").value;
        const password = tmpl.find("input[name=password]").value;
        const password2 = tmpl.find("input[name=password2]").value;

        if(password2 === password){
            const userInfo = { username, email, password, profile: { name } }; // 미티어는 몽고디비의 user 컬렉션에서 사용자와 접속자 정보를 관리하므로 이 스키마를 임의로 변경하면 안됨
            Accounts.createUser(userInfo);
            alert("회원가입이 완료되었습니다!")
            FlowRouter.go("/login")
        }
        else{
            alert("비밀번호가 일치하지 않습니다!")
        }
    },

    "click .button_cancel" (evt,tmpl){
        console.log("취소")
    },



})