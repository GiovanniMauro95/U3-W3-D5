import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const NewExit = ({ artist }) => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`);
        if (response.ok) {
          const data = await response.json();
          setSongs(data.data);
        } else {
          setError("Errore nella risposta API");
        }
      } catch (err) {
        setError("Errore nella fetch");
      }
    };

    fetchSongs();
  }, [artist]);

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {songs.slice(0, 1).map((song) => (
        <Col key={song.id}>
          <img src={song.album.cover_medium} alt={song.title} className="card-img-top rounded-3" style={{ width: "100px" }} />

          <p className="text-start ms-4">{song.artist.name}</p>
        </Col>
      ))}
    </>
  );
};

export default NewExit;
