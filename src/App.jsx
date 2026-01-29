/**@jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled"
import LeftSideBar from "./components/LeftSideBar"
import RightSideBar from "./components/RightSideBar"

import MainContent from "./components/MainContent";

import DashboardLayout from "./components/DashboardLayout";
const Page = styled.div`
width:100vw;
height:100vh;
background:grey
`

function App() {
 return (
      <>
  <DashboardLayout>
      <h1>Daily Review Hub</h1>
      <p>Review your past quizzes and strengthen your knowledge with spaced repetition.</p>

      {/* Your quiz card, etc. */}
      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
        <h3>Quiz Session</h3>
        <p>Due Now • GENERAL</p>
        <p>Last reviewed with 3 confidence.</p>
        <p>15 Questions</p>

        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
          <button style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '6px' }}>
            Delete
          </button>
          <button style={{ background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '6px' }}>
            Start →
          </button>
        </div>
      </div>
    </DashboardLayout>

    </>
  )
}

export default App
