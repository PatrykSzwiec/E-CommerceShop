import styles from './LatestBlog.module.scss';
import React from 'react';

import BlogBox from '../BlogBox/BlogBox';
import { useSelector } from 'react-redux';
import { getBlogContent } from '../../../redux/blogRedux';

const LatestBlog = () => {
  const blogs = useSelector(getBlogContent);
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
          {blogs.slice(0, 3).map(blog => (
            <div key={blog.id} className={styles.blog}>
              <BlogBox {...blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
