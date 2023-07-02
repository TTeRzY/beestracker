import {useDispatch, useSelector} from "react-redux";
import {useQuery} from "@apollo/client";
import {CURRENT_USER} from "../../../graphql/user.js";
import {useEffect} from "react";
import {setCurrentUser} from "../../../redux/user/actions.js";
import Loader from "../../../components/Loader.jsx";

export default function User() {
    const dispatch = useDispatch()
    const {loading, error, data} = useQuery(CURRENT_USER);
    const user = useSelector(state => state.currentUser)

    useEffect(() => {
        if (data) {
            dispatch(setCurrentUser(data?.currentUser))
        }
    }, [data, dispatch])

    return (
        <div className="user-information px-4 py-3 relative h-screen">
            <h3 className="font-bold text-md px-4 pt-5">Настройки потребител:</h3>
            {loading && <Loader />}
            {Object.keys(user).length > 0 && <div className="flex flex-wrap w-full ">
                <div className={"w-full xl:w-1/3 xl:px-4 mt-4"}>
                    <div className="bg-white">
                        <div className="p-4 text-center">
                            <img src="../user.png" alt="Avatar" width="250" height="250" className="rounded-full mx-auto mb-4" />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="m-0 text-lg font-bold">{`${user.firstName} ${user.lastName}`}</h3>
                            <h3 className="m-0 text-md">{user.email}</h3>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-2/3 xl:px-4 mt-4">
                    <div className="bg-white p-3 shadow-sm border-gray-200 rounded-lg">
                        <div className="flex flex-wrap mb-4 text-gray-500">
                            <div className="w-full flex items-center">
                                <div className="mb-2 md:w-1/2 mb-2 md:mb-0">
                                    <span className="font-bold">Име</span>
                                </div>
                                <div className="mb-2 md:w-1/4">
                                    <span className="font-bold">{user.firstName}</span>
                                </div>
                            </div>
                            <div className="w-full flex items-center border-t">
                                <div className="mb-2 md:w-1/2 mb-2 md:mb-0">
                                    <span className="font-bold">Фамилия</span>
                                </div>
                                <div className="mb-2 md:w-1/4">
                                    <span className="font-bold">{user.lastName}</span>
                                </div>
                            </div>
                            <div className="w-full flex items-center border-t">
                                <div className="mb-2 md:w-1/2 mb-2 md:mb-0">
                                    <span className="font-bold">Имейл</span>
                                </div>
                                <div className="mb-2 md:w-1/4">
                                    <span className="font-bold">{user.email}</span>
                                </div>
                            </div>
                            <div className="w-full flex items-center border-t">
                                <div className="mb-2 md:w-1/2 mb-2 md:mb-0">
                                    <span className="font-bold">Адрес</span>
                                </div>
                                <div className="mb-2 md:w-1/4">
                                    <span className="font-bold">{user.occupation}</span>
                                </div>
                            </div>
                            <div className="w-full flex items-center border-t">
                                <div className="mb-2 md:w-1/2 mb-2 md:mb-0">
                                    <span className="font-bold">Роли</span>
                                </div>
                                <div className="mb-2 md:w-1/4">
                                    <span className="font-bold">{user?.roles.map((role, index) => {
                                        return `${index !== 0 ? ', ' : ''}${role}`
                                    })}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>}
        </div>
    )
}