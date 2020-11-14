import React from "react";
import { Link } from "react-router-dom";


function Navbars(){
  
    function showHide(){
        var cdd = document.getElementById('categories_cont');
        cdd.classList.toggle('hide');
        document.getElementById('arrowbtn').classList.toggle('rot')
    }
    return(
        <div className="nav_container">
            <div className="my_row">
                <div className="nav_col">
                    <div className="all_catg" onClick={showHide}>
                        <button>
                            All Categories
                        </button>
                        <span id="arrowbtn">
                        <svg width="22px" height="22px" fill="#002f34" viewBox="0 0 1024 1024"><path  d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                            </svg>
                        </span>
                        <div className="categories_cont hide" id="categories_cont">
                    <div className="categories_inner">
                        <div className="categories_sec">
                            <h3>Vehicles</h3>
                            <li><Link to="/shop">Tractors & Trailers</Link></li>
                            <li><Link to="/shop">Boats</Link></li>
                            <li><Link to="/shop">Other Vehicles</Link></li>
                            <li><Link to="/shop">Rickshaw & Chingchi</Link></li>
                            <li><Link to="/shop">Buses, Vans & Trucks</Link></li>
                            <li><Link to="/shop">Spare Parts</Link></li>
                            <li><Link to="/shop">Cars Accessories</Link></li>
                            <li><Link to="/shop">Cars on Installments</Link></li>
                            <li><Link to="/shop">Cars</Link></li>
                            <h3>Mobiles</h3>
                            <li><Link to="/shop">Mobile Phones</Link></li>
                            <li><Link to="/shop">Accessories</Link></li>
                            <li><Link to="/shop">Tablets</Link></li>
                            <h3>Electronics & Home Appliances</h3>
                            <li><Link to="/shop">Washing Machines & Dryers</Link></li>
                            <li><Link to="/shop">Fridges & Freezers</Link></li>
                            <li><Link to="/shop">AC & Coolers</Link></li>
                            <li><Link to="/shop">Kitchen Appliances</Link></li>
                            <li><Link to="/shop">Generators, UPS & Power Solutions</Link></li>
                            <li><Link to="/shop">Other Home Appliances</Link></li>
                            <li><Link to="/shop">Games & Entertainment</Link></li>
                            <li><Link to="/shop">Cameras & Accessories</Link></li>
                            <li><Link to="/shop">TV - Video - Audio</Link></li>
                            <li><Link to="/shop">Computers & Accessories</Link></li>
                            <h3>Property for Sale</h3>
                            <li><Link to="/shop">Portions & Floors</Link></li>
                            <li><Link to="/shop">Shops - Offices - Commercial Space</Link></li>
                            <li><Link to="/shop">Apartments & Flats</Link></li>
                            <li><Link to="/shop">Houses</Link></li>
                            <li><Link to="/shop">Land & Plots</Link></li>
                        
                        </div>
                        <div className="categories_sec">
                            <h3>Animals</h3>
                            <li><Link to="/shop">Other Animals</Link></li>
                            <li><Link to="/shop">Pet Food & Accessories</Link></li>
                            <li><Link to="/shop">Horsess</Link></li>
                            <li><Link to="/shop">Livestock</Link></li>
                            <li><Link to="/shop">Dogs</Link></li>
                            <li><Link to="/shop">Cats</Link></li>
                            <li><Link to="/shop">Hens & Aseel</Link></li>
                            <li><Link to="/shop">Birds</Link></li>
                            <li><Link to="/shop">Fish & Aquariums</Link></li>
                            <h3>Furniture & Home Decor</h3>
                            <li><Link to="/shop">Other Household Items</Link></li>
                            <li><Link to="/shop">Office Furniture</Link></li>
                            <li><Link to="/shop">Curtains & Blinds</Link></li>
                            <li><Link to="/shop">Rugs & Carpets</Link></li>
                            <li><Link to="/shop">Painting & Mirrors</Link></li>
                            <li><Link to="/shop">SGarden & Outdoor</Link></li>
                            <li><Link to="/shop">Tables & Dining</Link></li>
                            <li><Link to="/shop">Home Decoration</Link></li>
                            <li><Link to="/shop">Beds & Wardrobes</Link></li>
                            <li><Link to="/shop">Sofa & Chairs</Link></li>
                            <h3>Business, Industrial & Agriculture</h3>
                            <li><Link to="/shop">Medical & Pharma</Link></li>
                            <li><Link to="/shop">Other Business & Industry</Link></li>
                            <li><Link to="/shop">Agriculture</Link></li>
                            <li><Link to="/shop">Construction & Heavy Machinery</Link></li>
                            <li><Link to="/shop">Trade & Industrial</Link></li>
                            <li><Link to="/shop">Food & Restaurants</Link></li>
                            <li><Link to="/shop">Business for Sale</Link></li>
                            <h3>Bikes</h3>
                            <li><Link to="/shop">Scooters</Link></li>
                            <li><Link to="/shop">ATV & Quads</Link></li>
                            <li><Link to="/shop">Bicycles</Link></li>
                            <li><Link to="/shop">Prams & Walkers</Link></li>
                            <li><Link to="/shop">Spare Parts</Link></li>
                            <li><Link to="/shop">Motorcycles</Link></li>
                        </div>
                        <div className="categories_sec">
                            <h3>Fashion & Beauty</h3>
                            <li><Link to="/shop">Other Fashion</Link></li>
                            <li><Link to="/shop">Lawn & Pret</Link></li>
                            <li><Link to="/shop">Wedding</Link></li>
                            <li><Link to="/shop">Watches</Link></li>
                            <li><Link to="/shop">Skin & Hair</Link></li>
                            <li><Link to="/shop">Make Up</Link></li>
                            <li><Link to="/shop">Jewellery</Link></li>
                            <li><Link to="/shop">Footwear</Link></li>
                            <li><Link to="/shop">Clothes</Link></li>
                            <li><Link to="/shop">Accessories</Link></li>
                            <h3>Property for Rent</h3>
                            <li><Link to="/shop">Land & Plots</Link></li>
                            <li><Link to="/shop">Vacation Rentals - Guest Houses</Link></li>
                            <li><Link to="/shop">Roommates & Paying Guests</Link></li>
                            <li><Link to="/shop">Rooms</Link></li>
                            <li><Link to="/shop">Shops - Offices - Commercial Space</Link></li>
                            <li><Link to="/shop">Portions & Floors</Link></li>
                            <li><Link to="/shop">Apartments & Flats</Link></li>
                            <li><Link to="/shop">Houses</Link></li>
                            <h3>Jobs</h3>
                            <li><Link to="/shop">Other Jobs</Link></li>
                            <li><Link to="/shop">Part - Time</Link></li>
                            <li><Link to="/shop">Domestic Staff</Link></li>
                            <li><Link to="/shop">Medical</Link></li>
                            <li><Link to="/shop">Manufacturing</Link></li>
                            <li><Link to="/shop">Accounting & Finance</Link></li>Link                            <li><Link to="/shop">Human Resources</Link></li>
                            <li><Link to="/shop">Clerical & Administration</Link></li>
                            <li><Link to="/shop">Hotels & Tourism</Link></li>
                            <li><Link to="/shop">IT & Networking</Link></li>
                            <li><Link to="/shop">Sales</Link></li>
                            <li><Link to="/shop">Customer Service</Link></li>
                            <li><Link to="/shop">Education</Link></li>
                            <li><Link to="/shop">Advertising & PR</Link></li>
                            <li><Link to="/shop">Marketing</Link></li>
                            <li><Link to="/shop">Online</Link></li>
                        </div>
                        <div className="categories_sec">
                            <h3>Services</h3>
                            <li><Link to="/shop">Farm & Fresh Food</Link></li>
                            <li><Link to="/shop">Catering & Restaurant</Link></li>
                            <li><Link to="/shop">Home & Office Repair</Link></li>
                            <li><Link to="/shop">Movers & Packers</Link></li>
                            <li><Link to="/shop">Maids & Domestic Help</Link></li>
                            <li><Link to="/shop">Health & Beauty</Link></li>
                            <li><Link to="/shop">Event Services</Link></li>
                            <li><Link to="/shop">Electronics & Computer Repair</Link></li>
                            <li><Link to="/shop">Other Services</Link></li>
                            <li><Link to="/shop">Web Development</Link></li>
                            <li><Link to="/shop">Drivers & Taxi</Link></li>
                            <li><Link to="/shop">Car Rental</Link></li>
                            <li><Link to="/shop">Travel & Visa</Link></li>
                            <li><Link to="/shop">Education & Classes</Link></li>
                            <h3>Books, Sports & Hobbies</h3>
                            <li><Link to="/shop">Other Hobbies</Link></li>
                            <li><Link to="/shop">Gym & Fitness</Link></li>
                            <li><Link to="/shop">Sports Equipment</Link></li>
                            <li><Link to="/shop">Musical Instruments</Link></li>
                            <li><Link to="/shop">Books & Magazines</Link></li>
                            <h3>Kids</h3>
                            <li><Link to="/shop">Tractors & Trailers</Link></li>
                            <li><Link to="/shop">Kids Bikes</Link></li>
                            <li><Link to="/shop">Swings & Slides</Link></li>
                            <li><Link to="/shop">Prams & Walkers</Link></li>
                            <li><Link to="/shop">Toys</Link></li>
                            <li><Link to="/shop">Kids Furniture</Link></li>
                        </div>
                    </div>    
                </div>
                    </div>
                    <div className="navbars" >
                        <ul>
                            <li><Link to="/shop">Mobile Phones</Link></li>
                            <li><Link to="/shop">Cars</Link></li>
                            <li><Link to="/shop">Motorcycles</Link></li>
                            <li><Link to="/shop">Houses</Link></li>
                            <li><Link to="/shop">TV - Video - Audio</Link></li>
                            <li><Link to="/shop">Tablets</Link></li>  
                            <li><Link to="/shop">Land & Plots</Link></li>
                        </ul>
                    </div>  
                </div> 
            </div>
        </div>
        
    );
}


export default Navbars;