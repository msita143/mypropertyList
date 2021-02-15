import React from "react";
import HeartWhite from "../../../assets/heartWhite.svg";
import HeartRed from "../../../assets/heartRed.svg";
import styles from "./index.module.scss";

/*
  This is a card component which contain an information about a property
  need to show in property lisitng or saved listing.
*/
const Card = ({property}) => {
  const savedList = JSON.parse(localStorage.getItem("savedList"));
  const toggleImage =  (savedList && savedList.includes(property.mlsId))
    ? (
        <img id={property.mlsId} 
          className={styles.imgHeart} 
          src={HeartRed} 
          alt="saved"
        />
      )
    : (
        <img id={property.mlsId} 
          className={styles.imgHeart} 
          src={HeartWhite} 
          alt="not saved"
        />
      )
  return (
    <li className={styles.card}>
      <div  className={styles.imgParent}>
        <img className={styles.imgdiv} src={property.photos[0]} alt="property list"></img>
        {toggleImage}
      </div>
      <div className={styles.cardtext1}>
        <span>{property.property.bedrooms} BR</span>
        <span> | </span>
        <span>{property.property.bathsFull }</span>
        <span>.</span>
        <span>{property.property.bathsHalf}</span>
        <span> Bath | </span>
        <span>{property.property.area}</span>
        <span> Sq Ft</span>
      </div>
      <div className={styles.somepsace}>
        <span className={styles.cardprice}>
          {
            (property.listPrice).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits:0
            })
          }
        </span>
      </div>
      <div className={styles.cardaddress}>
        <span>{property.address.streetName}</span>
        <span>, {property.address.city}</span>
        <span>, {property.address.state}</span>
      </div>
      <div className={styles.cardlistdate}>
        <span>
          Listed: {(new Date(property.listDate)).toLocaleDateString("en-US")}
        </span>
      </div>
    </li>
  )
}

export default Card;