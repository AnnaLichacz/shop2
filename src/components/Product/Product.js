import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';

const Product = ({name, colors, sizes, title, basePrice }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const handleSubmit = e => {
    e.preventDefault();

    console.log('SUMMARY')
    console.log('============')
    console.log('name:', title)
    console.log('price:', getPrice)
    console.log('color:', currentColor)
    console.log('size:', currentSize)
  }  

  const getPrice = useMemo(() => {
    const found = sizes.find(element => element.name === currentSize)
    return basePrice + found.additionalPrice;
  }, [currentSize, basePrice, sizes]
  );

  return (
    <article className={styles.product}>
    <ProductImage name={name} title={title} currentColor={currentColor} />
    <div>
      <header>
        <h2 className={styles.name}>{title}</h2>
        <span className={styles.price}>Price: {getPrice} $</span>
      </header>
        <ProductForm
          handleSubmit={handleSubmit}
          colors={colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          sizes={sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize} />
    </div>
  </article>
  )
};

Product.propTypes= {
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;