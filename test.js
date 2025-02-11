const testBlogPost = {
    title: "Understanding Node.js and Express",
    content: "Node.js is a runtime environment that allows developers to run JavaScript on the server-side. Express.js is a web application framework for Node.js that simplifies the development of web applications and APIs. This blog post explores the fundamentals of Node.js and Express, their benefits, and how to get started with building server-side applications.",
    author: "M.Thamizhanban",
    tags: ["Node.js", "Express", "Backend", "JavaScript"],
    category: "Technology",
    likes: ["shankar", "Abishek", "dhayanidhi"],
    comments: [
      {
        username: "shankar",
        message: "Great article! Really helped me understand Express better.",
        commentedAt: new Date("2025-02-10T12:00:00Z"),
      },
      {
        username: "Abishek",
        message: "Well written! Looking forward to more content like this.",
        commentedAt: new Date("2025-02-11T14:30:00Z"),
      },
    ],
  };
  
  module.exports = testBlogPost;