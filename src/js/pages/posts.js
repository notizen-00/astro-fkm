import axios from 'axios';


export function posts(){

   return axios
  .post('https://cms.fkm.unej.ac.id/graphql', 
  {
    query: `
      query {
        posts {
          nodes {
            id
            title
            contentTypeName
            postId
            slug
            content
            status
            categories {
              nodes {
                name
              }
            }
            author {
              node {
                name
              }
            }
          }
        }
      }
    `,
  })
  .then((response) => {
    const posts = response.data.data.posts.nodes;
    return posts;
   
  })
  .catch((error) => {
    console.error(error);
  });

}