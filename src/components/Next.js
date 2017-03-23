import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NextStyled = styled(Link)`
  flex: 1;
  background-color: #2f3141;
  padding: 10px;
  color: white;
  margin-top: 60px;
  width: 70px;

  display: flex;
  justify-content: center;
`

const Next = ({nextPage}) => {
  return <NextStyled to={nextPage}>next</NextStyled>
}

export default Next