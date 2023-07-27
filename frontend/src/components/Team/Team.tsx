import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import TeamCard from "./TeamCard";

// const cardLoop = () => {
// 	let cards = [];
// 	for (let i = 0; i < board.length; i++) {
// 		cards.push(
// 			<TeamCard
// 				name={board[i].name}
// 				img={board[i].img}
// 				desc={board[i].desc}
// 				education={board[i].education}
// 				hobbies={board[i].hobbies}
// 				linkedin={board[i].linkedin}
// 			/>
// 		);
// 	}
// 	return cards;
// };

function Team() {
  // setup strapi fetching

  const [members, setMembers] = useState([]);

  // useEffect(() => {
  // 	(async () => await fetch("http://localhost:1337/api/members?populate=*")
  // 		.then(res => res.json())
  // 		.then(res => {
  // 			console.log("data: ", res.data)
  // 			setMembers(res.data)
  // 		}))();
  // }, [])

  return (
    <>
      <NavBar pageName="team" />
      <div className="container">
        <div className="row align-items-stretch" style={{ paddingTop: "5rem" }}>
          {members.map((m) => (
            <TeamCard {...m.attributes} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
