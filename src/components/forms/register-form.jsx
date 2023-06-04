import { Link, useNavigate } from "react-router-dom";
import FormInput from "./form-input";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

export default function RegisterForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, t("loginPage.nameValidation"))
      .required(t("loginPage.requiredFieldValidation")),
    username: Yup.string()
      .min(3, t("loginPage.usernamelValidation"))
      .required(t("loginPage.requiredFieldValidation")),
    email: Yup.string()
      .email(t("loginPage.emailValidation"))
      .required(t("loginPage.requiredFieldValidation")),
    password: Yup.string()
      .min(6, t("loginPage.passwordValidation"))
      .required(t("loginPage.requiredFieldValidation")),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "", username: "", name: "" }}
      validationSchema={validationSchema}
      onSubmit={() => {
        navigate("/dashboard");
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-4 md:space-y-6">
          <FormInput
            htmlFor={"name"}
            label={t("loginPage.name")}
            type={"text"}
            name={"name"}
            id={"name"}
            placeholder="Вашите имена"
            error={errors.name && touched.name && errors.name}
          />
          <FormInput
            htmlFor={"username"}
            label={t("loginPage.username")}
            type={"text"}
            name={"username"}
            id={"username"}
            placeholder="Вашето потребитлеско име"
            error={errors.username && touched.username && errors.username}
          />
          <FormInput
            htmlFor={"email"}
            label={t("loginPage.email")}
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder="name@company.com"
            error={errors.email && touched.email && errors.email}
          />
          <FormInput
            htmlFor={"password"}
            label={t("loginPage.password")}
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder="••••••••"
            error={errors.password && touched.password && errors.password}
          />
          <button
            type="submit"
            className="w-full text-white bg-amber-500 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-500 dark:focus:ring-amber-800"
          >
            {t("loginPage.signUpButton")}
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {t("loginPage.loginText")}
            <Link
              to="/login"
              className="font-medium text-amber-500 hover:underline dark:text-amber-500 px-3"
            >
              {t("loginPage.login")}
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}
