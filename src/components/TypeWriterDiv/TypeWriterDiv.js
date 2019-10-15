import React, { Component } from 'react'
import styled from 'styled-components'
import Typed from 'typed.js'
// import bg from '../../images/reno.jpg'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Hero = styled.div`
  font-family: 'Railway', sans-serif;
  position: relative;
  height: 600px;
  width: 100%;
  overflow: hidden;
  color: #ccc;
  text-shadow: -2px 2px 2px #000;

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 3rem;
  position: absolute;
  top: 0;

  @media (min-width: 800px) {
    padding: 0 1rem;
  }

  h1 {
    margin-bottom: 5px;
  }
`

const Intro = styled.h2`
  font-weight: 200;
  margin: 0.4rem 0 1.5rem;
  font-size: 1.8rem;
  color: #aaa;
`

const Span = styled.span`
  & > .txt {
    border-right: 0.2rem solid #777;
  }
`

const Subheading = styled.h2`
  font-weight: 200;
  margin: 0.4rem 0;
  font-size: 1.2rem;
  width: 60%;
  /* color: gold; */
  line-height: 1.5;

  @media (max-width: 800px) {
    width: unset;
  }
`

class TypeWriterDiv extends Component {
  // constructor(props) {
  //   super(props)
  // }
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 80,
      backSpeed: 60,
      loop: this.props,
    }
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy()
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            bg: file(relativePath: { eq: "images/reno.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          console.log('\nDATA: ', data, '\n')
          return (
            <Hero style={{
              // backgroundImage:
              //  linearGradient(
              //   '0deg',
              //   rgba(0, 0, 0, 0.8),
              //   rgba(0, 0, 0, 0.9)
              // ),
              // url(${data.bg.childImageSharp.fluid.srcSet})
            }}>
              <Img alt="reno arch" fluid={data.bg.childImageSharp.fluid} />
              <TypeWrapper>
                <h1>
                  Sean Pheneger : &nbsp;
                  <Span
                    ref={el => {
                      this.el = el
                    }}
                  />
                </h1>
                <Intro>Welcome To My Website.</Intro>
                <Subheading>
                  This is a continuing work containing references, links to my
                  projects and articles I write about what I learn in my journey
                  as a developer.
                </Subheading>
              </TypeWrapper>
            </Hero>
          )
        }}
      />
    )
  }
}

export default TypeWriterDiv
