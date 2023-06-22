import {Form, Formik} from "formik";
import FormInput from "../../../components/forms/form-input";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useMutation} from "@apollo/client";
import {CREATE_BEEHIVE} from "../../../graphql/beehives.js";

export default function AddBeeHive() {
    const navigate = useNavigate()
    const apiaries = useSelector(state => state.apiaries)
    const [createBeehive, {loading, error}] = useMutation(CREATE_BEEHIVE)

    if (loading) {
        console.log('login loading')
    }

    if (error) {
        console.log('login error: ', error)
    }

    const validationSchema = Yup.object().shape({
        beehiveId: Yup.string()
            .required("Това поле е задължително"),
        apiary: Yup.string()
            .required("Това поле е задължително"),
        beehiveType: Yup.string()
            .required("Това поле е задължително"),
        familyType: Yup.string()
            .required("Това поле е задължително"),
    });

    const onSubmit = formValues => {
        createBeehive({
            variables: {
                beehive: formValues
            }
        }).then(({data}) => {
            navigate('/dashboard/beehives');
        })
    }
    return (
        <div className="add-beehive-page px-4 pt-6 flex items-center justify-center">
            <div className="add-beehive-form-wrapper w-full xl:w-5/6 shadow-lg border-gray-200 rounded-lg bg-white">
                <div className="section-title bg-gray-200 text-gray-900 p-3 rounded-t-lg">
                    Добави кошер
                </div>
                <div className="add-beehive-wrapper p-5 xl:flex xl:items-center xl:justify-center shadow-b-lg">
                    <Formik
                        initialValues={{beehiveId: "", apiary: "", beehiveType: "", familyType: ""}}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            onSubmit(values)
                        }}
                    >
                        {(
                            {
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                values,

                            }
                        ) => (
                            <Form className="space-y-4 md:space-y-6 xl:w-5/6">
                                <FormInput
                                    labelClass="xl:w-1/6"
                                    fieldClass="xl:w-3/4"
                                    htmlFor="beehiveId"
                                    label="Номер на кошера"
                                    type="text"
                                    name="beehiveId"
                                    id="beehiveId"
                                    placeholder="Въведете номер на кошер"
                                    error={
                                        errors.beehiveId && touched.beehiveId && errors.beehiveId
                                    }
                                />

                                <div>
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white xl:w-1/6"
                                    >
                                        Избор на пчелин
                                    </label>
                                    <select
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.selectField}
                                        id="apiary"
                                        name="apiary"
                                        className="xl:w-3/4 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="" disabled={""}>Добавени пчелини</option>
                                        {apiaries.map(apiary => {
                                            return (
                                                <option key={apiary._id} value={apiary._id}>{apiary.apiaryId}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="beehiveType"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white xl:w-1/6"
                                    >
                                        Вид на кошера
                                    </label>
                                    <select
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.selectField}
                                        id="beehiveType"
                                        name="beehiveType"
                                        className="xl:w-3/4 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value={""} disabled={""}>Видове кошери</option>
                                        <option value={"Дадан-блат (8 рамков)"}>Дадан-блат (8 рамков)</option>
                                        <option value={"Дадан-блат (10 рамков)"}>Дадан-блат (10 рамков)</option>
                                        <option value={"Дадан-блат (12 рамков)"}>Дадан-блат (12 рамков)</option>
                                        <option value={"Лангстрот-рут"}>Лангстрот-рут</option>
                                        <option value={"Лангстрот-рут (8 рамков)"}>Лангстрот-рут (8 рамков)</option>
                                        <option value={"Фарар"}>Фарар</option>
                                        <option value={"Роже делон (Алпийски)"}>Роже делон (Алпийски)</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white xl:w-1/6"
                                    >
                                        Тип на кошера
                                    </label>
                                    <select
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.selectField}
                                        id="familyType"
                                        name="familyType"
                                        className="xl:w-3/4 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value={""} disabled={""}>
                                            Избери тип кошер
                                        </option>
                                        <option value={"Пчелно семейство"}>Пчелно семейство</option>
                                        <option value={"Рояк"}>Рояк</option>
                                        <option value={"Отводка"}>Отводка</option>
                                        <option value={"Кошер (празен)"}>Кошер (празен)</option>
                                    </select>
                                </div>

                                <div className="form-footer">
                                    <button
                                        type="submit"
                                        className="xl:w-1/5 text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-800"
                                    >
                                        Добави
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}
