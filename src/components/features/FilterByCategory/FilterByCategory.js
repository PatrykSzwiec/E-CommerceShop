/* eslint-disable react/prop-types */
import React from 'react';
import styles from './FilterByCategory.module.scss';
import clsx from 'clsx';

//This filter is used as a filer for /blog and for /shop
// adding class active will add styling

const FilterByCategory = props => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{props.title}</div>
      <div>
        <div className={styles.categories}>
          {props.categories.map(category => (
            <button key={category} className={clsx(styles.categoryBox)}>
              <div className={styles.category}>&#62; {category}</div>
              <div className={styles.number}>4</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterByCategory;
