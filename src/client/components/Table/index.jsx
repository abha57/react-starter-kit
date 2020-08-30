import React from 'react';
import './style.scss';

const Table = props => {
  const { data } = props;

  return (
    <table className="table">
      <thead className="table-header">
        <tr>
          <th>Mobile</th>
          <th>Earning Id</th>
          <th>Earning</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, index) => (
            <tr key={row.earningId}>
              <td>{row.mobile}</td>
              <td>{row.earningId}</td>
              <td>{row.earning}</td>
            </tr>
          ))
        ) : (
          <tr>
            <th colSpan={3}> No records found.</th>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default Table;
