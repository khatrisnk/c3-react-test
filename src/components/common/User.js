import React from 'react';

export default function User(props) {
  const { first_name, last_name, avatar, id, deleteUser } = props;
  return (
    <div className="user col-md-4">
      <div className="user-top" />
      <div className="user-bottom">
        <div className="user-name">
          <span className="user-first-name">{first_name}</span>
          &nbsp;
          <span className="user-last-name">{last_name}</span>
        </div>
        <a
          className="user-delete"
          title="delete"
          href="# "
          onClick={deleteUser.bind(this, id)}
        >
          Delete
        </a>
      </div>
      <img className="user-avatar" src={avatar} alt="avtar" />
    </div>
  );
}
