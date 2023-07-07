import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_APIARY} from "../../../graphql/apiaries.js";
import {useSelector} from "react-redux";
import {formatDate} from "../../../helpers.js";
import {ChartBarSquareIcon} from "@heroicons/react/20/solid/index.js";
import Weather from "../../../components/weather/Weather.jsx";
import Forecast from "../../../components/forecast/Forecast.jsx";
import Map from "../../../components/map/Map.jsx";

export default function ViewApiary() {
    const navigate = useNavigate()
    const beehives = useSelector(state => state.beehives)
    const {id} = useParams()
    const {loading, error, data} = useQuery(GET_APIARY, {
        variables: {
            _id: id
        }
    })
    const totalYieldHeadings = ['Мед', 'Восък', 'Прополис', 'Прашец', 'Млечице', 'Отрова'];
    const totalYieldInitialValues = [0, 0, 0, 0, 0, 0];
    const totalNutritionHeadings = ['Суха', 'Течна'];
    const totalNutritionInitialValues = [0, 0];

    function getBeehives(_id) {
        return beehives.filter(beehive => beehive.apiary._id === _id)
    }

    const apiaryLocation = () => {
        const location = data?.apiary.location
        const latitude = location?.split(',')[0]
        const longitude = location?.split(',')[1]
        return {
            latitude,
            longitude
        }
    }

    return (
        <div className="view-apiary px-4 py-3">
            <h3 className="font-bold text-md px-4 pt-5">Данни за пчелина:</h3>
            <div className="flex flex-wrap w-full ">
                <div className="w-full xl:w-1/4 xl:px-4 mt-4">
                    <div className="apiary-info bg-white p-4 shadow-sm border-gray-200 rounded-lg text-gray-500">
                        <ul>
                            <li>
                                <span className="font-bold">Регистрационен номер:</span>
                                <span className="px-2">{data?.apiary.apiaryId}</span>
                            </li>
                            <li>
                                <span className="font-bold">Вид на пчелина:</span>
                                <span className="px-2">{data?.apiary.apiaryType}</span>
                            </li>
                            <li>
                                <span className="font-bold">Създаден на:</span>
                                <span className="px-2">{formatDate(data?.apiary.createdAt)}</span>
                            </li>
                            <li>
                                <span className="font-bold">Брой кошери:</span>
                                <span className="px-2">{getBeehives(id).length}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="map-info bg-white p-4 shadow-sm border-gray-200 rounded-lg relative mt-5">
                        {data && <Map latitude={apiaryLocation().latitude} longitude={apiaryLocation().longitude} />}
                    </div>
                </div>
                <div className="w-full xl:w-1/3 xl:px-4 mt-4">
                    <div className="total-season-yield bg-white p-3 shadow-sm border-gray-200 rounded-lg overflow-x-auto xl:overflow-x-hidden">
                        <h4 className="text-sm xl:text-base font-bold mb-4 flex items-center align-center text-gray-500">
                            <ChartBarSquareIcon className={"w-5 h-5"} />
                            <span>Общ добив за целия пчелин през</span>
                        </h4>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead>
                            <tr>
                                {totalYieldHeadings.map((heading) => (
                                    <th key={heading} className="py-2 px-4">
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={"border-t"}>
                                {totalYieldInitialValues.map((value, index) => (
                                    <td key={index} className="py-2 px-4">
                                        {value}
                                    </td>
                                ))}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="total-season-nutrition bg-white p-3 mt-5 shadow-sm border-gray-200 rounded-lg overflow-x-auto xl:overflow-x-hidden">
                        <h4 className="text-sm xl:text-base font-bold mb-4 flex items-center align-center text-gray-500">
                            <ChartBarSquareIcon className={"w-5 h-5"} />
                            <span>Подхранка за целия пчелин през сезона</span>
                        </h4>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead>
                            <tr>
                                {totalNutritionHeadings.map((heading) => (
                                    <th key={heading} className="py-2 px-4">
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={"border-t"}>
                                {totalNutritionInitialValues.map((value, index) => (
                                    <td key={index} className="py-2 px-4">
                                        {value}
                                    </td>
                                ))}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={"w-full xl:w-1/3 xl:px-4 mt-4"}>
                    {data && <Weather latitude={apiaryLocation().latitude} longitude={apiaryLocation().longitude} />}
                    {data && <Forecast latitude={apiaryLocation().latitude} longitude={apiaryLocation().longitude} /> }
                </div>
            </div>
        </div>
    )
}