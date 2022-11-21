import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import styleHome from './Home.module.css'
import avatar from '../Images/avatar.png'
import Dashboard from '../Dashboard/Dashboard'


export default function Home() {
    return (
        <>
            <div className={'d-flex' + ' ' + styleHome.page}>
                <div className={'bg-white p-20 position-relative' + ' ' + styleHome.sidebar}>
                    <h3 className={'position-relative text-center  mt-0'}>Ibrahim Nady</h3>
                    <ul className={''}>
                        <li>
                            <Link className={'  d-flex align-items-center fs-14 text-dark rad-6 p-10' + ' ' + styleHome.active} to="/Dashboard">
                                <i className="fa-solid fa-chart-simple fa-fw" />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={'  d-flex align-items-center fs-14 text-dark rad-6 p-10' + ' '} to="/Settings">
                                <i className="fa-solid fa-gear fa-fw" />
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={'  d-flex align-items-center fs-14 text-dark rad-6 p-10' + ' '} to="/Profile">
                                <i className="fa-solid fa-user fa-fw" />
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={'  d-flex align-items-center fs-14 text-dark rad-6 p-10' + ' '} to="/Projects">
                                <i className="fa-solid fa-diagram-project fa-fw" />
                                <span>Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={'  d-flex align-items-center fs-14 text-dark rad-6 p-10' + ' '} to="/Courses">
                                <i className="fa-solid fa-graduation-cap fa-fw" />
                                <span>Courses</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={'  d-flex align-items-center fs-14 text-dark rad-6 p-10' + ' '} to="/Friends">
                                <i className="fa-solid fa-user-group fa-fw" />
                                <span>Friends</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={'  d-flex align-items-center fs-14 text-dark rad-6 p-10' + ' '} to="/Files">
                                <i className="fa-solid fa-file fa-fw" />
                                <span>Files</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={'  d-flex align-items-center fs-14 text-dark rad-6 p-10' + ' '} to="/Plans">
                                <i className="fa-solid fa-layer-group fa-fw" />
                                <span>Plans</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={'w-100' + ' ' + styleHome.content}>
                    <div className={'bg-white p-15 between-flex' + ' ' + styleHome.head}>
                        <div className={'position-relative' + ' ' + styleHome.search}>
                            <input className='p-10' type="search" name='' id='' placeholder='Type a keyword' />
                        </div>
                        <div className={' d-flex align-items-center' + ' ' + styleHome.icons}>
                            <span className={'position-relative' + ' ' + styleHome.notification}>
                                <i className='fa-regular fa-bell fa-lg' />
                                <img className='' src={avatar} alt="" />
                            </span>
                        </div>
                    </div>
                    <div className=' position-relative'>
                        <Dashboard/> 
                    </div>
                </div>
            </div>
        </>
    )
}
