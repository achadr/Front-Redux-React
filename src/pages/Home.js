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
    addButton: {
        width:"95%",
    },
    title:{
        marginLeft:5
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
            <Grid container  direction="column" alignContent="center" >
            <Grid container xs={11}  direction="row" justifyContent="space-between">
            <h5 className={classes.title}> Mes Propriétés(juillet) </h5>
            <Button  color="primary">GÉRER MES PROPRIÉTÉS <CreateIcon/></Button>
            </Grid>
            <Grid container xs={11} direction="row" justifyContent="center">
            <Button className={classes.addButton}  onClick={()=> history.push("/property")} variant="outlined" color="primary">
                AJOUTER UNE PROPIÉRTÉ  
            </Button>
            </Grid>
            <Grid container  direction="column" xs={11}>
            <Paper className={classes.paper}>
                <h5 className={classes.title}>Mes simulations</h5> 
                {simulations.map((property, index) => <SimulationCard property ={property} key={index} />)}
            
            </Paper>

            </Grid>
            <Grid container  direction="column" xs={11}>

            {properties.map((property, index) => <SimulationCard property ={property} key={index} />)}
            </Grid>
             </Grid>

    )
}
