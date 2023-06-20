import {useDispatch, useSelector} from "react-redux";
import ApiaryItem from "./apiary-list-item";
import TableHead from "../../../components/tables/table-head";
import FormSearchInput from "../../../components/forms/form-search-input";
import {Link} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {useEffect} from "react";
import {setBeeHives} from "../../../redux/beehives/actions.js";
import {APIARIES} from "../../../graphql/apiaries.js";
import {setApiaries} from "../../../redux/apiaries/actions.js";

export default function ApiariesList() {
    const apiariesTableHead = ['Номер', 'Име', 'Бр.Кошери', 'Вид', 'Адрес', 'Опции']
    const dispatch = useDispatch()
    const apiaries = useSelector((state) => state.apiaries)
    const beehives = useSelector(state => state.beehives)

    const {loading, error, data} = useQuery(APIARIES)
    useEffect(() => {
        if (data && !apiaries.length) {
            dispatch(setApiaries(data?.apiaries?.items))
        }
    }, [data, dispatch]);

    function getBeehivesSize(_id) {
        return beehives.filter(beehive => beehive.apiary._id === _id).length
    }


    return (
        <div className="apiaries-list">
            <div className="px-4 pt-6">Пчелини</div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-4 py-6">
                <div className="flex justify-between mb-5">
                    <FormSearchInput htmlFor={"apiaries-search"} label={"Търсене"} id={"apiaries-search"}
                                     placeholder={"Търсене на пчелини"}/>
                    <Link to={"/dashboard/apiaries/add"}>
                        <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg">
                            Добави пчелин
                        </button>
                    </Link>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHead data={apiariesTableHead}/>
                    <tbody>
                    {apiaries.length > 0 &&
                        apiaries.map((apiary) => {
                            return (
                                <ApiaryItem
                                    key={apiary._id}
                                    id={apiary._id}
                                    apiaryId={apiary.apiaryId}
                                    name={apiary.name}
                                    beehives={getBeehivesSize(apiary._id)}
                                    apiaryType={apiary.apiaryType}
                                    address={apiary.location}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
