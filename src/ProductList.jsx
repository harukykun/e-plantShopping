import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalCartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'Produces oxygen at night, improving air quality.', cost: '$15' },
        { name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg', description: 'Filters formaldehyde and xylene from the air.', cost: '$12' },
        { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg', description: 'Removes mold spores and purifies the air.', cost: '$18' },
        { name: 'Boston Fern', image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg', description: 'Adds humidity to the air and removes toxins.', cost: '$20' },
        { name: 'Rubber Plant', image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg', description: 'Easy to care for and effective at removing toxins.', cost: '$17' },
        { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg', description: 'Purifies the air and has healing properties for skin.', cost: '$14' },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        { name: 'Lavender', image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400', description: 'Calming scent, used in aromatherapy.', cost: '$20' },
        { name: 'Jasmine', image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?w=400', description: 'Sweet fragrance, promotes relaxation.', cost: '$18' },
        { name: 'Rosemary', image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg', description: 'Invigorating scent, often used in cooking.', cost: '$15' },
        { name: 'Mint', image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg', description: 'Refreshing aroma, used in teas and cooking.', cost: '$12' },
        { name: 'Lemon Balm', image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg', description: 'Citrusy scent, relieves stress and promotes sleep.', cost: '$14' },
        { name: 'Hyacinth', image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg', description: 'Beautiful flowering plant known for its fragrant blooms.', cost: '$22' },
      ],
    },
    {
      category: 'Insect Repellent Plants',
      plants: [
        { name: 'Oregano', image: 'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg', description: 'Contains compounds that can deter certain insects.', cost: '$10' },
        { name: 'Marigold', image: 'https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg', description: 'Natural insect repellent, also adds color to the garden.', cost: '$8' },
        { name: 'Geraniums', image: 'https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg', description: 'Known for their insect-repelling properties.', cost: '$20' },
        { name: 'Basil', image: 'https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg', description: 'Repels flies and mosquitoes, also used in cooking.', cost: '$9' },
        { name: 'Catnip', image: 'https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg', description: 'Repels mosquitoes and attracts cats.', cost: '$13' },
        { name: 'Citronella', image: 'https://cdn.pixabay.com/photo/2016/08/22/22/32/lemon-1613771_1280.jpg', description: 'Widely used as a natural mosquito repellent.', cost: '$16' },
      ],
    },
  ];

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onHomeClick) onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: parseFloat(plant.cost.replace('$', '')), description: plant.description }));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '20px' }}>
        <div className="tag">
          <a href="/" onClick={handleHomeClick} style={{ color: 'white', textDecoration: 'none' }}>
            <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
          </a>
        </div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#" onClick={handleHomeClick} style={{ color: 'white', fontSize: '18px', textDecoration: 'none' }}>Home</a>
          <a href="#" onClick={handlePlantsClick} style={{ color: 'white', fontSize: '18px', textDecoration: 'none' }}>Plants</a>
          <a href="#" onClick={handleCartClick} style={{ color: 'white', fontSize: '18px', textDecoration: 'none', position: 'relative' }}>
            <span>Cart</span>
            {totalCartQuantity > 0 && (
              <span style={{ position: 'absolute', top: '-10px', right: '-15px', background: 'red', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>
                {totalCartQuantity}
              </span>
            )}
          </a>
        </div>
      </div>
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((categoryObj) => (
            <div key={categoryObj.category} className="category-section">
              <h2>{categoryObj.category}</h2>
              <div className="plants-grid">
                {categoryObj.plants.map((plant) => (
                  <div key={plant.name} className="plant-card">
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
                    <h3>{plant.name}</h3>
                    <p>${typeof plant.cost === 'string' ? plant.cost.replace('$', '') : plant.cost}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
