import React from 'react'
import styleDashBoard from './Dashboard.module.css'
import welcom from '../Images/welcome.png'
import { Link } from 'react-router-dom'
import avatar from '../Images/avatar.png'
import news1 from '../Images/news-01.png'
import news2 from '../Images/news-02.png'
import news3 from '../Images/news-03.png'
import news4 from '../Images/news-04.png'
import PDF from '../Images/pdf.svg'
import AVI from '../Images/avi.svg'
import DLL from '../Images/dll.svg'
import EPS from '../Images/eps.svg'
import PSD from '../Images/psd.svg'
import ZIP from '../Images/zip.svg'
import Project from '../Images/project.png'
import team_1 from '../Images/team-01.png'
import team_2 from '../Images/team-02.png'
import team_3 from '../Images/team-03.png'
import team_4 from '../Images/team-05.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export default function Dashboard() {
    const mony = 60;
    const code = 36;
    const user = 16;
    return (
        <>
            <h1 className={'' + ' ' + styleDashBoard.headName}> <i class="fa-solid fa-gauge"/> DashBoard <i class="fa-solid fa-gauge"/></h1>
            <div className={'gap-20' + ' ' + styleDashBoard.container}>
                {/* Start Dashboard widget */}
                <div className={'bg-white rad-10 txt-c-mobile'}>
                    <div className={'bg-white rad-10 txt-c-mobile block-mobile ' + ' ' + styleDashBoard.welcom}>
                        <div className={'p-20 rad-10 d-flex justify-content-between bg-eee' + ' ' + styleDashBoard.intro}>
                            <div>
                                <h2 className='m-0'>welcom</h2>
                                <p className='c-gray mt-1 fw-bold'>Ibrahim Nady</p>
                            </div>
                            <img src={welcom} className='hide-mobile' alt="" />
                        </div>
                        <img src={avatar} alt="" className={'' + ' ' + styleDashBoard.avatar} />
                        <div className={'fw-bold text-center d-flex p-20 mb-20 block-mobile' + ' ' + styleDashBoard.body}>
                            <div>Ibrahim Nady <span className={'d-block c-gray fs-14 mt-10' + ' '}>Developer</span> </div>
                            <div>80 <span className={'d-block c-gray fs-14 mt-10' + ' '}>Projects</span> </div>
                            <div>$8500<span className={'d-block c-gray fs-14 mt-10' + ' '}>Earned</span> </div>
                        </div>
                        <Link to='/Profile' className={'d-block fs-14  bg-blue text-white w-fit  btn-shap' + ' ' + styleDashBoard.visit}>Profile</Link>
                    </div>
                </div>
                {/* End Dashboard widget */}
                {/* Start quikdraft widget */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div>
                        <h2 className='mt-0 mb-10'>Quick Draft</h2>
                        <p className='mt-0 mb-20 c-gray fs-15'>Write A Draft For You Ideas</p>
                        <form className={styleDashBoard.form} action="">
                            <input className='d-block mb-20  p-10 border-0 bg-eee rad-6' type="text" placeholder='Title' />
                            <textarea className='d-block mb-20  p-10 border-0 bg-eee rad-6' name="" id="" placeholder='Your Thought'></textarea>
                            <button type='submit' className={' d-block fs-14 bg-blue text-white border border-0 w-fit btn-shap'}>Save</button>
                        </form>
                    </div>
                </div>
                {/* End quikdraft widget */}
                {/* Start targets widget */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <h2 className='mt-0 mb-10'>Yourly Targets</h2>
                    <p className='mt-0 mb-20 c-gray fs-15'>Targets Of The Year</p>
                    <div className={'mb-20 center-flex' + ' ' + styleDashBoard.targets_row}>
                        <div className={'center-flex bg-success p-20 me-3' + ' ' + styleDashBoard.icon}>
                            <i className={'fa-solid fa-dollar-sign ' + ' ' + styleDashBoard.mony} />
                        </div>
                        <div className={'' + ' ' + styleDashBoard.details}>
                            <span className='fs-14 c-gray'>Mony</span>
                            <span className=' d-block fw-bold'>$20.000</span>
                            <div className={' position-relative' + ' ' + styleDashBoard.progress}>
                                <ProgressBar className={styleDashBoard.pro} variant="success" animated now={mony} label={`${mony}%`} />
                            </div>
                        </div>
                    </div>
                    <div className={'mb-20 center-flex' + ' ' + styleDashBoard.targets_row}>
                        <div className={'center-flex bg-warning  p-20 me-3' + ' ' + styleDashBoard.icon}>
                            <i className={"fa-solid fa-code " + ' ' + styleDashBoard.code} />
                        </div>
                        <div className={'' + ' ' + styleDashBoard.details}>
                            <span className='fs-14 c-gray'>Code</span>
                            <span className=' d-block fw-bold'>36</span>
                            <div className={' position-relative' + ' ' + styleDashBoard.progress}>
                                <ProgressBar className={styleDashBoard.pro} variant="warning" animated now={code} label={`${code}%`} />
                            </div>
                        </div>
                    </div>
                    <div className={'mb-20 center-flex' + ' ' + styleDashBoard.targets_row}>
                        <div className={'center-flex bg-info p-20 me-3' + ' ' + styleDashBoard.icon}>
                            <i className={"fa-solid fa-user " + ' ' + styleDashBoard.user} />
                        </div>
                        <div className={'' + ' ' + styleDashBoard.details}>
                            <span className='fs-14 c-gray'>Team</span>
                            <span className=' d-block fw-bold'>14</span>
                            <div className={' position-relative' + ' ' + styleDashBoard.progress}>
                                <ProgressBar className={styleDashBoard.pro} variant="info" animated now={user} label={`${user}%`} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End targets widget */}
                {/* Start tickets widget */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile' + ' ' + styleDashBoard.tickets}>
                    <h2 className='mt-0 mb-10'>Tickets Statistics <i className="fa-solid fa-ticket text-warning"></i></h2>
                    <p className='mt-0 mb-20 c-gray fs-15'>Everything About Support Tickets</p>
                    <div className='d-flex text-center gap-20 flex-wrap'>
                        <div className={'p-20 rad-10 fs-13 c-gray' + ' ' + styleDashBoard.box}>
                            <i className='fa-regular fa-rectangle-list fa-2x mb-10 text-warning' />
                            <span className='d-block text-black fw-bold fs-25 mb-5'>2500</span>
                            Total
                        </div>
                        <div className={'p-20 rad-10 fs-13 c-gray' + ' ' + styleDashBoard.box}>
                            <span className={styleDashBoard.loader}></span>
                            <span className='d-block text-black fw-bold fs-25 mb-5'>500</span>
                            Pending
                        </div>
                        <div className={'p-20 rad-10 fs-13 c-gray' + ' ' + styleDashBoard.box}>
                            <i className='fa-regular fa-circle-check fa-2x mb-10 text-success' />
                            <span className='d-block text-black fw-bold fs-25 mb-5'>1900</span>
                            Closed
                        </div>
                        <div className={'p-20 rad-10 fs-13 c-gray' + ' ' + styleDashBoard.box}>
                            <i className='fa-regular fa-rectangle-xmark fa-2x mb-10 text-danger' />
                            <span className='d-block text-black fw-bold fs-25 mb-5'>100</span>
                            Deleted
                        </div>
                    </div>
                </div>
                {/* End tickets widget */}
                {/* Start latest news widget*/}
                <div className={'bg-white p-20 rad-10 txt-c-mobile' + ' ' + styleDashBoard.latest_news}>
                    <h2 className='mt-0 mb-20 '>Latest News <i className="fa-solid fa-radio text-danger"></i></h2>
                    <div className={' d-flex align-center ' + ' ' + styleDashBoard.news_rows}>
                        <img src={news1} alt="" />
                        <div className={'' + ' ' + styleDashBoard.info}>
                            <h3>Created Sass Domain</h3>
                            <p className='m-0 fs-14 c-gray'>New Sass Examples & Tutorials</p>
                        </div>
                        <div className={' btn-shap bg-eee fs-13 ' + ' ' + styleDashBoard.lable}>3 Days Ago</div>
                    </div>
                    <div className={' d-flex align-center ' + ' ' + styleDashBoard.news_rows}>
                        <img src={news2} alt="" />
                        <div className={'' + ' ' + styleDashBoard.info}>
                            <h3>Changed The Design</h3>
                            <p className='m-0 fs-14 c-gray'>A Brand New Website Design</p>
                        </div>
                        <div className={' btn-shap bg-eee fs-13 ' + ' ' + styleDashBoard.lable}>5 Days Ago</div>
                    </div>
                    <div className={' d-flex align-center ' + ' ' + styleDashBoard.news_rows}>
                        <img src={news3} alt="" />
                        <div className={'' + ' ' + styleDashBoard.info}>
                            <h3>Team Increases</h3>
                            <p className='m-0 fs-14 c-gray'>3 Developers Joined The Team</p>
                        </div>
                        <div className={' btn-shap bg-eee fs-13 ' + ' ' + styleDashBoard.lable}>7 Days Ago</div>
                    </div>
                    <div className={' d-flex align-center ' + ' ' + styleDashBoard.news_rows}>
                        <img src={news4} alt="" />
                        <div className={'' + ' ' + styleDashBoard.info}>
                            <h3>Added Payement</h3>
                            <p className='m-0 fs-14 c-gray'>New Gatment Getways Added</p>
                        </div>
                        <div className={' btn-shap bg-eee fs-13 ' + ' ' + styleDashBoard.lable}>10 Days Ago</div>
                    </div>
                    <div className={' d-flex align-center ' + ' ' + styleDashBoard.news_rows}>
                        <img src={news4} alt="" />
                        <div className={'' + ' ' + styleDashBoard.info}>
                            <h3>Added Payement</h3>
                            <p className='m-0 fs-14 c-gray'>New Gatment Getways Added</p>
                        </div>
                        <div className={' btn-shap bg-eee fs-13 ' + ' ' + styleDashBoard.lable}>10 Days Ago</div>
                    </div>
                </div>
                {/* End latest news widget*/}
                {/* Start Tasks Widget */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile' + ' ' + styleDashBoard.tasks}>
                    <h2 className={'mt-0 mb-20'}>Latest Tasks <i className="fa-solid fa-list-check text-success"></i></h2>
                    <div className={'d-flex align-center between-flex' + ' ' + styleDashBoard.task_row}>
                        <div className={'' + ' ' + styleDashBoard.info}>
                            <h3 className='mt-0 mb-2 fs-15 fw-bold'>Record New Video</h3>
                            <p className='m-0 c-gray'>Record Python Create Exe Project</p>
                        </div>
                        <i className={'fa-regular fa-trash-can' + ' ' + styleDashBoard.delete} />
                    </div>
                    <div className={'d-flex align-center between-flex' + ' ' + styleDashBoard.task_row}>
                        <div className={'' + ' ' + styleDashBoard.info}>
                            <h3 className='mt-0 mb-2 fs-15 fw-bold'>Write Article</h3>
                            <p className='m-0 c-gray'>Write Low Level Vs High Level Languages</p>
                        </div>
                        <i className={'fa-regular fa-trash-can' + ' ' + styleDashBoard.delete} />
                    </div>
                    <div className={'d-flex align-center between-flex' + ' ' + styleDashBoard.task_row}>
                        <div className={'' + ' ' + styleDashBoard.info}>
                            <h3 className='mt-0 mb-2 fs-15 fw-bold'>Finish Project</h3>
                            <p className='m-0 c-gray'>Public Academy Programming Project</p>
                        </div>
                        <i className={'fa-regular fa-trash-can' + ' ' + styleDashBoard.delete} />
                    </div>
                    <div className={'d-flex align-center between-flex' + ' ' + styleDashBoard.task_row + ' ' + styleDashBoard.done}>
                        <div className={'' + ' ' + styleDashBoard.info}>
                            <h3 className='mt-0 mb-2 fs-15 fw-bold'>Finish Project</h3>
                            <p className='m-0 c-gray'>Public Academy Programming Project</p>
                        </div>
                        <i className={'fa-regular fa-trash-can' + ' ' + styleDashBoard} />
                    </div>
                    <div className={'d-flex align-center between-flex' + ' ' + styleDashBoard.task_row}>
                        <div className={'' + ' ' + styleDashBoard.info}>
                            <h3 className='mt-0 mb-2 fs-15 fw-bold'>Finish Lesson</h3>
                            <p className='m-0 c-gray'>Finish Teaching Flex Box</p>
                        </div>
                        <i className={'fa-regular fa-trash-can' + ' ' + styleDashBoard.delete} />
                    </div>
                </div>
                {/* End Tasks Widget */}
                {/* Start Top Search Widget */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <h2 className='mt-0 mb-20'>Top Search Items <i className="fa-solid fa-magnifying-glass"></i></h2>
                    <div className={'d-flex between-flex c-gray mb-10' + ' ' + styleDashBoard.items_head}>
                        <div>Keyword</div>
                        <div>Search Count</div>
                    </div>
                    <div className={'d-flex between-flex pt-15 pb-15' + ' ' + styleDashBoard.items}>
                        <span>Programming</span>
                        <span className='bg-eee fs-13 btn-shap'>220</span>
                    </div>
                    <div className={'d-flex between-flex pt-15 pb-15' + ' ' + styleDashBoard.items}>
                        <span>Javascript</span>
                        <span className='bg-eee fs-13 btn-shap'>165</span>
                    </div>
                    <div className={'d-flex between-flex pt-15 pb-15' + ' ' + styleDashBoard.items}>
                        <span>Python</span>
                        <span className='bg-eee fs-13 btn-shap'>130</span>
                    </div>
                    <div className={'d-flex between-flex pt-15 pb-15' + ' ' + styleDashBoard.items}>
                        <span>Code</span>
                        <span className='bg-eee fs-13 btn-shap'>92</span>
                    </div>
                    <div className={'d-flex between-flex pt-15 pb-15' + ' ' + styleDashBoard.items}>
                        <span>Design</span>
                        <span className='bg-eee fs-13 btn-shap'>57</span>
                    </div>
                    <div className={'d-flex between-flex pt-15 pb-15' + ' ' + styleDashBoard.items}>
                        <span>Logic</span>
                        <span className='bg-eee fs-13 btn-shap'>34</span>
                    </div>
                    <div className={'d-flex between-flex pt-15 pb-15' + ' ' + styleDashBoard.items}>
                        <span>UX/UI</span>
                        <span className='bg-eee fs-13 btn-shap'>20</span>
                    </div>
                </div>
                {/* End Top Search Widget */}
                {/* Start Latest Uploads Widget */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile' + ' ' + styleDashBoard.latest_uploads}>
                    <h2 className='mt-0 mb-20 '>Latest Uploads <span className={'' + ' ' + styleDashBoard.uploads}></span></h2>
                    <ul className=''>
                        <li className='between-flex pb-10 mb-10'>
                            <div className='d-flex algin-center'>
                                <img className='mr-10' src={PDF} alt="" />
                                <div>
                                    <span className='d-block'>My-File.pdf</span>
                                    <span className='fs-15 c-gray'>Ibrahim Nady</span>
                                </div>
                            </div>
                            <div className='bg-eee btn-shape fs-13'>
                                2.9mb
                            </div>
                        </li>
                        <li className='between-flex pb-10 mb-10'>
                            <div className='d-flex algin-center'>
                                <img className='mr-10' src={AVI} alt="" />
                                <div>
                                    <span className='d-block'>My-File.avi</span>
                                    <span className='fs-15 c-gray'>Admin</span>
                                </div>
                            </div>
                            <div className='bg-eee btn-shape fs-13'>
                                3.7mb
                            </div>
                        </li>
                        <li className='between-flex pb-10 mb-10'>
                            <div className='d-flex algin-center'>
                                <img className='mr-10' src={DLL} alt="" />
                                <div>
                                    <span className='d-block'>My-File.dll</span>
                                    <span className='fs-15 c-gray'>User</span>
                                </div>
                            </div>
                            <div className='bg-eee btn-shape fs-13'>
                                1.5mb
                            </div>
                        </li>
                        <li className='between-flex pb-10 mb-10'>
                            <div className='d-flex algin-center'>
                                <img className='mr-10' src={EPS} alt="" />
                                <div>
                                    <span className='d-block'>My-File.eps</span>
                                    <span className='fs-15 c-gray'>Ibrahim Nady</span>
                                </div>
                            </div>
                            <div className='bg-eee btn-shape fs-13'>
                                4.4mb
                            </div>
                        </li>
                        <li className='between-flex pb-10 mb-10'>
                            <div className='d-flex algin-center'>
                                <img className='mr-10' src={PSD} alt="" />
                                <div>
                                    <span className='d-block'>My-File.psd</span>
                                    <span className='fs-15 c-gray'>Ibrahim Nady</span>
                                </div>
                            </div>
                            <div className='bg-eee btn-shape fs-13'>
                                2.3mb
                            </div>
                        </li>
                        <li className='between-flex pb-10 mb-10'>
                            <div className='d-flex algin-center'>
                                <img className='mr-10' src={ZIP} alt="" />
                                <div>
                                    <span className='d-block'>My-File.zip</span>
                                    <span className='fs-15 c-gray'>Ibrahim Nady</span>
                                </div>
                            </div>
                            <div className='bg-eee btn-shape fs-13'>
                                5.2mb
                            </div>
                        </li>
                    </ul>
                    <Form.Group controlId="formFile" className="mb-3 border  p-3 bg-secondary rad-10">
                        <Form.Label className='fs-3 ms-5 fw-bold text-white'>Upload a  New File </Form.Label>
                        <div className=' d-flex between-flex'><Form.Control className='w-75' type="file" />
                            <button className=' btn  bg-white '>Upload</button>
                        </div>
                    </Form.Group>
                </div>
                {/* End Latest Uploads Widget */}
                {/* Start Last Project Widget */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile position-relative' + ' ' + styleDashBoard.last_project}>
                    <h2 className='mt-0 mb-20'>Last Project Progress</h2>
                    <ul className='m-0 position-relative'>
                        <li className={'mt-25 d-flex justify-content-start' + ' ' + styleDashBoard.done_last_project}>Got The Project <i className="fa-solid fa-circle-check ms-5 fs-4 text-success  " /></li>
                        <li className={'mt-25 d-flex justify-content-start' + ' ' + styleDashBoard.done_last_project}>Started The Project<i className="fa-solid fa-circle-check ms-5 fs-4 text-success  " /></li>
                        <li className={'mt-25 d-flex justify-content-start' + ' ' + styleDashBoard.done_last_project}>The Project About To Finish<i className="fa-solid fa-circle-check ms-5 fs-4 text-success  " /></li>
                        <li className={'mt-25 d-flex justify-content-start' + ' ' + styleDashBoard.done_last_project}>Test The Project UI/UX<i className="fa-solid fa-circle-check ms-5 fs-4 text-success  " /></li>
                        <li className={'mt-25 d-flex justify-content-start' + ' ' + styleDashBoard.done_last_project}>Test The Code<i className="fa-solid fa-circle-check ms-5 fs-4 text-success  " /></li>
                        <li className={'mt-25 d-flex justify-content-start' + ' ' + styleDashBoard.done_last_project}>Test Front-End Code<i className="fa-solid fa-circle-check ms-5 fs-4 text-success  " /></li>
                        <li className={'mt-25 d-flex justify-content-start' + ' ' + styleDashBoard.current_last_project}>Test Back-End Code <span className={'' + ' ' + styleDashBoard.loading}></span></li>
                        <li className={'mt-25 d-flex justify-content-start' + ' ' + styleDashBoard}>Finish The Project & Get Money <span className={'' + ' ' + styleDashBoard.loading}></span></li>
                        <li className={'mt-25 d-flex justify-content-start' + ' ' + styleDashBoard}>Delivery Project <span className={'' + ' ' + styleDashBoard.loading}></span></li>
                    </ul>
                    <img className={' hide-mobile' + ' ' + styleDashBoard.launch_icon} src={Project} alt="" />
                </div>
                {/* End Last Project Widget */}
                {/* Start Reminders Widget */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile' + ' ' + styleDashBoard.reminders}>
                    <h2 className='mt-0 mb-25'>Reminders</h2>
                    <ul className='m-0'>
                        <li className='d-flex justify-content-start mt-15'>
                            <span className={'bg-info mr-15 mt-20 d-block rad-half' + ' ' + styleDashBoard.key}></span>
                            <span></span>
                            <div className={'pl-15' + ' ' + styleDashBoard.blue}>
                                <p className='fs-14 fw-bold mt-0 mb-1'>Check My Tasks List</p>
                                <span className='fs-13 c-gray'>28/09/2023 - 12:00 AM</span>
                            </div>
                        </li>
                        <li className='d-flex justify-content-start mt-15'>
                            <span className={'bg-success mr-15 mt-20 d-block rad-half' + ' ' + styleDashBoard.key}></span>
                            <span></span>
                            <div className={'pl-15' + ' ' + styleDashBoard.green}>
                                <p className='fs-14 fw-bold mt-0 mb-1'>Check My Projects</p>
                                <span className='fs-13 c-gray'>24/12/2023 - 5:00 PM</span>
                            </div>
                        </li>
                        <li className='d-flex justify-content-start mt-15'>
                            <span className={'bg-warning mr-15 mt-20 d-block rad-half' + ' ' + styleDashBoard.key}></span>
                            <span></span>
                            <div className={'pl-15' + ' ' + styleDashBoard.orange}>
                                <p className='fs-14 fw-bold mt-0 mb-1'>Call My Clients</p>
                                <span className='fs-13 c-gray'>1/1/2024 - 12:00 AM</span>
                            </div>
                        </li>
                        <li className='d-flex justify-content-start mt-15'>
                            <span className={'bg-danger mr-15 mt-20 d-block rad-half' + ' ' + styleDashBoard.key}></span>
                            <span></span>
                            <div className={'pl-15' + ' ' + styleDashBoard.red}>
                                <p className='fs-14 fw-bold mt-0 mb-1'>Finish Work</p>
                                <span className='fs-13 c-gray'>18/2/2024 - 6:00 AM</span>
                            </div>
                        </li>
                        <li className='d-flex justify-content-start mt-15'>
                            <span className={'bg-secondary mr-15 mt-20 d-block rad-half' + ' ' + styleDashBoard.key}></span>
                            <span></span>
                            <div className={'pl-15' + ' ' + styleDashBoard.secondary}>
                                <p className='fs-14 fw-bold mt-0 mb-1'>Send project</p>
                                <span className='fs-13 c-gray'>18/2/2024 - 6:00 AM</span>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* End Reminders Widget */}
                {/* Start Latest Posts Widget */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile' + ' ' + styleDashBoard.latest_posts}>
                    <h2 className='mt-0 mb-25'>Latest Posts</h2>
                    <div className={'d-flex ' + ' ' + styleDashBoard.top}>
                        <img className={'mr-15' + ' ' + styleDashBoard.avatar_posts} src={avatar} alt="" />
                        <div className={'' + ' ' + styleDashBoard.info_posts}>
                            <span className='d-block mb-1 fw-bold'>Ibrahim Nady</span>
                            <span className='c-gray'>About 3 Hours Ago</span>
                        </div>
                    </div>
                    <div className={' txt-c-mobile pt-20 pb-20 mt-20 mb-20' + ' ' + styleDashBoard.post_content}>
                        If You Don't Sacrifice The Little Things You Love To Do Every Day, You Will Sacrifice Something You Dream Of All Your Life
                    </div>
                    <div className={' between-flex c-gray' + ' ' + styleDashBoard.posts_stats}>
                        <div>
                            <i className='fa-regular fa-heart' />
                            <span>1.8K</span>
                        </div>
                        <div>
                            <i className='fa-regular fa-comments' />
                            <span>500</span>
                        </div>
                    </div>
                </div>
                {/* End Latest Posts Widget */}
                {/* Start Social Media Widget */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile' + ' ' + styleDashBoard.social_media}>
                    <h2 className='mt-0 mb-25'>Social Media Stats</h2>
                    <div className={'p-15 position-relative mb-10 between-flex' + ' ' + styleDashBoard.box_social + ' ' + styleDashBoard.twitter}>
                        <i className='fa-brands fa-twitter fa-2x text-white h-full center-flex' />
                        <span>90K Followers</span>
                        <a className='fs-13 text-white btn-shap' href="https://twitter.com/Ibrahim59887371">Follow</a>
                    </div>
                    <div className={'p-15 position-relative mb-10 between-flex' + ' ' + styleDashBoard.box_social + ' ' + styleDashBoard.facebook}>
                        <i className='fa-brands fa-facebook fa-2x text-white h-full center-flex' />
                        <span>2M Followers</span>
                        <a className='fs-13 text-white btn-shap' href="https://www.facebook.com/ebraheem.nady">Like</a>
                    </div>
                    <div className={'p-15 position-relative mb-10 between-flex' + ' ' + styleDashBoard.box_social + ' ' + styleDashBoard.instagram}>
                        <i className='fa-brands fa-instagram fa-2x text-white h-full center-flex' />
                        <span>100K Followers</span>
                        <a className='fs-13 text-white btn-shap' href="https://www.instagram.com/ebrahim.pop/">Follow</a>
                    </div>
                    <div className={'p-15 position-relative mb-10 between-flex' + ' ' + styleDashBoard.box_social + ' ' + styleDashBoard.linkedin}>
                        <i className='fa-brands fa-linkedin fa-2x text-white h-full center-flex' />
                        <span>190K Followers</span>
                        <a className='fs-13 text-white btn-shap' href="https://www.linkedin.com/in/ibrahim-nady-466b931b6/">Follow</a>
                    </div>
                    <div className={'p-15 position-relative mb-10 between-flex' + ' ' + styleDashBoard.box_social + ' ' + styleDashBoard.github}>
                        <i className='fa-brands fa-github fa-2x text-white h-full center-flex' />
                        <span>80K Followers</span>
                        <a className='fs-13 text-white btn-shap' href="https://github.com/ibrahimnady">Follow</a>
                    </div>
                </div>
                {/* Start Social Media Widget */}
                {/* Start Table Widget */}
                <div className={'bg-white p-20 rad-10 txt-c-mobile' + ' ' + styleDashBoard.project_table}>
                    <h2 className='mt-0 mb-20'>Projects</h2>
                    <div className={'' + ' ' + styleDashBoard.responsive_table}>
                        <Table variant="dark" striped bordered hover className=' fs-15 w-full '>
                            <thead className='text-center'>
                                <tr>
                                    <td>Name</td>
                                    <td>Finsh Date</td>
                                    <td>Client</td>
                                    <td>Price</td>
                                    <td>Team</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ministry Wikipedia</td>
                                    <td>10 May 2023</td>
                                    <td>Ministry</td>
                                    <td>$ 6300</td>
                                    <td>
                                        <img src={team_1} alt="" />
                                        <img src={team_2} alt="" />
                                        <img src={team_3} alt="" />
                                        <img src={team_4} alt="" />
                                    </td>
                                    <td>
                                        <span className={' bg-warning text-white btn-shap' + ' ' + styleDashBoard.lable_status}>Pending</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Protofilo Website</td>
                                    <td>20 Nov 2023</td>
                                    <td>Jan</td>
                                    <td>$ 4000</td>
                                    <td>
                                        <img src={team_2} alt="" />
                                        <img src={team_3} alt="" />
                                        <img src={team_4} alt="" />
                                    </td>
                                    <td>
                                        <span className={' bg-primary text-white btn-shap' + ' ' + styleDashBoard.lable_status}>In Progress</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Gorgena App</td>
                                    <td>10 May 2023</td>
                                    <td>Gorgena</td>
                                    <td>$ 9000</td>
                                    <td>
                                        <img src={team_3} alt="" />
                                        <img src={team_4} alt="" />
                                    </td>
                                    <td>
                                        <span className={' bg-danger text-white btn-shap' + ' ' + styleDashBoard.lable_status}>Rejected</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Alexa App</td>
                                    <td>10 Aug 2023</td>
                                    <td>Alxa</td>
                                    <td>$ 6800</td>
                                    <td>
                                        <img src={team_1} alt="" />
                                    </td>
                                    <td>
                                        <span className={' bg-success text-white btn-shap' + ' ' + styleDashBoard.lable_status}>Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tony Website</td>
                                    <td>10 May 2023</td>
                                    <td>Tony</td>
                                    <td>$ 7000</td>
                                    <td>
                                        <img src={team_1} alt="" />
                                        <img src={team_4} alt="" />
                                    </td>
                                    <td>
                                        <span className={' bg-success text-white btn-shap' + ' ' + styleDashBoard.lable_status}>Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Arena Application</td>
                                    <td>1 Jun 2023</td>
                                    <td>Arena</td>
                                    <td>$ 8000</td>
                                    <td>
                                        <img src={team_1} alt="" />
                                        <img src={team_2} alt="" />
                                    </td>
                                    <td>
                                        <span className={' bg-success text-white btn-shap' + ' ' + styleDashBoard.lable_status}>Completed</span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                {/* End Table Widget */}
            </div>
        </>
    )
}
