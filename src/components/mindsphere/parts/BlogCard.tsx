import type { Blog } from "../data/blogs";

export const BlogCard = ({ blog, delay = 1 }: { blog: Blog; delay?: 1 | 2 | 3 }) => (
  <article className={`ms-blog-card ms-reveal d${delay}`}>
    <div className="ms-blog-cover">
      <img src={blog.cover} alt={blog.title} loading="lazy" width={800} height={450} />
    </div>
    <div className="ms-blog-meta-row">
      <span className="ms-blog-react">
        <svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" /></svg>
        {blog.likes}
      </span>
      <span className="ms-blog-react">
        <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        {blog.comments}
      </span>
    </div>
    <div className="ms-blog-body">
      <div className="ms-blog-category">{blog.category}</div>
      <h3 className="ms-blog-title">{blog.title}</h3>
      <div className="ms-blog-author">
        <div className="ms-blog-avatar" style={{ background: blog.avatarBg }}>{blog.initials}</div>
        <span className="ms-blog-author-name">{blog.author}</span>
        <span className="ms-blog-read-time">{blog.readTime}</span>
      </div>
    </div>
  </article>
);
