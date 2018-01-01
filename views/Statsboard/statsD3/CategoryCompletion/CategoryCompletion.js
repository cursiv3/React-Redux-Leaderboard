import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer
} from "recharts";
import "./CategoryCompletion.css";

const renderActiveShape = props => {
  const { payload, cx, cy } = props;
  return (
    <g>
      <text x={cx} y={cy - 135} textAnchor="middle" fill={"teal"} fontSize={70}>
        {payload.category}
      </text>
    </g>
  );
};

class CategoryCompletion extends React.Component {
  render() {
    const barColors = ["teal", "white"];
    const gap = 100 - this.props.data[0].percent;
    const data = this.props.data;
    data.push({ category: "", percent: gap });

    return (
      <div>
        <h1 className="catCompletionLabel">{data[0].category}</h1>
        <ResponsiveContainer width={"100%"} height={300}>
          <PieChart width={800} height={300}>
            <Pie
              activeShape={renderActiveShape}
              data={data}
              dataKey="percent"
              cy={160}
              innerRadius={80}
              outerRadius={120}
              fill="#82ca9d"
            >
              {data.map((val, idx) => (
                <Cell
                  fill={barColors[idx % barColors.length]}
                  stroke="gray"
                  key={idx}
                />
              ))}
            </Pie>
            <Tooltip />
            <text
              x={"51%"}
              y={180}
              fontSize={45}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {data[0].percent}%
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default CategoryCompletion;
