import './main.html';
import {FlowRouter} from "meteor/ostrio:flow-router-extra"; //링크를 만들어주는 친구
import {BlazeLayout} from "meteor/kadira:blaze-layout";// 렌더시켜주는 친구
// todo: FlowRouter.render() 함수가 있습니다. 굳이 BlazeLayout 을 사용할 필요가 있었나요?
// 영문: https://github.com/veliovgroup/flow-router/blob/master/docs/api/render.md
// 한글: https://meteorjs.kr/router/api/api-general.html#render
// kadira: 프로젝트는 관리가 안된 죽은 프로젝트 입니다.
// 그렇기 때문에 사용은 지양해야 합니다.
// 블레이즈 레이아웃에 의존하지 않고 화면이 렌더링 되도록 바꿔봅시다.

//🚨
//하나의 템플릿만 된다..
//react에도 적용???
//의문점 mainlayout은 없는건가??
//렌더링 순서에 대한 이해 부족

FlowRouter.route('/', {
  name: 'home',
  action() {
    // BlazeLayout.render('home');
    this.render('home');    //🚨홈만 뒤로가 있습니다....
  }
});

FlowRouter.route('/signin', {
  name: 'signin',

    // BlazeLayout.render('signin');
    this.render('signin')
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    this.render('login');
    // BlazeLayout.render('login');
  }
});

FlowRouter.route('/attendance', {
  name: 'attendance',
  action() {
    // BlazeLayout.render('attendance_system');
    this.render('attendance_system')
  }
});

FlowRouter.route('/admin', {
  name: 'admin',
  action() {
    // BlazeLayout.render('admin');
    this.render('admin')
  }
});

FlowRouter.route('*', {
  action() {
    // Show 404 error page using Blaze
    this.render('notFound');

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});
