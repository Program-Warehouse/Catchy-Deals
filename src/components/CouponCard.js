import React from "react";

const CategoryCard = (props) => {
  console.log('==============COUPON CARD======================');
  console.log(props);
  console.log('====================================');
  return (
    <>
      {/* PART */}
      <a href={`${props.curl}`} target="_blank" className="column is-2-desktop">
        
        <div className="box py-5 px-5 has-background-primar">
          {/* IMAGE */}
          <div className="container has-text-centered">
            <img
              src={props.image}
              style={{
                // maxHeight: '200px',
                height: "150px",
                overflow: "hidden",
                objectFit: 'contain'
              }}
            />

            {/* CATEGORY NAME */}
            <div
              className={`has-text-weight-semibold py-4 has-text-${props.color === true ? 'success': 'danger'}`}
            >
              {props.text}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default CategoryCard;
