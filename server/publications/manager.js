import {Manager} from '../../both/collection/manager';

Meteor.publish('manager', function (managerId) {
    let data = Manager.find({_id: managerId});

    return data;
});
