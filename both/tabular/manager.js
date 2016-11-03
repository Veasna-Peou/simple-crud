import {Manager} from '../collection/manager';

TabularTables = {};

TabularTables.Manager = new Tabular.Table({
    name: "Manager",
    collection: Manager,
    columns: [
        {data: "_id", title: " ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "position", title: "Position"},
        {data: "salary", title: "Salary"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.managerAction
        }
    ]

});