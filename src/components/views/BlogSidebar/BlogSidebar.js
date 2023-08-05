import React from 'react';
import styles from './BlogSidebar.module.scss';

const BlogSidebar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.widget}>
            <h2 className={styles.header}>Ostatnie posty</h2>
            <ul>
              <li>
                <a href='#'>Post 1</a>
              </li>
              <li>
                <a href='#'>Post 2</a>
              </li>
              <li>
                <a href='#'>Post 3</a>
              </li>
              <li>
                <a href='#'>Post 4</a>
              </li>
            </ul>
          </div>

          <div className={styles.widget}>
            <h2 className={styles.header}>Kategorie</h2>
            <ul>
              <li>
                <a href='#'>Comment 1</a>
              </li>
              <li>
                <a href='#'>Comment 2</a>
              </li>
              <li>
                <a href='#'>Comment 3</a>
              </li>
            </ul>
          </div>

          <div className={styles.widget}>
            <h2 className={styles.header}>Autorzy</h2>
            <ul>
              <li>
                <a href='#'>Category 1</a>
              </li>
              <li>
                <a href='#'>Category 2</a>
              </li>
              <li>
                <a href='#'>Category 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSidebar;
