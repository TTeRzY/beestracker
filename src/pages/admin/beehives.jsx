import { useDispatch, useSelector } from "react-redux"
import { getBeeHives } from "../../redux/beehives/actions"
import { useEffect } from "react"
import BeeHiveItem from "./beehive-item"
import TableHead from "../../components/tables/table-head"
import FormSearchInput from "../../components/forms/form-search-input"

export default function BeeHives() {
  const dispatch = useDispatch()
  const beehives = useSelector((state) => state.beehives)
  const beeHivesTableHeadInfo = ['Дата', 'Кошер №', 'Пчелин №', 'Място в пчелина', 'Вид', 'Семейство', 'Майка']

  useEffect(() => {
    dispatch(getBeeHives())
  }, [])

  return (
    <div className="dashboard-page">
      <div className="px-4 pt-6">Кошери</div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-4 py-6">
        <FormSearchInput htmlFor={"beehives-search"} label={"Търсене"} id={"beehives-search"} placeholder={"Търсене на кошери"}/>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHead data={beeHivesTableHeadInfo} />
          <tbody>
            {beehives.length > 0 &&
              beehives.map((beehive) => {
                return (
                  <BeeHiveItem
                    key={beehive.beehive_id}
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
