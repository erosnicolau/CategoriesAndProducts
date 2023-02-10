import React, {useState, useEffect} from 'react';
import { loadJSON } from '../../utils/api';
import FilterList from '../FilterList/FilterList';
import ProductList from '../ProductList/ProductList'


export default function Wrapper() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const json = await loadJSON('/src/assets/response_1675961490311.json');
      setData(json.data);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='wrapper'>
        <div className="sidebar">
          <FilterList data={data.filters} />
        </div>
        <div className="main">
          <ProductList data={data.products}/>
        </div>
      </div>
    );
  }

  
}
