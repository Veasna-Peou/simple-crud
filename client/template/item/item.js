import {Item} from '../../../both/collection/item';
Template.item.helpers({
    data(){
        return Item.find();
    }
});



Template.item.events({
    'click .js-remove'(){
        let lub = this;
        alertify.confirm("Do you want to remove it?",
            function () {
                // alertify.success('Ok');
                Item.remove({_id: lub._id},function (error) {
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
    'click #item-insert'(){
        FlowRouter.go('itemInsert');
    },
    'click .js-update'(){
        console.log(this._id);
        // let id = this._id;
        FlowRouter.go('itemUpdate', {id: this._id});
    }
});

// Helpers itemInsert
Template.itemInsert.helpers({
    Item() {
        return Item;
    }
});
// Insert
Template.itemInsert.events({});

//update

// Helpers itemInsert
Template.itemUpdate.helpers({
    Item() {
        return Item;
    }
});
Template.itemUpdate.helpers({
    data(){
        let id = FlowRouter.getParam('id');
        return Item.findOne({_id: id});
    }
});

Template.itemUpdate.events({
    'click #item'(){
        FlowRouter.go('item');
    },
});

AutoForm.hooks({
    itemInsert: {
        onSuccess: function (formType, result) {
            // FlowRouter.go('item');
            Bert.alert('បានបញ្ចូល ដោយជោគជ័យ', 'success', "growl-bottom-right");
        },
        onError: function (formType, error) {
            Bert.alert(error.message, 'danger', "growl-bottom-right");
        },
    },
    itemUpdate: {
        onSuccess: function (formType, result) {
            FlowRouter.go('item');
            Bert.alert('បានកែប្រែ ដោយជោគជ័យ', 'success', "growl-bottom-right");
        },
        onError: function (formType, error) {
            Bert.alert(error.message, 'danger', "growl-bottom-right");
        },
    },
});