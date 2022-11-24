import { Meteor } from 'meteor/meteor';

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
