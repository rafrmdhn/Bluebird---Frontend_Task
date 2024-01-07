import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromList } from "../redux/slice/wishlistSlice";
import { Link } from "react-router-dom";

const List = () => {
    const [wishlistData, setWishlistData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const localStorageData = localStorage.getItem("reduxState");
    
        if (localStorageData) {
            const parsedData = JSON.parse(localStorageData);
            // Check if 'wishlist' property exists before accessing 'data'
            if (parsedData.wishlist && parsedData.wishlist.data) {
                setWishlistData(parsedData.wishlist.data);
            }
        }
    }, []);

    const handleRemoveFromList = (item) => {
        dispatch(removeFromList(item.vehicle));
        const updatedListData = wishlistData.filter((wishlistItem) => wishlistItem.vehicle !== item.vehicle);
        const updatedLocalStorageData = JSON.stringify({
            wishlist: {  // Change key from 'cart' to 'wishlist'
                data: updatedListData,
            },
        });
        localStorage.setItem("reduxState", updatedLocalStorageData);
        setWishlistData(updatedListData);
    };

    return (
        <section class="mb-20">
            <div class="flex flex-col md:flex-row justify-between items-center mb-5">
                <h1 class="text-2xl font-bold mx-auto">Wishlist</h1>
            </div>
            <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {wishlistData.map((item, index) => (
                    <article key={index} class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "> 
                        <img src={item.imageURL} alt={item.vehicle} className="mx-auto"/>
                        <div class="mt-1 p-2">
                            <h2 class="text-slate-700">{item.vehicle}</h2>
                            <div class="mt-3 flex items-end justify-between">
                                <p class="text-lg font-bold text-blue-500">{item.price}</p>
                                <div class="flex items-center space-x-1.5 rounded-lg bg-red-500 px-4 py-1.5 text-white duration-100 hover:bg-red-600">
                                    <button class="text-sm" onClick={() => handleRemoveFromList(item)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                            <path fill="#ffffff" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                        </svg>
                                    </button>
                                </div>   
                            </div>
                            <Link to={`/Detail/${item.vehicle ? item.vehicle.toLowerCase() : ''}`} class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                                    <path fill="#ffffff" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                                </svg>
                                <p  class="text-sm">See Detail</p>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default List;