import {PencilIcon, Squares2X2Icon, TrashIcon} from "@heroicons/react/24/outline";
import FormCheckBox from "../../../components/forms/form-checkbox";
import { Link } from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import {DELETE_APIARY, GET_APIARIES} from "../../../graphql/apiaries.js";

export default function ApiaryListItem({ id, apiaryId, beehives, apiaryType, address }) {
    const [deleteItem, { loading, error }] = useMutation(DELETE_APIARY);
    const {refetch} = useQuery(GET_APIARIES)
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
        <FormCheckBox id={`checkbox-apiary-item-${apiaryId}`} htmlFor={`checkbox-apiary-item-${apiaryId}`} />
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {apiaryId}
      </th>
      <td className="px-6 py-4">{beehives}</td>
      <td className="px-6 py-4">{apiaryType}</td>
      <td className="px-6 py-4">{address}</td>
      <td className="px-6 py-4 flex items-center">
          <Link
              to={`/dashboard/apiaries/view/${id}`}
              className="font-medium text-sky-600 dark:text-sky-500 hover:underline px-1"
          >
              <Squares2X2Icon className="w-6 h-6"/>
          </Link>
        <Link
          to={`/dashboard/apiaries/edit/${id}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-1"
        >
          <PencilIcon className="w-6 h-6" />
        </Link>
        <Link
            tabIndex={"0"}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-1"
          onClick={() => handleDelete(id)}
        >
          <TrashIcon className="w-6 h-6" stroke="red" />
        </Link>
      </td>
    </tr>
  );
}
