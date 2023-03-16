import styles from "./CollectTourSection.module.scss";
import BlockHeader from "../BlockHeader";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Input from "../Input/Input";
import Select from "../Select";
import Textarea from "../Textarea";
import Checkbox from "../Checkbox";
import Button from "../Button";
import { dataInput } from "@/utils/data";

const CollectTourSection = () => {
  return (
    <div className={styles.root} id="collectTour">
      <div className={styles.collectTour_window}>
        <BlockHeader
          title="Собери свой тур"
          description="
              Идейные соображения высшего порядка,
              <br />а также рамки и место обучения кадров
            "
        />
        <Formik
          initialValues={dataInput.initialValues}
          validationSchema={dataInput.validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {({ values, errors, handleChange, touched, setFieldValue }) => (
            <Form className={styles.input_form}>
              <div className={styles.input_fields}>
                {dataInput.fields.map((item) => {
                  return item.type === "select" ? (
                    <Select
                      key={item.id}
                      name={item.id}
                      fieldName={item.fieldName}
                      placeholderOption={item.placeholder}
                      options={item.options}
                      onChange={handleChange}
                      value={values[item.id]}
                      errors={errors[item.id]}
                      touched={touched[item.id]}
                    />
                  ) : (
                    <Input
                      key={item.id}
                      name={item.id}
                      type={item.type}
                      placeholder={item.placeholder}
                      fieldName={item.fieldName}
                      onChange={handleChange}
                      value={values[item.id]}
                      errors={errors[item.id]}
                      touched={touched[item.id]}
                    />
                  );
                })}
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
