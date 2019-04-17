import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const OrganizersPage = ({ data }) => (
  <Layout>
    <h1>IRL.DEV Organizers</h1>
    <p>There's nothing more awesome than meeting your internet friends IRL. </p>
    <a href="https://airtable.com/shrU6z5n7xbM8s67Y">Yes, let's do this!</a>
    <h2>What to expect from DEV HQ</h2>
    <p>
      While we won't be there with you, we'll do our best to help your event be
      as successful as possible.
    </p>
    <ul>
      <li>
        We'll send you a care package full of DEV stickers, and throw in a few
        items from the DEV shop as giveaways! You'll be the host that everyone
        loves.
      </li>
      <li>
        We'll list your event on IRL.DEV, share it in our weekly newsletter, and
        signal boost through our social accounts.{" "}
      </li>
    </ul>
    <h2>What we expect from you</h2>
    <p>
      This is your event! But in order for us to support you, we're trusting
      that you'll uphold our code of conduct and provide an inclusive experience
      for all attendees. And that's basically it!
    </p>
    <p>
      You're free to organize anything from happy hours (consider non-alcoholic
      drinks as an option though!) to hackathons to everything in-between.
    </p>
    <h2>Words of Wisdom</h2>
    <p>
      Organizing an event takes lots of work. Things you'll want to consider
      include: venue, catering, sponsors, co-organizers, speakers, volunteers,
      timing, rsvp management, and more! Here are some great DEV posts from
      other event organizers:{" "}
    </p>
    <ul>
      <li>
        <a href="https://dev.to/joshghent/how-to-run-a-successful-tech-meetupeven-if-youre-forgetful-3d65">
          How to Run a Successful Tech Meetup — even if you’re forgetful
        </a>
      </li>
      <li>
        <a href="https://dev.to/lvangelder/running-a-meetup-group---faq-21af">
          Running a Meetup Group - FAQ
        </a>
      </li>
      <li>
        <a href="https://dev.to/jenlooper/the-care-and-feeding-of-your-conference-speakers-mfh">
          The Care and Feeding of your Conference Speakers
        </a>
      </li>
      <h2>Are you ready to do this?!</h2>
      <p>Awesome. Please fill out this form so we can get in touch with you:</p>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrU6z5n7xbM8s67Y?backgroundColor=purple"
        frameBorder="0"
        width="100%"
        height="533"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      />
    </ul>
  </Layout>
)
export default OrganizersPage
