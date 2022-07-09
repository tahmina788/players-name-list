import React, { useContext } from 'react';
import { MyContext } from "./context";
import Stage1 from "./components/stage_1";
import Stage2 from "./components/stage_2";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';

const App = () => {
  const context = useContext(MyContext);
  console.log(context);
  return(
    <div className="wrapper">
       <div className="center-wrapper">
          <h2>Who pays the bill?</h2>
          {context.state.stage === 1 ? 
             <Stage1/>
             :
             <Stage2/>        
          }
       </div>
    </div>
  )

}

export default App;
