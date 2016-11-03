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
    contractList(param){
        Meteor._sleepForMs(2000);
        let data = Contract.find({
            startDate: {
                $gte: moment(param.fromDate).toDate(), $lte: moment(param.toDate).toDate()
            }
        });
        // {startDate :..., endDate:......}

        let tmpData = [];
        data.forEach(function (o) {
            o.staffDoc = Staff.findOne(o.staffId);
            tmpData.push(o);
        });
        
        return tmpData;
    }
});
