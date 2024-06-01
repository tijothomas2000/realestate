import React from 'react'
import './Layout.scss';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="layout">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}
