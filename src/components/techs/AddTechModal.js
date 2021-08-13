import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
    const [firstname, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const onSubmit = () => {
        if(firstname === '' || lastName === '') {
            M.toast( { html: 'Please enter the first and last name of the tech' })
        }
        else {
            console.log('all good');

            // Clear fields
            setFirstName('')
            setLastName('')
        }
    }

    return (
        <div id='add-tech-modal' className='modal'>
            <div className="modal-content">
                <h4>Enter new Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                        type="text" 
                        name="firstname" 
                        value={firstname} 
                        onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor="firstname" className="active">
                            First name
                        </label> 
                    </div>
                   
                </div>
                <div className="row">
                    <div className="input-field">
                        <input 
                        type="text" 
                        name="lastName" 
                        value={lastName} 
                        onChange={e => setLastName(e.target.value)}
                        />
                        <label htmlFor="lastName" className="active">
                            Last Name
                        </label> 
                    </div>
                   
                </div>
            </div>
            <div className="modal-footer">
                <a 
                    href="#" 
                    onClick={onSubmit} 
                    className="modal-close waves-effect blue waves-light btn">
                        Enter</a>
            </div>
        </div>
    )
}


export default AddTechModal
