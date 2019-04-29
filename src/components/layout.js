/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

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
        logoimage: file(relativePath: { regex: "/logo/" }) {
          childImageSharp {
            fixed(width: 700) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        croudimage: file(relativePath: { regex: "/croud/" }) {
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
          <div
            style={{
              height: "400px",
              width: "100vw",
              position: "absolute",
              backgroundColor: "rgba(220, 236, 242, .7)",
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
                  top: "50%",
                  left: "50%",
                  width: "600px",
                  transform: "translate(-50%, -50%)",
                  textShadow: "2px 2px 4px #fff",
                  opacity: 1,
                }}
              />
            </Link>
          </div>
          <Img
            fluid={data.croudimage.childImageSharp.fluid}
            alt="Crowd at DEV + GA meetup"
            style={{ width: "100vw", height: "400px" }}
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
