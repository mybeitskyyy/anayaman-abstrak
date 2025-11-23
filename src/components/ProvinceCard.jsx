import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart } from 'lucide-react';

const ProvinceCard = ({ data }) => {
  return (
    <div className="card">
      <Link to={`/provinsi/${data.slug}`} className="card-link">
        <div className="card-img-wrapper">
          <img src={data.coverImg} alt={data.name} loading="lazy" decoding="async" />
        </div>
        <div className="card-body">
          <span className="card-region">{data.region}</span>
          <h3>{data.name}</h3>
          <div className="card-capital">
            <MapPin size={16} /> {data.capital}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProvinceCard;