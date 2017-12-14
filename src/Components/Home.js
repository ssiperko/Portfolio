import React from 'react';
import {Display} from './ProjectDisplay';
import {Link} from 'react-router-dom';


export class Home extends React.Component{
    render(){
        return(
            <div>
                <Display />
            </div>
        );
    }
}



/*  <div className='projectsContainer'>
      <div className='row'>
          <div> <Link to = './calc'>calc</Link> </div>
      </div>
      <div className='row'>
          <div className='cell'><Link to = './wiki'>poop</Link> </div>
          <div className='cell'><Link to = './weather'>Weather</Link> </div>
      </div>
  </div>*/
