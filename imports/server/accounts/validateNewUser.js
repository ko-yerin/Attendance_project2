import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

Accounts.validateNewUser(function (user) {
  if (user.username && user.username.length >= 3) {
    return true
  } else {
    throw new Meteor.Error(403, '사용자명(아이디)은 적어도 3자 이상입니다!')
  }
})

Accounts.validateNewUser(function (user) {
  if (user.profile.name && user.emails) {
    return true
  } else {
    throw new Meteor.Error(403, '이름 또는 이메일을 입력(확인)해주세요!')
  }
})