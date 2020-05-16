import React from 'react';

const List = props => {
  const { headers, tableData } = props;

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {headers.length > 0 &&
              headers.map(header => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 &&
            tableData.map(tableRow => (
              <tr key={tableRow.restaurantID}>
                {headers.map(header => (
                  <td
                    key={`${tableRow.restaurantID}-${tableRow.restaurantName}`}
                  >
                    {tableRow[header]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
