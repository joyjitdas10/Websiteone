import React from 'react';
import { Link} from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';





function Nav() {
        return(
                
                        <nav className='nav nav-pills nav-fill'>

                            <Link to ="Table">
                                <span className='nav-link'>TABLE</span>
                            
                            </Link>
                            <Link to = "Form">
                            
                                <span className='nav-link'>FORM</span>
                            </Link>

                        
                        
                        </nav>
            
        );

}

export default Nav;
