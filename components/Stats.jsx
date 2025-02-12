"use client";

import CountUp from "react-countup";

const stats=[
    {
        num:2,
        text:"Years of exprience"
    },
    {
        num:5,
        text:"Projects completed"
    },
    {
        num:8,
        text:"Technologies mastered"
    },
    {
        num:300,
        text:"Code commits"
    },

]

const Stats = () => {
  return (
    <section>
        <div className=" container mx-auto">
            <div>
                {stats.map((itmes,index)=>{
                    return <div key={index}>

                    <CountUp 
                    end={itmes.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"/>
                        </div>
                })}
            </div>

        </div>
    </section>
  )
}

export default Stats
