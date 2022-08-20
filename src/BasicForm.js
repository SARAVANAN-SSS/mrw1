import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .min(5, "Provide Longer Email")
    .required()
    .matches(
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Pattern Not Matched"
    ),
  password: yup.string().min(8).max(12).required(),
});

export default function BasicForm() {
  const { handleBlur, handleSubmit, handleChange, values, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: schema,
      onSubmit: (values) => {},
    });
  console.log("formik.touched", touched);
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      {touched.email && errors.email ? errors.email : ""}

      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      {touched.password && errors.password ? errors.password : ""}

      <button type="submit">Submit</button>
    </form>
  );
}
