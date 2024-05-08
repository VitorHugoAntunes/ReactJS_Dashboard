import { styled } from 'styled-components'

export const Container = styled.div`
   
   > div {
    flex-direction: column;
    align-items: self-start;
   }

   section {
    flex: 1;
    width: 100%;
    margin-top: 2rem;
   }

   ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
   }
`