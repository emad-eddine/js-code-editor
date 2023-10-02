import { styled } from 'styled-components';

const Wrapper = styled.nav`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  margin-left: 3rem;
  padding: 1rem;

  nav img {
    display: inline;
    width: 10%;
    aspect-ratio: 1;
  }

  nav span {
    font-weight: bold;
    color: var(--text-color-light);
    font-size: 1.5rem;
    margin-left: 1rem;
  }
`;

export default Wrapper;
