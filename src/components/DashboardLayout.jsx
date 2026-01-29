// src/components/layout/DashboardLayout.jsx
import styled from '@emotion/styled';
import LeftSidebar from './LeftSideBar';
import RightSidebar from './RightSideBar';
import MainContent from './MainContent';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8f9fc;
`;

const  DashboardLayout = ({ children }) => {
  return (
    <Container>
      <LeftSidebar />
      <MainContent>{children}</MainContent>
      <RightSidebar />
    </Container>
  );
}

export default DashboardLayout