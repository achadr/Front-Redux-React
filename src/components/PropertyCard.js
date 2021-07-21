import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin:"5px 20px",
    flexDirection:"row"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  button : {
    left:"900px",
    width:"100px",
    height:"20px",
    padding:"10px"
  }

 
}));

export default function SimulationCard({property:{title}}) {

  const classes = useStyles();

  return (

    <Card className={classes.root} borderRadius={16}>
            <CardMedia
        className={classes.cover}
        image="https://mollinestates.ie/wp-content/uploads/2019/04/Houses-5-.jpg"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
        </CardContent>
        <Button className={classes.button} variant="outlined" color="primary"> MODIFIER <CreateIcon fontSize="small"/> </Button>
      </div>
  
    </Card>
  );
}