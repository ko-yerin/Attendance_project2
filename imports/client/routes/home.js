import { FlowRouter } from "meteor/ostrio:flow-router-extra"

FlowRouter.route('/', {
  name: 'home',

  async action() {
    await import('/imports/client/templates/home')

    this.render('layout', 'home')
  }
})