import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pot = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://cms.fkm.unej.ac.id/graphql', {
          query: `
            query {
              posts {
                nodes {
                  title
                  content
                  author {
                    node {
                      name
                    }
                  }
                }
              }
            }
          `,
        });

        const postsData = response.data.data.posts.nodes;
        console.log(postsData);
        setPosts(postsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>Author: {post.author.node.name}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Pot;
