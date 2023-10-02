import { useState } from 'react';
import Wrapper from './assets/wrappers/AppWrapper';
import Logo from './components/Logo';



function App() {
  const [switchToEditor, setSwitchToEditor] = useState(true);
  const [inputCode, setInputCode] = useState('');
  const [outputResult, setOutputResult] = useState('');


  const runCode = () => {
    try {
      // Override console.log to capture the output
      const logs = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        logs.push(args.map((arg) => JSON.stringify(arg)).join(' '));
      };
      // Execute the user's JavaScript code
      eval(inputCode);
      // Restore the original console.log
      console.log = originalConsoleLog;
      // Set the captured logs as the output
      setOutputResult(logs.join('\n'));
    } catch (error) {
      setOutputResult(`Error: ${error.message}`);
    }
  };
  
  const screenWidth = window.innerWidth;
console.log(`Screen width: ${screenWidth}px`);
  return (
    <Wrapper>
      <Logo />

      <div className="container">
        <div className="container-header">
          <button
            type="button"
            className="btn"
            onClick={() => {
              setSwitchToEditor(true);
            }}
          >
            Main.js
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setSwitchToEditor(false);
            }}
          >
            Output
          </button>
        </div>

        {switchToEditor ? (
          <form method="post">

             <textarea
              id="code-editor-content"
              className='code-editor-container'
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="//Enter JavaScript code here"
              value={inputCode}
              
            ></textarea> 
      
            <button onClick={runCode} type="button" className="btn run-btn">
              Run
            </button>
          </form>
        ) : (
          <div className="output-container">
            <h2>Output:</h2>
            <h3>{outputResult}</h3>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default App;
