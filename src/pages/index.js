import React from "react"
import Layout from "../components/layout"
import Kv from "../components/kv"
import { Container, Row, Col } from 'react-bootstrap'
import BlogItem from '../components/BlogItem'
import {graphql, useStaticQuery} from 'gatsby'
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
              thumbnail{
                childImageSharp{
                  fluid{
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
    <Kv />
    <Container>
        <Row>
          {
            data.allMarkdownRemark.edges.map((post, index) => {
              return (
                <Col sm={4} key={index}>
                  <BlogItem
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    thumbnail={post.node.frontmatter.thumbnail.childImageSharp.fluid.src} />
                </Col>
              )
            })
          }
      </Row>
    </Container>
  </Layout>
  )
}

export default IndexPage
