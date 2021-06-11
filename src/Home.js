import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className ='home'>
            <div className="home__container">
                <img 
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" 
                />
                <div className="home__row">
                    <Product
                    id = "12321341" 
                    title= 'The lean startup : How Constatnt Innovation Creates'
                    price = {29.99}
                    image ="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating ={5} />
                    <Product
                    id="49538094"
                    title="Kenwood Kmix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and whisk, 5 liter Glass Bowl "
                    price= {239.0}
                    rating={4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                     />
                </div>
                <div className="home__row">
                <Product
                id="4903850"
                title="Samsung LC49RG0SSUXEN 49' Curved LED gaming Monitor"
                price= {199.9}
                rating ={3}
                image = "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                
                />
                <Product
                id= "23445930"
                title = "Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric "
                price ={98.99}
                rating= {5}
                image = "https://media.very.co.uk/i/very/PGLTG_SQ1_0000000071_CHARCOAL_SLF?$300x400_retinamobilex2$"
                />
                <Product 
                id="3254354345"
                title="New Apple ipad pro(12.9-inch, wi-fi, 128GB)- Silver (4th Generation)"
                price = {598.99}
                rating ={4}
                image ="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
                </div>
                <div className="home__row">
                <Product
                    id = "98829332"
                    title ="Samsung LC498EN 49' Curved LED Gaming Monitor- Super Ultra wide  "
                    price = {1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
                </div>
            </div>
        </div>
    );
}

export default Home;
