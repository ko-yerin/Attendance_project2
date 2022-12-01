import { Meteor } from 'meteor/meteor'
import '/imports/collections'
import '/imports/server/accounts'
import '/imports/server/methods'
import '/imports/server/publications'

Meteor.startup(() => {
  console.log(`Server start up at ${ new Date() }`)
})
