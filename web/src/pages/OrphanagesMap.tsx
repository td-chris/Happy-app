import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages-map.css';


function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa:</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>

                </header>

                <footer>
                    <strong>Ribeirão Pires</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <MapContainer
                center={[-23.7075159,-46.4164853]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}>

                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/* <TileLayer url={'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REAC_APP_MAPBOX_TOKEN}'} /> */}

                <Marker
                    icon = {mapIcon}
                    position={[-23.7075159,-46.4164853]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                        Lar das meninas
                        <Link to="/orphanages/1" >
                            <FiArrowRight size={32} color="#FFF" />
                        </Link>
                    </Popup>
                </Marker>
            </MapContainer>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;