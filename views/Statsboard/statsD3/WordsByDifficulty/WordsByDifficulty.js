import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";
import "./WordsByDifficulty.css";

class WordsByDifficulty extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="wordsByDifficultyContainer">
        <p className="wordsByDiffHeader">Words Guessed By Difficulty</p>

        <ResponsiveContainer height={600} width={"90%"}>
          <RadarChart
            outerRadius={300}
            width={730}
            height={100}
            data={data}
            padding={{ top: 300 }}
          >
            <PolarGrid stroke="black" />
            <PolarAngleAxis
              dataKey="difficulty"
              fontSize="50px"
              stroke="black"
            />

            <Radar
              dataKey="score"
              stroke="#8884d8"
              fill="navy"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
        <div className="scoreByDifficultyDiv" className="scoreByDifficultyDiv">
          <h1 className="scoreByDiffEasy">{data[0].score}</h1>
          <span className="scoreByDiffSpan">Easy</span>
        </div>
        <div className="scoreByDifficultyDiv">
          <h1 className="scoreByDiffMedium">{data[1].score}</h1>
          <span className="scoreByDiffSpan">Medium</span>
        </div>
        <div className="scoreByDifficultyDiv">
          <h1 className="scoreByDiffHard">{data[2].score}</h1>
          <span className="scoreByDiffSpan">Hard</span>
        </div>
      </div>
    );
  }
}

export default WordsByDifficulty;
