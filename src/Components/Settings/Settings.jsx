import React, { useState } from 'react'
import styleSetting from './Settings.module.css'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Settings() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function creat_email() {
        let first_name = document.getElementById("first_name").value;
        let last_name = document.getElementById("last_name").value;
        let email = first_name + last_name;
        document.getElementById("email").innerHTML = email + "@gmail.com"
        clearInput()
    }
    function clearInput() {
        document.getElementById("first_name").value = "";
        document.getElementById("last_name").value = "";
    }

    return (
        <>
            <h1 className={'' + ' ' + styleSetting.headName}> <i class="fa-solid fa-screwdriver-wrench"/> Settings <i class="fa-solid fa-screwdriver-wrench"/></h1>
            <div className={'gap-20' + ' ' + styleSetting.container}>
                {/* Start Site Control */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <h2 className='mt-0 mb-10'>Site Control</h2>
                    <p className='mt-0 mb-20 c-gray fs-15'>Control The Website If There Is Maintanence</p>
                    <div className=' mb-15 between-flex'>
                        <div>
                            <span>WebSite Control</span>
                            <p className={' c-gray mt-1 mb-0 fs-13'}>Open/Close Website And Type The Reason</p>
                        </div>
                        <div>
                            <Form.Check className={"fs-2 "} type="switch" id="custom-switch" label="" />
                        </div>
                    </div>
                    <textarea style={{ height: '150px' }} className={' p-10 rad-10 text-primary  '} placeholder='Close Message Content'></textarea>
                </div>
                {/* End Site Control */}
                {/* Start General Info */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <h2 className='mt-0 mb-10'>General Info</h2>
                    <p className='mt-0 mb-20 c-gray fs-15'>General Information About Your Account</p>
                    <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3" >
                        <Form.Control type="text" placeholder="" id="first_name" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3" >
                        <Form.Control type="text" placeholder="" id="last_name" />
                    </FloatingLabel>
                    <div className='d-flex between-flex'>
                        {/* <FloatingLabel controlId="floatingInput" label="@gmail.com" className="mb-3 w-75 " >
                            <Form.Control disabled type="email" placeholder="" id="email" />
                        </FloatingLabel> */}
                        <span id="email" className={'fs-3 fw-bold w-100 ' + ' ' + styleSetting.displayEmail} ></span>
                        <button onClick={creat_email} className='btn btn-outline-primary fs-4 mb-3'>Change</button>
                    </div>
                </div>
                {/* End General Info */}
                {/* Start Security Info*/}
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <h2 className='mt-0 mb-10'>Security Info</h2>
                    <p className='mt-0 mb-20 c-gray fs-15'>Security Information About Your Account</p>
                    <div className='d-flex between-flex  border-bottom pb-3'>
                        <div>
                            <span className='d-block'>Password</span>
                            <span className=' c-gray fs-13'>Last Change On 22/8/2022</span>
                        </div>
                        <div>
                            <Button variant="primary" onClick={handleShow}> Change </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Change Your Password</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <FloatingLabel controlId="floatingInput" label="Old Password" className="mb-3" >
                                            <Form.Control type="password" placeholder="name@example.com" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingInput" label="New Password" className="mb-3" >
                                            <Form.Control type="password" placeholder="name@example.com" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingInput" label="New Password" className="mb-3" >
                                            <Form.Control type="password" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                    <div className='d-flex between-flex  border-bottom pb-3 mt-3'>
                        <div>
                            <span className='d-block'>Two-Factor Authenication</span>
                            <span className=' c-gray fs-13'>Enable/Disable The Feature</span>
                        </div>
                        <div>
                            <Form.Check className={"fs-2 "} type="switch" id="custom-switch" label="" />
                        </div>
                    </div>
                    <div className='d-flex between-flex  border-bottom pb-3 pt-3'>
                        <div>
                            <span className='d-block'>Devices</span>
                            <span className=' c-gray fs-13'>Check The Login Devices List</span>
                        </div>
                        <div>
                            {/* <button className='btn btn-outline-info'>Devices</button> */}
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"> Devices </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <div className='d-flex between-flex'>
                                        <Dropdown.Item href="#/action-2">PC</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"><i className="fa-solid fa-trash"></i></Dropdown.Item>
                                    </div>
                                    <div className='d-flex between-flex'>
                                        <Dropdown.Item href="#/action-2">Samsung</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"><i className="fa-solid fa-trash"></i></Dropdown.Item>
                                    </div>
                                    <div className='d-flex between-flex'>
                                        <Dropdown.Item href="#/action-2">Iphone</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"><i className="fa-solid fa-trash"></i></Dropdown.Item>
                                    </div>

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                {/* End Security Info*/}
                {/* Start Social Info*/}
                <div className={'bg-white p-20 rad-10 txt-c-mobile' + ' ' + styleSetting.social_box}>
                    <h2 className='mt-0 mb-10'>Social Info</h2>
                    <p className='mt-0 mb-20 c-gray fs-15'>Social Media Information</p>
                    <div className='d-flex center-flex mb-15'>
                        <i className={'fa-brands fa-twitter center-flex c-gray' + ' ' + styleSetting.twitter} />
                        <input className='w-100 ' type="text" placeholder='Twitter Username' />
                    </div>
                    <div className='d-flex center-flex mb-15'>
                        <i className={'fa-brands fa-facebook center-flex c-gray' + ' ' + styleSetting.facebook} />
                        <input className='w-100 ' type="text" placeholder='facebook Username' />
                    </div>
                    <div className='d-flex center-flex mb-15'>
                        <i className={'fa-brands fa-instagram center-flex c-gray' + ' ' + styleSetting.instagram} />
                        <input className='w-100 ' type="text" placeholder='instagram Username' />
                    </div>
                    <div className='d-flex center-flex mb-15'>
                        <i className={'fa-brands fa-linkedin center-flex c-gray' + ' ' + styleSetting.linkedin} />
                        <input className='w-100 ' type="text" placeholder='linkedin Username' />
                    </div>
                    <div className='d-flex center-flex mb-15'>
                        <i className={'fa-brands fa-github center-flex c-gray' + ' ' + styleSetting.github} />
                        <input className='w-100 ' type="text" placeholder='github Username' />
                    </div>
                </div>
                {/* End Social Info*/}
                {/* Start Widgets Control */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <h2 className='mt-0 mb-10'>Widgets Control</h2>
                    <p className='mt-0 mb-20 c-gray fs-15'>Show/hide Widgets</p>
                    <div className=' d-flex mb-3 '>
                        <Form.Check id="QuickDraft" aria-label="option 1" />
                        <label for="QuickDraft" className='ms-3'>Quick Draft</label>
                    </div>
                    <div className=' d-flex mb-3 '>
                        <Form.Check id="YearlyTargets" aria-label="option 2" />
                        <label for="YearlyTargets" className='ms-3'>Yearly Targets</label>
                    </div>
                    <div className=' d-flex mb-3 '>
                        <Form.Check id="TicketsStatistics" aria-label="option 3" />
                        <label for="TicketsStatistics" className='ms-3'>Tickets Statistics</label>
                    </div>
                    <div className=' d-flex mb-3 '>
                        <Form.Check id="LatestNews" aria-label="option 4" />
                        <label for="LatestNews" className='ms-3'>Latest News</label>
                    </div>
                    <div className=' d-flex mb-3 '>
                        <Form.Check id="LatestEvents" aria-label="option 5" />
                        <label for="LatestEvents" className='ms-3'>Latest Events</label>
                    </div>
                    <div className=' d-flex mb-3 '>
                        <Form.Check id="TopSearchItems" aria-label="option 6" />
                        <label for="TopSearchItems" className='ms-3'>Top Search Items</label>
                    </div>
                </div>
                {/* End Widgets Control */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <h2 className='mt-0 mb-10'>Backup Manager</h2>
                    <p className='mt-0 mb-20 c-gray fs-15'>Control Backup Time And Location</p>
                    <div className=' d-flex mb-3 '>
                        <input class="form-check-input" type="radio" name="data" id="Daily" />
                        <label for="Daily" className='ms-3'>Daily</label>
                    </div>
                    <div className=' d-flex mb-3 '>
                        <input class="form-check-input" type="radio" name="data" id="Weekly" />
                        <label for="Weekly" className='ms-3'>Weekly</label>
                    </div>
                    <div className=' d-flex mb-3 border-bottom pb-4'>
                        <input class="form-check-input" type="radio" name="data" id="Monthly" />
                        <label for="Monthly" className='ms-3'>Monthly</label>
                    </div>
                    <div className={' gap-20'+' '+styleSetting.container}>
                        
                        <div className={'d-block text-center  p-3 rad-10' + ' ' + styleSetting.server}>
                            <input className="form-check-input d-block m-auto " type="radio" name="Server" id="Megaman" />
                            <label for="Megaman" className='  fw-bold'>Megaman <br /> <i className="fa-solid fa-server" /></label>
                        </div>
                        <div className={'d-block text-center  p-3 rad-10' + ' ' + styleSetting.server}>
                            <input className="form-check-input d-block m-auto " type="radio" name="Server" id="Tigon" />
                            <label for="Tigon" className='  fw-bold'>Tigon <br /> <i className="fa-solid fa-server" /></label>
                        </div>
                        <div className={'d-block text-center  p-3 rad-10' + ' ' + styleSetting.server}>
                            <input className="form-check-input  d-block m-auto" type="radio" name="Server" id="Sigma" />
                            <label for="Sigma" className='  fw-bold'>Sigma<br /> <i className="fa-solid fa-server" /></label>
                        </div>
                        <div className={'d-block text-center  p-3 rad-10' + ' ' + styleSetting.server_nearFull}>
                            <input  className="form-check-input  d-block m-auto" type="radio" name="Server" id="Company" />
                            <label for="Company" className='  fw-bold'>Company<br /> <i className="fa-solid fa-server" /></label>
                        </div>
                        <div className={'d-block text-center  p-3 rad-10' + ' ' + styleSetting.server_full}>
                            <input disabled className="form-check-input  d-block m-auto" type="radio" name="Server" id="Cloud" />
                            <label for="Cloud" className='  fw-bold'>Cloud<br /> <i className="fa-solid fa-server" /></label>
                        </div>
                    
                    </div>
                </div>
                
            </div>
        </>
    )
}
