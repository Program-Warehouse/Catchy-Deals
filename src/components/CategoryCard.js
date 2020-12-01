import React from "react";
import { BrowserRouter as Router, useHistory, useRouteMatch,
  useParams, Link } from "react-router-dom";

const CategoryCard = (props) => {
  // let history = useHistory();

  console.log('===============CAT PROPS=====================');
  console.log(props);
  console.log('====================================');

  const handleClick = () => {
    // history.push('/list')
    localStorage.setItem( "id" , props.id)
    console.log('==============LOCAL STORAGE======================');
    console.log(localStorage.getItem("id"));
    console.log('====================================');
  }

  return (
    <>
      {/* PART */}
      <div className="column is-3-desktop has-background-primar">
        <Link onClick={handleClick} to={{
          pathname: '/list',
          id: props.id,
        }}>
          <div className="box py-5 px-5">
            {/* IMAGE */}
            <div className="container has-text-centered">
              <img
                src={props.image}
                style={{
                  height: "200px",
                  overflow: "hidden",
                }}
              />

              {/* CATEGORY NAME */}
              <div className="subtitle has-text-weight-bold">{props.text}</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CategoryCard;
