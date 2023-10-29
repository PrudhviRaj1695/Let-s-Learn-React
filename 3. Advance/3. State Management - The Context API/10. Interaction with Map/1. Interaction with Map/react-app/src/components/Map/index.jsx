import React, { useState } from 'react';
import styles from "./styles.module.css";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useCities } from "../../contexts/CitiesContext";

const Map = () => 
{
  const navigate = useNavigate(); 
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [searchParams, setSearchParams ] = useSearchParams();
  const mapLat = searchParams.get('lat');
  const mapLng = searchParams.get('lng');
 
  
  return (
    <div className={styles.mapContainer} onClick={()=> navigate("form")}>
      <MapContainer center={[mapLat, mapLng]} zoom={6} scrollWheelZoom={true} className={styles.map}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
      { cities.map((city)=> (  
        <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
          <Popup><span>{city.emoji}</span><span>{city.cityName}</span></Popup>
        </Marker>))}
    </MapContainer>
  </div>
  )
}

export default Map;
