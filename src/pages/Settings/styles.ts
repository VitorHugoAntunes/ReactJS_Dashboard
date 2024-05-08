import styled from "styled-components";

export const SettingsContainer = styled.main`
  div {
    flex-direction: column;
    align-items: flex-start;
  }

  section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;

    > div {
      flex: 1;
      padding: 0;
      cursor: pointer;
      border-radius: 6px;

      &:hover {
        border: 1px solid var(--accent-color);
      }
    }

    div div img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    div div:first-child {
      width: 100%;
      height: fit-content;
      background-color: var(--gray-300);
    }

    div div:last-child {
      padding: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
    }

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      > div {
        flex: 1;
        max-width: 15rem;
        width: 100%;
      }
    }
  }
`;