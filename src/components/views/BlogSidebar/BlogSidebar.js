import React from 'react';
import styles from './BlogSidebar.module.scss';
import { useSelector } from 'react-redux';
import { getBlogAuthors, getBlogCategories } from '../../../redux/blogRedux';
import FilterByCategory from '../../features/FilterByCategory/FilterByCategory';

const BlogSidebar = () => {
  const authors = useSelector(getBlogAuthors);
  const categories = useSelector(getBlogCategories);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.widget}>
            <FilterByCategory title={'FILTER BY CATEGORY'} categories={categories} />
            <FilterByCategory title={'FILTER BY AUTHORS'} categories={authors} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSidebar;
