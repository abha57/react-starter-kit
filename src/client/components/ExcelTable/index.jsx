import React, { useState, useEffect, useRef, createRef } from 'react';
import Modal from 'react-modal';
import Table from './../Table';
import './style.scss';

Modal.setAppElement('#modal');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const ExcelTable = props => {
  const { data, onAction, className } = props;
  const [selectedRows, setSelectedRows] = useState([]);
  const [rejectRow, setRejectRow] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [checkboxRefs, setCheckboxRefs] = useState([]);
  const approve = approvalRowData => () => {
    selectedRows.push(approvalRowData);
    setSelectedRows([...selectedRows]);
    setModalOpen(true);
  };
  const approveMulitple = () => {
    setModalOpen(true);
  };
  const onCheckBoxChange = event => {
    event.persist();
    if (event.target.checked) {
      selectedRows.push(
        data.find(entry => entry.earningId === Number(event.target.value))
      );
    } else {
      const rowIndex = data.findIndex(
        entry => entry.earningId === Number(event.target.value)
      );
      selectedRows.splice(rowIndex, 1);
    }

    setSelectedRows([...selectedRows]);
  };
  useEffect(() => {
    () => {
      setSelectedRows([]);
      setRejectRow([]);
      setModalOpen(false);
      setTextInput('');
    };
  });
  useEffect(() => {
    if (data.length > 0) {
      setCheckboxRefs(newRef => {
        return Array(data.length)
          .fill()
          .map((_, i) => newRef[i] || createRef());
      });
    }
  }, [data]);
  const onRejectRow = row => () => {
    rejectRow.push(row);
    setRejectRow(rejectRow);
    setModalOpen(true);
  };
  const resetAllCheckboxes = () => {
    checkboxRefs.forEach(ref => {
      ref.current.checked = false;
    });
    setCheckboxRefs(checkboxRefs);
  };
  const onOk = data => {
    if (selectedRows.length > 0) {
      onAction(selectedRows);
    } else {
      rejectRow[0] = {
        ...rejectRow[0],
        remark: textInput
      };
      onAction(rejectRow);
    }
    setModalOpen(false);
    setTextInput('');
    setRejectRow([]);
    setSelectedRows([]);
    resetAllCheckboxes();
  };
  const isButtonDisabled = () => {
    const remark = Boolean(rejectRow.length && !textInput);
    return remark;
  };
  const renderData = data => {
    return data.map((row, index) => (
      <tr key={row.earningId}>
        <td>
          <input
            ref={checkboxRefs[index]}
            type="checkbox"
            onChange={onCheckBoxChange}
            value={row.earningId}
          />
        </td>
        <td>{row.earningId}</td>
        <td>{row.mobile}</td>
        <td>{row.earning}</td>
        {index === 0 && selectedRows.length > 0 && (
          <td rowSpan={data.length}>
            <button className="button" onClick={approveMulitple}>
              Approve All
            </button>
          </td>
        )}
        {selectedRows.length === 0 && (
          <td className="actions-column">
            <button className="button" onClick={approve(row)}>
              Approve
            </button>
            <button className="button" onClick={onRejectRow(row)}>
              Reject
            </button>
          </td>
        )}

        {/* {selectedRows.length === 0 && (
          <td>
            <button onClick={approve(row)}>Approve</button>
          </td>
        )}

        <td>
          {selectedRows.length === 0 ? (
            <button onClick={onRejectRow(row)}>Reject</button>
          ) : null}
        </td> */}
      </tr>
    ));
  };
  return (
    <>
      <table className={`${className} table`}>
        <thead className="table-header">
          <tr>
            <th> Select multiple</th>
            <th>Earning Id</th>
            <th>Mobile</th>

            <th>Earing</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            renderData(data)
          ) : (
            <tr>
              <th colSpan={5}> No records found.</th>
            </tr>
          )}
        </tbody>
      </table>
      <Modal
        isOpen={modalOpen}
        contentLabel="Please confirm your action"
        onRequestClose={onOk}
        styles={customStyles}
      >
        {selectedRows.length > 0 && <Table data={selectedRows} />}
        {rejectRow.length > 0 && (
          <>
            <Table data={rejectRow} />
            <label htmlFor="remark">
              {' '}
              Remark
              <textarea
                id="remark"
                value={textInput}
                onChange={e => setTextInput(e.target.value)}
              ></textarea>
            </label>
          </>
        )}
        <div style={{ marinTop: '20px' }}>
          <button
            className="button"
            disabled={isButtonDisabled()}
            onClick={onOk}
          >
            Ok
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ExcelTable;
