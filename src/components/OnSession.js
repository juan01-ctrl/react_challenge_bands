import { useState, useEffect } from "react";
import BandsCards from "./BandsCards";
import Loader from "./Loader";

import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

import "./Section.css";

const OnSession = () => {
  let headerStyles = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    backgroundColor: "#0f3354",
    color: "#fff",
  };

  let searchBarStyles = {
    fontSize: "18px",
    padding: ".5rem 1.5rem",
    borderRadius: "15px",
    outline: "none",
    border: "none",
    width: "50vw",
  };

  const [data2, setData2] = useState();
  const [data1, setData1] = useState();
  //   const [isPending, setIsPending] = useState(false);

  const url1 =
    "https://my-json-server.typicode.com/improvein/dev-challenge/bands";
  const fetchApi1 = async () => {
    const response = await fetch(url1);
    const responseJSON = await response.json();
    setData1(responseJSON);
  };

  const url2 =
    "https://my-json-server.typicode.com/improvein/dev-challenge/albums";
  const fetchApi2 = async () => {
    const response = await fetch(url2);
    const responseJSON = await response.json();
    setData2(responseJSON);
  };

  useEffect(() => {
    fetchApi1();
  }, []);
  useEffect(() => {
    fetchApi2();
  }, []);

  let albumsData = [];
  if (data1 && data2) {
    data1.forEach((el) =>
      data2.forEach((ele) => {
        if (ele.bandId === el.id) {
          ele["id"] = el.id;
          albumsData = [...albumsData, { albumsData, ...ele }];
        }
      })
    );
  }

 


  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <header style={headerStyles}>
        <Profile />
        <input
          className="search-bar"
          type="text"
          placeholder="Search a band/Genre/country"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          style={searchBarStyles}
        />
        <LogoutButton />
      </header>
      <section className="sectionOnSession">
        {!data1 ? (
          <Loader />
        ) : (
          data1
            .filter((val) => {
              if (searchValue === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                val.genreCode
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                val.country.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return val;
              } else {
                return null;
              }
            })
            .map((el) => (
              <BandsCards
                key={el.id}
                bandName={el.name}
                genre={el.genreCode}
                country={el.country}
                members={el.members}
                year={el.year}
                id={el.id}
                data={albumsData}
              />
            ))
        )}
      </section>
    </>
  );
};

// data2.forEach(ele=>{
//             if(ele.id === el.id){

//                 <BandsCards key={el.id} bandName={el.name}  genre={el.genreCode} country={el.country} members={el.members} year={el.year}id={el.id}/>
//              }
//          }
//             )

export default OnSession;

// "fake-api": "json-server --watch https://my-json-server.typicode.com/improvein/dev-challenge --port 5000"
