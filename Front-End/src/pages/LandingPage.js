import React from 'react';

function LandingPage() {
    return (
        <div>
            <div className='landing-photo'>
                <div className='landing-message'>
                    <h2>Cafe Thrifty</h2>
                    <h4>"Vintage curated goods for your closet and your heart..."</h4>
                </div>
                <div>
                    <div className='featured-section'>
                        <h3 className='featured-heading'>Featured Items</h3>
                        <div className='featured-items-container'>
                            {/*for each featured item, create a card that has necessary info*/}
                            <div className='featured-1'>
                                <img src='' alt='80s AE bomber jacket' className='featured-1-img'></img>
                                <h5>Vintage Jacket</h5>
                                <p>Vintage 80's Bomber Jacket -- American Eagle</p>
                                <p>$24.99</p>
                                <button>View Item</button>
                                <button>Add to Cart</button>
                            </div>
                            <div className='featured-1'>
                                <img src='' alt='80s AE bomber jacket' className='featured-1-img'></img>
                                <h5>Vintage Jacket</h5>
                                <p>Vintage 80's Bomber Jacket -- American Eagle</p>
                                <p>$24.99</p>
                                <button className='viewitem-btn'>View Item</button>
                                <button className='addtocart-btn'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;