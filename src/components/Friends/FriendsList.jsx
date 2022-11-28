import PropTypes from 'prop-types';

import {
  FriendList,
  FriendItem,
  Status,
  Avatar,
  Name,
} from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <Status>{isOnline}</Status>
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </FriendItem>
      ))}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
