import React from 'react';   
import { colors, Container,Grid } from '@mui/material';
import nothing from '../assets/nothing.jpeg';    
import apple from '../assets/apple.jpeg'; 
import samsung from '../assets/samsung.jpeg'; 
import one  from  '../assets/one.jpeg'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Product()
{
 return(   
    <Container sx ={{marginY:15}}>
    <Grid container spacing={5}>
   <Grid item xs={12} sm={6} md={3}> Nothing
   <img src={nothing} id="12"></img>   
   <h4 style={{fontFamily:"bold"}}>Price:Rs.10000</h4> 
   <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />  
      {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />  */}
      <p>What is special in Nothing phones?
Image result for about nothing phone
The Nothing Phone (1) runs on the Qualcomm Snapdragon 778G+ processor along with 12GB RAM and 256GB internal storage.</p>
    </Stack>
   </Grid> 
   <Grid item xs={12} sm={6} md={3}>Apple🍎
   <img src={apple} id="12"></img>   
   <h4 style={{fontFamily:"bold"}} >Price:Rs.100000</h4> 
   <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
    </Stack>
    <p>They offer security features like facial or fingerprint authentication to protect your personal information. The iPhone even stops apps from tracking your activity online because of a limited OS and platform. Its iMessages and FaceTime video calls are also end-to-end encrypted.</p></Grid>
   <Grid item xs={12} sm={6} md={3}>SamSung
   <img src={samsung} id="12"></img>   
   <h4 style={{fontFamily:"bold"}} >Price:Rs.100000</h4> 
   <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
    </Stack><p>Samsung Galaxy S23 Android smartphone. Announced Feb 2023. Features 6.1″ display, Snapdragon 8 Gen 2 chipset, 3900 mAh battery, 512 GB storage, 8 GB RAM.</p></Grid>
   <Grid item xs={12} sm={6} md={3}>   
   <p>1+ Nord</p>
   <img src={one} id="12"></img>  
   <h4 style={{fontFamily:"bold"}} >Price:Rs.10000</h4> 
   <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
    </Stack>
    <p>About this item. Camera: 64MP Main Camera with EIS; 2MP Depth Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP Sony IMX471; </p></Grid>  
   </Grid>  
   <p>M's_store is one of best store in the world.we serve quality products at affordable Range.</p>  
   <h2>BUY WITH TRUST</h2> 
   <a href='https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=58355126069&hvpone=&hvptwo=&hvadid=486458755421&hvpos=&hvnetw=g&hvrand=15307476914346519252&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007740&hvtargid=kwd-10573980&hydadcr=14453_2154373'>M's_Store</a>
   </Container>     
   
 );
}  
export default Product;