import React, { useEffect } from 'react'
import SimulationCard from '../components/PropertyCard'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { getProperties, getSimulations } from '../store/actionCreators';
import Grid from '@material-ui/core/Grid'
import CreateIcon from '@material-ui/icons/Create';


const useStyles = makeStyles((theme) => ({
    paper: {
      margin:"5px 20px",
    },
    title : {
        textAlign:"left",
        margin:"10px"
    },
    button1 :{
        left:"40%"
    },
    button2:{
        width:"300px",
        left:"40%"
    }
  
   
  }));



export default function Home() {
    const history = useHistory();
    const dispatch = useDispatch();
    const properties = useSelector ((state)=> state.properties)
    const simulations = useSelector ((state) => state.simulations)
    const classes = useStyles();

    useEffect(() => {
        if(!properties.length) {

            dispatch(getProperties())
        }
        if(!simulations.length) {
            dispatch(getSimulations())
        }
        
    }, [dispatch,properties, simulations])
    return (
            <Grid container direction="column" alignContent="flex" >
            <Grid item direction="row">
            <h5 className={classes.title}> Mes Propriétés(juillet) </h5>
            <Button className={classes.button1} color="primary">GÉRER MES PROPRIÉTÉS <CreateIcon/></Button>
            </Grid>
            
            <Button className={classes.button2} onClick={()=> history.push("/property")} variant="outlined" color="primary">
                AJOUTER UNE PROPIÉRTÉ  
            </Button>
            <Paper className={classes.paper}>
                <h5>Mes simulations</h5> 
                {simulations.map((property, index) => <SimulationCard property ={property} key={index} />)}
            
            </Paper>
            {properties.map((property, index) => <SimulationCard property ={property} key={index} />)}
             </Grid>

    )
}
