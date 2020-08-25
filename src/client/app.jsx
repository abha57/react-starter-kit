import React, { useState } from 'react';

import Table from './components/Table';

const App = () => {
  const [data, setData] = useState([]);
  const [approvals, setApprovals] = useState([]);
  const [rejects, setRejects] = useState(null);
  const onApprove = approvalData => {};
  return (
    <React.Fragment>
      {/* Dropzone */}
      <Table data={data} onApprove={onApprove} onReject={onReject} />
    </React.Fragment>
  );
};

export default App;
