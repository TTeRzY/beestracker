import StatsItem from "./stats-item";

const stats = [
  {
    title: "Хранения за сезона",
    counter: 11,
  },
  {
    title: "Третирания за сезона",
    counter: 2,
  },
  {
    title: "Прегледа на кошерите за сезона",
    counter: 20,
  },
  {
    title: "Добив за сезона в кг",
    counter: 150,
  },
  {
    title: "Изпълнени задачи",
    counter: 20,
  },
  {
    title: "Неизпълнени задачи",
    counter: 5,
  },
  {
    title: "Средна сила на кошерите за сезона",
    counter: "60/100",
  },
];

export default function Stats() {
  return (
    <div className="stats-wrapper bg-white  my-5 shadow-sm border-gray-200 rounded-lg">
      <div className="stats-header bg-gray-100 p-3 rounded-t-lg">
        <h3>Статистика</h3>
      </div>
      <div className="flex flex-wrap">
        {stats.map((item) => (
          <StatsItem title={item.title} counter={item.counter} />
        ))}
      </div>
    </div>
  );
}
