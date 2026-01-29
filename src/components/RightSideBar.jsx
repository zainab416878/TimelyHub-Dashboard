// src/components/layout/RightSidebar.jsx
import styled from '@emotion/styled';

const Sidebar = styled.aside`
  width: 260px;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background: white;
  border-left: 1px solid #e0e0e0;
  padding: 1.5rem;
  z-index: 10;
`;

const RightSidebar = () => {
  return (
    <Sidebar>
      <h3>Event Management</h3>

      <div className="calendar" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <strong>Jan 2026</strong>
          <div>〈 〉</div>
        </div>

        {/* Placeholder calendar grid – replace with real calendar later */}
    
      </div>

      <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '8px' }}>
        <strong>Upcoming Events</strong>
        <div style={{ marginTop: '1rem', padding: '0.8rem', background: '#f0fff0', borderRadius: '6px' }}>
          15:00 - class
          <br />
          Jan 30
        </div>
      </div>

      <button
        style={{
          marginTop: '1.5rem',
          background: '#28a745',
          color: 'white',
          border: 'none',
          padding: '0.8rem 1.5rem',
          borderRadius: '6px',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        + Add New Event
      </button>
    </Sidebar>
  );
}

export default RightSidebar