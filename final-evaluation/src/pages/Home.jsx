
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Int_Data, Sort_Data } from '../Redux/data/action';

export const Home = () => {

  const [fetchData,setFetchData]=React.useState([])
  const [page,setPage]=useState(1)
  const [sort,setSort]=useState(null)
  // const [ratingFilter,setRatingFilter]=useState([])
  const [ratingNum,setRatingNum]=useState(null)



  const fetching_func=(page)=>{
    axios({
      method:"get",
      url:`https://final-coding-evaluation-unit-6.herokuapp.com/products?_page=${page}&_limit=6`
    })
    .then((res)=>setFetchData(res.data))
    .catch((err)=>{console.log(err)})
  }

  useEffect(()=>{
    fetching_func(page)
  },[page])


const pagination=(value)=>{
   setSort(null)
  setPage(page+(value))
}

const handleSort=(type)=>{

  if(sort===type){
    setSort(null)
    fetching_func()
    // dispatch(Int_Data(page))
  }

  else{
setSort(type)
axios({
  method:"get",
  url:`https://final-coding-evaluation-unit-6.herokuapp.com/products?_page=${page}&_limit=6&_sort=price&_order=${type}`
})
.then((res)=>setFetchData(res.data))
.catch((err)=>{console.log(err)})
}
}



// setRatingNum(value)
// axios({
//     method:"get",
//     url:`http://localhost:8080/products?_page=${page}&_limit=6&rating_gte=${value}&rating_lte=${value+1}`
//   })
//   .then((res)=>{setFetchData(res.data)})

// }

  return (

    <React.Fragment>

      <Box id="Asc_Desc">
    <Button variant='outlined'> Sort : </Button>
   <Button variant={sort==="asc"?'contained':"outlined"} onClick={()=>handleSort("asc")}>Asc</Button>
   <Button variant={sort==="desc"?'contained':"outlined"}  onClick={()=>handleSort("desc")}>Desc</Button>

      </Box>



    <div id='data_grid'>
 
{

  fetchData.map((item)=>{return <Card sx={{ maxWidth: 345 }}>

      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`${item.image}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        <Typography id="price_rating" variant="body2" color="text.secondary">
         <div>₹{item.price}</div> 
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/individual/${item.id}`}><Button size="small">View More</Button></Link>
      </CardActions>
    </Card>
    })
  }
  </div>
  
  <div id="pagination">
  <Button disabled={page===1} variant='contained' onClick={()=>pagination(-1)}>Prev</Button>
  <Button variant='outlined' >{page}</Button>
  <Button disabled={page===8}variant='contained' onClick={()=>pagination(1)}>Next</Button>
  </div>
</React.Fragment>
  )
}


