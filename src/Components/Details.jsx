import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {

  const {store} =useSelector((state)=>state.science)
  console.log(store)
    // const { id } = useParams();
    // const [story, setStory] = useState([]);

    // useEffect(() => {
    //     fetchStory()
    // } , [])

    
    // const fetchStory = async () => {
    //     try {
    //       const response = await fetch(
    //         `https://mxpertztestapi.onrender.com/api/adventure/${id}`
    //       );
    //       const data = await response.json();
    //       setStory(data);
    //       console.log(data.Title);
    //     } catch (error) {
    //       console.error("Error fetching story:", error);
    //     }
    //   };
    
    //   if (!story) return <div>Loading...</div>;

  return (
    <div>
    <div defaultActiveKey="Word Explorer" id="story-tabs" className=" mt-24">
      <div eventKey="Story Adventure" title="Details">
        
      </div>
      <div eventKey="image" title="Image">
        {/* <img
          style={{ height: "300px", width: "300px" }}
          src={`https://ik.imagekit.io/dev24/${
            story.Image ? story.Image[1] : "loading"
          }`}
          fluid
        /> */}
      </div>
      <div eventKey="Word Explorer" clas Title="Wordexplore">
        <h2>Title:-</h2>
        <p> Status :-</p>
      </div>
    </div>
  </div>
  )
}

export default Details