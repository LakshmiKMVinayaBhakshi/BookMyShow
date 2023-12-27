import React from 'react';
import '../Footer/Footer.css'
// import logo from '../Images/app-logo.png'
import { FaXTwitter, FaFacebookF,FaInstagram } from "react-icons/fa6";
import { FaPinterestP,FaYoutube,FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
return (
    <div >
    <footer>
        <div className='footer-one'>
        <div className='list-you-show'>
        <img  className='temple-img' src='https://in.bmscdn.com/webin/common/icons/hut.svg'></img>
        </div>
        <div>
            <h1 className='list-your-show'>List Your Show</h1>
        </div>
    <div className='p-class-div'>
    <p className='p-class'>Got a show,event,activity or a great experience? Partner with us & get listed on BookMyShow</p>
        </div>   
        <div>
            <button className='connect-btn'>Connect today!</button>
        </div>
        </div>

        <div className='footer-two'>
            <div className='footer-two-inside'>
                <div className='footer-two-logo-one'>
                <img className='footer-logo-one' src='https://cdn-icons-png.flaticon.com/512/49/49128.png'></img>
                <div class="logo-text">24/7 CUSTOMER CARE</div>
                </div>
            <div className='footer-two-logo-two'>
            <img className='footer-logo-one' src='https://cdn-icons-png.flaticon.com/512/753/753764.png'></img>
            <div class="logo-text">RESEND BOOKING CONFIRMATION</div>
            </div>
            <div className='footer-two-logo-three'>
            <img className='footer-logo-one' src='https://t3.ftcdn.net/jpg/02/23/22/68/360_F_223226803_yrXmCxo4ZkrKoXCDayNjqtZF3UNbRMPG.jpg'></img>
                <div class="logo-text">SUBSCRIBE TO THE NEWSLETTER</div>
            </div>
        </div>
        </div>
        <div className='footer-three'>
            <div className='footer-three-container'>
            <div className='footer-stream'>
            <p >MOVIES NOW STREAMING IN BENGALURU</p>
            <h5>Salaar: Cease Fire - Part 1|Dunki|Aquaman and The Last Kingdom| Crocodi;e Island Coaster & Dinosaur Era (7D)|Animal|Hi Nanna|Neru|Sam Bahadur| Kaiva </h5>
            </div>
            <div className='footer-stream'>
            <p >UPCOMING MOVIES IN BENGALURU </p>
            <h5>Aranam|Odavum Mudiyadu Oliyavum Mudiyadu| Kabuliwala|Pradhan|Aayiram Porkaasukal|Jigiri Dosthu|Miriam Maa|Badmaash|Adiyanthiravasthakalanthe Anuragam|Devil:The british secret Agent</h5>
            </div>
            <div className='footer-stream'>
            <p >MOVIES BY GENRE</p>
            <h5>Drama Movies|Thriller Movies|Action Movies|Romantic Movies|Adventure Movies|Fantasy Movies|Horror Movies|Comedy Movies|Crime Movies|Suspense Movies</h5>
            </div>
            <div className='footer-stream'>
            <p >MOVIES BY LANGUAGE</p>
            <h5>Movies in kannada|movies in English|Movies in Hindi|Movies in Telugu|Movies in Tamil|Movies in English 7D|Movies in Malayalam|Movies in Chattisgarhi|Movies in khasi|Movies in Tulu</h5>
            </div>
            <div className='footer-stream'>
            <p>SPORTS EVENTS IN BENGALURU</p>
            <h5>Cricket|Archery|Anthletics|Badminton|Basketball|Baseball|Boat Race|Bowling|Boxing | Card Games</h5>

            </div>
            <div className='footer-stream'>
            <p >EVENTS IN CITIES</p>
            <h5>Events in Mumbai|Events in Delhi-NCR|Events in Chennai|Events in Bengaluru|Events in Hyderabad|Events in Pune|Events in Ahmedabad|Events in Kolkata|Events in Kochi</h5>
            </div>
            <div className='footer-stream'>
            <p>CINEMAS IN TOP CITIES</p>
            <h5>Cimemas in Mumbai|Cimemas in Delhi-NCR|Cimemas in Chennai|Cimemas in Bengaluru|Cimemas in Hyderabad|Cimemas in Pune|Cinemas in Ahmedabad|Cinemas in Kolkata|Cinemas in Kochi</h5>
            </div>
            <div className='footer-stream'>
            <p>PLAYES IN TOP CITIES</p>
            <h5>Plays in Mumbai|Plays in Delhi-NCR|Plays in Chennai|Plays in Bengaluru|Plays in Hyderabad|Plays in Pune|Plays in Ahmedabad|Plays in Kolkata|Plays in Kochi</h5>
            </div>
            <div className='footer-stream'>
            <p>HELP</p>
            <h5>About Us|Contact Us|Current Opening|Press Release|Press Coverage|Sitemap|FAQ's|Terms and Conditions|Privacy Policy</h5>
            </div>
            <div className='footer-stream'>
            <p>BOOKMYSHOW EXCLUSIVES</p>
            <h5>Lollapalooza  India|Superstar|BookASmile|Corporate Vouchers|Gift Cards|List My Show|Offers|Stream|Trailers</h5>
            </div>
            <div className='footer-stream'>
            <p>NEW YEAR EVE & CHRISTMAS CELEBRATION IN BENGALURU</p>
            <h5>New Year Parties | Christmas | Star Hotel Experience|Dinner Exerience|Live Performances|Nature Trails|staycation|Unique Experiences</h5>
            </div>
            </div>
            <div className='book-logo-main'>
                <div className='right-horizon'></div>
                <div>
                <img className='book-logo' src='https://in.bmscdn.com/webin/common/icons/logo.svg'></img>
                </div>
                <div className='left-horizon'></div>
            </div>
            <div className="social-icons">
                <FaFacebookF className='social-icons-face' />
                <FaXTwitter className='social-icons-face'/>
                <FaInstagram  className='social-icons-face'/>
                <FaYoutube className='social-icons-face' />
                <FaPinterestP className='social-icons-face'/>
                <FaLinkedinIn className='social-icons-face' />
                </div>
            <div className='copy-right'>
            <div>Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.<br></br>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</div>
            </div>
            </div>
    </footer>
    </div>
    
);
};

export default Footer;
