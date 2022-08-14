import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActionArea, CardActions, Button } from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import  cafe from '../asset/cafe.PNG'

//import { cafe, doctor, lawyer, market, resturant} from '../asset'




function topCatagories() {

  const displayAr = [
    { id: 1, src:{cafe}, title: "Cafe" }
    // { id: 2, src:{doctor}, title: "Doctor" },
    // { id: 3, src:{lawyer}, title: "Lawyer" },
    // { id: 4, src:{market}, title: "market" },
    // { id: 5, src:{resturant}, title: "resturant" },
  ];
  const displayArray = displayAr.map((display) => (
    <Card sx={{ maxWidth: 345 }} style={{ display: "inline-block", gap: "1rem"  }}>
      <CardActionArea>
        { <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/{display.src}"
          alt="green iguana"
        /> }
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            {display.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  ) );
  
  
  
  
  
  return (
    <div>
      <SentimentSatisfiedAltIcon  sx={{ width: 50, height: 50 }}/>
      <h3 >Top Catagories</h3>
      {displayArray}
    </div>
  );
}

export default topCatagories;
