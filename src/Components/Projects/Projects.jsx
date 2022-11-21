import React from 'react'
import styleProjects from './Projects.module.css'
import team_1 from '../Images/team-01.png'
import team_2 from '../Images/team-02.png'
import team_3 from '../Images/team-03.png'
import team_4 from '../Images/team-05.png'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Projects() {
    return (
        <>
            <h1 className={'' + ' ' + styleProjects.headName}> <i className="fa-solid fa-diagram-project"></i> Projects <i className="fa-solid fa-diagram-project"></i></h1>
            <div className={'gap-20' + ' ' + styleProjects.container}>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div className='d-flex between-flex'>
                        <p className=' fw-bold'>Elzero Dashboard</p>
                        <span className=' c-gray'>15/10/2021</span>
                    </div>
                    <p className=' c-gray'>Elzero Dashboard project Design And Programming And Hosting</p>
                    <div className={''+' '+styleProjects.box_img}>
                        <img src={team_1} alt="" />
                        <img src={team_2} alt="" />
                        <img src={team_3} alt="" />
                        <img src={team_4} alt="" />
                    </div>
                    <div className={'mt-3'+' '+styleProjects.box_tab}>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Programming </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Design </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Hosting  </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Marketing </span>
                    </div>
                    <ProgressBar now={50} label=' $ 7500' variant='danger' className='fw-bold mt-3' />
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div className='d-flex between-flex'>
                        <p className=' fw-bold'>Academy Portal</p>
                        <span className=' c-gray'>15/10/2021</span>
                    </div>
                    <p className=' c-gray'>Academy Portal project Design And Programming And Hosting</p>
                    <div className={''+' '+styleProjects.box_img}>
                        <img src={team_1} alt="" />
                        <img src={team_2} alt="" />
                        <img src={team_3} alt="" />
                        <img src={team_4} alt="" />
                    </div>
                    <div className={'mt-3'+' '+styleProjects.box_tab}>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Programming </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Design </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Hosting  </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Marketing </span>
                    </div>
                    <ProgressBar now={100} label=' $ 9400' variant='success' className='fw-bold mt-3' />
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div className='d-flex between-flex'>
                        <p className=' fw-bold'>Chatting Application</p>
                        <span className=' c-gray'>15/10/2021</span>
                    </div>
                    <p className=' c-gray'>Chatting Application Project Design</p>
                    <div className={''+' '+styleProjects.box_img}>
                        <img src={team_1} alt="" />
                        <img src={team_2} alt="" />
                        <img src={team_3} alt="" />
                        <img src={team_4} alt="" />
                    </div>
                    <div className={'mt-3'+' '+styleProjects.box_tab}>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Programming </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Design </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Hosting  </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Marketing </span>
                    </div>
                    <ProgressBar now={30} label=' $ 6500' variant='info' className='fw-bold mt-3 ' />
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div className='d-flex between-flex'>
                        <p className=' fw-bold'>Elzero Dashboard</p>
                        <span className=' c-gray'>15/10/2021</span>
                    </div>
                    <p className=' c-gray'>Elzero Dashboard project Design And Programming And Hosting</p>
                    <div className={''+' '+styleProjects.box_img}>
                        <img src={team_1} alt="" />
                        <img src={team_2} alt="" />
                        <img src={team_3} alt="" />
                        <img src={team_4} alt="" />
                    </div>
                    <div className={'mt-3'+' '+styleProjects.box_tab}>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Programming </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Design </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Hosting  </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Marketing </span>
                    </div>
                    <ProgressBar now={60} label=' $ 8500' variant='primary' className='fw-bold mt-3' />
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div className='d-flex between-flex'>
                        <p className=' fw-bold'>Elzero Dashboard</p>
                        <span className=' c-gray'>15/10/2021</span>
                    </div>
                    <p className=' c-gray'>Elzero Dashboard project Design And Programming And Hosting</p>
                    <div className={''+' '+styleProjects.box_img}>
                        <img src={team_1} alt="" />
                        <img src={team_2} alt="" />
                        <img src={team_3} alt="" />
                        <img src={team_4} alt="" />
                    </div>
                    <div className={'mt-3'+' '+styleProjects.box_tab}>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Programming </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Design </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Hosting  </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Marketing </span>
                    </div>
                    <ProgressBar now={40} label=' $ 5500' variant='warning' className='fw-bold mt-3' />
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div className='d-flex between-flex'>
                        <p className=' fw-bold'>Elzero Dashboard</p>
                        <span className=' c-gray'>15/10/2021</span>
                    </div>
                    <p className=' c-gray'>Elzero Dashboard project Design And Programming And Hosting</p>
                    <div className={''+' '+styleProjects.box_img}>
                        <img src={team_1} alt="" />
                        <img src={team_2} alt="" />
                        <img src={team_3} alt="" />
                        <img src={team_4} alt="" />
                    </div>
                    <div className={'mt-3'+' '+styleProjects.box_tab}>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Programming </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Design </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Hosting  </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Marketing </span>
                    </div>
                    <ProgressBar now={50} label=' $ 7500' variant='danger' className='fw-bold mt-3' />
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div className='d-flex between-flex'>
                        <p className=' fw-bold'>Elzero Dashboard</p>
                        <span className=' c-gray'>15/10/2021</span>
                    </div>
                    <p className=' c-gray'>Elzero Dashboard project Design And Programming And Hosting</p>
                    <div className={''+' '+styleProjects.box_img}>
                        <img src={team_1} alt="" />
                        <img src={team_2} alt="" />
                        <img src={team_3} alt="" />
                        <img src={team_4} alt="" />
                    </div>
                    <div className={'mt-3'+' '+styleProjects.box_tab}>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Programming </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Design </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Hosting  </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Marketing </span>
                    </div>
                    <ProgressBar now={50} label=' $ 7500' variant='danger' className='fw-bold mt-3' />
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div className='d-flex between-flex'>
                        <p className=' fw-bold'>Elzero Dashboard</p>
                        <span className=' c-gray'>15/10/2021</span>
                    </div>
                    <p className=' c-gray'>Elzero Dashboard project Design And Programming And Hosting</p>
                    <div className={''+' '+styleProjects.box_img}>
                        <img src={team_1} alt="" />
                        <img src={team_2} alt="" />
                        <img src={team_3} alt="" />
                        <img src={team_4} alt="" />
                    </div>
                    <div className={'mt-3'+' '+styleProjects.box_tab}>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Programming </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Design </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Hosting  </span>
                        <span className=' bg-secondary p-2 rad-10 text-white me-3'>Marketing </span>
                    </div>
                    <ProgressBar now={50} label=' $ 7500' variant='danger' className='fw-bold mt-3' />
                </div>
            </div>
        </>
    )
}
