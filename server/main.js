import { Meteor } from 'meteor/meteor';

// todo: Attendance을 불러와서 한번도 사용하지 않았는데 `import "../lib/collection"` 으로 작성하지 않은 이유가 있을까요?
import {Attendance} from "../lib/collection"
// import {test} from "/meteor/Attendance_project2/lib/collection";

Meteor.startup(() => {
    // if(Attendance.find().count()===0){
    //     Attendance.insert({
    //         이름:"고촴",
    //     })
    // }
  // code to run on server at startup
    console.log("서버가 정상적입니다 !!!")
});
