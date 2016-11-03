import _ from 'lodash';
// let _ = require('lodash');

Template.home.onCreated(function () {
    this.state = new ReactiveVar();
    this.state.set('Method Here...');
});
Template.home.helpers({
    data(){
        const instance = Template.instance();
        // return 'Hi';
        return instance.state.get();
    }
});
Template.home.events({
    'click .npmtest'(event, instance){
       let val=([4, 2, 8, 6]);

        alert(_.sum(val));

        let x="1234";
        alert(_.isString(x));
        
        let y="Yiman Kaing";
        alert(_.isString(x));
        // console.log(_.isNumber('hello'));

    },
    'click .method-testing'(event, instance){
        instance.state.set(false);
        Meteor.call('testing','Rabbit',function (error, result) {
            if(!error){
                instance.state.set(result);
            }
        })
    }
});
