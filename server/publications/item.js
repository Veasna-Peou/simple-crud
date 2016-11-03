import {Item} from '../../both/collection/item';

Meteor.publish('item', function (itemId) {
    let data = Item.find({_id: itemId});

    return data;
});
/**
 * Created by veasna on 8/24/16.
 */
