import {Attendance} from "../lib/collection";

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
        // console.log("user", user)
        return Attendance.find({user_id: user?._id}, {limit: 10, sort: {createdAt: -1}}).fetch()
    },

    getDate(date) {
        // console.log("date",date)
        return date?.toLocaleString();
    }
})

let in_submit = false;
let out_submit = true;

Template.attendance_system.events({
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
