


const AlbumsData = ({ data }) =>  {
  let albumNameStyles = {
    paddingTop: ".6rem",
    fontWeight: "500",
    color: "#fff",
  };
  


  
console.log(data)
 return (
    
    <>

    {data.length  ? (
    <ul>
        <h4>Albums</h4>
           {data
               .map((el) => (
                 <>
                   <li style={albumNameStyles}>{el.name}</li>
                   <li>({el.year})</li>
                 </>
               ))}

    </ul>
    ): <></>
}

    </>
  );
};

export default AlbumsData;
