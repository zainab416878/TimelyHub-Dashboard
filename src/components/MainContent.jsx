// src/components/layout/MainContent.jsx
import styled from '@emotion/styled';

const LEFT_WIDTH = '260px';
const RIGHT_WIDTH = '260px';

const Content = styled.main`
  margin-left: ${LEFT_WIDTH};
  margin-right: ${RIGHT_WIDTH};
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background: #f8f9fc;
`;
const MainContent = ({ children }) => {
  return <Content>{children}</Content>;
}


export default MainContent