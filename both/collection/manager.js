export const Manager = new Mongo.Collection('manager');

let schema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    gender: {
        type: String,
        label: 'Gender'
    },
    position: {
        type: String,
        label: 'Position'
    },
    salary: {
        type: Number,
        label: 'Salary',
        decimal:true
    }
});

Manager.attachSchema(schema);

