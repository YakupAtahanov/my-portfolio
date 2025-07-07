import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#4caf50', '#ddd'];

export default function SkillChart({ label, value }) {
  const data = [
    { name: 'Confidence', value },
    { name: 'Remaining', value: 100 - value },
  ];

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
