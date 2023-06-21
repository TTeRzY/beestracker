import {PencilIcon, TrashIcon} from "@heroicons/react/24/outline";
import {Link, useNavigate} from "react-router-dom";
import FormCheckBox from "../../../components/forms/form-checkbox";
import {formatDate} from "../../../helpers.js";
import {useMutation, useQuery} from "@apollo/client";
import {DELETE_BEEHIVE, GET_BEEHIVES} from "../../../graphql/beehives.js";

export default function BeeHiveListItem({
                                            id,
                                            createdAt,
                                            beehiveId,
                                            apiaryId,
                                            location,
                                            beehiveType,
                                            familyType,
                                        }) {

    const navigate = useNavigate()
    const [deleteItem, { loading, error }] = useMutation(DELETE_BEEHIVE);
    const {refetch} = useQuery(GET_BEEHIVES)

    const handleDelete = (id) => {
        deleteItem({
            variables: {
                _id: id
            },
        })
            .then((response) => {
                refetch()
            })
            .catch((error) => {
                // Handle error
                console.log(error)
            });
    };
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                <FormCheckBox
                    id={`checkbox-apiary-item-${apiaryId}`}
                    htmlFor={`checkbox-apiary-item-${apiaryId}`}
                />
            </td>
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                {formatDate(createdAt)}
            </th>
            <td className="px-6 py-4">{beehiveId}</td>
            <td className="px-6 py-4">{apiaryId}</td>
            <td className="px-6 py-4">{location}</td>
            <td className="px-6 py-4">{beehiveType}</td>
            <td className="px-6 py-4">{familyType}</td>
            <td className="px-6 py-4 flex items-center">
                <Link
                    to={`/dashboard/beehives/edit/${id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-1"
                >
                    <PencilIcon className="w-6 h-6"/>
                </Link>
                <Link
                    tabIndex={"0"}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-1"
                    onClick={() => handleDelete(id)
                    }
                >
                    <TrashIcon className="w-6 h-6" stroke="red"/>
                </Link>
            </td>
        </tr>
    );
}
