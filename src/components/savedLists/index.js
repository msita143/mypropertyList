import React from "react";
import styles from "./index.module.scss";
import Card from "../common/Card";
import myData from "../../constants/properties_data.json"

const SavedLists = () => {

  let initialSavedList = JSON.parse(localStorage.getItem("savedList")) || [];

  return (
    <div className={styles.container}>
      <ul className={styles.cards}  >
        {myData && myData.map(property => initialSavedList.includes(property.mlsId) &&
            <Card id={property.mlsId} 
                  key={property.mlsId} 
                  property={property} 
                  savedListChanged={initialSavedList} 
            />
        )}
      </ul>
    </div>
  )
};

export default SavedLists;