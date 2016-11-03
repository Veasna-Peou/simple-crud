import  {Staff} from './staff';

export const Contract = new Mongo.Collection('contract');

let schema = new SimpleSchema({
    staffId: {
        type: String,
        label: 'Staff',
        autoform: {
            type: 'select',
            options() {
                let list = [];
                let staff = Staff.find();
                staff.forEach(function (o) {
                    let label = `${o._id} : ${o.name}`;
                    list.push({label: label, value: o._id})
                });

                return list;
            }
        }
    },
    startDate: {
        type: Date,
        label: 'Start Date',
        autoform: {
            type: 'bootstrap-datetimepicker',
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'MMM/DD/YYYY',
                    pickTime: false
                }
            }
        }
    },
    endDate: {
        type: Date,
        label: 'End Date',
        autoform: {
            type: 'bootstrap-datetimepicker',
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'MMM/DD/YYYY',
                    pickTime: false
                }
            }
        }
    },
    type: {
        type: String,
        label: 'Type',
        autoform: {
            type: 'select',
            options() {
                return [
                    {label:"Probation", value:"probation"},
                    {label:"Contract", value:"contract"},
                    {label:"Permanent", value:"permanent"}
                ]
            }
        }
    },
    position: {
        type: String,
        label: 'Type',
        autoform: {
            type: 'select',
            options() {
                return [
                    {label:"Admin", value:"admin"},
                    {label:"Manager", value:"manager"},
                    {label:"Staff", value:"staff"}
                ]
            }
        }
    },
    salary: {
        type: Number,
        label: 'Salary'
    },
});

Contract.attachSchema(schema);

