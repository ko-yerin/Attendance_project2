import '/imports/client/layouts/layout.html'
import './home'
import './notFound'
import { FlowRouter } from "meteor/ostrio:flow-router-extra"
// todo - 아래 import 코드를 좀 더 보기 좋게 만들 수 있을까요?
//  아니면 비동기 처리를 해볼까요?
import '../templates/login/login.js'
import '../templates/sign_in/sign_in.js'
import '../templates/loading/loading.js'
import '../templates/header/header.js'
import '../templates/footer/footer.js'
import '../templates/admin/admin.js'
import '../templates/attendance/attendance.js'
import '../templates/attendance/attendance_list.js'

FlowRouter.route('/signin', {
  name: 'signin',

  action() {
    this.render('layout',"signin")
  }
})

FlowRouter.route('/login', {
  name: 'login',

  action() {
    this.render('layout','login')
  }
})

FlowRouter.route('/attendance', {
  name: 'attendance',

  triggersEnter: [(context, redirect) => {
    if (!Meteor.user()) {
      alert('로그인이 필요한 메뉴입니다!')
      redirect('/login')
    }
  }],

  action() {
    Meteor.subscribe('test')
    this.render('layout','attendance_system')
  }
})

FlowRouter.route('/admin', {
  name: 'admin',

  whileWaiting(){
    this.render('layout', 'loading')
  },

  waitOn(params) {
    return Meteor.subscribe('Attendance', params._id)
  },

  action() {
    this.render('layout', 'admin')
  }
})
