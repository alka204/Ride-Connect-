import React from "react";

const Blog = () => {
  // Example blog post data
  const blogPosts = [
    {
      title: "How to Stay Safe While Using Ride-Sharing Apps",
      date: "April 14, 2025",
      content:
        "Learn essential safety tips to make your ride-sharing experience safer.",
      category: "Safety",
    },
    {
      title: "Top 10 Tips for a Comfortable Ride",
      date: "April 12, 2025",
      content:
        "Discover tips to make your ride as comfortable as possible, from seat adjustments to in-ride etiquette.",
      category: "Tips",
    },
    {
      title: "The Future of Ride Sharing: Trends to Watch in 2025",
      date: "April 10, 2025",
      content:
        "Find out how technology and trends are shaping the future of ride-sharing services.",
      category: "Industry News",
    },
    {
      title: "Driver Spotlight: Meet Sarah, Our Top Driver of the Month",
      date: "April 8, 2025",
      content:
        "Get to know Sarah, who has been providing excellent service to ShareMyRide users for over two years.",
      category: "Community",
    },
  ];

  // Function to render blog posts
  const renderPosts = () => {
    return blogPosts.map((post, index) => (
      <div key={index} className="blog-post mb-4">
        <h3>{post.title}</h3>
        <p className="text-muted">
          {post.date} | Category: {post.category}
        </p>
        <p>{post.content}</p>
        <button className="btn btn-warning">Read More</button>
      </div>
    ));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center"></h1>
      <p className="text-center">
        Read stories, tips, and updates from the ShareMyRide community.
      </p>

      {/* Blog Post List */}
      <div className="blog-posts">{renderPosts()}</div>

      {/* Categories Section */}
      <div className="categories mt-5">
        <h4 className="text-center">Categories</h4>
        <ul className="list-unstyled text-center">
          <li>
            <button className="btn btn-outline-info mx-2">Safety</button>
          </li>
          <li>
            <button className="btn btn-outline-info mx-2">Tips</button>
          </li>
          <li>
            <button className="btn btn-outline-info mx-2">Industry News</button>
          </li>
          <li>
            <button className="btn btn-outline-info mx-2">Community</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
