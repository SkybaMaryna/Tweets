import PropTypes from 'prop-types';
import { StyledLabel, StyledOption, StyledSelect } from './Filter.styled';

const Filter = ({ onFilter }) => {
  return (
    <div>
      <StyledLabel htmlFor="type">Choose type</StyledLabel>
      <StyledSelect id="type" name="type" onChange={onFilter}>
        <StyledOption value="all">All</StyledOption>
        <StyledOption value="follow">Follow</StyledOption>
        <StyledOption value="following">Following</StyledOption>
      </StyledSelect>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
