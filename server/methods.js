import moment from 'moment';
import {Staff} from '../both/collection/staff';
import {Contract} from '../both/collection/contract';

Meteor.methods({
    testing(param){
        Meteor._sleepForMs(2000);
        return `Hi ${param}!`;
    },
    staffList(param){
        Meteor._sleepForMs(2000);

        let data = Staff.find(param).fetch();
        // Staff.find({gender: 'M'}).fetch()

        return data;
    },
    contractList: function (param) {
        Meteor._sleepForMs(2000);

        let selector = {
            startDate: {
                $gte: moment(param.fromDate).toDate(), $lte: moment(param.toDate).toDate()
            }
        };

        let data = Contract.aggregate([
            {
                $match: selector
            },
            {
                $lookup: {
                    from: "staff",
                    localField: "staffId",
                    foreignField: "_id",
                    as: "staffDoc"
                }
            },
            {
                $unwind: "$staffDoc"
            },
        ]);
        
        if (data.length > 0) {
            return data;
        } else {
            return [{_id: 'No data'}];
        }
    }
});
