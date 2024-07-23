import { TileLayer, MapContainer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

function ChangeView({ center, zoom }: { center: LatLngExpression; zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export function MapComponent() {
  const center: LatLngExpression = [51.505, -0.09];
  const zoom: number = 13;

  return (
    <MapContainer className='ml-5 w-auto h-screen'>
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // Atributo 'attribution' deve ser configurado via opções do TileLayer, não diretamente
        // Aqui é uma forma simplificada para a versão mais recente do react-leaflet
        // Veja a documentação para detalhes específicos
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
