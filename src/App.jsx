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
`;

const Title = styled.h1`
margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
color: #6a7282`

const Container = styled.div`
display: flex;
align-items: center;
gap: 2rem;
margin-top: 3rem;`;

const Card = styled.div`
padding: 1rem 2rem;
padding-left: 2rem;
background: white;
border-radius: 8px;
box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
`;

const CardTitle = styled.h3`
margin-bottom: 0.8rem;
font-size: 1.2rem;`;

const Button = styled.button`
padding: 1rem 2rem;
background: #28a745;
border: none;
border-radius: 8px;
margin-top: 2rem;
transition: background 0.3s;
font-size: 1rem;
color: white;
cursor: pointer;

&:hover {
background: white;
color: #28a745;
border: 1px solid #28a745;
border-radius: 2rem; 
}`


function App() {
 return (
      <>
  <DashboardLayout>
      <Title>📚 DashBoard Overview</Title>
      <SubTitle>Overview of students, courses, and instructors</SubTitle>

      <Container>
        <Card>
          <CardTitle>👤Students</CardTitle>
          <p>Registered student </p>
        </Card>
        <Card>
          <CardTitle>🎓 Courses</CardTitle>
          <p>Available course</p>
        </Card>
        <Card>
          <CardTitle>🧑‍🏫 Instructors</CardTitle>
          <p>Active teaching</p>
          </Card>

      </Container>
      <Button>View All Courses</Button>


    </DashboardLayout>

    </>
  )
}

export default App
