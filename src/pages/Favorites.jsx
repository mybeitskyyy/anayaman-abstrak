import React from 'react';
import { provincesData } from '../data';
import ProvinceCard from '../components/ProvinceCard';

const Favorites = ({ favorites, toggleFav }) => {
  const items = provincesData.filter((p) => favorites.includes(p.id));

  return (
    <div
      className="container"
      style={{ paddingTop: '7rem', paddingBottom: '4rem' }}
    >
      <h1 className="text-6xl mb-4 text-center">Favorit Saya</h1>

      {items.length === 0 ? (
        <p className="text-center  text-gray-400">
          Belum ada provinsi favorit. Tandai dengan ikon hati pada kartu.
        </p>
      ) : (
        <div className="grid">
          {items.map((p) => (
            <ProvinceCard
              key={p.id}
              data={p}
              isFav={favorites.includes(p.id)}
              toggleFav={toggleFav}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
