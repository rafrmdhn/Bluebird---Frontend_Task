import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Search = ({ searchQuery }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(
            "https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles"
            );
            setData(response.data.type);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const filteredData = data.filter((category) =>
        category.car_type.some((carType) =>
            carType.vehicle.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <section className="container px-6 py-4 mx-auto mt-5">
            <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2">
                {searchQuery !== "" &&
                filteredData.map((category) => {
                    const matchingCarType = category.car_type.find((carType) =>
                        carType.vehicle.toLowerCase().includes(searchQuery.toLowerCase())
                    );

                    return matchingCarType && (
                        <Link key={matchingCarType.vehicle} to={`/Detail/${matchingCarType.vehicle.toLowerCase()}`}>
                            <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                                <img alt={matchingCarType.vehicle} class="w-45 rounded-md border-2 border-gray-300" src={matchingCarType.imageURL} />
                                <div id="body" class="flex flex-col ml-5">
                                <h4 id="name" class="text-xl font-semibold mb-2">{matchingCarType.vehicle}</h4>
                                <p id="job" class="text-gray-800 mt-2">{matchingCarType.description.join(", ")}</p>
                                <div class="flex mt-5">
                                    <p class="ml-3">{matchingCarType.price}</p>
                                </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
                {searchQuery === "" }
            </div>
        </section>
    );
};

export default Search;
