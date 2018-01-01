import React from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import "./WordsByCategory.css";

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;

  return (
    <g>
      <text
        x={cx}
        y={cy - 495}
        dy={8}
        textAnchor="middle"
        fill={"teal"}
        fontSize={90}
      >
        {payload.category}
      </text>
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        fill="#333"
        fontSize={50}
      >{`${value} words`}</text>
      <text
        x={cx}
        y={cy + 40}
        dy={18}
        textAnchor="middle"
        fill="#999"
        fontSize={50}
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 30}
        fill={"teal"}
      />
    </g>
  );
};

class WordsByCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };
    this.onPieEnter = this.onPieEnter.bind(this);
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div>
        <p className="wordsByCatHeader">Words Guessed By Category</p>
        <ResponsiveContainer width={"100%"} height={1000}>
          <PieChart width={800} height={600}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={this.props.data}
              dataKey="value"
              cy={575}
              innerRadius={225}
              outerRadius={400}
              fill="#8884d8"
              onMouseEnter={this.onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default WordsByCategory;
