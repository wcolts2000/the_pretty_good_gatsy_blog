import React, { Component } from 'react'
import styled from 'styled-components'
import Typed from 'typed.js'
import bg from '../../images/reno.jpg'

const Hero = styled.div`
  font-family: 'Railway', sans-serif;
  height: 400px;
  width: 100%;
  background-image: linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${bg});
  
  background-color: #000;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  color: #ccc;
  text-shadow: -2px 2px 2px #000;
`

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 3rem;

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
      <Hero>
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
          <Subheading>This is a continuing work containing references, links to my projects and articles I write about what I learn in my journey as a developer.</Subheading>
        </TypeWrapper>
      </Hero>
    )
  }
}

export default TypeWriterDiv
