import React from 'react'
import PropertyForm from '../components/PropertyForm'
import Grid from '@material-ui/core/Grid'


export default function Property() {
    return (
        <Grid style={{width:"80%", margin:"20px", border:"1px solid", borderRadius:"16px"}}>     
            <PropertyForm/>
        </Grid>
    )
}
