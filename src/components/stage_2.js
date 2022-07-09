import React, { useContext } from 'react';
import { MyContext } from '../context';

const Stage2 = () => {
    const context = useContext(MyContext);

    return(
        <>
          <div className='result_wrapper'>
            
            <h5>winner is: </h5>
            <div>{context.state.result}</div>
          </div>
          <div className='action_button' onClick={()=> context.resetGame()}>
             START OVER
          </div>
          <div className='action_button btn_2' onClick={()=> context.getNewWinner()}>
             GET NEW WINNER
          </div>
           
        </>
    )
}

export default Stage2;
