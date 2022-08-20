import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch("https://62d5ee0dd4406e523562b8ce.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(getMovies, []);

  const deleteMovie = (id) => {
    fetch(`https://62d5ee0dd4406e523562b8ce.mockapi.io/movies/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getMovies());
  };

  const history = useHistory();

  return (
    <div className="movie-list">
      {movieList.map(({ name, poster, rating, summary, id }, index) => (
        <Movie
          key={id}
          deleteButton={
            <Button
              onClick={() => {
                deleteMovie(id);
              }}
            >
              <IconButton aria-label="delete" color="error">
                <DeleteIcon />
              </IconButton>
            </Button>
          }
          editButton={
            <Button
              onClick={() => {
                history.push(`/movie/edit/${id}`);
              }}
            >
              <IconButton aria-label="edit" color="secondary">
                <EditIcon />
              </IconButton>
            </Button>
          }
          id={id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
        />
      ))}
    </div>
  );
}
