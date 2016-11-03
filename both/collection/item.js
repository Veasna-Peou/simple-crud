export const Item = new Mongo.Collection('item');

let schema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    price: {
        type: Number,
        label: 'Price',
        decimal:true
    }
});

Item.attachSchema(schema);

