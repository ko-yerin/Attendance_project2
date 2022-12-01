import {Meteor} from 'meteor/meteor';
import Attendance from "/lib/collection";
import "/imports/api/method.js"

Meteor.startup(() => {

});

//가입정보 정합성 확인하기
Accounts.validateNewUser(function (user) {
  if (user.username && user.username.length >= 3) {
    return true;
  } else {
    throw new Meteor.Error(403, '사용자명(아이디)은 적어도 3자 이상입니다!')
  }
});

// 11.29 수정
Accounts.validateNewUser(function (user) {
  if (user.profile.name && user.emails) {
    return true;
  } else {
    throw new Meteor.Error(403, '이름 또는 이메일을 입력(확인)해주세요!')
  }
});
// 11.29 수정

Meteor.publish('Attendance',function(){
  return Attendance.find(Meteor.userId())
});

Meteor.publish('test',function(){
  return Attendance.find()
});
