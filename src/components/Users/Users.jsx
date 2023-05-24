import PropTypes from 'prop-types';
import {
  StyledAvatar,
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
      {users.map(({ tweets, followers, id, follow, avatar }) => (
        <StyledItem key={id}>
          <StyledDiv>
            <StyledLogo src="/pictures/Logo.png" alt="logo" width="76" />
            <StyledAvatar src={avatar} alt="avatar" width="80" />
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
  users: PropTypes.array.isRequired,
  onUnfollow: PropTypes.func.isRequired,
  onFollow: PropTypes.func.isRequired,
};
