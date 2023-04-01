import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  main {
    max-width: 1120px;
    margin: 40px auto 0;
    padding: 0 60px;
  }
`

export const Form = styled.form`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  padding-right: 10px;
  gap: 40px;
  
  > h1 {
    font-weight: 500;
    font-size: 36px;
  }
  
  > div {
    display: flex;
    gap: 20px;
  }
  
  > h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > .movie-tag {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 16px;
    align-items: center;
    justify-content: start;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 8px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .buttons {
    margin-bottom: 50px;
  }

  /*  SCROLL  */
  ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 100px;
      }
      ::-webkit-scrollbar-button:start:decrement {
        height: 100px;
        display: block;
        background-color: transparent;
      }
`