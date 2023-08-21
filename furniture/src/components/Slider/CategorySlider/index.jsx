import React from 'react';
import './categorySlider.scss';
import Slider from "react-slick";

const CategorySlider = (props) => {

    const {slidesCount} = props;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slidesCount,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
        ]
    };

    return (
        <div className="container">
            <Slider className='slider' {...settings}>
                <div className='category__slider--item' >
                    <img src="https://s3-alpha-sig.figma.com/img/5c25/6005/1de18f9d6f23b51045fc7090b7c82a42?Expires=1692576000&Signature=CZvfYetJNZCV7IWZxCw7LZuDyphttjkFHmWKTj5AFtrO-0yzhsOIkDKvUef2mxeznRhcpsAsGmYjujM9DCYz9A5UhaFJrbi9qGXeOHFmN-wn4l6IqcXFJxvTYRM8XAEjf8jZwtkpjg5bCD6wygMW5dJ7UrGa83Wro1lN-kQlJ9yXs~Cq2lZJ23cl5H5h1mlKdawD92fAZXUj4KoHwmwn~TgMSOqw5wWwiSL75DAfwZjFYREHG8fHvnHpIe4h3kiPZZO6blGZvCcnd3Sw3ONXfz1QAfKw1HTjJe5OXb9q9BiJt5B0BUPLd7V~cE5-ABGIgO1gq3wnNfGmP9V6EpKUhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <p className='category__name'>CUSHIONS</p>
                </div>
                <div className='category__slider--item'>
                    <img src="https://s3-alpha-sig.figma.com/img/fc4f/78b4/52608fae9d209c21479bbc2e3acdb8da?Expires=1692576000&Signature=o65p4eTHGOi9u3hpEaLWGmybuQZh~WWiz84vP~1TRsjXmszNF12awYZxdgTrMVC0DHYQWISQ3VMhNS9Ozl6~j9rPEFt3QIQIUXUmhCccEnti7Dk22mT~ftDwDDdsc3iHETzrEudIpVMvpz2YqvBWAFcjdDkmv1ifWU7ud7l~fBV-CMircpUj8ZBu~JIXV~8OqKknouUiLhF9765EKTtaRSsWx7fVzAFNg7WNy9zfIoqFjAZe2cXJiYHQZoWY9WixAkERtgLtTODCcPMuv1~ZzJzMiMhWeMcqWJqPhEgmuXaVqUr~9Op2PWEYgVNfXb-HOy4Qy1IxHnAmsMfH3q7bYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <p className='category__name'>SOFAS</p>
                </div>
                <div className='category__slider--item'>
                    <img src="https://s3-alpha-sig.figma.com/img/872f/f807/ccb92b737b3915871daaeca675cd8aab?Expires=1692576000&Signature=aTJDurMijLZn4ZvTV-bcs8twS99~s2xHyv9VxbMC1Roqar~mjB8rbwJor9NnVoT22-bNmWPLOOcvK92gf3o-CZxbnHbPy4jOuCw6YEobsCTau2B3IcraR7r3YpRuwPbQY6RTQif7SF6yQbc~O8NJe3E6o-u6RJg5M8Wdk8cZw1w0ZNyhvHjGJkrrvQXKotlWBxc1~o4mWwMJYJigMBEqi8648zq5317coifshn56Pbq9vDFRPEpaLe1vyiH-qwZlK8ATH5N3HDznNRPPKWTe9kGdkrrjLWX-f8B0UCs1hBkPuYPjQCwrKF9otCuHHTHE3FCLtrgpHFSTcnD9d5UBLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <p className='category__name'>BEDS AND HEADBOARDS</p>
                </div>
                <div className='category__slider--item'>
                    <img src="https://s3-alpha-sig.figma.com/img/3360/f18d/48cc860c94299bbd7c2cee006cd392c8?Expires=1692576000&Signature=Ge1R3-gszG18ifyzMlZaQygLKVVX9wP4~QxSIFEWwvWPvl8bnsUz2TOjsBKALGS5g-LhbSXfgihcX0IYhQ9kSDGdQqWJRRFTA-Dm1Ldauyd-7qwL8wsAVjhqxtRj5AUBWaE0BtwUmvB0gNu1vyaqZR8vL8B5IteiDDa3gT6WDyCIiZGhC0fJ8O8GpEy41qfDZqng9RFykU~95seX1UUfjAuYlAbEwMon9bq3om4msALnIZoIUD3wWIvDZHxd35a-IY8RkvzhMKkCsWhobk1T7f-yE1lw5JYbXCuSVf1MOCpccQqPIYfyD-fu4UQ2ORomq9Y2PIm3hxRf5BJnA3mHfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <p className='category__name'>RUGS</p>
                </div>
                <div className='category__slider--item'>
                    <img src="https://s3-alpha-sig.figma.com/img/fc4f/78b4/52608fae9d209c21479bbc2e3acdb8da?Expires=1692576000&Signature=o65p4eTHGOi9u3hpEaLWGmybuQZh~WWiz84vP~1TRsjXmszNF12awYZxdgTrMVC0DHYQWISQ3VMhNS9Ozl6~j9rPEFt3QIQIUXUmhCccEnti7Dk22mT~ftDwDDdsc3iHETzrEudIpVMvpz2YqvBWAFcjdDkmv1ifWU7ud7l~fBV-CMircpUj8ZBu~JIXV~8OqKknouUiLhF9765EKTtaRSsWx7fVzAFNg7WNy9zfIoqFjAZe2cXJiYHQZoWY9WixAkERtgLtTODCcPMuv1~ZzJzMiMhWeMcqWJqPhEgmuXaVqUr~9Op2PWEYgVNfXb-HOy4Qy1IxHnAmsMfH3q7bYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <p className='category__name'>SOFAS</p>
                </div>
            </Slider>
    
        </div>
    )
}

export default CategorySlider;
