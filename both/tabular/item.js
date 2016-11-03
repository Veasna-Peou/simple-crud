import {Item} from '../collection/item';

TabularTables = {};

TabularTables.Item = new Tabular.Table({
    name: "Item",
    collection: Item,
    columns: [
        {data: "_id", title: "កូដសម្គាល់"},
        {data: "name", title: "ឈ្មោះ"},
        {data: "price", title: "តម្លៃ"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.itemAction
        }
    ]

});