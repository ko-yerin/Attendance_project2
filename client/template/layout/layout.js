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

  //11.30 수정
  triggersEnter: [(context, redirect) => {   // action()이 실행되기 직전에 호출됨
    if (!Meteor.user()) {
      alert('로그인이 필요한 메뉴입니다!')
      redirect('/login');
    }
  }],
  //11.30 수정

  action() {
    Meteor.subscribe('test')
    this.render('layout','attendance_system');
  }
});

// 12.1 수정
FlowRouter.route('/admin', {
  name: 'admin',
  whileWaiting(){
    console.log(111111, '되고있니')
    this.render('layout', 'loading')
  },

  waitOn(params) {
    return Meteor.subscribe('Attendance', params._id)
  },

  action() {
    this.render('layout', 'admin');
  }
});

// 정의하지 않은 url 입력 시 처리
const page_list = ['http://localhost:3000/', 'http://localhost:3000/login', 'http://localhost:3000/attendance',
  'http://localhost:3000/signin', 'http://localhost:3000/admin'];

function page_correct(page_url){
  if(page_list.includes(page_url)){
    return true;
  }
  else{
    return false;
  }
}

FlowRouter.notFound = {
  action() {
    if (page_correct(window.location.href)) {
      FlowRouter.go(window.location.href);
    } else {
      alert('wrong page!!')
      this.render('layout404');
    }
  }
};
// 12.1 수정