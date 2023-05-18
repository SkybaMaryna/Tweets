import PropTypes from 'prop-types';
import { StyledButton } from '../../pages/HomePage/HomePage.styled';

const LoadMoreBtn = ({ handleClick }) => {
  return <StyledButton onClick={handleClick}>Load More</StyledButton>;
};

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
