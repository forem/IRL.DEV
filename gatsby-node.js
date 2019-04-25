/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const eventTemplate = path.resolve("src/templates/event.js")
    resolve(
      graphql(
        `
          {
            allAirtable {
              edges {
                node {
                  data {
                    id
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.error) {
          reject(result.error)
        }

        result.data.allAirtable.edges.forEach(edge => {
          createPage({
            path: `/events/${edge.node.data.id}`,
            component: slash(eventTemplate),
            context: {
              id: edge.node.data.id,
            },
          })
        })
      })
    )
  })
}
