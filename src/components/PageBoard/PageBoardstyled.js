import styled from "styled-components";

export const Wrapper = styled.div`
  border: 2px solid #9ca3af;
  margin: 40px;
  padding: 20px;
  background: #e5e7eb;
`;

export const Title = styled.h1`
  text-align: center;
  color: #2b2b2b;
  font-size: 30px;
  border: 2px solid #3b82f6;
  padding: 10px;
  margin-bottom: 30px;
  background: #dbeafe;
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;