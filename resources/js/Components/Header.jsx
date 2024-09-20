import React from 'react'
import { Link } from '@inertiajs/react'

const Header = ( props ) => {


  return (
    <header className="container position-absolute top-0 start-50 translate-middle">
                <div className="row">
                    <div className="header menu logo col-2 me-5 d-flex justify-content-center">
                        <span className="">
                            <img src={props.logoRoute} alt="" />
                        </span>
                    </div>
                    <ul className="col d-flex justify-content-between align-items-center">
                        <li>
                            <Link>Domov</Link>
                        </li>
                        <li>
                            <Link>O nas</Link>
                        </li>
                        <li>
                            <Link>Masaze</Link>
                        </li>
                        <li>
                            <Link>Cennik</Link>
                        </li>
                        <li>
                            <Link>Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </header>
  )
}

export default Header