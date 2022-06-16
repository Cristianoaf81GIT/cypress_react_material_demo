import {useState} from "react";
import { Grid, TextField, Typography, Button } from "@mui/material";

function App() {
  const [name, setName] = useState('');
  const [showName, setShowName] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleClickButton = () => {
    if (name.length > 0) {
      setShowName(true);
    } else {
      setShowName(false);
    }
  }

  return (
    <Grid container spacing={2} sx={{width: "80%", ml: "auto", mr: "auto", mt: '50px'}}>
      <Grid alignItems="center" justifyContent="center" item xs={12}>
        <Typography variant="h4" color="secondary">Teste react/material/cypress</Typography>
      </Grid>

     <Grid item xs={10}>
        <TextField 
          inputProps={{
            "data-cy":"field-name" 
          }}
          value={name}
          fullWidth
          onChange={handleNameChange} 
        />
     </Grid>
     <Grid item xs={2}>
      <Button 
        sx={{ height: 56 }}
        data-cy="button-show-name" 
        onClick={handleClickButton} 
        variant="outlined"       
      >
        Clique
      </Button>
     </Grid>
     <Grid item xs={12}>
      {showName && (<Typography variant="h4" data-cy="field-result">
        {name}
      </Typography>)}
     </Grid>
    </Grid>
  );
}

export default App;
