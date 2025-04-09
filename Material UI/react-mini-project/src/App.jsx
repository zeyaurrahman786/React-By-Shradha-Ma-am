// import './App.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

function App() {

  function handleClick() {
    console.log("Button was clicked");
  }

  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant="text">Text</Button>
      <Button onClick={handleClick} variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <hr />

      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>

      <hr />

      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">Success</Button>
      <Button variant="outlined" color="error">Error</Button>

      <hr />

      <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
      <Alert severity="error">Delete Option is given!</Alert>

      <hr />

      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
    </>
  )
}

export default App
