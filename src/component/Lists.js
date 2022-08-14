import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActionArea, CardActions, Button } from "@mui/material";
//import lists from './lists.css'


function lists() {
  const myArray = [
    { id: 1, job: "Dentist" },
    { id: 2, job: "Doctor" },
    { id: 3, job: "Insurance" },
    { id: 4, job: "Lawyer" },
    { id: 5, job: "Real Estate" },
    { id: 6, job: "Restaurant" },
  ];

  const handleButton = () => {
    console.log('clicked')
  }

  const myarray = myArray.map((myarrays) => (
    
    <Card sx={{ maxWidth: 345 }} style={{ display: "inline-block", gap: "1rem" , marginTop: "5rem", marginBottom: "5rem"
    }}>
    <CardActionArea>
      {/* { <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/{display.src}"
        alt="green iguana"
      /> } */}
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          {myarrays.job}
        </Typography>
      </CardContent>
    </CardActionArea>
    
  </Card>
) );

  return (
    <div >
        {myarray}
    </div>
        
      
  );
}

export default lists;
