import { styled } from 'styled-components';

const Demo = styled.div`
  display: inline-flex;
  gap: 10px;
  font-family: monospace;
  line-height: 21px;
  background: gray;
  border-radius: 2px;
  padding: 20px 10px;
  overflow-y: auto;
  width: 100%;

  .line-numbers {
    width: 20px;
    text-align: right;
    height: 9999px;
  }

  .line-numbers span {
    counter-increment: linenumber;
  }

  .line-numbers span::before {
    content: counter(linenumber);
    display: block;
    color: #506882;
  }

  textarea {
    flex: 1;
    min-width: 99%;
    line-height: 21px;
    overflow-y: scroll;
    padding: 0;
    border: 0;
    background-color: var(--editor-color-light);
    outline: none;
    resize: none;
    font-size: 1.3rem;
    color: var(--text-color-light);
  }
`;

export default Demo;
