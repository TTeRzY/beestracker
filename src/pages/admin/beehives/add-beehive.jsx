import { Form, Formik } from "formik";
import FormInput from "../../../components/forms/form-input";
import * as Yup from "yup";

export default function AddBeeHive() {
  const validationSchema = Yup.object().shape({
    beehiveId: Yup.string()
      .min(3, "Минималната дължина е 4 символа")
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
      <div className="add-apiary-form-wrapper w-5/6 shadow-lg border-gray-200 rounded-lg bg-white">
        <div className="section-title bg-gray-200 text-gray-900 p-3 rounded-t-lg">
        Добави кошер
        </div>
        <div className="add-apiary-wrapper p-5 flex items-center justify-center shadow-b-lg">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={() => {
              navigate("/admin");
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4 md:space-y-6 w-5/6">
                <FormInput
                  labelClass="w-1/6"
                  fieldClass="w-3/4"
                  htmlFor={"beehiveId"}
                  label={"Номер на кошера"}
                  type={"text"}
                  name={"beehiveId"}
                  id={"beehiveId"}
                  placeholder="Въведете номер на кошер"
                  error={
                    errors.beehiveId && touched.beehiveId && errors.beehiveId
                  }
                />

                <div>
                  <label
                    htmlFor="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-1/6"
                  >
                    Избор на пчелин
                  </label>
                  <select
                    placeholder="Избор на пчелин"
                    id="apiary_type"
                    class="w-3/4 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected disabled>
                      Добавени пчелини
                    </option>
                    <option value={"23124"}>Пчелин Кричим</option>
                    <option value={"41241"}>Първи пчелин</option>
                    <option value={"24124"}>Втори пчелин</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-1/6"
                  >
                    Вид на кошера
                  </label>
                  <select
                    placeholder="Вид на кошера"
                    id="apiary_type"
                    class="w-3/4 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected disabled>
                      Видове кошери
                    </option>
                    <option value={"dadan_8"}>Дадан-блат (8 рамков)</option>
                    <option value={"dadan_10"}>Дадан-блат (10 рамков)</option>
                    <option value={"dadan_12"}>Дадан-блат (12 рамков)</option>
                    <option value={"rut"}>Лангстрот-рут</option>
                    <option value={"rut"}>Лангстрот-рут (8 рамков)</option>
                    <option value={"farar"}>Фарар</option>
                    <option value={"roje_delon"}>Роже делон (Алпийски)</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-1/6"
                  >
                    Тип на кошера
                  </label>
                  <select
                    placeholder="Тип на кошера"
                    id="apiary_type"
                    class="w-3/4 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected disabled>
                        Избери тип кошер
                    </option>
                    <option value={"23124"}>Пчелно семейство</option>
                    <option value={"41241"}>Рояк</option>
                    <option value={"24124"}>Отводка</option>
                    <option value={"24124"}>Кошер (празен)</option>
                  </select>
                </div>

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
