import { useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleBulletClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="images-wrapper">
        {[1, 2, 3].map((index) => (
          <img key={index} src={`./img/image${index}.png`} alt={`Image ${index}`} className={`image img-${index} ${index === currentIndex ? 'show' : ''}`} />
        ))}
      </div>

      <div className="text-slider">
        <div className="text-wrap">
          <div className="text-group">
            <h2>Wedding Events</h2>
            <h2>Birthday Parties</h2>
            <h2>OpenTheBottle</h2>
          </div>
        </div>

        <div className="bullets">
          {[1, 2, 3].map((index) => (
            <span key={index} className={index === currentIndex ? 'active' : ''} data-value={index} onClick={() => handleBulletClick(index)}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
