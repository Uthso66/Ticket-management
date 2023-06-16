import './App.css';
import { useState  } from 'react';
import Table from './components/Table';
import Modal from './components/Modal'

function App() {
  
  const [modalOpen, setModalOpen] = useState(false);
  
  const [rows, setRows] = useState([
    { ticketTypes: 'Internet Issue', description: 'Internet not connecting or slow'},
    { ticketTypes: 'Printer Issue', description: 'Uneven color printer'}
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };


  return (
    <div className="App">
      <button id='ticketType' onClick={() => setModalOpen(true)} className="btn">
        Add Ticket Type
      </button>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
  
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
      <footer className='footer'>©2023 GroupM</footer>
    </div>
  );
}

export default App;