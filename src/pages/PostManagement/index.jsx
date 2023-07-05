import React, { useState, useEffect, useRef } from 'react'
import { MdOutlineSearch, MdRemoveRedEye } from "react-icons/md";
import Pagination from './components/Paginations';
import Popup from './components/Popup';


const perPage = [10, 25, 50, 100]
export default function PostManagement() {
    const [user, setUser] = useState([]);
    const [filterValue, setFilterValue] = useState('')
    const [db, setDb] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [valuePerPage, setValuePerPage] = useState(perPage[0]);
    const [statusOpenCf, setStatusOpenCf] = useState(false);
    const [dataPopup, setDataPopup] = useState({})
    const arrayUser = useRef([])

    const handleView = (id) => {
        setDataPopup(...arrayUser.current?.filter(item => item.id == id))
        setStatusOpenCf(true)
    }

    const handleChange = (e) => {
        setValuePerPage(e.target.value);
    }

    const hanleSearch = () => {
        setDb(arrayUser.current?.filter(item => (item.title.includes(filterValue) || item.userId.toString().includes(filterValue))))
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
                const data = await response.json();
                arrayUser.current = data
                setDb(data);
                setUser(data.length ? data.slice(0, valuePerPage) : [])
            } catch (error) {
                // You can create an error state and set error here
                console.log(error);
            }
        }
        fetchUser();
        return () => {
            // Do some cleanup 
        };
    }, []);

    useEffect(() => {
        setUser(db.length ? db.slice(((currentPage == 1) ? 0 : (currentPage - 1) * valuePerPage), valuePerPage * currentPage) : [])
    }, [valuePerPage, currentPage, db]);


    return (
        <div>
            <p className='text-sky-500'>User Management</p>
            <div className='mt-12 px-[8%] resize-none'>
                <div className='flex w-full max-w-full justify-between mb-3'>
                    <div>
                        <span>Show</span>
                        <select className='border-[1px] mx-2 rounded' value={valuePerPage} onChange={handleChange}>
                            {
                                perPage.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))
                            }
                        </select>
                        <span>result per page</span>
                    </div>
                    <div className='flex'>
                        <input type="text" className='border-[1px] rounded px-2 py-1' placeholder='Filter by userId or title' value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />
                        <button className="rounded px-2  flex items-center ml-2 bg-blue-700 text-white" onClick={hanleSearch}><MdOutlineSearch className="h-4 w-5" /></button>
                    </div>
                </div>
                {db.length != 0 && (
                    <div>
                        <table className="table-fixed w-full">
                            <thead>
                                <tr className='text-left w-full'>
                                    <td className='text-sky-500 font-medium w-[15%] pb-1'>Id</td>
                                    <td className='text-sky-500 font-medium w-[15%]'>User ID</td>
                                    <td className='w-[60%] text-sky-500 font-medium'>Title</td>
                                    <td className='w-[10%] font-medium text-center'>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user?.map((item, index) => {
                                        return (
                                            <tr className={`${(index % 2 != 0) && 'bg-neutral-100'}`} key={item.id}>
                                                <td className='py-2'>{item.id}</td>
                                                <td>{item.userId}</td>
                                                <td className='w-[60%]'>{item.title}</td>
                                                <td className='flex justify-center'>
                                                    <button className="bg-emerald-500 text-white rounded px-1 py-1 flex items-center" onClick={() => handleView(item.id)}><MdRemoveRedEye className="h-4 w-4" /></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <Pagination itemsPerPage={valuePerPage} totalItems={db.length} currentPage={currentPage} setCurrentPage={setCurrentPage} valuePerPage={valuePerPage} />
                        <Popup statusOpenCf={statusOpenCf} setStatusOpenCf={setStatusOpenCf} dataPopup={dataPopup} />
                    </div>
                )}
            </div>
        </div>
    )
}
