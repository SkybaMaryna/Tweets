import { useState } from 'react';

import { useEffect } from 'react';
import { fetchUsersInfo } from '../../utiles/usersAPI';
import {
  StyledAvatar,
  StyledBorder,
  StyledButton,
  StyledDiv,
  StyledFollowers,
  StyledItem,
  StyledLogo,
  StyledTweets,
} from './TweetsPage.styled';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsersInfo().then(setUsers);
  }, []);

  return (
    <div>
      <ul>
        {users.map(({ tweets, followers, id }) => (
          <StyledItem key={id}>
            <StyledDiv>
              <StyledLogo src="src/assets/images/Logo.png" alt="logo" />
              <StyledAvatar src="src/assets/images/Boy.png" alt="avatar" />
              <StyledBorder></StyledBorder>
              <StyledTweets>{tweets} TWEETS</StyledTweets>
              <StyledFollowers>
                {new Intl.NumberFormat('en').format(followers)} FOLLOWERS
              </StyledFollowers>
              <StyledButton type="button">FOLLOW</StyledButton>
            </StyledDiv>
          </StyledItem>
        ))}
      </ul>
    </div>
  );
};

export default TweetsPage;
