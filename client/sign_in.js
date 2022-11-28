import {FlowRouter} from "meteor/ostrio:flow-router-extra";

Template.signin.events({
    "click #button_sign" (evt,tmpl){
        const username = tmpl.find("input[name=username]").value;
        const email = tmpl.find("input[name=email]").value;
        const name = tmpl.find("input[name=name]").value;
        const password = tmpl.find("input[name=password]").value;
        const password2 = tmpl.find("input[name=password2]").value;

        if(password2 === password){
            const userInfo = { username, email, password, profile: { name} }; // 미티어는 몽고디비의 user 컬렉션에서 사용자와 접속자 정보를 관리하므로 이 스키마를 임의로 변경하면 안됨
            Accounts.createUser(userInfo, function (error){
                if(!!error){
                    alert(error.reason);
                }else{
                    alert("회원가입 성공 !")
                    FlowRouter.go("/login")
                }
            })}

        else{
            alert("비밀번호가 일치하지 않습니다!")
        }
    },

    // todo: 잘 하셨습니다만, a 테그가 아닌 버튼 이벤트로 라우팅을 핸들링 했어야 하는 이유가 있었을까요?
    // todo: 웹 접근성이 무엇인지와 이렇게 하신 의도가 궁금합니다.
    "click .button_cancel" (){
        FlowRouter.go("/")
    },

    'keyup input' : function (evt, tmpl) {
        if (evt.which === 13) {
            // todo: 맨 위 이벤트 로직과 이곳에서부터의 로직은 동일해보입니다. 프로그래머는 중복코드를 매우 싫어하고, 비효율적이라 생각하는데 더 좋게 고쳐볼 수 있을까요.
            const username = tmpl.find("input[name=username]").value;
            const email = tmpl.find("input[name=email]").value;
            const name = tmpl.find("input[name=name]").value;
            const password = tmpl.find("input[name=password]").value;
            const password2 = tmpl.find("input[name=password2]").value;

            if(password2 === password){
                const userInfo = { username, email, password, profile: { name} }; // 미티어는 몽고디비의 user 컬렉션에서 사용자와 접속자 정보를 관리하므로 이 스키마를 임의로 변경하면 안됨
                Accounts.createUser(userInfo, function (error){
                    if(!!error){
                        alert(error.reason);
                    }else{
                        alert("회원가입 성공 !")
                        FlowRouter.go("/login")
                    }
                })}

            else{
                alert("비밀번호가 일치하지 않습니다!")
            }

        }
    }

})