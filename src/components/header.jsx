import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./navbar";
import Category from "./category";
import TypeCar from "./typecar";
import Search from "./search";

const Header = () => {
    const [apiData, setApiData] = useState({ category: [] });
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(
            "https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles"
            );
            setApiData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
          if (!selectedCategory) {
            setSelectedTypes(getRandomTypes());
          }
        }, 5000);
    
        return () => clearInterval(interval);
    }, [selectedCategory]);

    const handleCategoryClick = (categoryId) => {
        const selectedCategory = apiData.category.find(
        (category) => category.id === categoryId
        );

        setSelectedCategory(selectedCategory);
        setSelectedTypes(
        apiData.type.filter((type) => type.category_id === categoryId)
        );
    };

    const getRandomTypes = () => {
        if (apiData.type) {
        const shuffledTypes = apiData.type.slice().sort(() => Math.random() - 0.5);
        return shuffledTypes.slice(0, 1);
        }
        return [];
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            },
        },
        ],
    };

    return (
        <>
            <Navbar onSearch={handleSearch} />
            <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <Category categories={apiData.category} handleCategoryClick={handleCategoryClick} settings={settings} />
                {(searchQuery === "") && ((!selectedCategory || selectedTypes.length === 0) && (
                    <TypeCar selectedCategory={selectedCategory} selectedTypes={getRandomTypes()} />
                ))}
                {(searchQuery === "") && (selectedCategory && selectedTypes.length > 0) && (
                    <TypeCar selectedCategory={selectedCategory} selectedTypes={selectedTypes} />
                )}
                <Search searchQuery={searchQuery} />
           </section>
        </>
    );
};

export default Header;