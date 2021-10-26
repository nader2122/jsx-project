import React from 'react'
import img1 from './img1.png'
import vid1 from './vid1.mp4'




const Codes = () => {
    return (
      <div>
          <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className ="title red"> List of Images and Video </h1>

<br/>

<img src={img1} alt="img1"/>
<p><u>Image 1:</u> From Src</p>
<br/>
<img src="/img2.png" alt="img2"/>
<p><u>Image 2:</u> From Public</p>
         

<video width={400} height={200} controls>

<source src={vid1} type="video/mp4" />

</video>
<p>Video</p>
      </div>
      </div>
    )
}

export default Codes
