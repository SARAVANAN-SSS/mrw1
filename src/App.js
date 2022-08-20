import Button from '@mui/material/Button';
import { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import { MovieList } from './MovieList';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MovieDetails } from './MovieDetails';
import { NotFound } from './NotFound';
import { AddMovie } from './AddMovie';
import { AddColor } from './AddColor';
import { DarkLight } from './DarkLight';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { Home } from './Home';
import { EditMovie } from './EditMovie';
import BasicForm from './BasicForm'



function App() {

const [mode,setMode] = useState('dark') 
const theme = createTheme({
  palette: {
    mode: mode,
  },
});
  
  const history = useHistory()
  
  return (

    <ThemeProvider theme={theme}>
      <Paper sx = {{minHeight : "100vh"}} elevation={7}>
      <div className="App">
    
      <AppBar position="static">
        <Toolbar>
        <Button onClick={()=>{history.push("/")}} color="inherit">Home</Button>
        <Button onClick={()=>{history.push("/movies")}} color="inherit">Movies</Button>
        <Button onClick={()=>{history.push("/movies")}} color="inherit">Films</Button>
        <Button onClick={()=>{history.push("/movie/add")}} color="inherit">Add Movie</Button>
        <Button onClick={()=>{history.push("/dark-light")}} color="inherit">DLT Experiment</Button>
        <IconButton sx={{ ml: 5,marginLeft:"auto" }} onClick={()=>{setMode(mode==='dark' ? 'light' : 'dark')}} color="inherit">
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      </Toolbar>
      </AppBar> 

    <div className="navigation">
      <Switch>
       
      <Route path="/movie/add"> <AddMovie /> </Route>
      <Route path="/movie/edit/:id"> <EditMovie /> </Route> 
      <Route path="/movies/:id"> <MovieDetails /> </Route> 
      <Route path="/movies"> <MovieList /> </Route>
      <Route path="/films"><Redirect to="/movies" /></Route>
      <Route path="/color-game"><AddColor /></Route>
      <Route path="/dark-light"><DarkLight /></Route>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/basic-form"><BasicForm /></Route>
      <Route path="**"> <NotFound /> </Route>
    
      </Switch>
    </div>
    </div>
    </Paper>
  </ThemeProvider>
  );
}

export default App;


