import Axios from "axios";
import React, { useState, useEffect } from "react";
import CouponCard from "../components/CouponCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Title from "../components/Title";
import { useLocation } from "react-router-dom";


const HomePage = () => {
  const location = useLocation();
  console.log('================CAT PAGE LOC====================');
  console.log(location);
  console.log('====================================');

  const [coupons, setCoupons] = useState([]);

  const url = process.env.REACT_APP_API_URI

  useEffect(() => {
    const value = localStorage.getItem("id");
    if (!value) {
      const getCoupons = async () => {
        await Axios.get(`${url}api?category=${location.id}`).then(
          (response) => {
            console.log("===============COUPONS=NO ID====================");
            console.log(response.data);
            setCoupons(response.data);
            console.log("====================================");
          }
        );
      };
      getCoupons();
    } else {
      const getCoupons = async () => {
        await Axios.get(`${url}api?category=${value}`).then(
          (response) => {
            console.log("===============COUPONS==WITH ID===================");
            console.log(response.data);
            setCoupons(response.data);
            console.log("====================================");
          }
        );
      };
      getCoupons();
    }
    
  }, []);

  return (
    <>
      <div className="">
        <Hero />
        <section className="section">
          <Title text={"Coupons"} />

          {/* CATEGORY CARDS */}
          <div className="columns is-centered is-gapless is-marginless py-6">
            <div className="column is-9-desktop">
              {/* INNER */}
              <div className="columns is-multiline is-marginless">
                {coupons.slice(0).reverse().map((item) => {
                  return (
                    <CouponCard
                      color={item.valid}
                      // color={"success"}
                      text={item.text}
                      curl={item.url}
                      // text={"Amazon 30% OFF on all clothes"}
                      image={item.coupon_image_url}
                    />
                  );
                })}

               {/*  <CouponCard
                  color={"success"}
                  text={"Amazon 30% OFF on all clothes"}
                  image={
                    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  }
                />
                <CouponCard
                  color={"danger"}
                  text={"Mi 100% OFF on all products"}
                  image={
                    "https://image.shutterstock.com/image-vector/initial-letter-mi-linked-round-260nw-409488613.jpg"
                  }
                />
                <CouponCard
                  color={"success"}
                  text={"Flipkart 30% OFF on all clothes"}
                  image={
                    "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
                  }
                />
                <CouponCard
                  color={"danger"}
                  text={"Snapdeal 30% OFF on all clothes"}
                  image={
                    "https://cdn0.desidime.com/topics/photos/893068/medium/pOmvDB5NZbz0fnNnrbztRzLacLhcTA9ZulXAY5DEvXz38S0ByjCGpXVSxOIjVkXBle0X_s180.?1535310824"
                  }
                />
                <CouponCard
                  color={"success"}
                  text={"Amazon 30% OFF on all clothes"}
                  image={
                    "data:image/png;base64,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"
                  }
                />
                <CouponCard
                  color={"success"}
                  text={"Amazon 30% OFF on all clothes"}
                  image={
                    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  }
                />
                <CouponCard
                  color={"danger"}
                  text={"Mi 100% OFF on all products"}
                  image={
                    "https://image.shutterstock.com/image-vector/initial-letter-mi-linked-round-260nw-409488613.jpg"
                  }
                />
                <CouponCard
                  color={"success"}
                  text={"Flipkart 30% OFF on all clothes"}
                  image={
                    "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
                  }
                />
                <CouponCard
                  color={"danger"}
                  text={"Snapdeal 30% OFF on all clothes"}
                  image={
                    "https://cdn0.desidime.com/topics/photos/893068/medium/pOmvDB5NZbz0fnNnrbztRzLacLhcTA9ZulXAY5DEvXz38S0ByjCGpXVSxOIjVkXBle0X_s180.?1535310824"
                  }
                /> */}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
