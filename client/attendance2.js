
// import {FlowRouter} from "meteor/ostrio:flow-router-extra";
// import {Template} from "meteor/templating";
// import {Attendance} from "../lib/collection"
//
// Template.attendance_list.helpers({
//     type(){
//         // console.log("this",this)
//
//         if(this.type === "출근"){
//             return true;
//         }else{
//             return false;
//         }
//     },
//
//     list() {
//         const user = Meteor.user()
//         // console.log("user_id", user)
//
//         return Attendance.find({user_id: user?._id},{limit:20, sort: {createdAt: -1}}).fetch();
//     },
//
//     getDate(date) {
//         return date?.toLocaleString(); //? === date가 확실히 있을때만
//     },
// })
//
// Template.attendance_system.events({
//     "click .go_to_work": function () {
//         const user = Meteor.user()
//         // console.log("user",user._id)
//         console.log("Attendance",Attendance.find())
//
//         Attendance.insert({
//             user_id: user._id,
//             createdAt: new Date(),
//             type: "출근"
//             //_id
//             //출퇴근시간
//             //type
//         })
//         alert("출근완료")
//     },
//     "click .finish_work": function () {
//         const user = Meteor.user()
//         console.log("user", user)
//
//         Attendance.insert({
//             user_id: user._id,
//             createdAt: new Date(),
//             type: "퇴근"
//             //_id
//             //출퇴근시간
//             //type
//         })
//         alert("퇴근완료")
//     }
// })
