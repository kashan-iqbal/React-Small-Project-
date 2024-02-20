import React, { memo } from "react";
import "./Style.css";

const User = ({ data }) => {
  console.log(data);
  return (
    <>
      {data &&
        data.length &&
        data.map((d) => {
          return (
            <div className="user" key={d.id}>
              <div>
                <img src={d.avatar_url} className="avatar" alt="User" loading="lazy" />
              </div>
              <div className="name-container">
                <a href={`https://github.com/${d.login}`}>
                  {d.name || d.login}
                </a>
                <p>
                  User joined on{" "}
                  {d.created_at} {d.created_at}
                </p>
              </div>
              <div className="profile-info">
                <div>
                  <p>Public Repos</p>
                  <p>{d.public_repos}</p>
                </div>
                <div>
                  <p>Followers</p>
                  <p>{d.followers}</p>
                </div>
                <div>
                  <p>Following</p>
                  <p>{d.following}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default memo(User);
