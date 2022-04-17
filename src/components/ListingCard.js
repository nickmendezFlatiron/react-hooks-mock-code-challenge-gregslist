import {React , useState} from "react";

function ListingCard({listing, onDeleteListing}) {

  const {id , description , image , location} = listing
  const [toggle , setToggle] = useState(false)

  function handleFavorite(){
    setToggle(toggle => !toggle)
  }

  function handleDeleteListingClick(id){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onDeleteListing(listing))

  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">

        {toggle ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDeleteListingClick(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
