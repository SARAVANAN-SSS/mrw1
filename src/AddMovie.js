import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required().min(2, "Provide Bigger Name"),
  poster: yup.string().required(),
  rating: yup.number().required().min(1, "Provide Better rating").max(10),
  summary: yup.string().required().min(2, "Provide Better Summary"),
  trailer: yup.string().required(),
});

export function AddMovie() {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: schema,
      onSubmit: (newMovie) => addMovie(newMovie),
    });

  const addMovie = (newMovie) => {
    fetch("https://62d5ee0dd4406e523562b8ce.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json)
      .then(() => history.push("/movies"));
  };

  const history = useHistory();

  return (
    <form onSubmit={handleSubmit} className="add-movie-btn">
      <TextField
        helperText={touched.name && errors.name ? errors.name : ""}
        error={touched.name && errors.name}
        type="text"
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        label="Name"
        variant="outlined"
      />
      <TextField
        helperText={touched.poster && errors.poster ? errors.poster : ""}
        error={touched.poster && errors.poster}
        type="text"
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.poster}
        label="Poster"
        variant="outlined"
      />
      <TextField
        helperText={touched.rating && errors.rating ? errors.rating : ""}
        error={touched.rating && errors.rating}
        type="number"
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rating}
        label="Rating"
        variant="outlined"
      />
      <TextField
        helperText={touched.summary && errors.summary ? errors.summary : ""}
        error={touched.summary && errors.summary}
        type="text"
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.summary}
        label="Summary"
        variant="outlined"
      />
      <TextField
        helperText={touched.trailer && errors.trailer ? errors.trailer : ""}
        error={touched.trailer && errors.trailer}
        type="text"
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.trailer}
        label="Trailer"
        variant="outlined"
      />
      <Button type="submit" variant="outlined">
        Add Movie
      </Button>
    </form>
  );
}
