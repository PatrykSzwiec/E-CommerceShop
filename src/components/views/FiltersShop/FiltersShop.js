import React from 'react';
import styles from './FiltersShop.module.scss';
import FilterByCategory from '../../features/FilterByCategory/FilterByCategory';
import FilterByPrice from '../../features/FilterByPrice/FilterByPrice';
import FilterBySize from '../../features/FilterBySize/FilterBySize';
import FilterByColors from '../../features/FilterByColors/FilterByColors';
import { useSelector } from 'react-redux';
import { getShopCategories } from '../../../redux/shopRedux';

const Filters = () => {
  const catoriesFilers = useSelector(getShopCategories);
  return (
    <div className={styles.roots}>
      <FilterByColors />
      <FilterByCategory title={'FILTER BY CATEGORY'} categories={catoriesFilers} />
      <FilterByPrice />
      <FilterBySize />
    </div>
  );
};

export default Filters;
