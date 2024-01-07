import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToList } from '../redux/slice/wishlistSlice';
import { Link } from "react-router-dom";

const TypeCar = ({ selectedCategory, selectedTypes }) => {
    const dispatch = useDispatch();
    const wishlistData = useSelector((state) => state.wishlist.data);

    const handleWishlistClick = (carType) => {
        if (carType) {
            const isInList = wishlistData.some((item) => item.vehicle === carType.vehicle);

            if (!isInList) {
                dispatch(addToList(carType));
            }
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold">{selectedCategory.name}</h2>
            <div className="flex flex-wrap justify-center items-center mt-20 gap-7 md:gap-10">
                {selectedTypes.map((type) => (
                    <React.Fragment key={type.id}>
                        {type.car_type.map((car) => (
                            <div key={car.vehicle} className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                                <Link to={`/Detail/${car.vehicle.toLowerCase()}`}>
                                    <div>
                                        <img className="w-full cursor-pointer" src={car.imageURL} alt=""/>
                                        <span className="text-white tracking-widest text-xs font-bold rounded-lg bg-blue-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
                                            {selectedCategory.name}
                                        </span>
                                        <h1 className="text-lg tracking-widest mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
                                            {car.vehicle}
                                        </h1>
                                        <h2 className="text-2xl font-bold text-dark">
                                            {car.price}
                                        <span className="text-base font-medium text-body-color dark:text-dark-6">
                                            / book
                                        </span>
                                        </h2>
                                    </div>
                                </Link>
                                <div className="flex p-4 justify-between">
                                    <div className="flex space-x-2">
                                        <div className="flex space-x-1 items-center">
                                            <button onClick={() => handleWishlistClick(car)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-200 hover:text-red-500 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default TypeCar;
