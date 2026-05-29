import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { skill: "Java", level: 90 },
  { skill: "Python", level: 88 },
  { skill: "SQL", level: 86 },
  { skill: "MySQL", level: 84 },
  { skill: "JavaScript", level: 87 },
  { skill: "Data Analysis", level: 82 },
];

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-white/20 bg-[#0A1227]/95 px-3 py-2 text-xs text-white shadow-lg">
      <p className="font-semibold">{payload[0].payload.skill}</p>
      <p className="text-[#9DB0DF]">Strength: {payload[0].value}%</p>
    </div>
  );
}

export default function SkillChart() {
  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="72%">
          <defs>
            <linearGradient id="skillFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#79A1FF" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#5BE6C9" stopOpacity={0.65} />
            </linearGradient>
          </defs>

          <PolarGrid stroke="rgba(157,176,223,0.28)" />
          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: "#9DB0DF", fontSize: 11, fontWeight: 500 }}
          />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />

          <Tooltip content={<CustomTooltip />} />

          <Radar
            dataKey="level"
            stroke="#79A1FF"
            fill="url(#skillFill)"
            strokeWidth={2.3}
            fillOpacity={0.9}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}