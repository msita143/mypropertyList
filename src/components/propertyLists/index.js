import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
//import getPropertiesListingApi from "./api";
import Card from "../common/Card"
import myData from "../../constants/properties_data.json"

/*
  This functional component will show the property listing
*/
const PropertyLists = () => {
  const [data, setData] = useState("");
  let initialSavedList = JSON.parse(localStorage.getItem("savedList")) || [];
  //Need to use this savedList state to re-render when user click on heart 
  //image.
  const [savedList, setSavedList] = useState([...initialSavedList]);
  
  useEffect ( () => {
    try {
      //Api is nor working as of now
      //let data = getPropertiesListingApi();
			setData(myData); ///used static data from json
			console.log(myData)
    } catch (error){
      console.log(error);
    }
  }, []);

  const saveListing = (e) => {
    const id = Number(e.target.id);
    if(id) {
      if(!savedList.includes(id)) {
        savedList.push(id);
      } else {
        const indx = savedList.indexOf(id);
        savedList.splice(indx, 1);
      }
      setSavedList(
        [
          ...savedList,
        ]
      );
      localStorage.setItem("savedList", JSON.stringify(savedList));
    } 
  }

  return (
    <div className={styles.container}>
      <ul className={styles.cards} onClick={saveListing} >
        {data && data.map(property =>
            <Card id={property.mlsId} 
                  key={property.mlsId} 
                  property={property}  
            />
        )}
      </ul>
    </div>
  )
};

export default PropertyLists;
