// src/components/layout/LeftSidebar.jsx
import styled from '@emotion/styled';

const Sidebar = styled.aside`
  width: 260px;
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
      <div style={{ padding: '1.5rem 1.5rem 2rem' }}>
        <h2 style={{ margin: 0, color: '#28a745' }}>TIMELY HUB</h2>
      </div>

      <MenuList>
        <li>My Schedule</li>
        <li>Uploads</li>
        <li>Smart quiz</li>
        <li>Courses</li>
        <li >Daily Review</li>
        <li>TriviaZone</li>
        <li>Mind Gym</li>
        <li>Instructor Hub</li>
        <li>Leaderboard</li>
        <li>Analytics</li>
        <li>History</li>
        <li>Setting</li>
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
            <strong>popoola ibahim</strong>
           
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