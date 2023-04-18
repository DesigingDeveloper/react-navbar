import React from 'react'
import { FaHospital } from 'react-icons/fa';
import './stylesheet/Dashboard.css';
import './stylesheet/header2.css';
import Box from './components/Box';
import { FaUsers, FaMoneyBillAlt, FaTrophy } from 'react-icons/fa';


const Dashboard = () =>
{
    return (
        <>
            <p className='header2'>
                <FaHospital size={ 46 } />
                <h1>Dashboard</h1>
            </p>
            <div>
                <Box title="Number of Patient Records" icon={ <FaHospital /> } number={ 25 } />
                <Box title="Number of Doctors in hospital" icon={ <FaUsers /> } number={ 1000 } />
                <Box title="Number of Appointments" icon={ <FaMoneyBillAlt /> } number={ 50000 } />
                <Box title="Number of permissions granted" icon={ <FaTrophy /> } number={ 10 } />
            </div>
        </>
    )
}

export default Dashboard

