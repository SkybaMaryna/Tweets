import PropTypes from 'prop-types';
import { StyledItem, StyledList } from './Pagination.styled';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <StyledList>
      {pageNumbers.map(number => (
        <StyledItem key={number} onClick={() => paginate(number)}>
          {number}
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default Pagination;

Pagination.propTypes = {
  usersPerPage: PropTypes.number.isRequired,
  totalUsers: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
