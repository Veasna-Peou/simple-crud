export const Staff = new SimpleSchema({
    gender: {
        type: String,
        label: 'Staff',
        optional:true,
        autoform: {
            type: 'select2',
            options() {
                return [
                    {label: '(All)', value: ''},
                    {label: 'Male', value: 'Male'},
                    {label: 'Female', value: 'Female'}
                ]
            }
        }
    }
});

