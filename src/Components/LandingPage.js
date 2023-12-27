import React from 'react'
import logo from '../Images/app-logo.png'
import '../Components/landingPage.css'


const LandingPage = () => {
return (
    <div>
    <div className='main-land-div'>
        <img className='book-logo' src={logo}></img>
        <div className='search-bar'>
        <i class="fa fa-search"></i>
            Search for movies, Events, Plays, Sports and Activities</div>
        <div>
        <select className='dropDown' name="city" id="place">
        <option value="bangalore">Bangalore</option>
        <option value="mysore">Mysore</option>
        <option value="Davangere">Davangere</option>
        <option value="mangalore">Mangalore</option>
        </select>
        </div>
        <div>
        <button className='sign-btn'>Sign in</button>
        </div>
        <div className='menu-bar'>
        <i className="fa fa-bars menu"></i>
        </div>
        </div>
    <>
    <div className='section-two'>
    <div className='sec-main-div'>
    <div className='left-side-section'>
        <div>Movies</div>
        <div>Stream</div>
        <div>Events</div>
        <div>Plays</div>
        <div>Sports</div>
        <div>Activities</div>
    </div>
    <div className='right-side-div'>
        <div>ListYourShow</div>
        <div>Corporates</div>
        <div>Offers</div>
        <div>GiftCards</div>
        
    </div>
    </div>
    </div>
    
    </>
    </div>
    
)
}

export default LandingPage