import { blogs } from "./data/blogs";
import { BlogCard } from "./parts/BlogCard";

export const Blog = () => (
  <section className="ms-section">
    <div className="ms-s-inner">
      <div className="ms-blog-wrap">
        <div className="ms-blog-head ms-reveal">
          <div className="ms-blog-head-left">
            <div className="ms-blog-head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div className="ms-blog-head-title">Our Blogs</div>
          </div>
          <a href="/blog" className="ms-link-arrow">View All →</a>
        </div>
        <div className="ms-blog-grid">
          {blogs.map((b, i) => (
            <BlogCard key={b.title} blog={b} delay={((i % 3) + 1) as 1 | 2 | 3} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
