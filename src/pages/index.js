import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const futureEvents = []
  const pastEvents = []
  data.allAirtable.edges.forEach(event => {
    event = event.node.data
    if (new Date(event.Date) >= new Date()) {
      futureEvents.push(event)
    } else {
      pastEvents.push(event)
    }
  })

  console.log(pastEvents)
  console.log(futureEvents)
  return (
    <Layout>
      <SEO title="Home" keywords={[`dev`, `events`, `thepracticaldev`]} />
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
      <h2>Upcoming Events</h2>
      {futureEvents.map(event => (
        <React.Fragment key={event.Title}>
          <h3>{event.Title}</h3>
          <p>{event.Description}</p>
        </React.Fragment>
      ))}
      <h2>Past Events</h2>
      {pastEvents.map(event => (
        <React.Fragment key={event.Title}>
          <h3>{event.Title}</h3>
          <p>{event.Description}</p>
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
            Date
          }
        }
      }
    }
  }
`
