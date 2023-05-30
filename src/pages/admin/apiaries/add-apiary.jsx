import { Form, Formik } from "formik";
import FormInput from "../../../components/forms/form-input";
import * as Yup from "yup";

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
  const validationSchema = Yup.object().shape({
    apiaryName: Yup.string()
      .min(3, "Минималната дължина е 3 символа")
      .required("Това поле е задължително"),
    apiaryId: Yup.string()
      .min(3, "Минималната дължина е 3 символа")
      .required("Това поле е задължително"),
    apiaryLocation: Yup.string()
      .min(3, "Минималната дължина е 3 символа")
      .required("Това поле е задължително"),
  });
  return (
    <div className="add-apiary-page px-4 pt-6 flex items-center justify-center">
      <div className="add-apiary-form-wrapper w-5/6 shadow-sm border-gray-200 rounded-lg bg-white">
        <div className="section-title bg-gray-100 text-gray-900 p-3 rounded-t-lg">
          Добави пчелин
        </div>
        <div className="add-apiary-wrapper p-5 flex items-center justify-center">
          <Formik
            initialValues={{ apiaryId: "", apiaryName: "", apiaryLocation: "" }}
            validationSchema={validationSchema}
            onSubmit={() => {
              debugger
              navigate("/apiaries");
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4 md:space-y-6 w-5/6">
                <FormInput
                  labelClass="w-1/6"
                  fieldClass="w-3/4"
                  htmlFor={"apiaryName"}
                  label={"Име на пчелина"}
                  type={"text"}
                  name={"apiaryName"}
                  id={"apiaryName"}
                  placeholder="Въведете име"
                  error={
                    errors.apiaryName && touched.apiaryName && errors.apiaryName
                  }
                />
                <FormInput
                  labelClass="w-1/6"
                  fieldClass="w-3/4"
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
                    htmlFor="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-1/6"
                  >
                    Вид на пчелина
                  </label>
                  <select
                    placeholder="Вид на пчелина"
                    id="apiary_type"
                    class="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected disabled>
                      Избери вид на пчелина
                    </option>
                    <option value={"major"}>основен</option>
                    <option value={"mobile"}>мобилен</option>
                    <option value={"station"}>стационарен</option>
                    <option value={"helper"}>помощен</option>
                    <option value={"for_bee_queens"}>
                      за майко производство
                    </option>
                    <option value={"new_families"}>за отводки</option>
                  </select>
                </div>

                <div className="plant-types">
                  <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Медоносни растения в района
                  </div>
                  <div className="plant-types-wrapp flex flex-wrap items-center">
                    {plantTypes.map((plantType, index) => {
                      return (
                        <div className="flex items-center w-1/3 my-2" key={index}>
                          <input
                            id={`checked-checkbox-${index}`}
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor={`checked-checkbox-${index}`}
                            className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                          >
                            {plantType}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <FormInput
                  customComponentClass={"flex items-center"}
                  labelClass="w-1/6"
                  fieldClass="w-3/4"
                  htmlFor={"apiaryLocation"}
                  label={"Местонахождение (адрес)"}
                  type={"text"}
                  name={"apiaryLocation"}
                  id={"apiaryLocation"}
                  placeholder="Въведете адрес"
                  error={
                    errors.apiaryLocation &&
                    touched.apiaryLocation &&
                    errors.apiaryLocation
                  }
                />

                <div className="form-footer">
                  <button
                    type="submit"
                    className="w-1/5 text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-800"
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
