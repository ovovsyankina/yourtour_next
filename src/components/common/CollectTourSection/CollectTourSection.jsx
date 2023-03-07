import styles from "./CollectTourSection.module.scss";
import BlockHeader from "../BlockHeader/BlockHeader";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";

const CollectTourSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.collectTour_window}>
        <BlockHeader
          title="Собери свой тур"
          description={
            <>
              Идейные соображения высшего порядка,
              <br />а также рамки и место обучения кадров
            </>
          }
        />
        <Formik
          initialValues={{
            firstName: "",
            email: "",
            phone: "",
            dateFrom: "",
            dateBefore: "",
            comment: "",
            is18: "",
            isAgree: false,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Имя не должно превышать 15 символов")
              .required("Введите имя"),

            email: Yup.string()
              .email("Неверный адрес электронной почты")
              .required("Введите адрес электронной почты"),
            phone: Yup.string()
              .matches(/(\+7)[0-9]{3}[0-9]{4}/, "Номер телефона введен неверно")
              .required("Введите свой номер телефона"),

            dateFrom: Yup.date().required("Введите дату начала"),

            dateBefore: Yup.date()
              .required("Введите дату окончания")
              .min(
                Yup.ref("dateFrom"),
                "Дата окончания не может быть раньше времени начала"
              ),
            comment: Yup.string().max(105, "Должно быть не более 105 символов"),
            is18: Yup.string().required("Выберите значение"),
            isAgree: Yup.bool()
              .oneOf([true], "Поставьте галочку")
              .required("Выберите значение"),
          })}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {({ values, errors, handleChange, touched, setFieldValue }) => (
            <Form className={styles.input_form}>
              <div className={styles.input_fields}>
                <Input
                  name="firstName"
                  type="text"
                  placeholder="Введите Ваше имя"
                  fieldName="Имя"
                  onChange={handleChange}
                  value={values.firstName}
                  errors={errors.firstName}
                  touched={touched.firstName}
                />
                <Select
                  name="direction"
                  fieldName="Направление"
                  placeholderOption="Куда хотите ехать"
                  options={["Пункт 1 выбран", "Пункт 2 выбран"]}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  fieldName="Email"
                  onChange={handleChange}
                  value={values.email}
                  errors={errors.email}
                  touched={touched.email}
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                  fieldName="Телефон"
                  onChange={handleChange}
                  value={values.phone}
                  errors={errors.phone}
                  touched={touched.phone}
                />
                <Input
                  name="dateFrom"
                  type="date"
                  fieldName="Дата от"
                  onChange={handleChange}
                  value={values.dateFrom}
                  errors={errors.dateFrom}
                  touched={touched.dateFrom}
                />
                <Input
                  name="dateBefore"
                  type="date"
                  fieldName="Дата до"
                  onChange={handleChange}
                  value={values.dateBefore}
                  errors={errors.dateBefore}
                  touched={touched.dateBefore}
                />
              </div>
              <Textarea
                name="comment"
                fieldName="Комментарий"
                onChange={handleChange}
                value={values.comment}
              />
              <div className={styles.check_age}>
                <div className={styles}>Вам есть 18 лет?</div>
                <div className={styles.buttons_age}>
                  <Checkbox
                    type="radio"
                    id="yes"
                    name="is18"
                    onChange={() => setFieldValue("is18", "yes")}
                    checked={values.is18 === "yes"}
                  >
                    <div>Да</div>
                  </Checkbox>
                  <Checkbox
                    type="radio"
                    id="no"
                    name="is18"
                    onChange={() => setFieldValue("is18", "no")}
                    checked={values.is18 === "no"}
                  >
                    <div>Нет</div>
                  </Checkbox>
                </div>
                {errors.is18 && touched.is18 && (
                  <div className={styles.error_message}>{errors.is18}</div>
                )}
              </div>
              <div className={styles.licensed_contract}>
                <div className={styles.block_isAgree}>
                  <Checkbox
                    type="checkbox"
                    id="licensed"
                    name="isAgree"
                    onChange={(e) =>
                      setFieldValue("isAgree", e.currentTarget.checked)
                    }
                    checked={values.isAgree}
                  >
                    <div className={styles.contract_text}>
                      Нажимая кнопку, я принимаю условия{" "}
                      <span className={styles.contract_blackText}>
                        Лицензионного договора
                      </span>
                    </div>
                  </Checkbox>
                </div>
                {errors.isAgree && touched.isAgree && (
                  <div className={styles.error_message}>{errors.isAgree}</div>
                )}
              </div>
              <div className={styles.completion_buttons}>
                <Button
                  type="submit"
                  title="Найти тур"
                  className={styles.submit_button}
                />
                <Button
                  type="reset"
                  title="Сбросить"
                  className={styles.reset_button}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CollectTourSection;
