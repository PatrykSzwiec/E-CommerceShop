import styles from './BlogBox.module.scss';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getBlogContent } from '../../../redux/blogRedux';

const BlogBox = () => {
  const blogs = useSelector(getBlogContent);

  return (
    <div className={styles.blogs}>
      {blogs.map(blog => (
        <div key={blog.id} className={styles.blog}>
          <div className={styles.visual}>
            <img
              className={styles.image}
              alt='Triathlon Guide'
              src={`${process.env.PUBLIC_URL}/images/Blog/2.jpg`}
            />
            <div className={styles.subBox}>
              <div className={styles.info}>
                <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                {blog.dateOfPublishing}
              </div>
              <div className={styles.info}>
                <FontAwesomeIcon className={styles.icon} icon={faComment} />
                {blog.numberOfComments} Comments
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.written}>
              <div className={styles.title}>{blog.blogTitle}</div>
              <div className={styles.text}>{blog.blogSummery}</div>
            </div>
            <div className={styles.buttonBox}>
              <div className={styles.button}>Read More</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogBox;
