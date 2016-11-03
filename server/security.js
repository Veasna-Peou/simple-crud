import {Staff} from '../both/collection/staff';
import {Item} from '../both/collection/item';
import {Manager} from '../both/collection/manager';
import {Contract} from '../both/collection/contract';

Staff.permit(['insert']).allowInClientCode();

Item.permit(['insert', 'update']).allowInClientCode();

Manager.permit(['insert']).allowInClientCode();

Contract.permit(['insert', 'update']).allowInClientCode();
