export const Staff = new Mongo.Collection('staff');

let schema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    gender: {
        type: String,
        label: 'Gender',
        autoform: {
            type: 'select2',
            options() {
                return [
                    {label: '(Select One)', value: ''},
                    {label: 'Male', value: 'Male'},
                    {label: 'Female', value: 'Female'}
                ]
            }
        }
    },
    dob: {
        type: Date,
        label: 'Date of Birth',
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
    address: {
        type: String,
        label: 'Address'
    },
    phone: {
        type: String,
        label: 'Phone number',
        optional: true
    },

    email: {
        type: String,
        label: 'Email'
    }
});

Staff.attachSchema(schema);

