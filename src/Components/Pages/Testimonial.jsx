import SectionTitle from "./Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/public/reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))

    },[])

    return (
       <section className="  my-20">
        <SectionTitle
        subHeading="What our Client Say"
        heading="Testimonial"
        ></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review => <SwiperSlide key={review._id} >
                <div className="m-24 flex flex-col items-center my-16 mx-24">
                    <Rating style={{ maxWidth: 180}}
                    value={review.rating}
                    readOnly></Rating>
                    <p className="py-8">{review.details}</p>
                    <h3 className="text-2xl text-orange-500">{review.name}</h3>
                </div>
            </SwiperSlide> )
        }
       
      </Swiper>
       </section>
    );
};

export default Testimonial;