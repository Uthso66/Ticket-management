import './Modal.css';
import { useState } from "react";


const Modal = ({closeModal, onSubmit, defaultValue}) => {

  let [submitString, setSubmitString] = useState('')

  const [formState, setFormState] = useState(
    defaultValue || {
      ticketTypes: "",
      description: "",
    }
  );

      const [errors, setErrors] = useState('')
      const validateForm = () => {
        if (formState.ticketTypes) {
          setErrors("");
          return true;
        } else {
          let errorFields = [];
          for (const [key, value] of Object.entries(formState)) {
            if (!value) {
              errorFields.push(key);
            }
          }
          setErrors(errorFields.join(", "));
         
          return false;
        }
      };

    const handleTicketChange = (e) => {
        setFormState({
            ...formState,
            ticketTypes: e.target.value,
        });
    }

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };
    

      const handleSubmit = (e) => {
        if (!validateForm()) return e.preventDefault();
        e.preventDefault();
    
        onSubmit(formState);
    
        closeModal();
      };

    return ( 
        <div className='modal-container'>

            <div className='modal'>
                
                <form action="">

                    <div className='form-group'>

                        <label htmlFor="ticketTypes">Ticket Types:</label>
                        <input name='ticketTtypes' value={formState.ticketTypes} onChange={handleTicketChange}/>

                    </div>
                    <div className='form-group'>

                        <label htmlFor="description">Description:</label>
                        <textarea name='description' value={formState.description} onChange={handleChange}/>

                    </div>
                    {errors && <div className="error">{`Please include Ticket types.`}</div>}
                    <div className='cb'>
                    <button type='cancel' className='cnl' onClick={(e)=> {
            
                      if(e.target.className === 'cnl') closeModal();
                      }}>
                      Cancel
                    </button>

                    <button type='submit' className='btn' onClick={handleSubmit}>
                    Submit
                    </button>
                    </div>
                    
                </form>
            </div>
        </div>
     );
}

export default Modal;