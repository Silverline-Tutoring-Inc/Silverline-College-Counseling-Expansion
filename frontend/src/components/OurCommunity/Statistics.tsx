import React, { useState, useEffect } from "react";
import img from "./extraCommunity.jpg";

interface StatItemProps {
  num: number;
  text: string;
}

const StatItem: React.FC<StatItemProps> = ({ num, text }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
    }}
  >
    <div
      style={{
        borderRadius: "50%",
        border: "5px solid white",
        aspectRatio: "1/1",
        width: "180px",
        height: "180px",
        background: "rgba(145,140,161, 1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: 600,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "60px",
        textAlign: "center",
      }}
    >
      {num}
    </div>
    <h2 style={{ color: "white", textAlign: "center" }}>{text}</h2>
  </div>
);

const Statistics: React.FC = () => {
  const statsListConst: StatItemProps[] = [
    { num: 75, text: "Average Sessions Per Week" },
    { num: 78, text: "Average Tutoring Hours Per Week" },
    { num: 108, text: "Current Enrolled Students" },
    { num: 6587, text: "Tutoring Sessions All Time" },
    { num: 247, text: "Volunteers Over Time" },
    { num: 24, text: "Undergraduate Students" },
    { num: 5000, text: "Total Members" },
    { num: 55, text: "Community Assistants" },
  ];

  const [statsList, setStatsList] = useState(
    statsListConst.map((stat) => ({ ...stat, num: 0 }))
  );

  const count = () => {
    const time = 10000;

    for (let i = 1; i <= time; i++) {
      setTimeout(() => {
        setStatsList((stats) => {
          return stats.map((stat, j) => {
            if (
              stat.num < statsListConst[j].num &&
              i % Math.round(time / statsListConst[j].num) === 0
            ) {
              return { ...stat, num: stat.num + 1 };
            } else {
              return stat;
            }
          });
        });
      }, 1);
    }
  };

  useEffect(() => {
    document.addEventListener("aos:in:stats", () => setTimeout(count, 500));

    return () =>
      setStatsList(statsListConst.map((stat) => ({ ...stat, num: 0 })));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        background: `url(${img}) no-repeat scroll center/cover`,
        padding: "150px 50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 50,
      }}
    >
      <h1
        style={{
          color: "white",
          fontWeight: 800,
          textAlign: "center",
          fontFamily: "'Work Sans', sans-serif",
        }}
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-id="stats"
      >
        Silverline Statistics
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          width: "60%",
          rowGap: 100,
          columnGap: 50,
        }}
      >
        {statsList.map((s, index) => (
          <StatItem key={index} {...s} />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
