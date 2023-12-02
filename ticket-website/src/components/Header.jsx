import React from 'react'
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">

      <ul>
        <div className="headerLeft">
          <li><Link className="logo" to='/'>TICKET APP</Link></li>
          <li><Link className="link" to='/about'>Hakkımızda</Link></li>
          <li><Link className="link" to='/details'>Detaylar</Link></li>
        </div>
        <div className="headerRight">
          <li className='glass'><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
          <li><SearchBar /></li>
        </div>
      </ul>

    </div>
  )
}

export default Header