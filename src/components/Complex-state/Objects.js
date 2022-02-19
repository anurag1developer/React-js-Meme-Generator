import React from "react";

import Pet from "./Pet";

function Objects() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  // let starIcon = contact.isFavorite
  //   ? "https://images.unsplash.com/photo-1510337550647-e84f83e341ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
  //   : "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80";

  const toggleFavorite = () => {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  };
  //   console.log(contact);
  return (
    <>
      <h2 className="card--name">
        {contact.firstName} {contact.lastName}
      </h2>
      <p className="card--contact">{contact.phone}</p>
      <p className="card-contact">{contact.email}</p>
      <button onClick={toggleFavorite}>Click to change</button>
      {/* <img src={starIcon} /> */}
      <Pet onPetClick={toggleFavorite} isFilled={contact.isFavorite} />
    </>
  );
}

export default Objects;
