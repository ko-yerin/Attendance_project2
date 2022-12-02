import { Meteor } from 'meteor/meteor'
import Attendance from '/imports/collections'

Meteor.publish('Attendance', function(){
  return Attendance.find(Meteor.userId())
})

Meteor.publish('test', function(){
  return Attendance.find()
})
