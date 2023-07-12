import styled from 'styled-components';
import { mobile } from '../responsiveness';

export const Container = styled.div`
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  height: 98vh;
  display: flex;
  margin: 10px;
`;

export const CardRowWrapper = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  ${mobile({ width: '75%' })}
`;

export const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  width: 100%;
  display: flex;
  ${mobile({ width: '75%' })}
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SingleTicketWrapper = styled.div`
  max-height: 700px;
  overflow: auto;
  padding: 10px;
  border-radius: 10px;
  border-bottom: none;
`;

export const TimeLineHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const TimeLineIconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid #cce3f8;
  border-radius: 10px;
  height: fit-content;
  margin-right: 15px;
`;

export const TicketItemHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TicketItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 5px;
  background: #cde3f8;
  width: 350px;
  margin-bottom: 10px;
`;

export const TicketMessage = styled.div`
  border-radius: 10px;
  height: 50px;
  background: white;
  padding: 10px;
`;

export const SwitchWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const Title = styled.h1`
  font-size: 15px;
  font-weight: 500;
`;

export const Paragraph = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

export const Button = styled.button`
  padding: 15px 20px;
  background-color: #3b8ede;
  color: ${({ color }) => (color ? color : 'white')};
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
  position: absolute;
  border: none;
  margin-right: 5px;
  height: 20px;
  align-items: center;
  display: flex;
  border-radius: 5px;
`;
