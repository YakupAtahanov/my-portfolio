import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['', '#ddd'];

export default function SkillChart({ label, value }) {
  const getColor = (val) => {
    const clamp = Math.min(Math.max(val, 0), 100);

    let from, to;
    let t;

    if (clamp <= 50) {
      // Red to Orange
      from = [211, 47, 47];    // #d32f2f
      to = [245, 124, 0];      // #f57c00
      t = clamp / 50;
    } else {
      // Orange to Green
      from = [245, 124, 0];    // #f57c00
      to = [56, 142, 60];      // #388e3c
      t = (clamp - 50) / 50;
    }

    const r = Math.round(from[0] + (to[0] - from[0]) * t);
    const g = Math.round(from[1] + (to[1] - from[1]) * t);
    const b = Math.round(from[2] + (to[2] - from[2]) * t);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const data = [
    { name: 'Confidence', value },
    { name: 'Remaining', value: 100 - value },
  ];
  
  COLORS[0] = getColor(value);

  return (
    <div style={{ textAlign: 'center' }}>
      <PieChart width={120} height={120}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={35}
          outerRadius={50}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
        >
          {data.map((entry, i) => (
            <Cell key={`cell-${i}`} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>{label}</p>
    </div>
  );
}
