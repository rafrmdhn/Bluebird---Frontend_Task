import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import Navbar from '../components/navbar';
import Category from "../components/category";
import Cart from "../components/cart";
import Footer from "../components/footer";

const BookPage = () => {
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

  const handleCategoryClick = (categoryId) => {
    const selectedCategory = apiData.category.find(
      (category) => category.id === categoryId
    );

    setSelectedCategory(selectedCategory);
    setSelectedTypes(
      apiData.type.filter((type) => type.category_id === categoryId)
    );
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
    <div>
      <Navbar onSearch={handleSearch}/>
      <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Category categories={apiData.category} handleCategoryClick={handleCategoryClick} settings={settings} />
      </section>
      <Cart />
      <Footer />
    </div>
  );
};

export default BookPage;