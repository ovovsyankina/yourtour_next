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
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
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
            direction: "",
            email: "",
            phone: "",
            dateFrom: "",
            dateBefore: "",
            comment: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Должно быть не более 15 символов")
              .required("Required"),
            direction: "",
            email: Yup.string()
              .email("Неверный адрес электронной почты")
              .required("Required"),
            phone: Yup.string().matches(
              phoneRegExp,
              "Номер телефона введен неверно"
            ),
            dateFrom: Yup.date(),
            dateBefore: Yup.date().min(
              Yup.ref("dateFrom"),
              "Дата окончания не может быть раньше даты начала"
            ),
            comment: Yup.string()
              .max(105, "Должно быть не более 105 символов")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className={styles.input_form}>
            <div className={styles.input_fields}>
              <Input
                name="firstName"
                type="text"
                placeholder="Введите Ваше имя"
                fieldName="Имя"
              />
              <Select
                name="direction"
                fieldName="Направление"
                placeholderOption="Куда хотите ехать"
                option1="Пункт 1 выбран"
                option2="Пункт 2 выбран"
              />
              <Input
                name="email"
                type="email"
                placeholder="example@mail.com"
                fieldName="Email"
              />
              <Input
                name="phone"
                type="number"
                placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                fieldName="Телефон"
              />
              <Input name="dateFrom" type="date" fieldName="Дата от" />
              <Input name="dateBefore" type="date" fieldName="Дата до" />
            </div>
            <Textarea name="comment" fieldName="Комментарий" />
            <div className={styles.check_age}>
              <div className={styles}>Вам есть 18 лет?</div>
              <div className={styles.buttons_age}>
                <Checkbox type="radio" id="yes" name="age">
                  <div>Да</div>
                </Checkbox>
                <Checkbox textButton="Нет" type="radio" id="no" name="age">
                  <div>Нет</div>
                </Checkbox>
              </div>{" "}
            </div>
            <div className={styles.licensed_contract}>
              <Checkbox type="checkbox" id="licensed" name="contract">
                <div className={styles.contract_text}>
                  Нажимая кнопку, я принимаю условия
                  <span className={styles.contract_blackText}>
                    {" "}
                    Лицензионного договора
                  </span>
                </div>
              </Checkbox>
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
        </Formik>
      </div>
    </div>
  );
};

export default CollectTourSection;
