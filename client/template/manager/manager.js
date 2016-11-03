import {Manager} from '../../../both/collection/manager';

Template.manager.helpers({
    data(){
        return Manager.find();
    }
});

Template.manager.events({
    'click .js-remove'(){
        let lub = this;
        alertify.confirm("Do you want to remove it?",
            function () {
                // alertify.success('Ok');
                Manager.remove({_id: lub._id});
                Bert.alert('Deleted', 'danger', 'growl-top-right')
            },
            function () {
                // alertify.error('Cancel');
            });
        // console.log(this);
        // console.log(this._id);


    },
    'click #manager-insert'(){
        FlowRouter.go('managerInsert');
    },
    'click .js-update'(){
        console.log(this._id);
        // let id = this._id;
        FlowRouter.go('managerUpdate', {id: this._id});
    }
});
// Insert
Template.managerInsert.events({});

// Insert
Template.managerInsert.helpers({
    Manager() {
        return Manager;
    }
});
//update
Template.managerUpdate.helpers({
    data(){
        let id = FlowRouter.getParam('id');
        return Manager.findOne({_id: id});
    },
    Manager() {
        return Manager;
    }
});


Template.managerUpdate.events({
    'click #manager'(){
        FlowRouter.go('manager');
    },
});

AutoForm.hooks({
    managerInsert: {
        onSuccess: function (formType, result) {
            // FlowRouter.go('manager');
            Bert.alert('បានបញ្ចូល ដោយជោគជ័យ', 'success', "growl-bottom-right");
        },
        onError: function (formType, error) {
            Bert.alert(error.message, 'danger', "growl-bottom-right");
        },
    },
    managerUpdate: {
        onSuccess: function (formType, result) {
            FlowRouter.go('manager');
            Bert.alert('បានកែប្រែ ដោយជោគជ័យ', 'success', "growl-bottom-right");
        },
        onError: function (formType, error) {
            Bert.alert(error.message, 'danger', "growl-bottom-right");
        },
    },
});