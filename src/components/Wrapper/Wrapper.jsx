import React, { useState, useEffect } from "react";
import { loadJSON } from "../../utils/api";
import FilterList from "../FilterList/FilterList";
import ProductList from "../ProductList/ProductList";
import SortMenu from "../SortMenu/SortMenu";

export default function Wrapper() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const json = await loadJSON("/src/assets/response_1675961490311.json");
      setData(json.data);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="row justify-content-md-center mx-0">
          <div className="col col-12 col-md-4 col-lg-3">
            <FilterList data={data.filters} />
          </div>
          <div className="col col-12 col-md-8 col-lg-9">
            <div className="container">
              <SortMenu />
              <>
                <ProductList data={data.products} />
              </>
            </div>
          </div>
        </div>
      </>
    );
  }
}
