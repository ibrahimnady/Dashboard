import React from 'react'
import stylePlans from './Plans.module.css'

export default function Plans() {
    return (
        <>
            <h1 className={'' + ' ' + stylePlans.headName}> <i className="fa-solid fa-cart-shopping" /> Plans <i className="fa-solid fa-cart-shopping" /></h1>
            <div className={'gap-20' + ' ' + stylePlans.container}>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div className={' bg-success text-center fs-1 p-50 text-white fw-bolder rad-10'}>
                        <p>Free</p>
                        <p>0.00 $</p>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Access All Text Lessons</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Access All Videos Lessons</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Appear On Leadboard</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-xmark mt-1 me-2 text-danger" />
                            <p className='m-0'>Browse Content Without Ads</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-xmark mt-1 me-2 text-danger" />
                            <p className='m-0'>Get Daily Prizes</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-xmark mt-1 me-2 text-danger" />
                            <p className='m-0'>Earn Certificate</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-xmark mt-1 me-2 text-danger" />
                            <p className='m-0'>1 GB Space For Hosting Files</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-xmark mt-1 me-2 text-danger" />
                            <p className='m-0'>Access Badge System</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-xmark mt-1 me-2 text-danger" />
                            <p className='m-0'>Access All Assignments</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <button className='btn btn-success'>Join</button>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div className={' bg-primary text-center fs-1 p-50 text-white fw-bolder rad-10'}>
                        <p>Basic</p>
                        <p>7.99 $</p>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Access All Text Lessons</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Access All Videos Lessons</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Appear On Leadboard</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Browse Content Without Ads</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Get Daily Prizes</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-xmark mt-1 me-2 text-danger" />
                            <p className='m-0'>Earn Certificate</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-xmark mt-1 me-2 text-danger" />
                            <p className='m-0'>1 GB Space For Hosting Files</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-xmark mt-1 me-2 text-danger" />
                            <p className='m-0'>Access Badge System</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-xmark mt-1 me-2 text-danger" />
                            <p className='m-0'>Access All Assignments</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <button className='btn btn-primary'>Join</button>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div className={' bg-warning text-center fs-1 p-50 text-white fw-bolder rad-10'}>
                        <p>Pro</p>
                        <p>12.99 $</p>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Access All Text Lessons</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Access All Videos Lessons</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Appear On Leadboard</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Browse Content Without Ads</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Get Daily Prizes</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Earn Certificate</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'> 
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>1 GB Space For Hosting Files</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-xmark mt-1 me-2 text-danger" />
                            <p className='m-0'>Access Badge System</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-xmark mt-1 me-2 text-danger" />
                            <p className='m-0'>Access All Assignments</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <button className='btn btn-warning text-white'>Join</button>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div className={' bg-danger text-center fs-1 p-50 text-white fw-bolder rad-10'}>
                        <p>Premieum</p>
                        <p>17.99 $</p>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Access All Text Lessons</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Access All Videos Lessons</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Appear On Leadboard</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Browse Content Without Ads</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Get Daily Prizes</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Earn Certificate</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>1 GB Space For Hosting Files</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Access Badge System</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='d-flex between-flex border-solid-bottom p-3'>
                        <div className='d-flex'>
                            <i className="fa-solid fa-check mt-1 me-2 text-success " />
                            <p className='m-0'>Access All Assignments</p>
                        </div>
                        <div>
                            <i className="c-gray fa-solid fa-circle-info" />
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <button className='btn btn-danger'>Join</button>
                    </div>
                </div>
            </div>
        </>
    )
}
