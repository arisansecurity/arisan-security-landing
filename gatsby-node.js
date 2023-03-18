/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const posts = require('./src/data/posts.json')
exports.createPages = async ({ actions }) => {
  const { createPage, createNode } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

// exports.sourceNodes = ({ actions }) => {
//   const { createNode } = actions
//   posts.forEach((post, index) => {
//     const node = {
//       ...post,
//       id: createNodeId(`Post-${index}`),
//       parent: null,
//       children: [],
//       internal: {
//         type: 'Post',
//         contentDigest: createContentDigest(post),
//       },
//     }

//     // Query for the cover image file
//     const fileNode = createNode({
//       id: createNodeId(`Post-${index}-coverImage`),
//       parent: node.id,
//       children: [],
//       internal: {
//         type: 'File',
//         contentDigest: createContentDigest(post.cover),
//       },
//       sourceInstanceName: 'images',
//       name: post.cover,
//       extension: 'png', // or whatever file extension the cover image has
//     })

//     // Add the cover image file node to the post node
//     node.cover___NODE = fileNode.id

//     // Create the post node
//     createNode(node)
//   })
// }
