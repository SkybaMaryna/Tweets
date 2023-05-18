import { useState } from 'react';
import { useEffect } from 'react';
import { fetchUsersInfo, updateUserInfo } from '../../utiles/usersAPI';
import Pagination from '../../components/Pagination/Pagination';
import Users from '../../components/Users/Users';
import BackBtn from '../../components/BackBtn/BackBtn';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);

  useEffect(() => {
    fetchUsersInfo().then(setUsers);
  }, []);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUser = users.slice(firstUserIndex, lastUserIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

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
      <Users users={currentUser} onFollow={onFollow} onUnfollow={onUnfollow} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
      <BackBtn />
    </div>
  );
};

export default TweetsPage;
