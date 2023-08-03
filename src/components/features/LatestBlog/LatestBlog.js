import styles from './LatestBlog.module.scss';
import React from 'react';

import BlogBox from '../BlogBox/BlogBox';

const LatestBlog = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.latestBlog}>
          <div className={styles.header}>
            <h4>LATEST BLOG</h4>
          </div>
          <div className={styles.dots}></div>
        </div>
        <div className={styles.blogs}>
          <BlogBox />
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
