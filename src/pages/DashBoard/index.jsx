import React from 'react'
import Subcription from './components/Subcription'
import Revenue from './components/Revenue'
import { useLocation, Navigate, Link } from 'react-router-dom'

export default function DashBoard() {
    const location = useLocation();
    const urlSub = "/dashboard/subcription"
    const urlRe = "/dashboard/revenue"
    return (
        <div className='w-full'>
            <p className='text-sky-500'>Dashboard</p>
            <div className='mt-3'>
                <div className='pl-5 flex mb-5'>
                    <Link to={urlSub} className={`${location.pathname == urlSub ? 'border-sky-500 text-sky-500' : 'border-slate-500 text-slate-500'} border-[1px] rounded-[3px] px-2 py-1 mr-3`}>Subcription</Link>
                    <Link to={urlRe} className={`${location.pathname == urlRe ? 'border-sky-500 text-sky-500' : 'border-slate-500 text-slate-500'} border-[1px] rounded-[3px] px-2 py-1 mr-3`}>Revenue</Link>
                </div>
                <div className='px-[8%] overflow-hidden'>
                    {location.pathname == urlSub && <Subcription />}
                    {location.pathname == urlRe && <Revenue />}
                </div>
            </div>
        </div>
    )
}
