import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import CardActions from '@material-ui/core/CardActions';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin:"5px 20px",
  },
  details: {
    display: 'flex',
    flexDirection:"row"
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height:100
  },
  button : {
    height: "20px",
    padding:" 10px",
    top: "70px",
    right: "5px",
}
  }

 
));

export default function SimulationCard({property:{title}}) {

  const classes = useStyles();

  return (

    <Card className={classes.root} borderRadius={16}>
            <img className={classes.cover} alt="imaaaaaaaaaaaaaage" src={"https://mollinestates.ie/wp-content/uploads/2019/04/Houses-5-.jpg"}/>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
        </CardContent>

        <Button className={classes.button} variant="outlined" color="primary"> MODIFIER <CreateIcon fontSize="small"/> </Button>
  
    </Card>
  );
}