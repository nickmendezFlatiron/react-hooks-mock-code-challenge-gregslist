import {React, useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [allListings , setAllListings] = useState([])

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(listings => {setAllListings(listings)
    })
  },[])

  function handleDeleteListing(deletedListing){
   const updatedListing = allListings.filter(listing => listing.id !== deletedListing.id)
    setAllListings(updatedListing)
  }

  const renderListings = allListings.map(listing => <ListingCard listing={listing} onDeleteListing={handleDeleteListing}/>
  )

  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
