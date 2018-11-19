import React, { Component } from 'react'
import styled from 'styled-components'
import Typed from 'typed.js'

const Hero = styled.div`
  font-family: 'Railway', sans-serif;
  height: 400px;
  width: 100%;
  background-image: url('https://image.ibb.co/n5A2HU/showcase.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  color: #ccc;
  text-shadow: -2px 2px 5px #000;
`

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 3rem;

  @:media (min-width: 800px) {
    padding: 0 1rem;
  }
`

const Intro = styled.h2`
  font-weight: 200;
  margin: 0.4rem;
  font-size: 1.5rem;
  color: #aaa;
`

const Span = styled.span`
  & > .txt {
    border-right: 0.2rem solid #777;
  }
`

const Subheading = styled.h2`
  font-weight: 200;
  margin" 0.4rem;
  font-size: 1rem;
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
      backSpeed: 80,
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
          <Intro>Welcome To My Blog</Intro>
          <Subheading>Journeys through Lambda School</Subheading>
        </TypeWrapper>
      </Hero>
    )
  }
}

export default TypeWriterDiv
