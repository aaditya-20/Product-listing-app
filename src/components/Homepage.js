import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useNavigate } from "react-router-dom";

const products = [
  {
    "id": 1,
    "name": "Quality-focused modular capacity",
    "price": 254.79,
    "category": "Electronics",
    "image": "https://robohash.org/ullamhicoptio.png?size=50x50&set=set1",
    "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
},
{
    "id": 2,
    "name": "User-centric high-level process improvement",
    "price": 62.4,
    "category": "Sports",
    "image": "https://robohash.org/veliteaofficia.png?size=50x50&set=set1",
    "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
},
{
    "id": 3,
    "name": "Multi-layered incremental throughput",
    "price": 996.64,
    "category": "Home",
    "image": "https://robohash.org/exercitationemoccaecativelit.png?size=50x50&set=set1",
    "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
},
{
    "id": 4,
    "name": "Public-key needs-based architecture",
    "price": 204.62,
    "category": "Beauty",
    "image": "https://robohash.org/voluptassuntfuga.png?size=50x50&set=set1",
    "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
},
{
    "id": 5,
    "name": "Innovative modular methodology",
    "price": 949.12,
    "category": "Electronics",
    "image": "https://robohash.org/etveritatisperferendis.png?size=50x50&set=set1",
    "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
},
{
    "id": 6,
    "name": "Programmable well-modulated core",
    "price": 174.6,
    "category": "Beauty",
    "image": "https://robohash.org/vitaefacereomnis.png?size=50x50&set=set1",
    "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo."
},
{
    "id": 7,
    "name": "Ameliorated context-sensitive migration",
    "price": 133.73,
    "category": "Home",
    "image": "https://robohash.org/rationenequeamet.png?size=50x50&set=set1",
    "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
},
{
    "id": 8,
    "name": "Focused systemic internet solution",
    "price": 741.68,
    "category": "Home",
    "image": "https://robohash.org/molestiaemolestiasaut.png?size=50x50&set=set1",
    "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
},
{
    "id": 9,
    "name": "Extended bottom-line pricing structure",
    "price": 523.16,
    "category": "Electronics",
    "image": "https://robohash.org/deseruntvelpossimus.png?size=50x50&set=set1",
    "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
},
{
    "id": 10,
    "name": "Cross-platform clear-thinking synergy",
    "price": 80.1,
    "category": "Beauty",
    "image": "https://robohash.org/sequidelectusaut.png?size=50x50&set=set1",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
},
{
    "id": 11,
    "name": "Operative 5th generation architecture",
    "price": 271.24,
    "category": "Clothing",
    "image": "https://robohash.org/nostrumeiuseaque.png?size=50x50&set=set1",
    "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
},
{
    "id": 12,
    "name": "Open-architected secondary service-desk",
    "price": 812.15,
    "category": "Clothing",
    "image": "https://robohash.org/temporibusporromaxime.png?size=50x50&set=set1",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
},
{
    "id": 13,
    "name": "Balanced client-driven matrix",
    "price": 593.67,
    "category": "Electronics",
    "image": "https://robohash.org/beataeblanditiisdoloribus.png?size=50x50&set=set1",
    "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
},
{
    "id": 14,
    "name": "Innovative eco-centric open architecture",
    "price": 694.11,
    "category": "Sports",
    "image": "https://robohash.org/estfugitsed.png?size=50x50&set=set1",
    "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
},
{
    "id": 15,
    "name": "Front-line client-driven installation",
    "price": 813.1,
    "category": "Beauty",
    "image": "https://robohash.org/etdolorsed.png?size=50x50&set=set1",
    "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
},
{
    "id": 16,
    "name": "Expanded optimal firmware",
    "price": 361.57,
    "category": "Beauty",
    "image": "https://robohash.org/rerumpraesentiumad.png?size=50x50&set=set1",
    "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
},
{
    "id": 17,
    "name": "Compatible multi-state function",
    "price": 917.7,
    "category": "Sports",
    "image": "https://robohash.org/illoullamin.png?size=50x50&set=set1",
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
},
{
    "id": 18,
    "name": "User-centric national matrices",
    "price": 669.83,
    "category": "Home",
    "image": "https://robohash.org/iurevelitquia.png?size=50x50&set=set1",
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo."
},
  // Add more product objects here...
];

const HomePage = () => {
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterPriceRange, setFilterPriceRange] = useState('');

  const handleCategoryFilter = (event) => {
    const selectedCategory = event.target.value;
    setFilterCategory(selectedCategory);

    if (selectedCategory === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  };

  const handlePriceFilter = (event) => {
    const selectedPriceRange = event.target.value;
    setFilterPriceRange(selectedPriceRange);

    if (selectedPriceRange === '') {
      setFilteredProducts(products);
    } else {
      const [min, max] = selectedPriceRange.split('-');
      const filtered = products.filter(
        (product) => product.price >= Number(min) && product.price <= Number(max)
      );
      setFilteredProducts(filtered);
    }
  };
  function HandleClick(e){
      navigate(`/products/${e.target.id}`)
  }

  return (
    <div>
      <div className='flex gap-40 h-[50px] bg-[yellow]'>
      <h1>Product Listing</h1> 

            <div>
              <label className='bg-[yellow]' htmlFor="categoryFilter">Filter by Category:</label>
              <select
                id="categoryFilter"
                value={filterCategory}
                onChange={handleCategoryFilter}
                className='bg-[yellow]'
              >
                <option value="">All</option>
                <option value="Beauty">Beauty</option>
                <option value="Home">Home</option>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Sports">Sports</option>
                {/* Add more categories here... */}
              </select>
            </div>

            <div>
              <label htmlFor="priceFilter">Filter by Price:</label>
              <select
                id="priceFilter"
                value={filterPriceRange}
                onChange={handlePriceFilter}
                className='bg-[yellow]'
              >
                <option value="">All</option>
                <option value="0-100">$0 - $100</option>
                <option value="100-200">$100 - $200</option>  
                <option value="200-300">$200 - $300</option>  
                <option value="300-10000">$300 - $10000</option>  
                {/* Add more price ranges here... */}
              </select>
            </div>
      </div>
     

      <div className='w-[100vw] mt-3 flex flex-col justify-center items-center	  gap-4 '>
          {filteredProducts.map((product) => (
            <div className='flex z-10 flex-row' key={product.id}>
              {/* <divnk to={`/products/${product.id}`}> */}
              <ProductCard id={product.id} image={product.image} name ={product.name} price= {product.price} onClick={HandleClick}/>
                {/* <img src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>
                </div> */}
              {/* </Link> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
