import Axios from "axios";
import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Title from "../components/Title";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  console.log('================FROM HOME PAGE====================');
  console.log(process.env.REACT_APP_API_URI);
  console.log('====================================');

  useEffect(async () => {
    const getData = async () => {
      await Axios.get(`${process.env.REACT_APP_API_URI}category`).then((response) => {
        console.log("===============HOMEPAGE=====================");
        console.log(response.data);
        setCategories(response.data);
        console.log("====================================");
      });
    };
    getData();
  }, []);

  return (
    <>
      <div className="">
        <Hero />
        <section className="section">
          <Title text={"Categories"} />

          {/* CATEGORY CARDS */}
          <div className="columns is-centered is-gapless is-marginless py-6">
            <div className="column is-9-desktop">
              {/* INNER */}
              <div className="columns is-multiline is-marginless">
                {categories.slice(0).reverse().map((item) => {
                  return (
                    <CategoryCard
                      id={item.id}
                      key={item.id}
                      text={item.name}
                      image={
                        item.image_url
                        // "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSD4lXW9CMbVpAtVxqQW6Rz3OIwDMZdxhFOEA&usqp=CAU"
                      }
                    />
                  );
                })}



                {/* <CategoryCard
                  text={"ELECTRONIC"}
                  image={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSD4lXW9CMbVpAtVxqQW6Rz3OIwDMZdxhFOEA&usqp=CAU"
                  }
                />
                <CategoryCard
                  text={"FASHION"}
                  image={
                    "https://i.etsystatic.com/10919371/r/il/8f2379/1687430276/il_570xN.1687430276_k24d.jpg"
                  }
                />
                <CategoryCard
                  text={"FOOD"}
                  image={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSD4lXW9CMbVpAtVxqQW6Rz3OIwDMZdxhFOEA&usqp=CAU"
                  }
                />
                <CategoryCard
                  text={"FASHION"}
                  image={
                    "https://images.vexels.com/media/users/3/143047/isolated/preview/b0c9678466af11dd45a62163bdcf03fe-fast-food-hamburger-flat-icon-by-vexels.png"
                  }
                />
                <CategoryCard
                  text={"ELECTRONIC"}
                  image={
                    "https://i.etsystatic.com/10919371/r/il/8f2379/1687430276/il_570xN.1687430276_k24d.jpg"
                  }
                />
                <CategoryCard
                  text={"FASHION"}
                  image={
                    "https://images.vexels.com/media/users/3/143047/isolated/preview/b0c9678466af11dd45a62163bdcf03fe-fast-food-hamburger-flat-icon-by-vexels.png"
                  }
                />
                <CategoryCard
                  text={"ELECTRONIC"}
                  image={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSD4lXW9CMbVpAtVxqQW6Rz3OIwDMZdxhFOEA&usqp=CAU"
                  }
                />  */}
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

