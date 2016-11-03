// import moment from 'moment';
import {Contract} from "../../../both/collection/report/contract";

Template.contractList.onCreated(function () {

});

Template.contractList.helpers({
    contractSchema(){
        return Contract;
    },
});

AutoForm.addHooks('contractList', {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
        this.event.preventDefault();

        // You must call this.done()!
        this.done(null, insertDoc); // submitted successfully, call onSuccess with `result` arg set to "foo"
    },

    // Called when any submit operation succeeds
    onSuccess: function (formType, result) {
        let url = FlowRouter.path('contractListReport', {},result);

        console.log(url);


        window.open(url, '_blank');
    },

    // Called when any submit operation fails
    onError: function (formType, error) {

    },
});

Template.contractListReport.onCreated(function () {
    let self = this;
    self.dataState = new ReactiveVar();

    Tracker.autorun( ()=> {
        let params = {
            fromDate: FlowRouter.getQueryParam('fromDate'),
            toDate: FlowRouter.getQueryParam('toDate')
            // staffId: FlowRouter.getQueryParam('staffId')
        };

        Meteor.call('contractList', params, function (error, reslut) {
            if (!error) {
                self.dataState.set(reslut);
            }
        })
    });
});

Template.contractListReport.helpers({
    data(){
        return Template.instance().dataState.get();
    }
});