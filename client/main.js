import './main.html';
import { FlowRouter } from "meteor/ostrio:flow-router-extra"; //링크를 만들어주는 친구
import { BlazeLayout } from "meteor/kadira:blaze-layout";// 렌더시켜주는 친구
// todo: FlowRouter.render() 함수가 있습니다. 굳이 BlazeLayout 을 사용할 필요가 있었나요?
// 공식문서에서는 BlazeLayout을 사용해서 사용했습니다
// FlowRouter.render()는 찾지못하였습니다.

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('home');
    }
});

FlowRouter.route('/signin', {
    name: 'signin',
    action() {
        BlazeLayout.render('signin');
        console.log("signin 되니??");
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('login');
        console.log("login 되니??");
    }
});

FlowRouter.route('/attendance', {
    name: 'attendance',
    action() {
        BlazeLayout.render('attendance_system');
    }
});

FlowRouter.route('/admin', {
    name: 'admin',
    action() {
        BlazeLayout.render('admin');
    }
});

console.log("클라이언트가 정상적입니다")