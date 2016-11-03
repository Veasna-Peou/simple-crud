import {Staff} from '../../../both/collection/staff';

Template.staff.helpers({
    data(){
        return Staff.find();
    }
});

Template.staff.events({
    'click .js-remove'(){
        let lub = this;
        alertify.confirm("Do you want to remove it?",
            function () {
                // alertify.success('Ok');
                Staff.remove({_id: lub._id},function (error) {
                    if(!error){
                        Bert.alert('Deleted', 'success', 'growl-top-right')
                    }else {
                        Bert.alert(error.message, 'danger', 'growl-top-right')
                    }
                });
            },
            function () {
                // alertify.error('Cancel');
            });
        // console.log(this);
        // console.log(this._id);


    },
    'click #staff-insert'(){
        FlowRouter.go('staffInsert');
    },
    'click .js-update'(){
        console.log(this._id);
        // let id = this._id;
        FlowRouter.go('staffUpdate', {id: this._id});
    }
});
// Insert
Template.staffInsert.helpers({
    staffCollection() {
        return Staff;
    }
});

Template.staffInsert.events({
    'click #staff'(){
        FlowRouter.go('staff');
    },
});

//update
Template.staffUpdate.onCreated(function () {
    Tracker.autorun(function () {
        let id = FlowRouter.getParam('id');
        Meteor.subscribe("staff", id);
    })
});

Template.staffUpdate.helpers({
    staffCollection() {
        return Staff;
    },
    data(){
        let id = FlowRouter.getParam('id');
        console.log(Staff.find().count());
        return Staff.findOne({_id: id});
    }
});


Template.staffUpdate.events({
    'click #staff'(){
        FlowRouter.go('staff');
    },
});

AutoForm.hooks({
    staffInsert: {
        onSuccess: function (formType, result) {
            // FlowRouter.go('staff');
            Bert.alert('បានបញ្ចូល ដោយជោគជ័យ', 'success', "growl-bottom-right");
        },
        onError: function (formType, error) {
            Bert.alert(error.message, 'danger', "growl-bottom-right");
        },
    },
    staffUpdate: {
        onSuccess: function (formType, result) {
            FlowRouter.go('staff');
            Bert.alert('បានកែប្រែ ដោយជោគជ័យ', 'success', "growl-bottom-right");
        },
        onError: function (formType, error) {
            Bert.alert(error.message, 'danger', "growl-bottom-right");
        },
    },
});