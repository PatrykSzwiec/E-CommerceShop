import styles from './SingleBlog.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
//import { getBlogContent } from '../../../redux/blogRedux';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../../../redux/blogRedux';

const SingleBlog = () => {
  const { blogURL } = useParams();
  const blog = useSelector(state => getBlogById(state, blogURL));
  return (
    <div>
      <div className='container'>
        <h1 className={styles.title}>{blog.blogTitle}</h1>
        <p>
          <b>A summery:</b>
        </p>
        <p className={styles.subtitle}>
          <i>{blog.blogSummery}</i>
        </p>
        <img
          className={styles.image}
          alt='Furniture Guide'
          src={`${process.env.PUBLIC_URL}/images/Blog/${blog.imageName}.jpg`}
        />
        <p className={styles.published}>
          <b>Published: </b> {blog.dateOfPublishing}
        </p>
        <p className={styles.content}>{blog.blogContent}</p>
        <p></p>
      </div>
    </div>
  );
};
export default SingleBlog;
