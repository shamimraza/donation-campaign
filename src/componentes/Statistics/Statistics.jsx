import { useEffect, useState } from "react";
import { Pie, PieChart, Cell } from "recharts";

const Statistics = () => {
  const [donate, setDonate] = useState([]);

  useEffect(() => {
    const donateItem = localStorage.getItem("donate-application");
    if (donateItem) {
      setDonate(donateItem);
      console.log(donateItem);
    }
  }, []);

  const donateLength = donate.length;
  const totalDonate = 12;
  const percentageDonate = (donateLength / totalDonate) * 100;

  const dueDonate = 100 - percentageDonate.toFixed(2);

  const data = [
    { name: "total", value: dueDonate },
    { name: "your donation", value: percentageDonate },
  ];
  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex justify-center items-center gap-20">
        <div className="flex items-center gap-2">
          <p>Your Donation</p>
          <div className="border-solid border-4 w-32 border-[#00C49F]"></div>
        </div>
        <div className="flex items-center gap-2">
          <p>Total Donation</p>
          <div className="border-solid border-4 w-32 border-[#FF444A]"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
