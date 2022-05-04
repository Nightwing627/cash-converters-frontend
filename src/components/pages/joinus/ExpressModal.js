import React, {useRef, useState, useEffect} from "react";
import Modal from 'react-modal'
import OutlinedInput from '../joinus/OutlinedInput'

export default function ExpressModal({ open, toggle}) {
    const buttonRef = useRef();
    const [coords, setCoords] = useState({x: -1, y: -1})
    const [isRippling, setIsRippling] = useState(false)
    const [errors, setErrors] = useState({})
    const [fields, setFields] = useState({})

    let emailRegExp = RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    )
    let phoneRegExp = RegExp(
        /^02[0-2,6-9](\s|-|)\d{3,4}(\s|-|)\d{3,4}$/
    )
        
    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true)
            setTimeout(() => setIsRippling(false), 300)
        } else setIsRippling(false)
    }, [coords])

    useEffect(() => {
        if (!isRippling) setCoords({x: -1, y: -1})
    }, [isRippling])

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })

        if (e.target.name === 'name') {
            if (e.target.value === '')
                setErrors({...errors, [e.target.name]: 'Please enter your name' })
            else setErrors({...errors, [e.target.name]: '' })
        }

        if (e.target.name === 'email') {
            if (e.target.value === '')
                setErrors({...errors, [e.target.name]: 'Please enter your email address' })
            else if (!emailRegExp.test(e.target.value))
                setErrors({...errors, [e.target.name]: 'Please enter a valid email address' })
            else setErrors({...errors, [e.target.name]: '' })
        }

        if (e.target.name === 'phoneNumber') {
            if (e.target.value === '')
                setErrors({...errors, [e.target.name]: 'Please enter a valid New Zealand phone number starts with (0)' })
            else if (!phoneRegExp.test(e.target.value))
                setErrors({...errors, [e.target.name]: 'Error' })
            else setErrors({...errors, [e.target.name]: '' })
        }
    }

    

    return (
        <Modal
            isOpen={open}
            onRequestClose={toggle}
            contentLabel="My dialog"
            className="express-modal modal-dialog-centered"
            overlayClassName="modal-overlay"
            closeTimeoutMS={500}
            ariaHideApp={false}
        > 
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title text-white">Express My Interest</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                            onClick={toggle}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form name="expressForm" autoComplete="chrome-off"  noValidate>
                        <div className="modal-body">
                            <div className="mb-3 form-item">
                                <OutlinedInput 
                                    name='name'
                                    label='Name'
                                    placeholder='Enter your name'
                                    onBlur={handleChange}
                                    errors={errors}
                                />
                            </div>
                            <div className="mb-3 form-item">
                                <OutlinedInput 
                                        name='email'
                                        label='Email'
                                        placeholder='Enter your email'
                                        onBlur={handleChange}
                                        errors={errors}
                                />
                            </div>
                            <div className="mb-3 form-item">
                                <OutlinedInput 
                                        name='phoneNumber'
                                        label='Phone Number'
                                        placeholder='Enter your phone number'
                                        onBlur={handleChange}
                                        errors={errors}
                                />
                            </div>
                        </div>
                    </form>

                    <div className="modal-footer">
                        <button
                            ref={buttonRef}
                            type="submit"
                            onMouseDown={e => {
                                const rect = e.target.getBoundingClientRect()
                                setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })

                            }}
                            className="btn blue-gradient btn-rounded btn-block ripple-parent"
                        >
                            Send Message
                            {isRippling ? (
                                <div 
                                    className='Ripple is-reppling'
                                    style={{
                                        left: coords.x,
                                        top: coords.y
                                     }} />
                            ) : (
                                ''
                            )}
                        </button>
                    </div>
                </div>
            
        </Modal>
    
    )
}