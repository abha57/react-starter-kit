import React, {useState} from 'react';
import Modal from 'react-modal';

const Table = (props) => {
    const { data, onApprove, onReject } = props;
    const [rejectSelected, setRejectSeleted] = useState(false);
    const approve = (approvalRowData) => () => {
        onApprove(approvalRowData);
    };
    const renderData = (data) => {
        {}
        return (
            
            data.map(row) => <trow>
        <td>{row.mobile}</td>
        <td>{row.earningId}</td>
        <td>{row.earning}</td>
        <td>
        <button onClick={approve(row)}>Approve</button>
         <button onClick={onReject}>Reject</button>
        </td>
        </trow>)
    }
    return (
        <table>
        
        <thead>
        <th>Mobile</th>
        <th>Earning Id</th>
        <th>Earing</th>
        <th>Actions</th>
        </thead>
        <tbody>
        {data.length > 0 ? renderData(data) : (<trow colspan={4}>No records found.</trow>)}
        </tbody>
        </table>
    )
};

export default Table;