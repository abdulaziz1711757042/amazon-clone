import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory} from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import './Payment.css';
import { getBasketTotal } from './reducer';
import { useStateValue } from './Stateprovider';
import axios from './axios';

function Payment() {
    const [ {basket, user}, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe(); 
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false); 
    const [processing , setProcessing] = useState("");

    const [clientSecrect, setClientSecrect] = useState(true); 
    useEffect(() =>{
        const getClientSecrect = async ()=>{
            const response = await axios({
                method: 'post',
                url: `/payments/create?total= ${getBasketTotal(basket) * 100 }`
            });
            setClientSecrect(response.data.clientSecrect)
        }
        getClientSecrect();
    }, [basket])

 
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing (true);
         const payload = await stripe.confirmCardPayment(clientSecrect, {
             payment_method:{
                 card : elements.getElement(CardElement)
             }
         }).then(({paymentIntent}) =>{
             setSucceeded (true);
             setError(null)
             setProcessing(false)

             history.replace("/orders")
         })
    }
    const handleChange = event=>{
        setDisabled(event.empty);
        setError(event.error? event.error.message: "")
    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to ="/checkout">{basket?.length} items </Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>East box nagar</p>
                        <p>Sarulia , Demra , Dhaka</p>

                    </div>

                </div>
                <div className="payment__section">
                   <div className="payment__title">
                       <h3>Review item and delivery
                       </h3>
                       </div> 
                       <div className="payment__items">
                           {basket.map(item =>(
                               <CheckoutProduct
                                  id = {item.id}
                                  title ={item.title}
                                  image={item.image}
                                  price= {item.price}
                                  rating ={item.rating}
                               
                               />
                           ))}
                       </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method </h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit} action="">
                            <CardElement  onChange = {handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                renderText ={(value) => (
                                    <h3> Order Total :{value}</h3>

                        
                                )}
                                decimalScale = {2}
                                value = {getBasketTotal(basket)}
                                displayType = {"text"}
                                thousandSeparator ={true}
                                prefix = {"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing ? <p> Processing </p> : "Buy Now"}
                                    </span>
                                </button>
                            </div>
                            {error && <div> {error} </div>}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
