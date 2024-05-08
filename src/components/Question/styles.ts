import styled from 'styled-components';

export const ListItem = styled.li<{ open: boolean }>`
  background-color: var(--gray-300);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;

  .answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s, padding 0.3s;
    
    &.visible {
      max-height: 400px;
      padding-top: 2rem;
    }
  }
`;

export const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-weight: bold;
      color: var(--gray-100);
    }
  }
`