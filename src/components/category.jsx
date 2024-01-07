import React from "react";
import Slider from "react-slick";

const Category = ({ categories, handleCategoryClick, settings }) => {
    return (
        <ul role="list" className="sm:grid-cols-2 md:grid-cols-4 rounded-3xl shadow-xl">
            <Slider {...settings}>
                {categories.map((category) => (
                <li key={category.id} className="relative mx-auto">
                    <div className="block overflow-hidden w-full group aspect-w-10 aspect-h-7">
                    <img src={category.imageURL} alt={category.name} width="150" height="150" className="object-cover pointer-events-none group-hover:opacity-75 mx-auto" />
                    <p className="tracking-widest text-sm md:text-lg">
                        {category.name}
                    </p>
                    <button type="button" className="absolute inset-0" onClick={() => handleCategoryClick(category.id)}>
                        <span className="sr-only">
                        View details for {category.name}
                        </span>
                    </button>
                    </div>
                </li>
                ))}
            </Slider>
        </ul>
    );
};

export default Category;