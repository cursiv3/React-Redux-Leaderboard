import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer
} from "recharts";

class WordsByLength extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = this.props.data;
    var max = data.reduce(function(a, b) {
      return Math.max(a, b);
    });
    return (
      <div
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "0 0 30px 0"
        }}
      >
        <p
          style={{
            fontSize: "65px",
            color: "white",
            backgroundColor: "teal"
          }}
        >
          Words Guessed By Length
        </p>
        <ResponsiveContainer height={"30%"} width={"100%"}>
          <BarChart
            data={data}
            width={900}
            height={700}
            margin={{ top: 5, left: 5, right: 5, bottom: 30 }}
          >
            <Tooltip />
            <YAxis axisLine={false} hide={true} type={"number"} />
            <XAxis
              dataKey="length"
              type={"category"}
              tick={{ fontSize: "70px", fill: "black" }}
              tickCount={8}
            />
            <Bar
              dataKey="Amount"
              fill="navy"
              label={{ fill: "white", fontSize: 60 }}
            />
          </BarChart>
        </ResponsiveContainer>
        <p style={{ textAlign: "center", fontSize: "50px", margin: "0" }}>
          Number Of Letters
        </p>
      </div>
    );
  }
}

export default WordsByLength;
