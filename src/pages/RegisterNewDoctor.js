import React from 'react';
import { useState } from 'react';
import { FaHospital } from 'react-icons/fa'
import '../pages/stylesheet/record.css'

const RegisterNewDoctor = () =>
{

    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        // do something with name and email values
    };

    return (
        <>
            <div className='header2'>
                <FaHospital size={ 46 } />
                <h1>Register New Doctor</h1>
            </div>

            <div className='container1'>
                <div className='title'>
                    <h2>Create New Record</h2>
                </div>


                <div className='container2 grid-container'>
                    <form onSubmit={ handleSubmit }>
                        <div>
                            <div>
                                <h2> General Information</h2>
                            </div>
                            <div>
                                <label>
                                    IC
                                    <input type="text" placeholder='e.g 0xfc12344578' value={ name } onChange={ ( e ) => setName( e.target.value ) } />
                                </label>

                                <label>
                                    Full Name
                                    <input type="email" value={ email } onChange={ ( e ) => setEmail( e.target.value ) } />
                                </label>

                                <label>
                                    Phone
                                    <input type="email" value={ email } onChange={ ( e ) => setEmail( e.target.value ) } />
                                </label>
                            </div>

                            <div>
                                <label>
                                    IC
                                    <input type="text" value={ name } onChange={ ( e ) => setName( e.target.value ) } />
                                </label>

                                <label>
                                    Full Name
                                    <input type="email" value={ email } onChange={ ( e ) => setEmail( e.target.value ) } />
                                </label>
                            </div>
                        </div>

                        <div>

                            <div>
                                <h2> Education Information</h2>
                            </div>
                            <div>
                                <label>
                                    IC
                                    <input type="text" value={ name } onChange={ ( e ) => setName( e.target.value ) } />
                                </label>

                                <label>
                                    Full Name
                                    <input type="email" value={ email } onChange={ ( e ) => setEmail( e.target.value ) } />
                                </label>
                            </div>

                        </div>

                        <button type="submit">Create</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterNewDoctor