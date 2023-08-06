import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import styles from './QuickViewPopup.module.scss';
const QuickViewPopup = ({ id, onClose }) => {

  const product = useSelector(state => getProductById(state, id));

  return (
    <>
      {/* Shade */}
      <div className={styles['overlay']}></div>

      {/* Popup */}
      <div className={styles['quick-view-popup']}>
        <div className={styles['close-button']} onClick={onClose}>
          X
        </div>
        <div className={styles['popup-content']}>
          <div className={styles['current-image']}>
            <img src={'/' + product.picture} alt={product.name} className="img-fluid" />
          </div>
          <div className={styles['product-data']}>
            <h4>{product.name}</h4>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Stars:</strong> {product.stars}
            </p>
            <p>
              <strong>Promo:</strong> {product.promo}
            </p>
            <p>
              <strong>New Furniture:</strong> {product.newFurniture ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

QuickViewPopup.propTypes = {
  id: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default QuickViewPopup;
