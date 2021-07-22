import React from 'react'
import PropertyForm from '../components/PropertyForm'
import Grid from '@material-ui/core/Grid'


export default function Property() {
    return (
        <Grid container direction="column" alignItems="flex-start">  
            <h4 style={{marginLeft:10, marginBottom:0}}>Détailler une propriété</h4>
            <p style={{marginLeft:10, marginBottom:0}}>Renseignez votre bien en 5 minutes avec les documents suivants</p>  
            <ul>
                <li>Bail de location <span style={{fontWeight:"bold"}}>en cours</span></li>
                <li>Tableaux d'amortissements des crédits associés</li>
            </ul> 
            <PropertyForm />
        </Grid>
    )
}
