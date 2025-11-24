import React, { useMemo, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { provincesData } from '../data';
import { capitalCoords } from '../capitals';

const regions = ['Sumatera', 'Jawa', 'Kalimantan', 'Sulawesi', 'Bali & Nusra', 'Maluku', 'Papua'];

const regionView = {
  'Sumatera': { center: [-0.5, 102.0], zoom: 6 },
  'Jawa': { center: [-7.3, 110.4], zoom: 7 },
  'Kalimantan': { center: [0.7, 114.0], zoom: 6 },
  'Sulawesi': { center: [-1.3, 121.0], zoom: 6 },
  'Bali & Nusra': { center: [-8.5, 118.0], zoom: 7 },
  'Maluku': { center: [-3.2, 129.0], zoom: 6 },
  'Papua': { center: [-4.0, 136.5], zoom: 6 },
};

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const FlyToRegion = ({ target }) => {
  const map = useMap();
  const prev = useRef(target);
  if (prev.current !== target && target && regionView[target]) {
    const v = regionView[target];
    map.flyTo(v.center, v.zoom, { duration: 1.0 });
    prev.current = target;
  }
  return null;
};

const FlyToPoint = ({ point }) => {
  const map = useMap();
  const prev = useRef(point);
  if (point && prev.current !== point) {
    map.flyTo([point.lat, point.lng], 10, { duration: 1.0 });
    prev.current = point;
  }
  return null;
};

const Map = () => {
  const [selected, setSelected] = useState('Jawa');
  const [focusPoint, setFocusPoint] = useState(null);
  const list = useMemo(() => provincesData.filter(p => p.region === selected), [selected]);

  return (
    <div className="container" style={{ paddingTop: '7rem', paddingBottom: '4rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>Peta Interaktif Indonesia</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Zoom, pan, dan pilih wilayah untuk melihat provinsi.</p>
      <div className="map-wrapper">
        <div className="map-card">
          <MapContainer center={regionView[selected].center} zoom={regionView[selected].zoom} scrollWheelZoom className="map-svg" style={{ borderRadius: 16 }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FlyToRegion target={selected} />
            <FlyToPoint point={focusPoint} />
            <MarkerClusterGroup chunkedLoading>
              {list.map((p) => {
                const c = capitalCoords[p.slug];
                if (!c) return null;
                return (
                  <Marker key={p.id} position={[c.lat, c.lng]}>
                    <Popup>
                      <div style={{ minWidth: '160px' }}>
                        <strong>{p.name}</strong>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{p.capital}</div>
                        <a href={`/provinsi/${p.slug}`}>Lihat detail</a>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MarkerClusterGroup>
          </MapContainer>
        </div>
        <div className="province-list">
          <h3 style={{ marginBottom: '0.5rem' }}>{selected}</h3>
          <div>
            {list.map(p => (
              <a key={p.id} href={`/provinsi/${p.slug}`} className="province-item" onMouseEnter={() => setFocusPoint(capitalCoords[p.slug])}>{p.name}</a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        {regions.map(r => (
          <button key={r} className={`chip ${selected === r ? 'active' : ''}`} onClick={() => setSelected(r)}>{r}</button>
        ))}
        <input list="prov-list" placeholder="Cari provinsi di peta..." className="search-bar" style={{ maxWidth: 300 }} onChange={(e) => {
          const name = e.target.value.toLowerCase();
          const p = provincesData.find(x => x.name.toLowerCase() === name);
          if (p) {
            setSelected(p.region);
            const c = capitalCoords[p.slug];
            if (c) setFocusPoint(c);
          }
        }} />
        <datalist id="prov-list">
          {provincesData.map(p => <option key={p.id} value={p.name} />)}
        </datalist>
      </div>
    </div>
  );
};

export default Map;
