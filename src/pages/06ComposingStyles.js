import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import colors from '../ui/colors'
import fonts from '../ui/fonts'

const ComposedBox = styled.div`
  background-color: ${colors.subjects.ANA};
  color: ${colors.company.blue};
  ${fonts.sansSerif}
  padding: 10px;
  margin: 1em 0;
`

const ComposedBoxSerif = styled(ComposedBox)`
  color: ${colors.company.lightBlue}
  ${fonts.serif};
`

const ComposingStyles = () => {
  return (
  <div>
    <h2>ComposingStyles</h2>
    <ComposedBox>
      I am a box
    </ComposedBox>
    <ComposedBoxSerif>
      I am a box with serif fonts
    </ComposedBoxSerif>
    <p>
      <Link to="/02">next</Link>
    </p>
  </div>
  );
}

export default ComposingStyles;
