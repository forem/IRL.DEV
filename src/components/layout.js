import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        logoimage: file(relativePath: { regex: "/dev-irl/" }) {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        croudimage: file(relativePath: { regex: "/sticker-background/" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <header
            style={{
              height: "390px",
              width: "100vw",
              position: "absolute",
              backgroundColor: "rgba(241, 243, 254, .3)",
              zIndex: 1,
            }}
          >
            <Link to="/">
              <Img
                fixed={data.logoimage.childImageSharp.fixed}
                alt="IRL.DEV"
                fadeIn={false}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: "49%",
                  left: "50%",
                  width: "250px",
                  height: "250px",
                  transform: "translate(-50%, -50%)",
                  textShadow: "2px 2px 4px #fff",
                }}
              />
            </Link>
          </header>
          <Img
            fluid={data.croudimage.childImageSharp.fluid}
            alt="Crowd at DEV + GA meetup"
            style={{ width: "100vw", height: "380px" }}
          />

          <div
            style={{
              margin: `0 auto`,
              maxWidth: 800,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
            <footer>
              <a href="http://dev.to">DEV</a>
              <a href="https://dev.to/code-of-conduct">Code of Conduct</a>
              <a href="/organizers">Become an Organizer</a>
            </footer>
          </div>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
