import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import TeamCard from "./TeamCard";

export interface Hobby {
	id: number;
	attributes: {
		hobby: string;
	};
}

export interface Member {
	id: number;
	attributes: {
		name: string;
		description: string;
		education: string;
		linkedin: string;
		img: {
			data: {
				attributes: {
					url: string;
				}[];
			};
		};
		hobbies: {
			data: Hobby[];
		};
	};
}

const Team: React.FC = () => {
	const [members, setMembers] = useState<Member[]>([]);

	useEffect(() => {
		(async () =>
			await fetch("http://localhost:1337/api/members?populate=*")
				.then((res) => res.json())
				.then((res) => {
					setMembers(res.data);
				}))();
	}, []);

	return (
		<>
			<NavBar pageName="team" />
			<div className="container">
				<div
					className="row align-items-stretch"
					style={{ paddingTop: "5rem" }}
				>
					{members.map((m: Member) => (
						<TeamCard key={m.id} {...m.attributes} />
					))}
				</div>
			</div>
		</>
	);
};

export default Team;
