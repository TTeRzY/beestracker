import {Link, useNavigate} from "react-router-dom";
import FormInput from "./form-input";
import {Form, Formik} from "formik";
import {useTranslation} from "react-i18next";
import * as Yup from "yup";
import {saveUserToken} from "../../utils/token.js";
import {useMutation} from "@apollo/client";
import {CREATE_USER_MUTATION} from "../../graphql/user.js";
import {setCurrentUser} from "../../redux/user/actions.js";
import {useDispatch} from "react-redux";

export default function RegisterForm() {
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const navigate = useNavigate()
    const [createUser, {loading, error}] = useMutation(CREATE_USER_MUTATION)

    if (loading) {
        console.log('login loading')
    }

    if (error) {
        console.log('login error: ', error)
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(3, t("loginPage.nameValidation"))
            .required(t("loginPage.requiredFieldValidation")),
        lastName: Yup.string()
            .min(3, t("loginPage.nameValidation"))
            .required(t("loginPage.requiredFieldValidation")),
        email: Yup.string()
            .email(t("loginPage.emailValidation"))
            .required(t("loginPage.requiredFieldValidation")),
        occupation: Yup.string()
            .min(3, t("loginPage.occupationlValidation"))
            .required(t("loginPage.requiredFieldValidation")),
        password: Yup.string()
            .min(6, t("loginPage.passwordValidation"))
            .required(t("loginPage.requiredFieldValidation")),
    });

    const onSubmit = formValues => {
        createUser({
            variables: {
                user: formValues
            }
        }
        ).then(({data}) => {
            const token = data?.createUser ?? '';
            if(token) {
                dispatch(setCurrentUser(formValues))
                saveUserToken(token)
                navigate('/dashboard', {replace: true});
            }
            console.log('register error', data)
        })
    }
    return (
        <Formik
            initialValues={{firstName: "", lastName: "", email: "", occupation: "", password: ""}}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                onSubmit(values)
            }}
        >
            {({
                  errors,
                  touched,
                  values,
              }) => (
                <Form className="space-y-4 md:space-y-6">
                    <FormInput
                        value={values.firstName}
                        htmlFor={"firstName"}
                        label={t("loginPage.firstName")}
                        type={"text"}
                        name={"firstName"}
                        id={"firstName"}
                        placeholder="Име"
                        error={errors.firstName && touched.firstName && errors.firstName}
                    />
                    <FormInput
                        value={values.lastName}
                        htmlFor={"lastName"}
                        label={t("loginPage.lastName")}
                        type={"text"}
                        name={"lastName"}
                        id={"lastName"}
                        placeholder="Фамилия"
                        error={errors.lastName && touched.lastName && errors.lastName}
                    />
                    <FormInput
                        value={values.email}
                        htmlFor={"email"}
                        label={t("loginPage.email")}
                        type={"email"}
                        name={"email"}
                        id={"email"}
                        placeholder="name@company.com"
                        error={errors.email && touched.email && errors.email}
                    />
                    <FormInput
                        value={values.occupation}
                        htmlFor={"occupation"}
                        label={t("loginPage.occupation")}
                        type={"text"}
                        name={"occupation"}
                        id={"occupation"}
                        placeholder="Адрес"
                        error={errors.occupation && touched.occupation && errors.occupation}
                    />
                    <FormInput
                        value={values.password}
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
