import React from 'react'
import routes from '../pages/routes'
import { Link } from 'react-router-dom'

export default function Navigator() {
  return (
    <nav className='pr-3'>
        <ul>
            {
                routes.map(item => {
                    return (
                        <li className='pt-3 text-right border-b-[1px] border-slate-400' key={item.name}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}
