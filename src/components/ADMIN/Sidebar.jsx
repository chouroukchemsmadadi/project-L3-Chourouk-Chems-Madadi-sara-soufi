import React from 'react';
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill
} from 'react-icons/bs';
import { Link } from 'react-router-dom'; // ✅ استورد Link

import { FaHotel } from 'react-icons/fa'; // ✅ أضفنا أيقونة الفندق

// تم إضافة أيقونات جديدة للأقسام المطلوبة
import { FaBed, FaClipboardList, FaDollarSign, FaChartLine, FaServicestack } from 'react-icons/fa';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar sidebar-responsive" : "sidebar"}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <FaHotel className='icon_header' /> PMS
        </div>
        <span
          className='icon close_icon'
          onClick={OpenSidebar}
          role="button"
          tabIndex="0"
        >
          X
        </span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
  <Link to="/chambres">
    <FaBed className='icon' /> Les chambres
  </Link>
</li>
<li className='sidebar-list-item'>
          <Link to="/reservations">
            <FaClipboardList className='icon' /> Les réservations
          </Link> {/* ✅ Modifié pour utiliser Link */}
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsPeopleFill className='icon' /> Les employés
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <FaDollarSign className='icon' /> Tarifs {/* تم تغيير الأيقونة هنا */}
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <FaChartLine className='icon' /> Consultation des statistiques {/* تم تغيير الأيقونة هنا */}
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <FaServicestack className='icon' /> Gestion des services {/* تم تغيير الأيقونة هنا */}
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillGearFill className='icon' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
