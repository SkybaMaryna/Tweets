import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../../pages/HomePage/HomePage.styled';

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <StyledButton
      onClick={() => {
        navigate('/');
      }}
    >
      Back to Home
    </StyledButton>
  );
};

export default BackBtn;
