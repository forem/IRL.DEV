import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Event = ({ data }) => {
  const event = data.airtable.data
  return (
    <Layout>
      <h2 className="meetup-name">{event.Title}</h2>
      <h4>
        Host: <a href={`https://dev.to/${event.Username}`}>{event.Name}</a>
      </h4>
      <h4>
        {event.Date} • {event.City}
      </h4>
      <h4 className="venue">
        <a href={`https://maps.google.com/?q=${event.Venue}`}>{event.Venue}</a>
      </h4>
      <p className="meetup-description">{event.Description}</p>
      <a href={event.Link} className="button">
        RSVP
      </a>
    </Layout>
  )
}

export default Event

export const query = graphql`
  query EventsByID($id: Int) {
    airtable(data: { id: { eq: $id } }) {
      data {
        id
        Title
        Description
        Link
        Date
        City
        Name
        Username
        Venue
      }
    }
  }
`
