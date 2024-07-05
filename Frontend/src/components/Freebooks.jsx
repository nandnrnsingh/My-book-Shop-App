import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

function Freebooks() {
    // const filterData = list.filter((data)=> data.category === "Free");
    // console.log(filterData);


    const [book , setBook] = useState([]);

    useEffect(()=>{
        const getBookData = async() =>{
            try {
               const responce =  await axios.get("http://localhost:4001/nandapi/book");
               const homeData = responce.data.filter((data)=> data.category === "Free");

                console.log(homeData);
                setBook(homeData);
            } 
            catch (error) {
                console.log(error);
            }
        }

        getBookData();
    },[])


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore neque saepe incidunt, voluptates eligendi fugiat! Atque libero suscipit optio aliquam?</p>
            </div>
        

        <div>
            <Slider {...settings}>
              {   
                book.map((item)=>{
                  return  <Cards item={item} key={item.id}/>    
                })
              }
            </Slider>
        </div>
    </div>
    </>    
  )
}

export default Freebooks
