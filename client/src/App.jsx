import { useState } from 'react';
import Wrapper from './assets/wrappers/AppWrapper';
import Logo from './components/Logo';



function App() {
  const [switchToEditor, setSwitchToEditor] = useState(true);
  
  



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
              
            ></textarea> 
      
            <button type="button" className="btn run-btn">
              Run
            </button>
          </form>
        ) : (
          <div className="output-container">
            
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default App;
