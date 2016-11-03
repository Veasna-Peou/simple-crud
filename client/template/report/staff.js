import {Staff} from "../../../both/collection/report/staff";

Template.staffList.onCreated(function () {

});

Template.staffList.helpers({
    staffSchema(){
        return Staff;
    },
});

AutoForm.addHooks('staffList', {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
        this.event.preventDefault();

        // You must call this.done()!
        this.done(null, insertDoc); // submitted successfully, call onSuccess with `result` arg set to "foo"
    },

    // Called when any submit operation succeeds
    onSuccess: function (formType, result) {
        let url = FlowRouter.path('staffListReport', {},result);
        
        console.log(url);
        
        
        window.open(url, '_blank');
    },

    // Called when any submit operation fails
    onError: function (formType, error) {

    },
});

Template.staffListReport.onCreated(function () {
    let self = this;
    self.dataState = new ReactiveVar();

    Tracker.autorun( ()=> {
        let params = {
            gender: FlowRouter.getQueryParam('gender')
        };

        Meteor.call('staffList', params, function (error, reslut) {
            if (!error) {
                self.dataState.set(reslut);
            }
        })
    });
});

Template.staffListReport.helpers({
    data(){
        return Template.instance().dataState.get();
    }
});