import React from "react";
import SliderSlick from "../Slider";
import "./collectionSlider.scss";
import { Link } from "react-router-dom";
import Title from "../Title";

function CollectionSlider({ slidesCount }) {
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
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="collection__main">
      <div className="container">
        <div className="collection__main--title">
          <Title title="COLLECTIONS" />
          <div className="collection__main--action">
            <Link to="/">SEE ALL</Link>
          </div>
        </div>
        <SliderSlick settings={settings}>
          <div className="collection__slider--item">
            <img
              src="https://s3-alpha-sig.figma.com/img/d9b6/8e11/548ad23561f72bb7ac58ee9002bb63a0?Expires=1693785600&Signature=dbw1kEuayqNTwl8doNp-M~IovcBkd9oKzWCcykxbNtKSzgzkulE8qj5dQQ9Th39T1KSCQLQAbfHvfjzrJQ5KJToJ3sBYZozYaQxzqciZXF5h05Rvk3-5ikMlqoBN1gruy18977xwoIiFWm2tL255L966iN-DBfw3hAmMI4AiivHYHTie3geDQhVAMnW3ieuQsFV6X906AKAjWizDi3z2IrqvuP~I~riq4ddwESFOYZ18NNpj8goyzf4ROPPwsEOdYBEFZAyqCMraRaXI7pCRrEJTVrUCC-0eujLH~-lAlAUQoZ0geuNnDGWEZ~BNtRentb9VIb~ySJ1bGG-FhCcHIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <p className="collection__name">BEDROOM</p>
          </div>

          <div className="collection__slider--item">
            <img
              src="https://s3-alpha-sig.figma.com/img/3ba3/1bc7/0c97e2e915a1be341e2c41b5bb3e1d55?Expires=1693785600&Signature=ZIv6hGsWsSF23hRZYyAvWZm9nmUEfsH6j7vkyDmPIG4TMICsMkka52Vt4O6egSWM8zyBWwTJDzOH~PYxggA5Wp0epFiTL-~RDW-dNvnJ6V~Oz4Ln8vuaGeyMjZF0zOLZ1HCSmfg~CC98~nAz1eyX09tVs4A5cCtDGZOFCzCuanfS12z5ZoK6~zA2oAORFCnBFdFLBVJli~wIAER~HlczHrzJlV7sQjB9I4DlctGNK37swpFjK0z09EvjBmNfKFbRP~8ncOzucWLWK0rHYKUxxF0ZNf-Ind64vKmeFBEv2B9-lgKemZw4Tcu9WfoShCKwIWUCO1n-paMD7TWTOQvtzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <p className="collection__name">LIVING ROOM</p>
          </div>

          <div className="collection__slider--item">
            <img
              src="https://s3-alpha-sig.figma.com/img/0e0e/dc15/2dea892ac4e3f99eecb4e8bd39effc60?Expires=1693785600&Signature=Chg6qX-F-JqhFZFVEcpPzgXKio75~0r2UfkPM700OifqDLpgVBkTHKYP1av-L9VFHMFm7I6y-6MuATzNo5Kkn8K8iLKyNaUXONdciBR6Yt-pKLIynLSowcGVH5h~izOf0DFeTcGkswPjJFGJIr5Q~BXSW4NQzEDoingcwOW7Y0ZE6ifXd4Iyh3Iq80cJg4I~vhcTtqyYPbmr7fFPkD4azQCYzAvMIzgB6cv7u8ZMSjOlHC-HdopOM6azMqzuKv-Kw1TSdbjnqqQimaNaZcO~W~iSMT0QPdkvTmBEpMgR6R48uOcbx9ygdKCE90yYud~7VRCDn4r3BFCDgCnjj4R~hQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <p className="collection__name">KITHCEN</p>
          </div>

          <div className="collection__slider--item">
            <img
              src="https://s3-alpha-sig.figma.com/img/d9b6/8e11/548ad23561f72bb7ac58ee9002bb63a0?Expires=1693785600&Signature=dbw1kEuayqNTwl8doNp-M~IovcBkd9oKzWCcykxbNtKSzgzkulE8qj5dQQ9Th39T1KSCQLQAbfHvfjzrJQ5KJToJ3sBYZozYaQxzqciZXF5h05Rvk3-5ikMlqoBN1gruy18977xwoIiFWm2tL255L966iN-DBfw3hAmMI4AiivHYHTie3geDQhVAMnW3ieuQsFV6X906AKAjWizDi3z2IrqvuP~I~riq4ddwESFOYZ18NNpj8goyzf4ROPPwsEOdYBEFZAyqCMraRaXI7pCRrEJTVrUCC-0eujLH~-lAlAUQoZ0geuNnDGWEZ~BNtRentb9VIb~ySJ1bGG-FhCcHIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <p className="collection__name">BEDROOM</p>
          </div>
        </SliderSlick>
      </div>
    </section>
  );
}

export default CollectionSlider;
