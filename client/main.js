import './main.html';
import { FlowRouter } from "meteor/ostrio:flow-router-extra"; //링크를 만들어주는 친구
import { BlazeLayout } from "meteor/kadira:blaze-layout";// 렌더시켜주는 친구

FlowRouter.route('/', {
    name: 'home',
    action(params, queryParams) {
        BlazeLayout.render('home');
    }
});

FlowRouter.route('/signin', {
    name: 'signin',
    action(params, queryParams) {
        BlazeLayout.render('signin');
        console.log("signin 되니??");
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action(params, queryParams) {
        BlazeLayout.render('login');
        console.log("login 되니??");
    }
});

FlowRouter.route('/attendance', {
    name: 'attendance',
    action(params, queryParams) {
        BlazeLayout.render('attendance_system');
    }
});

FlowRouter.route('/admin', {
    name: 'admin',
    action(params, queryParams) {
        BlazeLayout.render('admin');
    }
});

console.log("클라이언트가 정상적입니다")