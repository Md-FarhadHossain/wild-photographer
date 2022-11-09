import React from "react";
import BlogContent from "./BlogContent";

const Blog = () => {
  document.title = 'Blog'
  return (
    <div>
      <BlogContent
        title="Difference between SQL and NoSQL"
        description="SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests. NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases.NoSQL database technology stores information in JSON documents instead of columns and rows used by relational databases."
      />

      <BlogContent
        title="What is JWT, and how does it work?"
        description="JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.A JWT needs to be stored in a safe place inside the user's browser. Any way,you shouldn't store a JWT in local storage (or session storage). If you store it in a LocalStorage/SessionStorage then it can be easily grabbed by an XSS attack."
      />

      <BlogContent
        title="What is the difference between javascript and Node JS?"
        description=" Node. js is a cross-platform JavaScript runtime environment for servers and applications. It is built on a single-threaded, non-blocking event loop, the Google Chrome V8 JavaScript engine., you need to learn JavaScript in order to use Nodejs. Nodejs is a toolkit built around JavaScript and all of the code you will be writing will be in JavaScript.You can run your JavaScript file from your terminal only if you have installed Node. Js in your system. Install Node. js from Steps to install Node."
      />

      <BlogContent
        title="How does Node JS handle multiple requests at the same time?"
        description="How does NodeJS handle multiple requests at the same time?They handle 40K requests per second having Node.ode. js can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue.Node. js runs JavaScript code in a single thread, which means that your code can only do one task at a time. However, Node. js itself is multithreaded and provides hidden threads through the libuv library, which handles I/O operations like reading files from a disk or network requests."
      />

      
    </div>
  );
};

export default Blog;
