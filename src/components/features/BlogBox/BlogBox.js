import styles from './BlogBox.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getBlogContent } from '../../../redux/blogRedux';

const BlogBox = () => {
  const blogs = useSelector(getBlogContent);

  return (
    <div className={styles.blogs}>
      {blogs.slice(0, 3).map(blog => (
        <div key={blog.id} className={styles.blog}>
          <div className={styles.visual}>
            <img
              className={styles.image}
              alt='Furniture shop'
              src={`${process.env.PUBLIC_URL}/images/Blog/${blog.imageName}.jpg`}
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
            <Link className={styles.buttonBox} to={'/blog/' + blog.blogURL}>
              <div className={styles.button}>Read More</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogBox;
