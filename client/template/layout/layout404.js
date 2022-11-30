import {FlowRouter} from "meteor/ostrio:flow-router-extra"; //링크를 만들어주는 친구

FlowRouter.route('/layout404', {
  name: 'layout404',
  action() {
    this.render('layout404',"loading");
    // this.render('try',{to:'tryYield'})
  }
});