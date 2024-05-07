import { styled } from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const InfoDiv = styled.div`
  max-width: 60rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  h3 {
    width: 20%;
  }
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 80%;

    input {
      flex: 1;
      padding: 0.8rem 1.5rem;
      height: 3rem;
      border: 1px solid var(--gray-200);
      outline: none;
      border-radius: 6px;
      background: var(--input-bg);
      color: var(--text-color);
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8rem 1.5rem;
      height: 3rem;
      background-color: var(--gray-200);
      color: var(--text-color);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background-color: var(--success-color);
        color: var(--text-color);
        filter: brightness(0.9);
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    h3 {
      width: 100%;
    }

    div {
      width: 100%;
    }
  }
`;

export const SignOutButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--gray-200);
  color: var(--danger-color);
  font-size: var(--text-size);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: var(--danger-color);
    color: var(--text-color);
    filter: brightness(0.9);
  }
`