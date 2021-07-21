import React , {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { addProperty } from '../store/actionCreators';
import { useDispatch } from 'react-redux';



const CssTextField = (TextField);

  const types = [
    {
      value: 'Appartement',
    },
    {
      value: 'Maison',
    },
    
  ];
  
  export default function PropertyForm() {

    const history = useHistory();
    const  dispatch = useDispatch()
    const [formData, setFormData] = useState({type : "Appartement", title:"", address1:"", address2:"", city:"", zipCode:""})
    const handleChangeForm =(field)=> (event) => {
        setFormData({...formData, [field] : event.target.value });
      };
    
    const handleNext =() => {
      dispatch(addProperty(formData))
      history.push("/")
    }

    
    return (
        <form>
            <TextField
              id="standard-select-currency"
              select
              style={{width:"90%", marginBottom:"10px"}}
              value={formData.type}
              label="Type de propriété"
              helperText="Choisissez le type de votre bien"
              onChange={handleChangeForm("type")}
        >
              {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}

        </TextField>

        <CssTextField
        label="Nom de la propriété"
        style={{width:"90%", marginBottom:"10px", marginBottom:"10px"}}
        variant="outlined"
        id="custom-css-outlined-input"
        onChange={handleChangeForm("title")}
      />
        <CssTextField
        label="Adresse de la proriété"
        style={{width:"90%", marginBottom:"10px"}}
        variant="outlined"
        id="custom-css-outlined-input"
        onChange={handleChangeForm("address1")}
      />
        <CssTextField
        label="Complément d'adresse"
        style={{width:"90%", marginBottom:"10px"}}
        variant="outlined"
        id="custom-css-outlined-input"
        onChange={handleChangeForm("address2")}
      />
        <CssTextField
        label="Code postal"
        style={{width:"90%", marginBottom:"10px"}}
        variant="outlined"
        id="custom-css-outlined-input"
        onChange={handleChangeForm("zipCode")}
      />
        <CssTextField
        label="Ville"
        style={{width:"90%", marginBottom:"10px"}}
        variant="outlined"
        id="custom-css-outlined-input"
        onChange={handleChangeForm("city")}
      />
      <Button variant="contained" color="primary" onClick={handleNext}> Continuer </Button>
        </form>
    )
}
