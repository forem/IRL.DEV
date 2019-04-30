import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event"

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

  return (
    <Layout>
      <SEO title="Home" keywords={[`dev`, `events`, `thepracticaldev`]} />
      <p className="bolded">
        There's nothing more awesome than meeting your internet friends, IRL.
      </p>
      <p>
        Have feedback for an event, or just want to share something with us?
        Email <a href="mailto:yo@dev.to">yo@dev.to</a> — we want to know about
        your experience!
      </p>
      <p>
        All events listed, unless stated otherwise, are organized by local
        community members on a volunteer basis. Our organizers are awesome!
      </p>
      <Link to="/organizers" className="button centered">
        Become an Organizer
      </Link>{" "}
      <h2>Stay tuned for our first event!</h2>
      {/* <h2>Upcoming Events</h2>
      {futureEvents.map(event => (
        <Event event={event} key={event.id} />
      ))}
      <h2>Past Events</h2>
      {pastEvents.map(event => (
        <Event event={event} key={event.id} />
      ))} */}
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
            id
            Title
            Description
            Date
            City
          }
        }
      }
    }
  }
`
