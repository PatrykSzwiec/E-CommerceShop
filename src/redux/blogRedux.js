/* selectors */
export const getBlogContent = ({ blogs }) => blogs;

export const getBlogById = ({ blogs }, blogURL) =>
  blogs.find(blog => blog.blogURL === blogURL);
