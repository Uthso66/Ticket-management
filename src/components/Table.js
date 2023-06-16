import {BsFillPencilFill, BsFillTrashFill} from 'react-icons/bs'
import './Table.css'

const Table = ({ rows, deleteRow , editRow}) => {
    return ( 
        
        <div className='table-wrapper'>

            <table className='table'>

                <thead>
                    <tr>

                        <th className='ticketTypes'>Ticket Types</th>
                        <th className='expand'>Description</th>
                        <th className='action2'>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        rows.map((row, idx) =>{

                            return <tr key= { idx }>
                                <td className='ticty'> { row.ticketTypes }</td>
                                <td className='expand'> { row.description } </td>
                                <td>
                                  <span className='actions'>
                                  <BsFillPencilFill
                                    className="edit-btn"
                                     onClick={() => editRow(idx)}
                                 />
                                 
                                    <BsFillTrashFill className="delete-btn"
                                                     onClick={() => deleteRow(idx)}
                                    />
                                  </span>
                                </td>
                            </tr>
                        })
                    }


                </tbody>
            </table>
        </div>
  
        );
}
 
export default Table;
