import React, { use } from "react";
import Friend from "./Friend";

export default function Friends({ friendPromise }) {
  const friends = use(friendPromise);
  console.log(friends);

  return (
    <div className="card2">
      Friends: {friends.length}

      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}

    </div>
  );
}
