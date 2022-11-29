import {Meteor} from 'meteor/meteor';

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

// 11.28 추가
Accounts.validateNewUser(function (user) {
  if (user.profile.name) {
    return true;
  } else {
    throw new Meteor.Error(403, '이름을 입력해주세요!')
  }
});
// 11.28 추가

// 11.29 추가
Accounts.validateNewUser(function (user) {
  if (user.emails) {
    return true;
  } else {
    throw new Meteor.Error(403, '이메일을 입력해주세요!')
  }
});
// 11.29 추가