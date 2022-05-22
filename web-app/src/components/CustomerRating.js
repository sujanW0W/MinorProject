import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import axios from 'axios';

export default function CustomerRating(props) {


  const handleRating = (event) => {
    postRating(event.target.value);
  }

  const postRating = (value) => {
    const url = 'http://localhost:8080/api/product/rateproduct'
    const ratingData = {
      productID: props.id,
      userID: parseInt(localStorage.getItem('userID')),
      rateProduct: parseInt(value)
    }
    console.log(ratingData);
    axios.post(url, ratingData)
      .then(
        (response) => {
          console.log(response)
        }
      )
  }

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        onChange={handleRating}
      />
    </Box>
  );
}