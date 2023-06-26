import {Form, Formik} from "formik";
import FormInput from "../../../components/forms/form-input";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {CREATE_APIARY} from "../../../graphql/apiaries.js";

const plantTypes = [
    "Маргарит",
    "Бяла акация",
    "Бяла комунига",
    "Липа",
    "Рапица",
    "Слънчоглед",
    "Магарешки бодил",
    "Овощни дръвчета",
    "Билки",
];

export default function AddApiary() {
  const navigate = useNavigate()
  const [createApiary, {loading, error}] = useMutation(CREATE_APIARY)

  if (loading) {
    console.log('login loading')
  }

  if (error) {
    console.log('login error: ', error)
  }
  const onSubmit = formValues => {
    createApiary({
      variables: {
        apiary: formValues
      }
    }).then(({data}) => {
      navigate('/dashboard/apiaries');
    })
  }
    const validationSchema = Yup.object().shape({
        apiaryId: Yup.string()
            .min(3, "Минималната дължина е 3 символа")
            .required("Това поле е задължително"),
        apiaryType: Yup.string()
            .min(3, "Минималната дължина е 3 символа")
            .required("Това поле е задължително"),
        location: Yup.string()
            .min(3, "Минималната дължина е 3 символа")
            .required("Това поле е задължително"),
    });
    return (
        <div className="add-apiary-page px-4 pt-6 flex items-center justify-center">
            <div className="add-apiary-form-wrapper xl:w-5/6 shadow-sm border-gray-200 rounded-lg bg-white">
                <div className="section-title bg-gray-100 text-gray-900 p-3 rounded-t-lg">
                    Добави пчелин
                </div>
                <div className="add-apiary-wrapper p-5 flex items-center justify-center">
                    <Formik
                        initialValues={{apiaryId: "", apiaryType: "", location: ""}}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                          onSubmit(values);
                        }}
                    >
                        {({
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              values,
                          }) => (
                            <Form className="space-y-4 md:space-y-6 xl:w-5/6">
                                <FormInput
                                    value={values.apiaryId}
                                    labelClass="xl:w-1/6"
                                    fieldClass="xl:w-3/4"
                                    htmlFor={"apiaryId"}
                                    label={"Номер на пчелина"}
                                    type={"text"}
                                    name={"apiaryId"}
                                    id={"apiaryId"}
                                    placeholder="Въведете номер (ХХХХХХХХ)"
                                    error={errors.apiaryId && touched.apiaryId && errors.apiaryId}
                                />

                                <div>
                                    <label
                                        htmlFor="apiaryType"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white xl:w-1/6"
                                    >
                                        Вид на пчелина
                                    </label>
                                    <select
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.apiaryType}
                                        id="apiaryType"
                                        name="apiaryType"
                                        className="xl:w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value={""} disabled>
                                            Избери вид на пчелина
                                        </option>
                                        <option value={"основен"}>основен</option>
                                        <option value={"мобилен"}>мобилен</option>
                                        <option value={"стационарен"}>стационарен</option>
                                        <option value={"помощен"}>помощен</option>
                                        <option value={"за майко производство"}>за майко производство</option>
                                        <option value={"за отводки"}>за отводки</option>
                                    </select>
                                </div>

                                {/*<div className="plant-types">*/}
                                {/*  <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">*/}
                                {/*    Медоносни растения в района*/}
                                {/*  </div>*/}
                                {/*  <div className="plant-types-wrapp flex flex-wrap items-center">*/}
                                {/*    {plantTypes.map((plantType, index) => {*/}
                                {/*      return (*/}
                                {/*        <div className="flex items-center w-2/3 xl:w-1/3 my-2" key={index}>*/}
                                {/*          <input*/}
                                {/*            id={`checked-checkbox-${index}`}*/}
                                {/*            type="checkbox"*/}
                                {/*            value=""*/}
                                {/*            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"*/}
                                {/*          />*/}
                                {/*          <label*/}
                                {/*            htmlFor={`checked-checkbox-${index}`}*/}
                                {/*            className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300"*/}
                                {/*          >*/}
                                {/*            {plantType}*/}
                                {/*          </label>*/}
                                {/*        </div>*/}
                                {/*      );*/}
                                {/*    })}*/}
                                {/*  </div>*/}
                                {/*</div>*/}
                                <FormInput
                                    value={values.location}
                                    customComponentClass={"flex items-center"}
                                    labelClass="xl:w-1/6"
                                    fieldClass="xl:w-3/4"
                                    htmlFor={"location"}
                                    label={"Локация"}
                                    type={"text"}
                                    name={"location"}
                                    id={"location"}
                                    placeholder="Въведете локация на пчелина (42.056483 24.4756083)"
                                    error={
                                        errors.location &&
                                        touched.location &&
                                        errors.location
                                    }
                                />

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
