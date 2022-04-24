import React, { FC } from 'react'
import Button from '@mui/material/Button'
import styled from 'styled-components'
interface Props {
  text: string
  onClick: () => void
}

const StyledButton = styled(Button)`
  margin: 10px;
`

const SampleButton: FC<Props> = ({ text, onClick }) => {
  return (
    <StyledButton variant="contained" onClick={onClick}>
      {text}
    </StyledButton>
  )
}
export default SampleButton
