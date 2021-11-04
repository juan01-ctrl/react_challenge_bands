import { useState } from "react";
import AlbumsData from "./AlbumsData";
import "./ExpandCards.css";

const BandsCards = ({ bandName, genre, country, members, year, id, data }) => {
  let cardStyles = {
    width: "80vw",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#756abd",
    margin: "1rem 0",
    color: "#000",
    cursor: "pointer",
    transition: "height .3s ease",
  };
  let cardContainerStyles = {
    position: "relative",
    width: "100%",
  };

  let arrowStyles = {
    position: "absolute",
    right: "35px",
    top: "40px",
    fontSize: "24px",
  };
  let cardTitleStyles = {
    fontSize: "30px",
  };

  let listItemsStyles = {
    listStyle: "none",
    padding: ".5rem",
  };

  let listStyles = {
    padding: "0",
    margin: "1rem 0",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  };
  let infoStyles = {
    margin: ".5rem",
  };

 

  const [expandCar, setExpandCar] = useState(false);

  return (
    <article style={cardStyles} onClick={() => setExpandCar(!expandCar)}>
      <div style={cardContainerStyles}>
        <h3 style={cardTitleStyles}>{bandName}</h3>
        <i style={arrowStyles} className="fas fa-chevron-down"></i>
        {expandCar && (
          <div className="expandCardStyles">
            <div>
              {" "}
              <h4>Genre:</h4>
              <p style={infoStyles}>{genre}</p> <h4>Country:</h4>
              <p style={infoStyles}>{country}</p>{" "}
            </div>
            <div>
              <h4>Members:</h4>
              <ul style={listStyles}>
                {members.map((el) => (
                  <li style={listItemsStyles} key={el.name}>
                    {el.name}
                  </li>
                ))}
              </ul>{" "}
              <h4>Year:</h4>
              <p style={infoStyles}>{year}</p>
            </div>

            <AlbumsData data={data.filter(el=> el.bandId === id)} id={id}/>
               
          </div>
        )}
      </div>
    </article>
  );
};

export default BandsCards;
