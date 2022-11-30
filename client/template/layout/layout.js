import {FlowRouter} from "meteor/ostrio:flow-router-extra"; //링크를 만들어주는 친구
import {BlazeLayout} from "meteor/kadira:blaze-layout";// 렌더시켜주는 친구

// 🚀Yield로 layout에 템플릿을 렌더링시킬 수 있습니다 (단, 1번만)
FlowRouter.route('/', {
  name: 'home',
  action() {
    this.render('layout',"home");
    // this.render('try',{to:'tryYield'})
  }
});

FlowRouter.route('/signin', {
  name: 'signin',
  action() {
    this.render('layout',"signin");
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    this.render('layout','login');
  }
});

FlowRouter.route('/attendance', {
  name: 'attendance',
  action() {
    this.render('layout','attendance_system');
  }
});

FlowRouter.route('/admin', {
  name: 'admin',
  action() {
    this.render('layout', 'admin');
  }
});
