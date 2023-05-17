import { useNavigate } from "react-router-dom"
import { StyledButton, StyledDiv } from "./HomePage.styled"


const HomePage = () => {
  const navigate = useNavigate()
  return (
    <StyledDiv>
      <p>Welcome to chat app</p>
      <StyledButton type='button' onClick={() => { navigate('/tweets') }}>To tweets</StyledButton>
    </StyledDiv>

  )
}

export default HomePage