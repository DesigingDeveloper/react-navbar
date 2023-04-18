import React from 'react';
import { useState } from 'react';
import { FaHospital } from 'react-icons/fa'


const MakeAppointment = () =>
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
            <p className='header2'>
                <FaHospital size={ 46 } />
                <h1>Register New Doctor</h1>
            </p>

            <div>
                <h2>Create New Record</h2>
            </div>

            <form onSubmit={ handleSubmit }>
                <div>
                    <div>
                        <h2> General Information</h2>
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

        </>
    )
}

export default MakeAppointment