import { useState } from 'react';
import { useEffect } from 'react';
import { fetchUsersInfo, updateUserInfo } from '../../utiles/usersAPI';
import {
  StyledAvatar,
  StyledBorder,
  StyledDiv,
  StyledFollowButton,
  StyledFollowers,
  StyledItem,
  StyledLogo,
  StyledTweets,
  StyledUnfollowButton,
} from './TweetsPage.styled';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetchUsersInfo().then(setUsers);
  }, []);

  const onFollow = async (id, followers) => {
    const updateFollower = followers + 1;
    await updateUserInfo(id, { followers: updateFollower, follow: true });
    fetchUsersInfo().then(setUsers);
  };

  const onUnfollow = async (id, followers) => {
    const updateFollower = followers - 1;
    console.log(updateFollower);
    await updateUserInfo(id, { followers: updateFollower, follow: false });
    fetchUsersInfo().then(setUsers);
  };

  return (
    <div>
      <ul>
        {users.map(({ tweets, followers, id, follow }) => (
          <StyledItem key={id}>
            <StyledDiv>
              <StyledLogo src="src/assets/images/Logo.png" alt="logo" />
              <StyledAvatar src="src/assets/images/Boy.png" alt="avatar" />
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
      </ul>
    </div>
  );
};

export default TweetsPage;
