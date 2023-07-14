import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import { board } from "./dummy";
import TeamCard from "./TeamCard";

const cardLoop = () => {
	let cards = [];
	for (let i = 0; i < board.length; i++) {
		cards.push(
			<TeamCard
				name={board[i].name}
				img={board[i].img}
				desc={board[i].desc}
				education={board[i].education}
				hobbies={board[i].hobbies}
				linkedin={board[i].linkedin}
			/>
		);
	}
	return cards;
};

function Team() {

	// setup strapi fetching

	const [members, setMembers] = useState([])

	useEffect(() => {
		fetch("http://localhost:1337/api/members")
			.then(res => res.json())
			.then(data => setMembers(data))
	}, [])

	return (
		<>
			<NavBar pageName="team" />
			<div className="container">
				<div
					class="row align-items-stretch"
					style={{ paddingTop: "5rem" }}
				>
					{
						members.map(m => <TeamCard {...m} />)
					}
				</div>
			</div>
		</>
	);
}

export default Team;
