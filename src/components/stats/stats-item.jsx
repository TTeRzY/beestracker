export default function StatsItem({ title, counter }) {
  return (
    <div className="my-1 w-1/4">
      <div className="flex items-center justify-center flex-col p-5 text-center">
        <div className={`"text-sm font-semibold text-gray-900" ${counter > 0 ? 'text-sky-500' : 'text-amber-500'}`}>{ counter }</div>
        <div className="text-sm font-medium text-gray-500">{ title }</div>
      </div>
    </div>
  );
}
