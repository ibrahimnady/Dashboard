import React from 'react'
import styleFiles from './Files.module.css'
import PDF from '../Images/pdf.svg'
import AVI from '../Images/avi.svg'
import DLL from '../Images/dll.svg'
import EPS from '../Images/eps.svg'
import PSD from '../Images/psd.svg'
import ZIP from '../Images/zip.svg'

export default function Files() {
    return (
        <>
            <h1 className={'' + ' ' + styleFiles.headName}> <i className="fa-solid fa-file" /> Files <i className="fa-solid fa-file" /></h1>
            <div className={'gap-20' + ' ' + styleFiles.container}>
                <div className={'bg-white p-20 rad-10 txt-c-mobile' + ' ' + styleFiles.uploads}>
                    <h2 className=' fs-5 text-center fw-bolder border-solid-bottom'>Files Statistics</h2>
                    <div className={' rad-10' + ' ' + styleFiles.box_file}>
                        <i className='fa-regular fa-file-pdf bg-primary p-2 rad-10 me-2' />
                        <span className='fw-bold'>PDF Files</span>
                        <div className=' c-gray d-flex between-flex border-solid-top mt-2'>
                            <span className=''>140</span>
                            <span>6.6 GB</span>
                        </div>
                    </div>
                    <div className={' rad-10' + ' ' + styleFiles.box_file}>
                        <i className='fa-solid fa-file-csv bg-info p-2 rad-10 me-2' />
                        <span className='fw-bold'>CSV Files</span>
                        <div className=' c-gray d-flex between-flex border-solid-top mt-2'>
                            <span className=''>140</span>
                            <span>6.6 GB</span>
                        </div>
                    </div>
                    <div className={' rad-10' + ' ' + styleFiles.box_file}>
                        <i className='fa-regular fa-images bg-success p-2 rad-10 me-2' />
                        <span className='fw-bold'>Images</span>
                        <div className=' c-gray d-flex between-flex border-solid-top mt-2'>
                            <span className=''>140</span>
                            <span>6.6 GB</span>
                        </div>
                    </div>
                    <div className={' rad-10' + ' ' + styleFiles.box_file}>
                        <i className='fa-regular fa-file-word bg-warning p-2 rad-10 me-2' />
                        <span className='fw-bold'>World Files</span>
                        <div className=' c-gray d-flex between-flex border-solid-top mt-2'>
                            <span className=''>140</span>
                            <span>6.6 GB</span>
                        </div>
                    </div>
                    <button className='btn btn-primary '>Upload</button>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={PDF} alt="" />
                        <p className='m-0'>My-File.pdf</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={AVI} alt="" />
                        <p className='m-0'>My-File.avi</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={DLL} alt="" />
                        <p className='m-0'>My-File.dll</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={EPS} alt="" />
                        <p className='m-0'>My-File.eps</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={PSD} alt="" />
                        <p className='m-0'>My-File.psd</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={ZIP} alt="" />
                        <p className='m-0'>My-File.zip</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={PDF} alt="" />
                        <p className='m-0'>My-File.pdf</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={AVI} alt="" />
                        <p className='m-0'>My-File.avi</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={DLL} alt="" />
                        <p className='m-0'>My-File.dll</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={PDF} alt="" />
                        <p className='m-0'>My-File.pdf</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={AVI} alt="" />
                        <p className='m-0'>My-File.avi</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={DLL} alt="" />
                        <p className='m-0'>My-File.dll</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={EPS} alt="" />
                        <p className='m-0'>My-File.eps</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={PSD} alt="" />
                        <p className='m-0'>My-File.psd</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={ZIP} alt="" />
                        <p className='m-0'>My-File.zip</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={PDF} alt="" />
                        <p className='m-0'>My-File.pdf</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={AVI} alt="" />
                        <p className='m-0'>My-File.avi</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={DLL} alt="" />
                        <p className='m-0'>My-File.dll</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={PDF} alt="" />
                        <p className='m-0'>My-File.pdf</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={AVI} alt="" />
                        <p className='m-0'>My-File.avi</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={DLL} alt="" />
                        <p className='m-0'>My-File.dll</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={EPS} alt="" />
                        <p className='m-0'>My-File.eps</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={PSD} alt="" />
                        <p className='m-0'>My-File.psd</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={ZIP} alt="" />
                        <p className='m-0'>My-File.zip</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={PDF} alt="" />
                        <p className='m-0'>My-File.pdf</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={AVI} alt="" />
                        <p className='m-0'>My-File.avi</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={DLL} alt="" />
                        <p className='m-0'>My-File.dll</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={PDF} alt="" />
                        <p className='m-0'>My-File.pdf</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={AVI} alt="" />
                        <p className='m-0'>My-File.avi</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                <div className={'bg-white p-20 rad-10 txt-c-mobile'}>
                    <i className={"fa-solid fa-download" + ' ' + styleFiles.icon} />
                    <div className={' text-center' + ' ' + styleFiles.box_img}>
                        <img src={DLL} alt="" />
                        <p className='m-0'>My-File.dll</p>
                    </div>
                    <p className='m-0 fw-bold c-gray '>Ibrahim</p>
                    <div className={'d-flex between-flex border-solid-top mt-2'}>
                        <p className='c-gray mt-2'>22/5/2020</p>
                        <p className='c-gray mt-2'>5.6MB</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}
