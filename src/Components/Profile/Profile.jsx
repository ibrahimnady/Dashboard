import React, { useState } from 'react'
import styleProfile from './Profile.module.css'
import avatar from '../Images/avatar.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import activity_01 from '../Images/activity-01 (1).png'
import activity_02 from '../Images/activity-02 (1).png'
import activity_03 from '../Images/activity-03.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function Profile() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const now = 60;
    const html = 100;
    return (
        <>
            <h1 className={'' + ' ' + styleProfile.headName}> <i class="fa-solid fa-user" /> Profile <i class="fa-solid fa-user" /></h1>
            <div className={'gap-20' + ' ' + styleProfile.container}>
                {/* Start Profile Detalis */}
                <div className={'bg-white  p-20 rad-10 txt-c-mobile mb-3' + ' ' + styleProfile.profile}>
                    <div className={'p-20 text-center ' + ' ' + styleProfile.avatar_box}>
                        <img className='mb-2 ' src={avatar} alt="" />
                        <p className=' fw-bolder m-0'>Ibrahim Nady</p>
                        <span className=' c-gray fs-15 '>Level 40</span>
                        <ProgressBar className='' animated now={now} label={`${now}%`} />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning " />
                        <span className='c-gray fs-15 d-block'>450 Ratings</span>
                    </div>
                    <div className={' ' + ' ' + styleProfile.info_box}>
                        <p className='ms-3 fw-bold'>General Information</p>
                        <div className={'ps-5 mb-3 ' + ' ' + styleProfile.info}>
                            <p className='c-gray'>Full Name : </p>
                            <input className={'' + ' ' + styleProfile.info_input} type="text" value='Ibrahim Nady' placeholder='' />
                            <p className='c-gray '>Gender :</p>
                            <input className={'' + ' ' + styleProfile.info_input} type="text" value='Male' placeholder='' />
                            <p className=' c-gray '>Country :</p>
                            <input className={'' + ' ' + styleProfile.info_input} type="text" value='Egypt' placeholder='' />
                            <Form.Check className='' type="switch" id="custom-switch" label="" />
                        </div>
                        <p className='ms-3 fw-bold'>Personal Information</p>
                        <div className={'ps-5 mb-3 ' + ' ' + styleProfile.info}>
                            <p className='c-gray'>Email : </p>
                            <input className={'' + ' ' + styleProfile.info_input} type="email" value='IbrahimNady@gmail.com' placeholder='' />
                            <p className=' c-gray'>Phone :</p>
                            <input className={'' + ' ' + styleProfile.info_input} type="number" value='01151262332' placeholder='' />
                            <p className='  c-gray'>Date Of Birth :</p>
                            <input className={'' + ' ' + styleProfile.info_input} type="text" value='23/7/1998' placeholder='' />
                            <Form.Check className='' type="switch" id="custom-switch" label="" />
                        </div>
                        <p className='ms-3 fw-bold'>Job Information</p>
                        <div className={'ps-5 ' + ' ' + styleProfile.info}>
                            <p className='c-gray'>Title : </p>
                            <input className={'' + ' ' + styleProfile.info_input} type="text" value='Front-End Developer' placeholder='' />
                            <p className=' c-gray'>Languague :</p>
                            <input className={'' + ' ' + styleProfile.info_input} type="text" value='Arabic & English' placeholder='' />
                            <p className='  c-gray'>Year Of Experience :</p>
                            <input className={'' + ' ' + styleProfile.info_input} type="text" value='+15' placeholder='' />
                            <Form.Check className='' type="switch" id="custom-switch" label="" />
                        </div>
                    </div>
                </div>
                {/* End Profile Detalis */}
                {/* Start Skill  */}
                <div className={' gap-20   rad-10 txt-c-mobile mb-3' + ' ' + styleProfile.skill}>
                    <div className='bg-white gap-20  p-20 rad-10 txt-c-mobile mb-3'>
                        <h2 className='mt-0 mb-10 m-auto '>My Skills  </h2>
                        <p className='mt-0 mb-20 c-gray fs-15'>Complete Skills List</p>
                        {/* <button className='btn btn-primary'><i className=" fa-solid fa-square-plus " /></button> */}
                        <Button className='mb-3 ' variant="primary" onClick={handleShow}>Add a New Skill</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>New Skill</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <FloatingLabel controlId="floatingInput" label="New Skill" className="mb-3">
                                        <Form.Control type="text" placeholder="name@example.com" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingInput" label="Rate Skill" className="mb-3">
                                        <Form.Control type="text" placeholder="name@example.com" />
                                    </FloatingLabel>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Close </Button>
                                <Button variant="primary" onClick={handleClose}> Save Changes </Button>
                            </Modal.Footer>
                        </Modal>
                        <div className={'' + ' ' + styleProfile.skill_info}>
                            <p className='m-0 fw-bold'>HTML</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>CSS</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>SASS</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>JAVASCRIPT</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>REACT</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>ANGULAR</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>BOOTSTRAP</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>REACT-STRAP</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>NODE.JS</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>MONGO DB</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>SQL</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>GRAPHIC DESGINER</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>PHOTOSHOP</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>ILLUSTRATOR</p>
                            <ProgressBar now={html} label={`${html}%`} />
                            <p className='m-0 fw-bold mt-2'>IN DESGIN</p>
                            <ProgressBar now={html} label={`${html}%`} />
                        </div>
                    </div>
                    {/* End Skill  */}
                    {/* Start Actvitiy */}
                    <div className='bg-white gap-20  p-20 rad-10 txt-c-mobile mb-3'>
                        <h2 className='mt-0 mb-10 m-auto d-inline'>Latest Activites  </h2>
                        <p className='mt-0 mb-20 c-gray fs-15'>Latest Activites Done By The Use</p>
                        <div className={'d-flex between-flex' + ' ' + styleProfile.box_activity}>
                            <div className={'d-flex' + ' ' + styleProfile.activity}>
                                <img src={activity_01} alt="" />
                                <div className='ps-2'>
                                    <p className='m-0'>Store</p>
                                    <p className='c-gray'>Bought The Mastering Python Course</p>
                                </div>
                            </div>
                            <div>
                                <p>18:10</p>
                                <p>Yesterday</p>
                            </div>
                        </div>
                        <div className={'d-flex between-flex' + ' ' + styleProfile.box_activity}>
                            <div className={'d-flex' + ' ' + styleProfile.activity}>
                                <img src={activity_02} alt="" />
                                <div className='ps-2'>
                                    <p className='m-0'>Academey</p>
                                    <p className='c-gray'>Got The PHP Certificate</p>
                                </div>
                            </div>
                            <div>
                                <p>8:42</p>
                                <p>Yesterday</p>
                            </div>
                        </div>
                        <div className={'d-flex between-flex' + ' ' + styleProfile.box_activity}>
                            <div className={'d-flex' + ' ' + styleProfile.activity}>
                                <img src={activity_03} alt="" />
                                <div className='ps-2'>
                                    <p className='m-0'>Badgets</p>
                                    <p className='c-gray'>Bought The Mastering Python Course</p>
                                </div>
                            </div>
                            <div>
                                <p>2:15</p>
                                <p>Yesterday</p>
                            </div>
                        </div>
                        <div className={'d-flex between-flex' + ' ' + styleProfile.box_activity}>
                            <div className={'d-flex' + ' ' + styleProfile.activity}>
                                <img src={activity_01} alt="" />
                                <div className='ps-2'>
                                    <p className='m-0'>Store</p>
                                    <p className='c-gray'>Bought The Mastering Python Course</p>
                                </div>
                            </div>
                            <div>
                                <p>18:10</p>
                                <p>Yesterday</p>
                            </div>
                        </div>
                    </div>
                    {/* End Actvitiy */}
                </div>
            </div>
        </>
    )
}
