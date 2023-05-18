import PropTypes from 'prop-types';
import {
  StyledAvatar,
  StyledBorder,
  StyledDiv,
  StyledFollowButton,
  StyledFollowers,
  StyledItem,
  StyledList,
  StyledLogo,
  StyledTweets,
  StyledUnfollowButton,
} from './Users.styled';

const Users = ({ users, onUnfollow, onFollow }) => {
  return (
    <StyledList>
      {users.map(({ tweets, followers, id, follow }) => (
        <StyledItem key={id}>
          <StyledDiv>
            <StyledLogo src="./src/assets/images/Logo.png" alt="logo" />
            <StyledAvatar src="./src/assets/images/Boy.png" alt="avatar" />
            <StyledBorder></StyledBorder>
            <StyledTweets>{tweets} TWEETS</StyledTweets>
            <StyledFollowers>
              {new Intl.NumberFormat('en').format(followers)} FOLLOWERS
            </StyledFollowers>
            {follow ? (
              <StyledUnfollowButton
                type="button"
                onClick={() => onUnfollow(id, followers)}
              >
                FOLLOWING
              </StyledUnfollowButton>
            ) : (
              <StyledFollowButton
                type="button"
                onClick={() => onFollow(id, followers)}
              >
                FOLLOW
              </StyledFollowButton>
            )}
          </StyledDiv>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default Users;

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUnfollow: PropTypes.func.isRequired,
  onFollow: PropTypes.func.isRequired,
};
