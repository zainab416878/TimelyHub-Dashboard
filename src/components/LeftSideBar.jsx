// src/components/layout/LeftSidebar.jsx
import styled from '@emotion/styled';
import logo from "../assets/timelyhub-logo.png"

import { GoTrophy } from "react-icons/go";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { TiFlashOutline } from "react-icons/ti";
import { LuBrain } from "react-icons/lu";
const Sidebar = styled.aside`
  width: 230px;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  background: white;
  border-right: 1px solid #e0e0e0;
  padding: 1rem 0;
  z-index: 10;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    transition: background 0.2s;
    display:flex;
    gap:10px;
    alignItems: center;

   
    

    &:hover,
    &.active {
      background: #DBFCE7;
      color: black;
    }
  }
`;

const LeftSidebar = () => {
  return (
    <Sidebar>
      <div style={{ padding: '1rem 1rem 1rem' }}>
        <img src= {logo} alt="" style={{width:"70%",height:"80%"}} />
      </div>

      <MenuList>
        <li> <span><AiOutlineSchedule /></span>My Schedule</li>
        <li>Uploads</li>
        <li>Smart quiz</li>
        <li>Courses</li>
        <li><span><GoHistory /></span>Daily Review</li>
        <li> <span><TiFlashOutline size={20}/></span>TriviaZone</li>
        <li><span><LuBrain /></span>Mind Gym</li>
        <li>Instructor Hub</li>
        <li> <span><GoTrophy /></span>Leaderboard</li>
        <li>Analytics</li>
        <li> <span><GoHistory /></span>History</li>
        <li> <span><IoSettingsOutline /></span>Setting</li>
      </MenuList>

      <div style={{ padding: '2rem 1.5rem', marginTop: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#0066ff',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            P
          </div>
          <div>
            <p>popoola ibahim</p>
           
          </div>
        </div>
        <div style={{ marginTop: '1rem', color: '#28a745', cursor: 'pointer' }}>
          Logout
        </div>
      </div>
    </Sidebar>
  );
}

export default LeftSidebar