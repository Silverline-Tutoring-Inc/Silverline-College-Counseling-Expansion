import React, { useState } from 'react'

const content = [
    {
        name: "Shanti",
        des: "A Parent",
        content: "“This service is so great, my child was struggling and lack confidence in math in general. Her tutor was great, and helped her through many problems and was patient with her. I would recommend Silverline Tutoring to any parent I meet”"
    },
    {
        name: "Shanti",
        des: "A Parent",
        content: "“This service is so great, my child was struggling and lack confidence in math in general. Her tutor was great, and helped her through many problems and was patient with her. I would recommend Silverline Tutoring to any parent I meet”"
    },
    {
        name: "Shanti",
        des: "A Parent",
        content: "“This service is so great, my child was struggling and lack confidence in math in general. Her tutor was great, and helped her through many problems and was patient with her. I would recommend Silverline Tutoring to any parent I meet”"
    }
]

export default function Testimonials() {

    const [val, setVal] = useState(0);

    return (
        <div style={{backgroundColor: "#181A1B", width: "100%", padding: "7rem", display: "flex", flexDirection: "row", fontFamily: "'Work Sans', sans-serif"}}>
            <div style={{width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Work Sans', sans-serif"}}>
                <p style={{fontSize: "18px", textTransform: "uppercase", fontWeight: 700, color: "#918CA1"}}>Satisfied Students</p>
                <h1 style={{fontSize: "30px", textTransform: "uppercase", fontWeight: 700, color: "white"}}>Testimonials</h1>
                <div style={{height: 35}}/>
                <div style={{width: "60%", overflow: "hidden"}}>
                    <div style={{display: "flex", flexDirection: "row", flexWrap: "nowrap", borderColor: "white", borderWidth: 2, width: "300%", overflow: "hidden", position: "relative", left: `-${100*val}%`, transition: '0.35s'}}>
                        {
                            content.map(c => <TestimonialItem {...c}/>)
                        }
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", gap: 10, position: "relative", top: "-110px"}}>
                    { content.map((c, idx) => <div onClick={() => setVal(idx)} style={{border: "3px solid white", width: "20px", height: "20px", backgroundColor: `rgba(145, 140, 161, ${idx===val ? 0.3 : 0})`, transition: "0.35s", borderRadius: "50%", aspectRatio: "1:1"}}/>) }
                </div>
            </div>
        </div>
    )
}

const TestimonialItem = ({ name, des, content }) => (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 10, width: "100%"}}>
        <img src={require("./user.jpg")} height={75} width={75} style={{borderRadius: "50%"}}/>
        <h3 style={{color: "white", fontFamily: "'Work Sans', sans-serif"}}>{name}</h3>
        <p style={{color: "#b6bbd2", fontFamily: "'Work Sans', sans-serif"}}>{des}</p>
        <p style={{fontSize: "100px", color: "white", fontFamily: "'Work Sans', sans-serif", position: "relative", top: "-20px"}}>“</p>
        <p style={{color: "white", position: "relative", top: "-110px", fontFamily: "'Work Sans', sans-serif", width: "80%", textAlign: "center"}}>{content}</p>
    </div>
)