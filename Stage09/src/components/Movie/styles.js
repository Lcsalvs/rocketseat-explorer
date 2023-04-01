import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 15px;
  width: 100%;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  > p {
    color: ${({ theme}) => theme.COLORS.GRAY_100};
  }

  > div {
    display: flex;
    gap: 8px;
  }
`