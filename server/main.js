import {Meteor} from 'meteor/meteor';

// todo: Attendance을 불러와서 한번도 사용하지 않았는데 `import "../lib/collection"` 으로 작성하지 않은 이유가 있을까요?
import {Attendance} from "../lib/collection"
// import {test} from "/meteor/Attendance_project2/lib/collection";

Meteor.startup(() => {
  console.log("서버가 정상적입니다 !!!")
});


//가입정보 정합성 확인하기
Accounts.validateNewUser(function (user) {
  if (user.username && user.username.length >= 3) {
    return true;
  } else {
    throw new Meteor.Error(403, '사용자명(아이디)은 적어도 3자 이상입니다!')
  }
});

Accounts.validateNewUser(function (user) {
  if (user.profile.name) {
    return true;
  } else {
    throw new Meteor.Error(403, '이름을 입력해주세요!')
  }
});