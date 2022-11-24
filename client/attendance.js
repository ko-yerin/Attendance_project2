//회원가입추가, 로그인안됫을때 attendance안가게
//attendance에 로그아웃추가

import {Attendance} from "../lib/collection";
import {FlowRouter} from "meteor/ostrio:flow-router-extra";

Template.attendance_list.helpers({
    type() {
        // console.log("this", this)

        if (this.type === "출근") {
            return true;
        } else {
            return false;
        }
    },

    list() {
        const user = Meteor.user()
        console.log("user", user)
        // let test1 = Attendance.find({user_id: user?._id}, {limit: 20, sort: {createdAt: -1}}).collection.queries
        // console.log('test', test1 )
        return Attendance.find({user_id: user?._id}, {limit: 20, sort: {createdAt: -1}})
    },

    getDate(date) {
        // console.log("date",date)
        return date?.toLocaleString();
    }
})

let in_submit = false;
let out_submit = false;

Template.attendance_system.events({
    "click .button_admin": function () {
        FlowRouter.go("/admin");
    },
    "click .go_to_work": function () {
        // console.log("출근")
        const user = Meteor.user()
        // console.log(user)

        function submit_check(){
            if(in_submit){
                return in_submit;
            }else{
                in_submit = true;
                return false;
            }
        }

        if(submit_check()){
            alert("이미 출근되셨습니다")
        }else{
            Attendance.insert({
                user_id: user._id,
                createdAt: new Date(),
                type: "출근"
            })
            alert("출근되셨습니다")
        }
    },
    "click .finish_work": function () {
        const user = Meteor.user()

        function submit_check(){
            if(out_submit){
                return out_submit;
            }else{
                out_submit = true;
                return false;
            }
        }

        if(submit_check()){
            alert("이미 퇴근되셨습니다")
        }else{
            Attendance.insert({
                user_id: user._id,
                createdAt: new Date(),
                type: "퇴근"
            })
            alert("퇴근되셨습니다")
        }
        // console.log("퇴근")
    }
})
