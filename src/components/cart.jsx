import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slice/cartSlice";

const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const localStorageData = localStorage.getItem("reduxState");
        
        if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        setCartData(parsedData.cart.data);
        }
    }, []);

    useEffect(() => {
        const calculateTotalPrice = () => {
        const totalPrice = cartData.reduce((acc, item) => {
            const price = parseInt(item.price.replace(/[^\d]/g, ""));
            return acc + price;
        }, 0);

        setTotalPrice(totalPrice);
        };

        calculateTotalPrice();
    }, [cartData]);

    const formatToIDR = (number) => {
        const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        });
        return formatter.format(number);
    };

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.vehicle));
        const updatedCartData = cartData.filter((cartItem) => cartItem.vehicle !== item.vehicle);
        const updatedLocalStorageData = JSON.stringify({
            cart: {
                data: updatedCartData,
            },
        });
        localStorage.setItem("reduxState", updatedLocalStorageData);
        setCartData(updatedCartData);
    };

    return (
        <div class="container mx-auto px-5 md:px-20 mb-10">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <h1 class="text-2xl font-bold my-4 mx-auto">Book Cart</h1>
            </div>
            <div class="mt-8">
                {cartData.length === 0 ? (
                        <p>Tidak ada mobil yang di booking</p>
                    ) : (
                        <>
                            {cartData.map((item, index) => (
                                <div key={index} class="flex flex-col md:flex-row border-b border-gray-400 py-4">
                                    <div class="flex-shrink-0">
                                        <img src={item.imageURL} alt="Product image" class="w-full object-cover"/>
                                    </div>
                                    <div class="mt-4 md:mt-0 md:ml-6 text-left">
                                        <h2 class="text-lg font-bold">{item.vehicle}</h2>
                                        <p class="mt-2 text-gray-600">{item.description.join(", ")}</p><br />
                                        <span class="ml-auto font-bold">{item.price}</span>
                                    </div>
                                    <button className="ml-auto" onClick={() => handleRemoveFromCart(item)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="25" width="23" viewBox="0 0 448 512">
                                            <path fill="#ff0509" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                        </svg>
                                    </button>
                                </div>
                            ))}
                            <div class="flex justify-end items-center mt-8 gap-7">
                                <div>
                                    <span class="text-gray-600 mr-4">Subtotal:</span>
                                    <span class="text-xl font-bold">{formatToIDR(totalPrice)}</span>
                                </div>
                                <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                                    Checkout
                                </button>
                            </div>
                        </> 
                    )
                }
            </div>
            
        </div>
    );
};

export default Cart;