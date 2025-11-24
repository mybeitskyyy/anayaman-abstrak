import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { provincesData } from '../data';
import { ArrowLeft, Globe, Home as HomeIcon, MapPin, Share2, Utensils, Music, Gamepad2, Shirt } from 'lucide-react';

const ProvinceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = useMemo(() => provincesData.find((p) => p.slug === slug), [slug]);

  const [coverLoaded, setCoverLoaded] = useState(false);
  const [houseLoaded, setHouseLoaded] = useState(false);
  const [clothingLoaded, setClothingLoaded] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) return <div className="container" style={{ padding: '5rem' }}>Provinsi tidak ditemukan.</div>;

  const handleShare = async () => {
    const shareData = {
      title: `${data.name} • Nusantara`,
      text: `${data.name} — ${data.region}. Jelajahi budaya, rumah adat, kuliner dan seni.`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch (e) {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    }
  };

  return (
    <div>
      <div className="detail-header">
        {!coverLoaded && <div className="skeleton skeleton-cover" />}
        <img
          src={data.coverImg}
          alt={data.name}
          className="detail-cover"
          loading="lazy"
          decoding="async"
          onLoad={() => setCoverLoaded(true)}
          style={{ opacity: coverLoaded ? 1 : 0 }}
        />
        <div className="detail-overlay"></div>
        <div className="header-content">
          <button
            onClick={() => navigate(-1)}
            className="btn"
            style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', color: 'white', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            <ArrowLeft size={18} /> Kembali
          </button>
          <div className="uppercase tracking-[0.2em] font-semibold mb-2 text-[#D4AF37]">{data.region}</div>
          <h1>{data.name}</h1>
          <p><MapPin size={20} color="#D4AF37" fill="#D4AF37" /> {data.capital}, Indonesia</p>
        </div>
      </div>

      <div className="container content-wrapper">
        <main>
          <div className="article-card">
            <h2 className="section-title mt-0"><Globe size={28} /> Sekilas Pandang</h2>
            <p className="article-text">{data.story}</p>
            <p className="article-text">{data.desc}</p>
          </div>

          <div className="article-card">
            <h2 className="section-title"><HomeIcon size={28} /> Rumah Adat</h2>
            <div className="house-card-visual">
              {!houseLoaded && <div className="skeleton skeleton-image" />}
              <img
                src={data.details.house.img}
                alt={data.details.house.name}
                loading="lazy"
                decoding="async"
                onLoad={() => setHouseLoaded(true)}
                className={`transition-opacity duration-300 ${houseLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              <div className="house-info">
                <h3>{data.details.house.name}</h3>
                <p>{data.details.house.desc}</p>
              </div>
            </div>
          </div>

          <div className="article-card">
            <h2 className="section-title"><Shirt size={28} /> Pakaian Adat</h2>
            <div className="clothing-container">
              {!clothingLoaded && <div className="skeleton skeleton-thumb" />}
              <img
                src={data.details.clothing.img}
                alt={data.details.clothing.name}
                loading="lazy"
                decoding="async"
                onLoad={() => setClothingLoaded(true)}
                className={`clothing-img transition-opacity duration-300 ${clothingLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              <div className="clothing-text">
                <h3>{data.details.clothing.name}</h3>
                <p>{data.details.clothing.desc}</p>
              </div>
            </div>
          </div>

          <div className="article-card">
            <h2 className="section-title"><Utensils size={28} /> Kuliner Legendaris</h2>
            <div className="food-grid">
              {data.details.food.map((item, idx) => (
                <div key={idx} className="item-card">
                  <img src={item.img} alt={item.name} loading="lazy" decoding="async" />
                  <div>
                    <strong className="block text-lg text-primary">{item.name}</strong>
                    <small className="block text-[#666] leading-relaxed">{item.desc}</small>
                    <a href={item.resep} target='_blank' className="text-xs hover:opacity-70">Lihat resep</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="article-card">
            <h2 className="section-title"><Gamepad2 size={28} /> Permainan Tradisional</h2>
            <div className="games-grid">
              {data.details.games.map((game, idx) => (
                <div key={idx} className="game-card">
                  <strong>{game.name}</strong>
                  <p>{game.desc}</p>
                  <a href={game.video} target='_blank' className="text-xs hover:opacity-70">Lihat video</a>
                </div>
              ))}
            </div>
          </div>

          <div className="article-card">
            <h2 className="section-title"><Music size={28} /> Seni & Tradisi</h2>
            <div style={{ display: 'grid', gap: '15px' }}>
              {data.details.arts.map((art, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '15px', alignItems: 'center', borderBottom: '1px dashed #eee', paddingBottom: '15px' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{idx + 1}</div>
                  <div><strong style={{ fontSize: '1.1rem' }}>{art.name}</strong><p style={{ color: '#666', fontSize: '0.95rem', margin: 0 }}>{art.desc}</p><a href={art.video} target='_blank' className="text-xs hover:opacity-70">Lihat video</a></div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <aside className="sidebar">
          <div className="sidebar-card">
            <h3>Info Singkat</h3>
            <div className="info-row"><div className="info-icon"><HomeIcon size={20} /></div><div><small className="text-[#999] text-xs">RUMAH ADAT</small><strong className="block">{data.details.house.name}</strong></div></div>
            <div className="info-row"><div className="info-icon"><MapPin size={20} /></div><div><small className="text-[#999] text-xs">IBUKOTA</small><strong className="block">{data.capital}</strong></div></div>
            <div className="mt-8 text-left">
              <h4 className="mb-2 text-base">Destinasi Populer</h4>
              <div className="flex flex-wrap gap-2">
                {data.details.tourism.map((t, i) => (
                  <span key={i} className="bg-[#F5F5F5] px-3 py-1.5 rounded text-sm text-[#555]">{t}</span>
                ))}
              </div>
            </div>
            <button
              className="btn btn-primary w-full justify-center mt-8"
              onClick={handleShare}
              aria-label="Bagikan halaman"
            >
              <Share2 size={18} /> {shared ? 'Tautan Disalin' : 'Bagikan'}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProvinceDetail;
