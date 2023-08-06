import React from 'react';
import styles from './Blog.module.scss';
import BlogSidebar from '../BlogSidebar/BlogSidebar';
import { useSelector } from 'react-redux';
import { getBlogContent } from '../../../redux/blogRedux';
import BlogBox from '../../features/BlogBox/BlogBox';

const Blog = () => {
  const blogs = useSelector(getBlogContent);
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.container}>
          <div className={styles.layout}>
            <div className={styles.posts}>
              <div className={styles.post}>
                <h2>Blog</h2>
              </div>
            </div>
            <div className={styles.columns}>
              <div className={styles.blogs}>
                {blogs.slice(0, 2).map(blog => (
                  <div key={blog.id} className={styles.blog}>
                    <BlogBox {...blog} />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.columns}>
              <div className={styles.blogs}>
                {blogs.slice(2, 4).map(blog => (
                  <div key={blog.id} className={styles.blog}>
                    <BlogBox {...blog} />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.columns}>
              <div className={styles.blogs}>
                {blogs.slice(4, 6).map(blog => (
                  <div key={blog.id} className={styles.blog}>
                    <BlogBox {...blog} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.layoutTwo}>
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
