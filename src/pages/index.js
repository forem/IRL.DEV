import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>IRL.DEV</h1>
      <p>
        There's nothing more awesome than meeting your internet friends, IRL.
        All events listed, unless stated otherwise, are organized by local
        community members on a volunteer basis. Our organizers are awesome (and
        if you want to become one, <Link to="/organizers">click here</Link>).
      </p>
      <p>
        Have feedback for an event, or just want to share something with us?
        Email <a href="mailto:yo@dev.to">yo@dev.to</a> — we want to know about
        your experience!
      </p>
      {data.allAirtable.edges.map(event => (
        <React.Fragment key={event.node.data.Title}>
          <h2>{event.node.data.Title}</h2>
          <p>{event.node.data.Description}</p>
        </React.Fragment>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allAirtable {
      edges {
        node {
          data {
            Title
            Description
          }
        }
      }
    }
  }
`
