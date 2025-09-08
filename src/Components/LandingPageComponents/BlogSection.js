import React from "react";

const blogPosts = [
  {
    title: "What Saturn’s Transit in 2025 Means for You",
    image: "/blog1.jpg", // replace with actual path
    link: "#",
  },
  {
    title: "Top 5 Zodiac Signs Likely to Find Love This Year",
    image: "/consult.jpg", // replace with actual path
    link: "#",
  },
  {
    title: "How to Read Your Kundli: A Beginner’s Guide",
    image: "/blog3.jpg", // replace with actual path
    link: "#",
  },
];

const LatestBlogPosts = () => {
  return (
    <div className="bg-[#FDF9F7] py-16 px-4 md:px-10 font-serif text-center">
      <h2 className="text-3xl md:text-4xl text-[#7D5A3A] font-semibold uppercase tracking-wide">
        Latest Articles
      </h2>
      <p className="mt-2 text-gray-700 text-base md:text-lg italic">
        📝 From the Cosmic Journal
      </p>

      <div className="grid gap-10 md:grid-cols-3 mt-12 max-w-6xl mx-auto">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="text-left group">
            <div className="overflow-hidden rounded-2xl shadow-md border border-[#E8DDD3]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-5 text-[#7D5A3A] text-xl font-semibold">
              {post.title}
            </h3>
            {/* <a
              href={post.link}
              className="mt-2 inline-block text-sm font-medium text-[#7D5A3A] hover:underline"
            >
              ✦ READ MORE
            </a> */}
          </div>
        ))}
      </div>

      <p className="mt-10 text-[#7D5A3A] text-base md:text-lg font-medium">
        👉 <a href="/blog" className="underline hover:no-underline">Visit our blog</a> for free astrology tips & insights
      </p>
    </div>
  );
};

export default LatestBlogPosts;
