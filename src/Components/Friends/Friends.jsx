import React from 'react'
import styleFriends from './Friends.module.css'
import friend_01 from '../Images/friend-01.jpg'
import friend_02 from '../Images/friend-02.jpg'
import friend_03 from '../Images/friend-03.jpg'
import friend_04 from '../Images/friend-04.jpg'
import friend_05 from '../Images/friend-05.jpg'

export default function Friends() {
    return (
        <>
            <h1 className={'' + ' ' + styleFriends.headName}> <i className="fa-solid fa-user-group" /> Friends <i className="fa-solid fa-user-group" /></h1>
            <div className={'gap-20' + ' ' + styleFriends.container}>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div>
                        <i className={' me-3 fa-solid fa-phone' + ' ' + styleFriends.icon_social} />
                        <i className={' fa-solid fa-envelope' + ' ' + styleFriends.icon_social} />
                    </div>
                    <div className={'text-center' + ' ' + styleFriends.box_img}>
                        <img className=' rad-half' src={friend_01} alt="" />
                        <p className='m-0 fs-4 fw-bold'>User 1</p>
                        <p className='c-gray fs-15'>Lumberjack</p>
                    </div>
                    <div className={'' + ' ' + styleFriends.box_info}>
                        <div className='p-2'>
                            <i className=" me-2 fa-regular fa-face-smile" />
                            <span>95 Friends</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-diagram-project" />
                            <span>132 Projects</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-newspaper" />
                            <span>22 Articles</span>
                        </div>
                    </div>
                    <div className='d-flex between-flex'>
                        <p className='mt-2 c-gray'>Joined 2/8/2021</p>
                        <div>
                            <button className='me-2 btn btn-primary'>Profile</button>
                            <button className='btn btn-danger'>Remove</button>
                        </div>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div>
                        <i className={' me-3 fa-solid fa-phone' + ' ' + styleFriends.icon_social} />
                        <i className={' fa-solid fa-envelope' + ' ' + styleFriends.icon_social} />
                    </div>
                    <div className={'text-center' + ' ' + styleFriends.box_img}>
                        <img className=' rad-half' src={friend_02} alt="" />
                        <p className='m-0 fs-4 fw-bold'>User 2</p>
                        <p className='c-gray fs-15'>Web Designer</p>
                    </div>
                    <div className={'' + ' ' + styleFriends.box_info}>
                        <div className='p-2'>
                            <i className=" me-2 fa-regular fa-face-smile" />
                            <span>121 Friends</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-diagram-project" />
                            <span>136 Projects</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-newspaper" />
                            <span>14 Articles</span>
                        </div>
                    </div>
                    <div className='d-flex between-flex'>
                        <p className='mt-2 c-gray'>Joined 2/8/2021</p>
                        <div>
                            <button className='me-2 btn btn-primary'>Profile</button>
                            <button className='btn btn-danger'>Remove</button>
                        </div>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div>
                        <i className={' me-3 fa-solid fa-phone' + ' ' + styleFriends.icon_social} />
                        <i className={' fa-solid fa-envelope' + ' ' + styleFriends.icon_social} />
                    </div>
                    <div className={'text-center' + ' ' + styleFriends.box_img}>
                        <img className=' rad-half' src={friend_03} alt="" />
                        <p className='m-0 fs-4 fw-bold'>User 3</p>
                        <p className='c-gray fs-15'>Full-stack</p>
                    </div>
                    <div className={'' + ' ' + styleFriends.box_info}>
                        <div className='p-2'>
                            <i className=" me-2 fa-regular fa-face-smile" />
                            <span>145 Friends</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-diagram-project" />
                            <span>96 Projects</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-newspaper" />
                            <span>12 Articles</span>
                        </div>
                    </div>
                    <div className='d-flex between-flex'>
                        <p className='mt-2 c-gray'>Joined 2/8/2021</p>
                        <div>
                            <button className='me-2 btn btn-primary'>Profile</button>
                            <button className='btn btn-danger'>Remove</button>
                        </div>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div>
                        <i className={' me-3 fa-solid fa-phone' + ' ' + styleFriends.icon_social} />
                        <i className={' fa-solid fa-envelope' + ' ' + styleFriends.icon_social} />
                    </div>
                    <div className={'text-center' + ' ' + styleFriends.box_img}>
                        <img className=' rad-half' src={friend_04} alt="" />
                        <p className='m-0 fs-4 fw-bold'>User 4</p>
                        <p className='c-gray fs-15'>Back-End</p>
                    </div>
                    <div className={'' + ' ' + styleFriends.box_info}>
                        <div className='p-2'>
                            <i className=" me-2 fa-regular fa-face-smile" />
                            <span>112 Friends</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-diagram-project" />
                            <span>132 Projects</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-newspaper" />
                            <span>66 Articles</span>
                        </div>
                    </div>
                    <div className='d-flex between-flex'>
                        <p className='mt-2 c-gray'>Joined 2/8/2021</p>
                        <div>
                            <button className='me-2 btn btn-primary'>Profile</button>
                            <button className='btn btn-danger'>Remove</button>
                        </div>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div>
                        <i className={' me-3 fa-solid fa-phone' + ' ' + styleFriends.icon_social} />
                        <i className={' fa-solid fa-envelope' + ' ' + styleFriends.icon_social} />
                    </div>
                    <div className={'text-center' + ' ' + styleFriends.box_img}>
                        <img className=' rad-half' src={friend_05} alt="" />
                        <p className='m-0 fs-4 fw-bold'>User 5</p>
                        <p className='c-gray fs-15'>Front-End</p>
                    </div>
                    <div className={'' + ' ' + styleFriends.box_info}>
                        <div className='p-2'>
                            <i className=" me-2 fa-regular fa-face-smile" />
                            <span>196 Friends</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-diagram-project" />
                            <span>35 Projects</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-newspaper" />
                            <span>12 Articles</span>
                        </div>
                    </div>
                    <div className='d-flex between-flex'>
                        <p className='mt-2 c-gray'>Joined 2/8/2021</p>
                        <div>
                            <button className='me-2 btn btn-primary'>Profile</button>
                            <button className='btn btn-danger'>Remove</button>
                        </div>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div>
                        <i className={' me-3 fa-solid fa-phone' + ' ' + styleFriends.icon_social} />
                        <i className={' fa-solid fa-envelope' + ' ' + styleFriends.icon_social} />
                    </div>
                    <div className={'text-center' + ' ' + styleFriends.box_img}>
                        <img className=' rad-half' src={friend_02} alt="" />
                        <p className='m-0 fs-4 fw-bold'>User 6</p>
                        <p className='c-gray fs-15'>UX / UI</p>
                    </div>
                    <div className={'' + ' ' + styleFriends.box_info}>
                        <div className='p-2'>
                            <i className=" me-2 fa-regular fa-face-smile" />
                            <span>925 Friends</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-diagram-project" />
                            <span>142 Projects</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-newspaper" />
                            <span>25 Articles</span>
                        </div>
                    </div>
                    <div className='d-flex between-flex'>
                        <p className='mt-2 c-gray'>Joined 2/8/2021</p>
                        <div>
                            <button className='me-2 btn btn-primary'>Profile</button>
                            <button className='btn btn-danger'>Remove</button>
                        </div>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div>
                        <i className={' me-3 fa-solid fa-phone' + ' ' + styleFriends.icon_social} />
                        <i className={' fa-solid fa-envelope' + ' ' + styleFriends.icon_social} />
                    </div>
                    <div className={'text-center' + ' ' + styleFriends.box_img}>
                        <img className=' rad-half' src={friend_04} alt="" />
                        <p className='m-0 fs-4 fw-bold'>User 7</p>
                        <p className='c-gray fs-15'>Gammer</p>
                    </div>
                    <div className={'' + ' ' + styleFriends.box_info}>
                        <div className='p-2'>
                            <i className=" me-2 fa-regular fa-face-smile" />
                            <span>96 Friends</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-diagram-project" />
                            <span>80 Projects</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-newspaper" />
                            <span>24 Articles</span>
                        </div>
                    </div>
                    <div className='d-flex between-flex'>
                        <p className='mt-2 c-gray'>Joined 2/8/2021</p>
                        <div>
                            <button className='me-2 btn btn-primary'>Profile</button>
                            <button className='btn btn-danger'>Remove</button>
                        </div>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <div>
                        <i className={' me-3 fa-solid fa-phone' + ' ' + styleFriends.icon_social} />
                        <i className={' fa-solid fa-envelope' + ' ' + styleFriends.icon_social} />
                    </div>
                    <div className={'text-center' + ' ' + styleFriends.box_img}>
                        <img className=' rad-half' src={friend_01} alt="" />
                        <p className='m-0 fs-4 fw-bold'>User 8</p>
                        <p className='c-gray fs-15'>Graphic Designer</p>
                    </div>
                    <div className={'' + ' ' + styleFriends.box_info}>
                        <div className='p-2'>
                            <i className=" me-2 fa-regular fa-face-smile" />
                            <span>87 Friends</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-diagram-project" />
                            <span>188 Projects</span>
                        </div>
                        <div className='p-2'>
                            <i className=" me-2 fa-solid fa-newspaper" />
                            <span>44 Articles</span>
                        </div>
                    </div>
                    <div className='d-flex between-flex'>
                        <p className='mt-2 c-gray'>Joined 2/8/2021</p>
                        <div>
                            <button className='me-2 btn btn-primary'>Profile</button>
                            <button className='btn btn-danger'>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
