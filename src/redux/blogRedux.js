/* selectors */
export const getBlogContent = ({ blogs }) => blogs;

export const getBlogById = ({ blogs }, blogURL) =>
  blogs.find(blog => blog.blogURL === blogURL);

export const getBlogCategories = ({ blogCategories }) => blogCategories;
export const getBlogAuthors = ({ blogAuthors }) => blogAuthors;
