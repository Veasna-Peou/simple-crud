import {Staff} from '../collection/staff';

TabularTables = {};

TabularTables.Staff = new Tabular.Table({
    name: "Staff",
    collection: Staff,
    columns: [
        {data: "_id", title: "កូដសម្គាល់"},
        {data: "name", title: "ឈ្មោះ"},
        {data: "gender", title: "ភេទ"},
        {data: "dob", title: "Date of Birth"},
        {data: "address", title: "អាស័យដ្ឋាន"},
        {data: "phone", title: "លេខទូរស័ព្ទ"},
        {data: "email", title: "Email"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.staffAction
        }
    ]

});