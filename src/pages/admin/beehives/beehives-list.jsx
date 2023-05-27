import { useDispatch, useSelector } from "react-redux"
import { getBeeHives } from "../../../redux/beehives/actions"
import { useEffect } from "react"
import BeeHiveItem from "./beehive-list-item"
import TableHead from "../../../components/tables/table-head"
import FormSearchInput from "../../../components/forms/form-search-input"
import { Link } from "react-router-dom"

export default function BeeHivesList() {
  const dispatch = useDispatch()
  const beehives = useSelector((state) => state.beehives)
  const beeHivesTableHeadInfo = ['Дата', 'Кошер №', 'Пчелин №', 'Място в пчелина', 'Вид', 'Семейство', 'Майка', 'Опции']

  useEffect(() => {
    dispatch(getBeeHives())
  }, [])

  return (
    <div className="dashboard-page">
      <div className="px-4 pt-6">Кошери</div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-4 py-6">
        <div className="flex justify-between mb-5">
          <FormSearchInput htmlFor={"beehives-search"} label={"Търсене"} id={"beehives-search"} placeholder={"Търсене на кошери"}/>
          <Link to={"/beehives/add"}>
          <button class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg">
            Добави кошер
          </button>  
          </Link>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHead data={beeHivesTableHeadInfo} />
          <tbody>
            {beehives.length > 0 &&
              beehives.map((beehive) => {
                return (
                  <BeeHiveItem
                    key={beehive.beehive_id}
                    id={beehive.id}
                    date={beehive.date}
                    beehive_id={beehive.beehive_id}
                    apiary_id={beehive.apiary_id}
                    apiary_place={beehive.apiary_place}
                    type={beehive.type}
                    family_type={beehive.family_type}
                    bee_queen={beehive.bee_queen}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
