import { styled } from 'styled-components';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color-light);
  display: flex;
  flex-direction: column;

  .container {
    width: 100vw;
    height: 100%;
    flex: 1;
    background-color: blue;
    display: flex;
    flex-direction: column;
  }

  .container-header {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    padding: 1rem;
    background-color: gray;
  }

  .btn {
    width: fit-content;
    height: fit-content;
    padding: 10px 15px;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 1rem 0 1rem;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #445d48;
    background-color: var(--background-color-dark);
    color: white;
  }

  .btn:hover {
    background-color: #445d48;
  }

  form {
    display: flex;
    flex: 1;
    background-color: var(--editor-color-light);
  }

  .code-editor-container {
    flex: 1;
    position: relative;
    font-size: 1.5rem;
    resize: none;
    overflow-y: scroll;
    padding-left: 1.5rem;
    padding-top: 10px;
  }

  .run-btn {
    position: absolute;
    bottom: 1rem;
    right: 0;
    z-index: 99;
  }

  .output-container {
    background-color: var(--editor-color-light);
    flex: 1;
    position: relative;
    color: var(--background-color-dark);
  }

  .output-container * {
    margin: 1rem 2rem;
    font-weight: 500;
  }
`;

export default Wrapper;
