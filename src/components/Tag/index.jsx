import styled from 'styled-components'
import colors from '../../utils/style/Colors'

const StyledTag = styled.div`
  background: ${colors.primary};
  border-radius: 10px;
  height: 25px;
  margin: 10px 15px 10px 0px;
  padding: 0px 20px;
  p {
    color: white;
    font-size: 14px !important;
    text-align: center;
  }
`

function Tag({ tag }) {
  return (
    <StyledTag>
      <p>{tag}</p>
    </StyledTag>
  )
}

export default Tag
