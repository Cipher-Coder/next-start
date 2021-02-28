import React from 'react'
import styled from '@emotion/styled'

const H1 = styled.h1`
  text-align: center;
  color: #343a40;
  font-size: 3em;
  margin-bottom: 1.5em;
`

const Heading = (props) => <H1>{props.textContent}</H1>

export default Heading
