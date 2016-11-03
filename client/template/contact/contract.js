import {Contract} from '../../../both/collection/contract';

Template.contract.events({
    'click .js-insert'(){
        FlowRouter.go('contractInsert');
    }
   
});
// Insert
Template.contractInsert.helpers({
    contractCollection() {
        return Contract;
    }
});

Template.contractInsert.events({
    'click .js-back'(){
        FlowRouter.go('contract');
    },
});

AutoForm.hooks({
    contractInsert: {
        onSuccess: function (formType, result) {
            // FlowRouter.go('contract');
            Bert.alert('បានបញ្ចូល ដោយជោគជ័យ', 'success', "growl-bottom-right");
        },
        onError: function (formType, error) {
            Bert.alert(error.message, 'danger', "growl-bottom-right");
        },
    }
});