import { useState } from 'react';
import { useEffect } from 'react';
import { fetchUsersInfo, updateUserInfo } from '../../utiles/usersAPI';
import Users from '../../components/Users/Users';
import BackBtn from '../../components/BackBtn/BackBtn';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

const USER_PER_PAGE = 3;

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [firstUserIndex] = useState(0);
  const [lastUserIndex, setLastUserIndex] = useState(3);
  const [paginateUsers, setPaginateUsers] = useState([]);

  useEffect(() => {
    fetchUsersInfo().then(setUsers);
  }, []);

  useEffect(() => {
    const currentUser = users.slice(firstUserIndex, lastUserIndex);
    setPaginateUsers(currentUser);
  }, [users, firstUserIndex, lastUserIndex]);

  const handleClick = () => {
    setLastUserIndex(prevState => prevState + USER_PER_PAGE);
  };

  const onFollow = async (id, followers) => {
    const updateFollower = followers + 1;
    await updateUserInfo(id, { followers: updateFollower, follow: true });
    fetchUsersInfo().then(setUsers);
  };

  const onUnfollow = async (id, followers) => {
    const updateFollower = followers - 1;
    await updateUserInfo(id, { followers: updateFollower, follow: false });
    fetchUsersInfo().then(setUsers);
  };

  return (
    <div>
      <Users
        users={paginateUsers}
        onFollow={onFollow}
        onUnfollow={onUnfollow}
      />
      {paginateUsers.length < users.length && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
      <BackBtn />
    </div>
  );
};

export default TweetsPage;
