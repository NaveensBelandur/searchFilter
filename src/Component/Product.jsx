import React from "react";
import { useState } from "react";
import { ProductData } from "./ProductData";
import SearchSvg from "./Svg/SearchSvg";
import CartSvg from "./Svg/CartSvg";
import "./product.css";

const ProductDetails = () => {
  const [data, setData] = useState(ProductData);
  const [filterChange, setFilterChange] = useState(false);
  const [filter, setFilter] = useState([]);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState("");
  const [checkboxvalue, setCheckboxvalue] = useState("");
  const [category, setCategory] = useState([]);

  const handleMouse = () => {
    setCart(true);
  };

  const handleSearch = (e) => {
    if (e.target.value) {
      const FilteredData = data.filter((data) => {
        return data.name.toLowerCase().includes(e.target.value);
      });
      setFilterChange(true);
      setFilter(FilteredData);
    } else if (e.target.value == "") {
      setFilter([...data]);
    }

    setSearch(e.target.value);
  };

  const handlecategory = (value) => {
    if (value) {
      setCheckboxvalue(value);
      const CategoryFiltered = data.filter((data) => {
        return data.category == value;
      });

      setFilter(CategoryFiltered);
    } else {
      setFilter(data);
    }
  };

  return (
    <>
      <section>
        <div className="heading">
          <div className="heading_main">
            <form className="search_container">
              <div className="search_top_icon">
                <SearchSvg />
              </div>
              <input
                type="search"
                placeholder="Search Product"
                className="search"
                value={search}
                onChange={handleSearch}
              />
            </form>
            <div className="cart_container">
              <CartSvg />
            </div>
          </div>
        </div>
        <div className="cartcontainer" onMouseEnter={handleMouse}>
          <div>
            <h2 className="filter_fnt">Filters</h2>
            <h2 className="category_fnt">Category</h2>
            <div className="catergory_container">
              <input
                type="checkbox"
                onClick={() => handlecategory("cameras")}
              />{" "}
              <p>Cameras</p>
            </div>
            {console.log(checkboxvalue)}
            <div className="catergory_container">
              <input
                type="checkbox"
                onClick={() => handlecategory("smartphones")}
              />{" "}
              <p> Smartphones</p>
            </div>
            <div className="catergory_container">
              <input type="checkbox" onClick={() => handlecategory("games")} />{" "}
              <p>Games</p>
            </div>
            <div className="catergory_container">
              <input
                type="checkbox"
                onClick={() => handlecategory("televisions")}
              />{" "}
              <p>Televisions</p>
            </div>
          </div>
          <div>
            <div className="cart-container">
              {filterChange
                ? filter.map((data) => {
                    return (
                      <div>
                        <div className="card">
                          <img src={data.url} className="image-container" />
                        </div>
                        <p className="name_fnt">{data.name}</p>
                        <p className="price_fnt">{data.price}</p>
                      </div>
                    );
                  })
                : data.map((data) => {
                    return (
                      <div>
                        <div className="card">
                          <img src={data.url} className="image-container" />
                        </div>
                        <p className="name_fnt">{data.name}</p>
                        <p className="price_fnt">{data.price}</p>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
