import styled from 'styled-components';
const header = styled.header`
  `
export const HeaderStyle = styled(header)`

visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};
`


export default HeaderStyle;