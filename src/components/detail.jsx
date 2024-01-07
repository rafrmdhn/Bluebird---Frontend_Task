import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slice/cartSlice';
import { addToList } from '../redux/slice/wishlistSlice';

const Detail = ({ bookCar }) => {
    const { id } = useParams();
    const [carDetails, setCarDetails] = useState(null);
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cart.data);
    const wishlistData = useSelector((state) => state.wishlist.data);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get('https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles');
              const selectedCarType = response.data.type.find(
                (type) => type.car_type.some((car) => car.vehicle.toLowerCase() === id)
              );
              if (selectedCarType) {
                const selectedCar = selectedCarType.car_type.find(
                  (car) => car.vehicle.toLowerCase() === id
                );  
                setCarDetails(selectedCar);
              } else {
                setCarDetails(null);
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);
  
    const handleBookClick = () => {
      const isInCart = cartData.some((item) => item.vehicle === carDetails?.vehicle);
  
      if (!isInCart) {
        dispatch(addToCart(carDetails));
      }
    };

    const handleWishlistClick = () => {
      const isInList = wishlistData.some((item) => item.vehicle === carDetails?.vehicle);
  
      if (!isInList) {
        dispatch(addToList(carDetails));
      }
    };

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            {carDetails ? (
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt={carDetails.vehicle} class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={carDetails.imageURL}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">CAR NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-10">{carDetails.vehicle}</h1>
                        <p className="font-bold mb-2">Description</p>
                        <p className="leading-relaxed">{carDetails.description.map((item, index) => (
                            <React.Fragment key={index}>
                                {item}
                                {index < carDetails.description.length - 1 && <br />}
                            </React.Fragment>
                            ))}
                        </p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"/>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">{carDetails.price}</span>
                            <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={handleBookClick}>Book</button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:text-red-500" onClick={handleWishlistClick}>
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            ) : (
                <p>Loading...</p>
            )}
        </section>
    );
};

export default Detail;