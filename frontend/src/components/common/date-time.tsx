import React from "react";
import moment from 'moment';
import {DatePicker} from 'antd';

interface IDateInput {
    getDate(values: any): void
}

const DataTime = (props:IDateInput) => {
    const getDate = (date: any) => {
        const time = moment(date).format('YYYY-MM-DD HH:mm:ss');
        props.getDate(time)
    };

    return (
        <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            showTime={{defaultValue: moment('00:00:00', 'HH:mm:ss')}}
            onChange={getDate}
        />
    )
};

export default DataTime
