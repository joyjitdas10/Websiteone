import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import './Home.style.css';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className='header'>
            <Link to = "/">
                <HomeOutlinedIcon className="home__icon"/>          
            </Link>

        </div>
    )
}

export default Home
