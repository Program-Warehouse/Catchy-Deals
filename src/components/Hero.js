import React from "react";
import Image from "./../assets/coupon.svg";

const Hero = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero has-background-primar">
        <div className="hero-body">
          <div className="columns is-centered">
            .{/* LEFT */}
            <div className="column columns is-vcentered is-4-desktop">
              <div className="container py-6">
                <div className="title is-size-2-desktop is-size-3-mobile">Fast Coupons</div>
                <p className="subtitle">
                  Most reliable coupons of your favourite{" "}
                  <strong className="has-text-success">Store </strong>!
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="column is-3-desktop">
              <img src={Image} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
