import { graphql, Link } from "gatsby"
import React from "react"
import Event from "../components/event"
import Layout from "../components/layout"
import SEO from "../components/seo"

const EventList = ({ futureEvents, pastEvents }) => {
  return (
    <>
      <h2>Upcoming Events</h2>
      {futureEvents.map(event => (
        <Event event={event} key={event.id} />
      ))}
      <h2>Past Events</h2>
      {pastEvents.map(event => (
        <Event event={event} key={event.id} />
      ))}
    </>
  )
}

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
      <div style={{ textAlign: "center" }}>
        <p className="bolded">
          There's nothing better than meeting your internet friends, IRL.
        </p>
        <p style={{ fontSize: "1.1em" }}>
          <em>
            We are looking for organizers to help the community get together!
          </em>
        </p>
        <p>
          If you would like to help bridge the online-offline gap, apply to run
          a DEV meetup.
        </p>
        <Link to="/organizers" className="button centered">
          Become an Organizer
        </Link>
        <EventList futureEvents={futureEvents} pastEvents={pastEvents} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allAirtable(sort: { fields: data___Date, order: ASC }) {
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
