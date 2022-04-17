import {React, useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchValue}) {
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

  const searchListings = allListings.filter(listing => listing.description.toLowerCase().includes(searchValue.toLowerCase()))

  const renderListings = searchListings.map(listing => <ListingCard listing={listing} onDeleteListing={handleDeleteListing}/>
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
