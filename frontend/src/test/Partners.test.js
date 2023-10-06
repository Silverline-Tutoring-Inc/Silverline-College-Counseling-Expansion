import React from "react";
import { render, screen } from "@testing-library/react";
import Partners from "../components/Partners/Partners";

test("Checks that the partner container is rendered and not empty", () => {
	render(<Partners />);
	expect(
		screen.getByTestId("partners-containers").textContent
	).toBeInTheDocument();
});

test("Checks that the components are rendered correctly", () => {
	render(<Partners />);

	// Checks page headings
	expect(screen.getByText("Our Partners & Sponsors")).toBeInTheDocument();
	expect(
		screen.getByText(
			"Several businesses, non-profits, and organizations in the United States help bring the Silverline image to reality. Partners provide resources, funds or other necesseities required to create a functioning organization. Interested in helping Silverline solve the educational divide? Contact a represensative here."
		)
	).toBeInTheDocument();

	// Checks partners images
	const partnersImages = [
		screen.getByAltText("The pond"),
		screen.getByAltText("Bumper Investing"),
		screen.getByAltText("Canva"),
		screen.getByAltText("American Red Cross"),
		screen.getByAltText("365 to Japan"),
		screen.getByAltText("Sultan's Marketing"),
		screen.getByAltText("Panda Express"),
		screen.getByAltText("Equality in Forensics"),
		screen.getByAltText("Chipotle of Drumhill Chelmsford, MA"),
		screen.getByAltText("The Wish Project"),
		screen.getByAltText("Chelmsford High School"),
	];
	partnersImages.map((e) => expect(e).toBeInTheDocument());

	// Checks partners names
	const partnersName = [
		screen.getByText("The pond"),
		screen.getByText("Bumper Investing"),
		screen.getByText("Canva"),
		screen.getByText("American Red Cross"),
		screen.getByText("365toJapan"),
		screen.getByText("Sultan's Marketing"),
		screen.getByText("Panda Express"),
		screen.getByText("Equality in Forensics"),
		screen.getByText("Chipotle of Drumhill Chelmsford, MA"),
		screen.getByText("The Wish Project"),
		screen.getByText("Chelmsford High School"),
	];
	partnersName.map((e) => expect(e).toBeInTheDocument());

  // Checks partners description
  const partnersDesc = [
    screen.getByText(
      "The Pond is an all in one service for students applying to college. The Pond provides student with a personalized program for college entrance so they always know what to do next and how to do it. The Pond utilizes AI software in order to help student with the college process. To date, over 60,000 students have used the Pond to develop college lists, and they also have over 15,000 active users of the platform. The Pond and Silverline Educational Advisory Services work together to help students from all different backgrounds.",
    ),
	// Checks partners description
	const partnersDesc = [
		screen.getByText(
			"The Pond is an all in one service for students applying to college. The Pond provides student with a personalized program for college entrance so they always know what to do next and how to do it. The Pond utilizes AI software in order to help student with the college process. To date, over 60,000 students have used the Pond to develop college lists, and they also have over 15,000 active users of the platform. The Pond and Silverline Tutoring work together to help students from all different backgrounds."
		),

		screen.getByText(
			"Bumper is an educational investing platform that helps teens begin investing with just $1 and an adult sponsor. Join the hundreds of teens in their ambassador program, a 9-week program focused on gaining real world experience in the investing world. Gain access to perks and rewards while helping fulfill Bumper's mission of expanding future opportunities for students through investing."
		),

		screen.getByText(
			"Bumper is an educational investing platform that helps teens begin investing with just $1 and an adult sponsor. Join the hundreds of teens in their ambassador program, a 9-week program focused on gaining real world experience in the investing world. Gain access to perks and rewards while helping fulfill Bumper's mission of expanding future opportunities for students through investing."
		),

		screen.getByText(
			"The American Red Cross shelters, feeds and provides comfort to victims of disasters; supplies about 40% of the nation's blood; teaches skills that save lives; distributes international humanitarian aid; and supports veterans, military members and their families Click on the logo to view and donate to Silverline's donation page today."
		),

		screen.getByText(
			"365toJapan is an educational blog covering the course of an enthusiastic Japanese learner. Their mission is to one day visit Japan as an immersed student. The blog covers language, culture, and more, serving as a space for new and experienced learners. As an organization, Silverline helps supports strong and creative educational causes such as 365toJapan through promotions."
		),

		screen.getByText(
			"Sultan’s marketing is a startup marketing company that offer social media marketing services to local businesses. They help business adapt the new generation and grow to the next level by increasing their brand awareness and presence in the social media sphere. They aim to provide low price and high quality marketing services to small businesses and big business alike."
		),

    screen.getByText(
      "Panda Express is an American fast food restaurant chain that serves American Chinese cuisine. With over 2,200 locations, it is the largest Asian-segment restaurant chain in the United States. They are working with Silverline Educational Advisory Services to help fundraise and donate resources to children in India and Ethopia.",
    ),
		screen.getByText(
			"Panda Express is an American fast food restaurant chain that serves American Chinese cuisine. With over 2,200 locations, it is the largest Asian-segment restaurant chain in the United States. They are working with Silverline Tutoring to help fundraise and donate resources to children in India and Ethopia."
		),

		screen.getByText(
			"Equality in Forensics is a student-run NPO that provides free, online resources to make speech and debate more accessible. Their mission is to reduce the classist barriers that prevent anyone from succeeding in high school forensics. From free online tournaments, to curriculum produced by national champions, Equality in Forensics provides direct support to debaters across the country."
		),

    screen.getByText(
      "Chipotle Mexican Grill, Inc. is an American chain of fast casual restaurants in that operates in over 5 different countries with nearly 3,000 locations. In September of 2022, they worked with Silverline Educational Advisory Services to help fundraise money. This fundraiser allowed Silverline to become one step closer to solving the educational divide. Money was redistributed to Silverline heads in Africa in order donate to those in need.",
    ),
		screen.getByText(
			"Chipotle Mexican Grill, Inc. is an American chain of fast casual restaurants in that operates in over 5 different countries with nearly 3,000 locations. In September of 2022, they worked with Silverline Tutoring to help fundraise money. This fundraiser allowed Silverline to become one step closer to solving the educational divide. Money was redistributed to Silverline heads in Africa in order donate to those in need."
		),

		screen.getByText(
			"The Wish Project’s mission is to help families in need establish long-term residency by providing basic needs to provide critical immediate assistance to homeless families, victims of fire or disaster; and to support the community. After realizing a a similarity in mission statements, the Wish Project began working with Silverline to help the local Massachusetts area and solve local educational disparities."
		),

    screen.getByText(
      "Silverline Educational Advisory Services is partnered with Chelmsford High School. Chelmsford High School is a high school located in Chelmsford, Massachusetts and serves nearly 1,500 students. Silverline Educational Advisory Services works to provide students with help for all academic classes and provide volunteer opportunities to students.",
    ),
  ];
  partnersDesc.map((e) => expect(e).toBeInTheDocument());
		screen.getByText(
			"Silverline Tutoring is partnered with Chelmsford High School. Chelmsford High School is a high school located in Chelmsford, Massachusetts and serves nearly 1,500 students. Silverline Tutoring works to provide students with help for all academic classes and provide volunteer opportunities to students."
		),
	];
	partnersDesc.map((e) => expect(e).toBeInTheDocument());
});
