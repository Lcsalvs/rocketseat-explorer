import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  font-weight: 400;

  padding: 6px 16px;
  border-radius: 8px;
  margin-right: 6px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`