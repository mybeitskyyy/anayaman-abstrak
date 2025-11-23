export const provincesData = [
  // 1. ACEH
  {
    id: 1,
    slug: "aceh",
    name: "Aceh",
    region: "Sumatera",
    capital: "Banda Aceh",
    coverImg: "https://images.unsplash.com/photo-1572361912480-33d420c4163b?auto=format&fit=crop&w=1200&q=80",
    desc: "Serambi Mekkah dengan hukum syariat Islam dan sejarah perjuangan yang kuat.",
    story: "Aceh adalah provinsi paling barat Indonesia, dikenal sebagai tempat pertama masuknya Islam di Nusantara. Masyarakat Aceh memiliki semangat juang tinggi, terbukti dari perlawanan sengit terhadap penjajah. Pasca Tsunami 2004, Aceh bangkit menjadi daerah yang maju dengan tetap memegang teguh nilai-nilai agama.",
    details: {
      house: { name: "Rumoh Aceh", desc: "Rumah panggung kayu dengan tiang tinggi untuk menghindari banjir dan binatang buas.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Rumah_Aceh.jpg/1024px-Rumah_Aceh.jpg" },
      clothing: { name: "Ulee Balang", desc: "Pakaian adat raja dan permaisuri dengan sulaman benang emas.", img: "https://images.unsplash.com/photo-1598556776374-362d9230582e?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Geudeu-geudeu", desc: "Gulat tradisional antar tim." }, { name: "Catoe", desc: "Catur tradisional Aceh." }],
      food: [{ name: "Mie Aceh", desc: "Mie pedas kaya rempah.", img: "https://images.unsplash.com/photo-1568436837468-19c42b0e4007?auto=format&fit=crop&w=300&q=80" }],
      arts: [{ name: "Tari Saman", desc: "Tari tangan seribu (UNESCO)." }],
      tourism: ["Masjid Raya Baiturrahman", "Museum Tsunami"]
    }
  },
  // 2. SUMATERA UTARA
  {
    id: 2,
    slug: "sumatera-utara",
    name: "Sumatera Utara",
    region: "Sumatera",
    capital: "Medan",
    coverImg: "https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=1200&q=80",
    desc: "Rumah bagi Danau Toba, danau vulkanik terbesar di dunia.",
    story: "Sumatera Utara adalah tanah leluhur suku Batak yang memiliki tradisi marga yang kuat. Di tengahnya terbentang Danau Toba yang memukau dengan Pulau Samosir di tengahnya. Keberagaman etnis seperti Melayu, Nias, dan Batak menciptakan harmoni budaya yang unik.",
    details: {
      house: { name: "Rumah Bolon", desc: "Rumah panggung dengan atap melengkung dan ukiran Gorga.", img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Bolon_House.jpg" },
      clothing: { name: "Ulos", desc: "Kain tenun khas Batak yang sakral.", img: "https://images.unsplash.com/photo-1616628188550-808960c07c09?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Pecah Piring", desc: "Permainan melempar tumpukan batu/pecahan." }, { name: "Marjalengkat", desc: "Egrang bambu." }],
      food: [{ name: "Bika Ambon", desc: "Kue bersarang yang manis.", img: "https://images.unsplash.com/photo-1618635221848-3a4a316f56c1?auto=format&fit=crop&w=300&q=80" }],
      arts: [{ name: "Tari Tor-Tor", desc: "Tarian perayaan adat Batak." }],
      tourism: ["Danau Toba", "Istana Maimun"]
    }
  },
  // 3. SUMATERA BARAT
  {
    id: 3,
    slug: "sumatera-barat",
    name: "Sumatera Barat",
    region: "Sumatera",
    capital: "Padang",
    coverImg: "https://images.unsplash.com/photo-1628498939654-e765967d9f06?auto=format&fit=crop&w=1200&q=80",
    desc: "Ranah Minang dengan budaya matrilineal dan rendang yang mendunia.",
    story: "Sumatera Barat dikenal dengan etnis Minangkabau yang menganut sistem kekerabatan Matrilineal (garis ibu). Filosofi 'Alam Takambang Jadi Guru' menjadikan masyarakatnya dekat dengan alam. Masakan Padang adalah salah satu kuliner paling populer di Indonesia.",
    details: {
      house: { name: "Rumah Gadang", desc: "Atap berbentuk gonjong seperti tanduk kerbau.", img: "https://images.unsplash.com/photo-1628498939654-e765967d9f06?auto=format&fit=crop&w=800&q=80" },
      clothing: { name: "Bundo Kanduang", desc: "Pakaian adat wanita dengan penutup kepala Tengkuluk.", img: "https://images.unsplash.com/photo-1595321484745-606847250497?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Sepak Raga", desc: "Sepak takraw tradisional." }, { name: "Sipak Tekong", desc: "Petak umpet dengan kaleng." }],
      food: [{ name: "Rendang", desc: "Daging rempah (Makanan terenak dunia).", img: "https://images.unsplash.com/photo-1605496270429-0b294555c2c6?auto=format&fit=crop&w=300&q=80" }],
      arts: [{ name: "Tari Piring", desc: "Tari atraksi piring." }],
      tourism: ["Jam Gadang", "Lembah Harau"]
    }
  },
  // 4. RIAU
  {
    id: 4,
    slug: "riau",
    name: "Riau",
    region: "Sumatera",
    capital: "Pekanbaru",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/3/36/Istana_Siak_Sri_Indrapura.jpg",
    desc: "Bumi Lancang Kuning, pusat budaya Melayu di Sumatera.",
    story: "Riau adalah pusat kebudayaan Melayu di Indonesia. Sungai Siak yang membelah wilayah ini menjadi saksi kejayaan kerajaan-kerajaan masa lampau. Riau juga kaya akan sumber daya alam minyak bumi.",
    details: {
      house: { name: "Selaso Jatuh Kembar", desc: "Rumah panggung dengan selasar keliling.", img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Anjungan_Riau_TMII_1.jpg" },
      clothing: { name: "Teluk Belanga", desc: "Baju kurung pria khas Melayu.", img: "https://images.unsplash.com/photo-1637325361673-49e60661d927?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Gasing", desc: "Adu putar gasing kayu." }, { name: "Pacu Jalur", desc: "Balap perahu dayung panjang." }],
      food: [{ name: "Gulai Ikan Patin", desc: "Ikan patin kuah kuning." }, {name: "Bolu Kemojo", desc: "Kue manis aroma pandan."}],
      arts: [{ name: "Tari Zapin", desc: "Tari rumpun Melayu." }],
      tourism: ["Istana Siak", "Candi Muara Takus"]
    }
  },
  // 5. KEPULAUAN RIAU
  {
    id: 5,
    slug: "kepulauan-riau",
    name: "Kepulauan Riau",
    region: "Sumatera",
    capital: "Tanjung Pinang",
    coverImg: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=1200&q=80",
    desc: "Gerbang wisata bahari dengan ribuan pulau eksotis.",
    story: "Kepri adalah provinsi kepulauan yang berbatasan langsung dengan negara tetangga. Batam dan Bintan menjadi primadona wisata. Sejarah Kerajaan Riau-Lingga yang kuat menjadikan wilayah ini kaya akan situs sejarah Melayu.",
    details: {
      house: { name: "Belah Bubung", desc: "Rumah panggung di atas air.", img: "https://upload.wikimedia.org/wikipedia/commons/8/85/Rumah_Belah_Bubung.jpg" },
      clothing: { name: "Kebaya Labuh", desc: "Kebaya panjang wanita Melayu.", img: "https://images.unsplash.com/photo-1598896537224-108629c28862?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Golek-golek", desc: "Permainan santai." }, { name: "Layang-layang", desc: "Adu layangan." }],
      food: [{ name: "Otak-otak", desc: "Ikan tenggiri bakar daun kelapa." }, {name: "Gonggong", desc: "Siput laut rebus."}],
      arts: [{ name: "Mak Yong", desc: "Teater tradisi Melayu." }],
      tourism: ["Pulau Bintan", "Jembatan Barelang"]
    }
  },
  // 6. JAMBI
  {
    id: 6,
    slug: "jambi",
    name: "Jambi",
    region: "Sumatera",
    capital: "Jambi",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Candi_Gumpung%2C_Muaro_Jambi_2.jpg",
    desc: "Rumah Candi Muaro Jambi, situs universitas Buddha kuno.",
    story: "Jambi dialiri Sungai Batanghari, sungai terpanjang di Sumatera. Di sini terdapat Kompleks Candi Muaro Jambi yang sangat luas, membuktikan kejayaan masa lalu sebagai pusat pendidikan agama Buddha.",
    details: {
      house: { name: "Kajang Lako", desc: "Rumah panggung dengan atap melengkung perahu.", img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Anjungan_Jambi.jpg" },
      clothing: { name: "Baju Kurung Tanggung", desc: "Baju kurung dengan hiasan logam emas.", img: "https://images.unsplash.com/photo-1605496270429-0b294555c2c6?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Tejek-tejekan", desc: "Permainan kejar-kejaran." }],
      food: [{ name: "Tempoyak", desc: "Fermentasi durian." }],
      arts: [{ name: "Tari Sekapur Sirih", desc: "Tari penyambutan tamu." }],
      tourism: ["Candi Muaro Jambi", "Gunung Kerinci"]
    }
  },
  // 7. SUMATERA SELATAN
  {
    id: 7,
    slug: "sumatera-selatan",
    name: "Sumatera Selatan",
    region: "Sumatera",
    capital: "Palembang",
    coverImg: "https://images.unsplash.com/photo-1565028646-077c85376a90?auto=format&fit=crop&w=1200&q=80",
    desc: "Bumi Sriwijaya, pusat kerajaan maritim terbesar di Asia Tenggara.",
    story: "Palembang adalah kota tertua di Indonesia. Dahulu merupakan pusat Kerajaan Sriwijaya yang menguasai jalur perdagangan laut. Jembatan Ampera yang megah membelah Sungai Musi menjadi ikon kebanggaan.",
    details: {
      house: { name: "Rumah Limas", desc: "Rumah bertingkat-tingkat (bengkilas).", img: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Rumah_Limas.jpg" },
      clothing: { name: "Aesan Gede", desc: "Pakaian adat mewah simbol keagungan Sriwijaya.", img: "https://images.unsplash.com/photo-1594310068934-b008479357f5?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Benthik", desc: "Patok lele." }],
      food: [{ name: "Pempek", desc: "Olahan ikan tenggiri dan cuko.", img: "https://images.unsplash.com/photo-1562405514-18d2408163b8?auto=format&fit=crop&w=300&q=80" }],
      arts: [{ name: "Tari Gending Sriwijaya", desc: "Tari kolosal kerajaan." }],
      tourism: ["Jembatan Ampera", "Pulau Kemaro"]
    }
  },
  // 8. BANGKA BELITUNG
  {
    id: 8,
    slug: "bangka-belitung",
    name: "Kep. Bangka Belitung",
    region: "Sumatera",
    capital: "Pangkal Pinang",
    coverImg: "https://images.unsplash.com/photo-1586277035026-9305d31774b7?auto=format&fit=crop&w=1200&q=80",
    desc: "Negeri Laskar Pelangi dengan pantai bebatuan granit raksasa.",
    story: "Terkenal karena film Laskar Pelangi, Babel memiliki pantai unik dengan batu granit besar. Dulunya penghasil timah terbesar, kini bertransformasi menjadi surga wisata bahari.",
    details: {
      house: { name: "Rumah Rakit", desc: "Rumah di atas rakit sungai/laut.", img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Bangka_Belitung_House.jpg" },
      clothing: { name: "Paksian", desc: "Perpaduan budaya Melayu, Arab, dan Tionghoa.", img: "https://images.unsplash.com/photo-1626858392394-08f987703491?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Sembunyian", desc: "Petak umpet." }],
      food: [{ name: "Mie Belitung", desc: "Mie kuah udang kental." }],
      arts: [{ name: "Tari Campak", desc: "Tari pergaulan muda-mudi." }],
      tourism: ["Pantai Tanjung Tinggi", "Museum Kata"]
    }
  },
  // 9. BENGKULU
  {
    id: 9,
    slug: "bengkulu",
    name: "Bengkulu",
    region: "Sumatera",
    capital: "Bengkulu",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Fort_Marlborough_Bengkulu.jpg",
    desc: "Tanah kelahiran Fatmawati dan habitat Bunga Rafflesia.",
    story: "Bengkulu adalah tempat pengasingan Bung Karno dan kampung halaman Ibu Fatmawati (penjahit Bendera Pusaka). Di hutan-hutannya tumbuh bunga terbesar di dunia, Rafflesia Arnoldii.",
    details: {
      house: { name: "Bubungan Lima", desc: "Rumah panggung tahan gempa.", img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Rumah_Adat_Bengkulu.jpg" },
      clothing: { name: "Rejang Lebong", desc: "Kain besurek (batik kaligrafi).", img: "https://images.unsplash.com/photo-1630396668990-7097723b060c?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Ingkau", desc: "Egrang batok kelapa." }],
      food: [{ name: "Pendap", desc: "Ikan pepes bumbu rempah." }],
      arts: [{ name: "Tari Andun", desc: "Tari adat pernikahan." }],
      tourism: ["Benteng Marlborough", "Rumah Pengasingan Bung Karno"]
    }
  },
  // 10. LAMPUNG
  {
    id: 10,
    slug: "lampung",
    name: "Lampung",
    region: "Sumatera",
    capital: "Bandar Lampung",
    coverImg: "https://images.unsplash.com/photo-1625723060335-2955535d6a7f?auto=format&fit=crop&w=1200&q=80",
    desc: "Gerbang Sumatera, terkenal dengan Gajah Way Kambas dan Kain Tapis.",
    story: "Provinsi paling selatan di Sumatera ini menjadi pintu gerbang penghubung ke Jawa. Lampung memiliki Taman Nasional Way Kambas, pusat konservasi Gajah Sumatera. Kain Tapis Lampung yang bersulam emas adalah mahakarya tekstil.",
    details: {
      house: { name: "Nuwo Sesat", desc: "Rumah adat tempat musyawarah.", img: "https://upload.wikimedia.org/wikipedia/commons/5/59/Anjungan_Lampung.jpg" },
      clothing: { name: "Tulang Bawang", desc: "Pakaian dengan mahkota Siger.", img: "https://images.unsplash.com/photo-1595321484745-606847250497?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Lyei", desc: "Permainan biji-bijian." }],
      food: [{ name: "Seruit", desc: "Ikan bakar sambal terasi mangga." }],
      arts: [{ name: "Tari Sigeh Pengunten", desc: "Tari persembahan." }],
      tourism: ["Way Kambas", "Teluk Kiluan"]
    }
  },
  // 11. BANTEN
  {
    id: 11,
    slug: "banten",
    name: "Banten",
    region: "Jawa",
    capital: "Serang",
    coverImg: "https://images.unsplash.com/photo-1518182170546-0766aa6f8a28?auto=format&fit=crop&w=1200&q=80",
    desc: "Tanah Jawara, rumah Suku Baduy yang menjaga alam.",
    story: "Banten dulunya adalah kesultanan maritim yang besar. Di pedalamannya, Suku Baduy hidup harmonis dengan alam menolak teknologi modern. Seni Debus yang kebal senjata tajam berasal dari sini.",
    details: {
      house: { name: "Sulah Nyanda", desc: "Rumah Suku Baduy dari bambu dan ijuk.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Baduy_Luar.jpg/1024px-Baduy_Luar.jpg" },
      clothing: { name: "Pangsi", desc: "Setelan hitam-hitam jawara.", img: "https://images.unsplash.com/photo-1637325361673-49e60661d927?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Gatrik", desc: "Pukul kayu kecil." }],
      food: [{ name: "Sate Bandeng", desc: "Bandeng tanpa duri dibakar." }],
      arts: [{ name: "Debus", desc: "Seni bela diri kebal." }],
      tourism: ["Taman Nasional Ujung Kulon", "Kampung Baduy"]
    }
  },
  // 12. DKI JAKARTA
  {
    id: 12,
    slug: "dki-jakarta",
    name: "DKI Jakarta",
    region: "Jawa",
    capital: "Jakarta",
    coverImg: "https://images.unsplash.com/photo-1555899434-94d1368b7ade?auto=format&fit=crop&w=1200&q=80",
    desc: "Metropolitan melting pot dengan budaya Betawi.",
    story: "Ibukota negara ini adalah pertemuan segala budaya. Budaya Betawi asli tetap eksis di tengah modernitas.",
    details: {
      house: { name: "Rumah Kebaya", desc: "Ciri khas teras luas dan gigi balang.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rumah_Betawi.jpg/1280px-Rumah_Betawi.jpg" },
      clothing: { name: "Sadariah", desc: "Baju koko dan kain sarung (pria).", img: "https://images.unsplash.com/photo-1568436837468-19c42b0e4007?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Galasin", desc: "Gobak sodor." }, { name: "Gundu", desc: "Kelereng." }],
      food: [{ name: "Kerak Telor", desc: "Omelet ketan.", img: "https://images.unsplash.com/photo-1599584789789-4b79678d046b?auto=format&fit=crop&w=300&q=80" }],
      arts: [{ name: "Ondel-ondel", desc: "Boneka raksasa." }],
      tourism: ["Monas", "Kota Tua"]
    }
  },
  // 13. JAWA BARAT
  {
    id: 13,
    slug: "jawa-barat",
    name: "Jawa Barat",
    region: "Jawa",
    capital: "Bandung",
    coverImg: "https://images.unsplash.com/photo-1628046963272-80377595c70a?auto=format&fit=crop&w=1200&q=80",
    desc: "Tanah Pasundan yang sejuk dengan budaya Sunda.",
    story: "Jawa Barat identik dengan budaya Sunda yang ramah. Musik Angklung dari bambu adalah warisan dunia UNESCO.",
    details: {
      house: { name: "Julang Ngapak", desc: "Atap seperti burung mengepakkan sayap.", img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Anjungan_Jawa_Barat.jpg" },
      clothing: { name: "Kebaya Sunda", desc: "Kebaya cerah dengan kain jarik.", img: "https://images.unsplash.com/photo-1598556776374-362d9230582e?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Perepet Jengkol", desc: "Menari dengan kaki saling kait." }],
      food: [{ name: "Batagor", desc: "Bakso Tahu Goreng." }],
      arts: [{ name: "Angklung", desc: "Musik bambu." }, { name: "Jaipong", desc: "Tari dinamis." }],
      tourism: ["Kawah Putih", "Gedung Sate"]
    }
  },
  // 14. JAWA TENGAH
  {
    id: 14,
    slug: "jawa-tengah",
    name: "Jawa Tengah",
    region: "Jawa",
    capital: "Semarang",
    coverImg: "https://images.unsplash.com/photo-1573378736547-4848d28e9d57?auto=format&fit=crop&w=1200&q=80",
    desc: "Pusat peradaban Jawa dan Candi Borobudur.",
    story: "Jawa Tengah adalah jantung budaya Jawa. Candi Borobudur, candi Buddha terbesar di dunia, berdiri megah di sini.",
    details: {
      house: { name: "Joglo", desc: "Atap tajug 4 tiang utama (soko guru).", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Joglo_House.jpg/1280px-Joglo_House.jpg" },
      clothing: { name: "Jawi Jangkep", desc: "Beskap lengkap dengan blangkon dan keris.", img: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Jamuran", desc: "Bermain lingkaran lagu." }],
      food: [{ name: "Lumpia Semarang", desc: "Rebung goreng." }],
      arts: [{ name: "Gamelan", desc: "Orkestra Jawa." }],
      tourism: ["Candi Borobudur", "Lawang Sewu"]
    }
  },
  // 15. DI YOGYAKARTA
  {
    id: 15,
    slug: "di-yogyakarta",
    name: "DI Yogyakarta",
    region: "Jawa",
    capital: "Yogyakarta",
    coverImg: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
    desc: "Daerah Istimewa yang dipimpin Sultan.",
    story: "Jogja adalah kota budaya dan pelajar. Satu-satunya provinsi yang masih dipimpin oleh Sultan aktif.",
    details: {
      house: { name: "Bangsal Kencono", desc: "Arsitektur keraton yang agung.", img: "https://upload.wikimedia.org/wikipedia/commons/5/53/Kraton_Yogyakarta.jpg" },
      clothing: { name: "Surjan", desc: "Baju lurik khas Jogja.", img: "https://images.unsplash.com/photo-1575685785864-397c1e042953?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Dakuan", desc: "Congklak." }],
      food: [{ name: "Gudeg", desc: "Nangka manis." }],
      arts: [{ name: "Wayang Kulit", desc: "Bayangan boneka kulit." }],
      tourism: ["Malioboro", "Prambanan"]
    }
  },
  // 16. JAWA TIMUR
  {
    id: 16,
    slug: "jawa-timur",
    name: "Jawa Timur",
    region: "Jawa",
    capital: "Surabaya",
    coverImg: "https://images.unsplash.com/photo-1596401057633-565652c5f2f3?auto=format&fit=crop&w=1200&q=80",
    desc: "Bumi Majapahit dan Gunung Bromo.",
    story: "Jawa Timur memiliki karakter masyarakat yang egaliter dan terbuka. Gunung Bromo yang ikonik ada di sini.",
    details: {
      house: { name: "Joglo Situbondo", desc: "Joglo dengan ukiran khas pesisir.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Anjungan_Jawa_Timur.jpg/1024px-Anjungan_Jawa_Timur.jpg" },
      clothing: { name: "Pesa'an", desc: "Baju Madura kaos loreng merah putih.", img: "https://images.unsplash.com/photo-1630396668990-7097723b060c?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Patil Lele", desc: "Pukul kayu." }],
      food: [{ name: "Rawon", desc: "Sup daging kuah hitam kluwek." }],
      arts: [{ name: "Reog Ponorogo", desc: "Topeng singa raksasa." }],
      tourism: ["Gunung Bromo", "Kawah Ijen"]
    }
  },
  // 17. BALI
  {
    id: 17,
    slug: "bali",
    name: "Bali",
    region: "Bali & Nusra",
    capital: "Denpasar",
    coverImg: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    desc: "Pulau Dewata yang magis dan religius.",
    story: "Bali adalah ikon pariwisata Indonesia. Budaya Hindu Tri Hita Karana menjaga keseimbangan alam, manusia, dan Tuhan.",
    details: {
      house: { name: "Gapura Candi Bentar", desc: "Pintu gerbang terbelah dua.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Bali_Gate.jpg/800px-Bali_Gate.jpg" },
      clothing: { name: "Payas Agung", desc: "Pakaian mewah warna emas.", img: "https://images.unsplash.com/photo-1616628188550-808960c07c09?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Megoak-goakan", desc: "Tangkap ekor naga." }],
      food: [{ name: "Ayam Betutu", desc: "Ayam bumbu rempah." }],
      arts: [{ name: "Kecak", desc: "Tari suara mulut." }],
      tourism: ["Tanah Lot", "Ubud"]
    }
  },
  // 18. NUSA TENGGARA BARAT
  {
    id: 18,
    slug: "nusa-tenggara-barat",
    name: "Nusa Tenggara Barat",
    region: "Bali & Nusra",
    capital: "Mataram",
    coverImg: "https://images.unsplash.com/photo-1591708072113-18c3994eb4f9?auto=format&fit=crop&w=1200&q=80",
    desc: "Pulau Seribu Masjid dan Gunung Rinjani.",
    story: "NTB dihuni Suku Sasak (Lombok) dan Samawa/Mbojo (Sumbawa). Mandalika kini menjadi sirkuit MotoGP kelas dunia.",
    details: {
      house: { name: "Dalam Loka", desc: "Istana kayu Sumbawa yang megah.", img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Istana_Dalam_Loka.jpg" },
      clothing: { name: "Lambung", desc: "Pakaian wanita Sasak hitam dengan selendang.", img: "https://images.unsplash.com/photo-1626858392394-08f987703491?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Peresean", desc: "Tarung rotan dan perisai." }],
      food: [{ name: "Ayam Taliwang", desc: "Ayam bakar pedas." }],
      arts: [{ name: "Gendang Beleq", desc: "Musik gendang besar." }],
      tourism: ["Gili Trawangan", "Gunung Rinjani"]
    }
  },
  // 19. NUSA TENGGARA TIMUR
  {
    id: 19,
    slug: "nusa-tenggara-timur",
    name: "Nusa Tenggara Timur",
    region: "Bali & Nusra",
    capital: "Kupang",
    coverImg: "https://images.unsplash.com/photo-1518894349511-737262ce701a?auto=format&fit=crop&w=1200&q=80",
    desc: "Rumah Komodo dan Danau Kelimutu.",
    story: "NTT adalah provinsi kepulauan dengan lanskap sabana eksotis. Pulau Komodo adalah satu-satunya habitat naga purba.",
    details: {
      house: { name: "Mbaru Niang", desc: "Rumah kerucut Wae Rebo.", img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Wae_Rebo.jpg" },
      clothing: { name: "Tenun Ikat", desc: "Kain tenun motif rumit khas Flores/Sumba.", img: "https://images.unsplash.com/photo-1621746173781-62b55534234f?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Rangkuk Alu", desc: "Lompat bambu." }],
      food: [{ name: "Se'i Sapi", desc: "Daging asap." }],
      arts: [{ name: "Sasando", desc: "Musik daun lontar." }],
      tourism: ["Pulau Komodo", "Labuan Bajo"]
    }
  },
  // 20. KALIMANTAN BARAT
  {
    id: 20,
    slug: "kalimantan-barat",
    name: "Kalimantan Barat",
    region: "Kalimantan",
    capital: "Pontianak",
    coverImg: "https://images.unsplash.com/photo-1628602934756-c6b0251d827f?auto=format&fit=crop&w=1200&q=80",
    desc: "Kota Khatulistiwa dan Sungai Kapuas.",
    story: "Pontianak dilalui garis Khatulistiwa. Sungai Kapuas, sungai terpanjang di Indonesia, menjadi nadi kehidupan.",
    details: {
      house: { name: "Rumah Radakng", desc: "Rumah panjang Dayak (Longhouse).", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Rumah_Radakng_Pontianak.jpg" },
      clothing: { name: "King Baba", desc: "Pakaian kulit kayu ampuro.", img: "https://images.unsplash.com/photo-1598556776374-362d9230582e?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Gasing", desc: "Gasing kayu." }],
      food: [{ name: "Bubur Pedas", desc: "Bubur sayuran dan rempah." }],
      arts: [{ name: "Tari Monong", desc: "Tari penyembuhan." }],
      tourism: ["Tugu Khatulistiwa", "Singkawang"]
    }
  },
  // 21. KALIMANTAN TENGAH
  {
    id: 21,
    slug: "kalimantan-tengah",
    name: "Kalimantan Tengah",
    region: "Kalimantan",
    capital: "Palangkaraya",
    coverImg: "https://images.unsplash.com/photo-1618635221848-3a4a316f56c1?auto=format&fit=crop&w=1200&q=80",
    desc: "Paru-paru dunia dengan hutan tropis luas.",
    story: "Tanjung Puting di Kalteng adalah pusat rehabilitasi Orangutan terbesar. Suku Dayak Ngaju mendominasi wilayah ini.",
    details: {
      house: { name: "Rumah Betang", desc: "Rumah panjang dihuni banyak keluarga.", img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rumah_Betang.jpg" },
      clothing: { name: "Sangkarut", desc: "Baju rompi serat nanas.", img: "https://images.unsplash.com/photo-1632653263825-56952e1c394d?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Sepak Sawut", desc: "Bola api kelapa." }],
      food: [{ name: "Juhu Singkah", desc: "Sayur rotan muda." }],
      arts: [{ name: "Tari Mandau", desc: "Tari perang senjata." }],
      tourism: ["Tanjung Puting", "Sungai Kahayan"]
    }
  },
  // 22. KALIMANTAN SELATAN
  {
    id: 22,
    slug: "kalimantan-selatan",
    name: "Kalimantan Selatan",
    region: "Kalimantan",
    capital: "Banjarbaru",
    coverImg: "https://images.unsplash.com/photo-1600612297725-c312a8c03f82?auto=format&fit=crop&w=1200&q=80",
    desc: "Kota Seribu Sungai dan Pasar Terapung.",
    story: "Budaya sungai sangat kental di sini. Pasar Terapung Lok Baintan adalah atraksi unik di mana jual beli dilakukan di atas perahu jukung.",
    details: {
      house: { name: "Rumah Bubungan Tinggi", desc: "Rumah adat Banjar atap curam.", img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Rumah_Adat_Banjar_Bubungan_Tinggi.jpg" },
      clothing: { name: "Bagajah Gamuling", desc: "Pakaian pengantin Banjar.", img: "https://images.unsplash.com/photo-1598896537224-108629c28862?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Balogo", desc: "Melempar tempurung ke sasaran." }],
      food: [{ name: "Soto Banjar", desc: "Soto kuah bening rempah." }],
      arts: [{ name: "Madihin", desc: "Seni tutur pantun." }],
      tourism: ["Pasar Terapung", "Pulau Kembang"]
    }
  },
  // 23. KALIMANTAN TIMUR
  {
    id: 23,
    slug: "kalimantan-timur",
    name: "Kalimantan Timur",
    region: "Kalimantan",
    capital: "Samarinda",
    coverImg: "https://images.unsplash.com/photo-1603777833524-9875041c43e6?auto=format&fit=crop&w=1200&q=80",
    desc: "Bumi Etam dan calon Ibu Kota Negara (IKN).",
    story: "Provinsi kaya minyak dan batubara ini dipilih menjadi lokasi IKN Nusantara. Sungai Mahakam adalah habitat Pesut yang langka.",
    details: {
      house: { name: "Rumah Lamin", desc: "Rumah panjang ukiran Dayak.", img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Lamin_Dayak.jpg" },
      clothing: { name: "Sapei Sapaq", desc: "Pakaian Dayak Kenyah manik-manik.", img: "https://images.unsplash.com/photo-1603777833524-9875041c43e6?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Gasing", desc: "Gasing kayu." }],
      food: [{ name: "Nasi Bekepor", desc: "Nasi liwet Kutai." }],
      arts: [{ name: "Tari Hudoq", desc: "Tari topeng roh pelindung." }],
      tourism: ["Kepulauan Derawan", "Bukit Bangkirai"]
    }
  },
  // 24. KALIMANTAN UTARA
  {
    id: 24,
    slug: "kalimantan-utara",
    name: "Kalimantan Utara",
    region: "Kalimantan",
    capital: "Tanjung Selor",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/1/18/Kayan_River.jpg",
    desc: "Provinsi termuda di Kalimantan, perbatasan Malaysia.",
    story: "Kaltara adalah rumah bagi Suku Dayak Lundayeh. Alamnya masih sangat perawan dengan Taman Nasional Kayan Mentarang.",
    details: {
      house: { name: "Baloy Mayo", desc: "Rumah adat Suku Tidung.", img: "https://upload.wikimedia.org/wikipedia/commons/8/86/Rumah_Baloy.jpg" },
      clothing: { name: "Ta'a dan Sapei Sapaq", desc: "Pakaian manik-manik Dayak.", img: "https://images.unsplash.com/photo-1626509324367-5b4296d6518c?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Gasing", desc: "Gasing kayu." }],
      food: [{ name: "Kepiting Soka", desc: "Kepiting lunak." }],
      arts: [{ name: "Tari Magunatip", desc: "Lompat bambu (seperti Rangkuk Alu). " }],
      tourism: ["Taman Nasional Kayan Mentarang", "Air Terjun Martin Billa"]
    }
  },
  // 25. SULAWESI UTARA
  {
    id: 25,
    slug: "sulawesi-utara",
    name: "Sulawesi Utara",
    region: "Sulawesi",
    capital: "Manado",
    coverImg: "https://images.unsplash.com/photo-1516546563197-0a2180332a98?auto=format&fit=crop&w=1200&q=80",
    desc: "Bumi Nyiur Melambai dan Taman Laut Bunaken.",
    story: "Manado terkenal dengan kerukunan beragamanya. Taman Laut Bunaken adalah surga penyelam dunia.",
    details: {
      house: { name: "Walewangko", desc: "Rumah panggung Minahasa.", img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Rumah_Pewaris.jpg" },
      clothing: { name: "Laku Tepu", desc: "Baju panjang serat pisang.", img: "https://images.unsplash.com/photo-1626858392394-08f987703491?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Ceklen", desc: "Permainan karet." }],
      food: [{ name: "Bubur Manado", desc: "Bubur sayuran (Tinutuan)." }],
      arts: [{ name: "Kolintang", desc: "Musik pukul kayu." }],
      tourism: ["Bunaken", "Danau Linow"]
    }
  },
  // 26. GORONTALO
  {
    id: 26,
    slug: "gorontalo",
    name: "Gorontalo",
    region: "Sulawesi",
    capital: "Gorontalo",
    coverImg: "https://images.unsplash.com/photo-1519741539952-d63e8432c93f?auto=format&fit=crop&w=1200&q=80",
    desc: "Serambi Madinah di Sulawesi.",
    story: "Pecahan dari Sulut ini mayoritas Muslim dan memiliki adat yang bersendikan syarak. Hiu Paus sering muncul di perairannya.",
    details: {
      house: { name: "Dulohupa", desc: "Rumah panggung musyawarah.", img: "https://upload.wikimedia.org/wikipedia/commons/6/68/Rumah_Adat_Dulohupa.jpg" },
      clothing: { name: "Biliu", desc: "Pakaian pengantin wanita berhias manik.", img: "https://images.unsplash.com/photo-1637325361673-49e60661d927?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Pontih", desc: "Gasing batok kelapa." }],
      food: [{ name: "Binte Biluhuta", desc: "Sup jagung udang." }],
      arts: [{ name: "Tari Saronde", desc: "Tari pergaulan." }],
      tourism: ["Pulo Cinta", "Benteng Otanaha"]
    }
  },
  // 27. SULAWESI TENGAH
  {
    id: 27,
    slug: "sulawesi-tengah",
    name: "Sulawesi Tengah",
    region: "Sulawesi",
    capital: "Palu",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/7/79/Lake_Poso.jpg",
    desc: "Negeri Seribu Megalit di Lembah Bada.",
    story: "Sulteng memiliki situs megalitikum misterius di Lembah Bada. Danau Poso adalah danau terdalam ketiga di Indonesia.",
    details: {
      house: { name: "Souraja", desc: "Rumah raja Palu.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Banua_Oge_Sou_Raja.jpg/1024px-Banua_Oge_Sou_Raja.jpg" },
      clothing: { name: "Nggembe", desc: "Baju remaja putri.", img: "https://images.unsplash.com/photo-1594310068934-b008479357f5?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Tilako", desc: "Egrang." }],
      food: [{ name: "Kaledo", desc: "Sup kaki lembu donggala." }],
      arts: [{ name: "Tari Lumense", desc: "Tari penyambutan." }],
      tourism: ["Danau Poso", "Taman Nasional Lore Lindu"]
    }
  },
  // 28. SULAWESI BARAT
  {
    id: 28,
    slug: "sulawesi-barat",
    name: "Sulawesi Barat",
    region: "Sulawesi",
    capital: "Mamuju",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Sandeq.jpg",
    desc: "Rumah perahu layar tercepat di dunia, Sandeq.",
    story: "Suku Mandar di Sulbar adalah pelaut ulung. Perahu Sandeq mereka terkenal sebagai perahu layar tradisional tercepat.",
    details: {
      house: { name: "Boyang", desc: "Rumah panggung Suku Mandar.", img: "https://upload.wikimedia.org/wikipedia/commons/7/76/Rumah_Adat_Mandar.jpg" },
      clothing: { name: "Pattuqduq", desc: "Baju rawang untuk menari.", img: "https://images.unsplash.com/photo-1518182170546-0766aa6f8a28?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Gasing", desc: "Gasing." }],
      food: [{ name: "Jepa", desc: "Roti pipih dari sagu/singkong." }],
      arts: [{ name: "Sayyang Pattu'du", desc: "Kuda menari." }],
      tourism: ["Pantai Manakarra", "Pulau Karampuang"]
    }
  },
  // 29. SULAWESI SELATAN
  {
    id: 29,
    slug: "sulawesi-selatan",
    name: "Sulawesi Selatan",
    region: "Sulawesi",
    capital: "Makassar",
    coverImg: "https://images.unsplash.com/photo-1518182170546-0766aa6f8a28?auto=format&fit=crop&w=1200&q=80",
    desc: "Tanah Phinisi dan budaya Toraja.",
    story: "Makassar adalah gerbang timur Indonesia. Tana Toraja memiliki tradisi pemakaman unik di tebing batu.",
    details: {
      house: { name: "Tongkonan", desc: "Rumah Toraja atap perahu.", img: "https://images.unsplash.com/photo-1596401057633-565652c5f2f3?auto=format&fit=crop&w=800&q=80" },
      clothing: { name: "Baju Bodo", desc: "Baju adat tertua di dunia (transparan).", img: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Ma'raga", desc: "Sepak takraw rotan." }],
      food: [{ name: "Coto Makassar", desc: "Soto jeroan." }],
      arts: [{ name: "Tari Pakarena", desc: "Tari kipas." }],
      tourism: ["Pantai Losari", "Tana Toraja"]
    }
  },
  // 30. SULAWESI TENGGARA
  {
    id: 30,
    slug: "sulawesi-tenggara",
    name: "Sulawesi Tenggara",
    region: "Sulawesi",
    capital: "Kendari",
    coverImg: "https://images.unsplash.com/photo-1596422972842-0a0b6c848d55?auto=format&fit=crop&w=1200&q=80",
    desc: "Surga bawah laut Wakatobi.",
    story: "Wakatobi (Wangi-wangi, Kaledupa, Tomia, Binongko) adalah cagar biosfer bumi. Pandai besi dari Pulau Binongko sangat terkenal.",
    details: {
      house: { name: "Banua Tada", desc: "Rumah siku Suku Buton.", img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Istana_Malige.jpg" },
      clothing: { name: "Babu Nggawi", desc: "Pakaian Suku Tolaki.", img: "https://images.unsplash.com/photo-1565028646-077c85376a90?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Metinggo", desc: "Egrang." }],
      food: [{ name: "Sinonggi", desc: "Papeda sagu khas Kendari." }],
      arts: [{ name: "Tari Lariangi", desc: "Tari kerajaan Wakatobi." }],
      tourism: ["Wakatobi", "Benteng Keraton Buton"]
    }
  },
  // 31. MALUKU
  {
    id: 31,
    slug: "maluku",
    name: "Maluku",
    region: "Maluku",
    capital: "Ambon",
    coverImg: "https://images.unsplash.com/photo-1622553818810-3a7c49285584?auto=format&fit=crop&w=1200&q=80",
    desc: "The Spice Islands, kepulauan rempah bersejarah.",
    story: "Maluku adalah tujuan utama penjelajah Eropa mencari pala dan cengkeh. Ambon Manise memiliki julukan City of Music dari UNESCO.",
    details: {
      house: { name: "Baileo", desc: "Rumah adat tanpa dinding.", img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Baileo_Saparua.jpg" },
      clothing: { name: "Baju Cele", desc: "Baju kotak-kotak merah putih.", img: "https://images.unsplash.com/photo-1598896537224-108629c28862?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Bambu Gila", desc: "Mistis mengendalikan bambu." }],
      food: [{ name: "Papeda Ikan Kuah Kuning", desc: "Sagu dan ikan." }],
      arts: [{ name: "Cakalele", desc: "Tari perang." }],
      tourism: ["Pantai Ora", "Benteng Belgica"]
    }
  },
  // 32. MALUKU UTARA
  {
    id: 32,
    slug: "maluku-utara",
    name: "Maluku Utara",
    region: "Maluku",
    capital: "Sofifi",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/2/23/Maitara_and_Tidore.jpg",
    desc: "Negeri Kie Raha (Empat Gunung/Kerajaan).",
    story: "Ternate dan Tidore adalah kesultanan Islam yang sangat berpengaruh dalam sejarah jalur rempah dunia. Pemandangan Pulau Maitara dan Tidore diabadikan di uang seribu rupiah.",
    details: {
      house: { name: "Sasadu", desc: "Rumah adat Suku Sahu.", img: "https://upload.wikimedia.org/wikipedia/commons/7/72/Sasadu.jpg" },
      clothing: { name: "Manteren Lamo", desc: "Jubah panjang sultan.", img: "https://images.unsplash.com/photo-1632653263825-56952e1c394d?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Bela Diri", desc: "Silat tradisional." }],
      food: [{ name: "Gohu Ikan", desc: "Sashimi Ternate." }],
      arts: [{ name: "Tari Soya-soya", desc: "Tari penyemangat pasukan." }],
      tourism: ["Gunung Gamalama", "Danau Tolire"]
    }
  },
  // 33. PAPUA
  {
    id: 33,
    slug: "papua",
    name: "Papua",
    region: "Papua",
    capital: "Jayapura",
    coverImg: "https://images.unsplash.com/photo-1598896537224-108629c28862?auto=format&fit=crop&w=1200&q=80",
    desc: "Bumi Cenderawasih di utara.",
    story: "Provinsi induk di tanah Papua. Danau Sentani yang indah dan budaya maritim yang kuat menjadi ciri khasnya.",
    details: {
      house: { name: "Kariwari", desc: "Rumah adat Suku Tobati/Enggros.", img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Kariwari.jpg" },
      clothing: { name: "Koteka/Rok Rumbai", desc: "Pakaian alami dari alam.", img: "https://images.unsplash.com/photo-1598896537224-108629c28862?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Patah Kaleng", desc: "Lempar kaleng." }],
      food: [{ name: "Papeda", desc: "Bubur sagu." }],
      arts: [{ name: "Tari Yospan", desc: "Tari pergaulan muda-mudi." }],
      tourism: ["Danau Sentani", "Pantai Base G"]
    }
  },
  // 34. PAPUA BARAT
  {
    id: 34,
    slug: "papua-barat",
    name: "Papua Barat",
    region: "Papua",
    capital: "Manokwari",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Raja_Ampat%2C_Papua_Barat.jpg/1200px-Raja_Ampat%2C_Papua_Barat.jpg",
    desc: "Rumah konservasi dan sejarah Injil.",
    story: "Manokwari dikenal sebagai Kota Injil. Provinsi ini memiliki pegunungan Arfak yang menawan dan keanekaragaman hayati tinggi.",
    details: {
      house: { name: "Mod Aki Aksa", desc: "Rumah Kaki Seribu.", img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rumah_Kaki_Seribu.jpg" },
      clothing: { name: "Serui", desc: "Pakaian adat kain tenun.", img: "https://images.unsplash.com/photo-1618635221848-3a4a316f56c1?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Lomba Perahu", desc: "Balap perahu tradisional." }],
      food: [{ name: "Ikan Kuah Kuning", desc: "Sup ikan segar." }],
      arts: [{ name: "Tari Magasa", desc: "Tari ular." }],
      tourism: ["Teluk Triton", "Pegunungan Arfak"]
    }
  },
  // 35. PAPUA SELATAN
  {
    id: 35,
    slug: "papua-selatan",
    name: "Papua Selatan",
    region: "Papua",
    capital: "Merauke",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Merauke_Rice_Field.jpg",
    desc: "Lumbung pangan di ujung timur (Merauke).",
    story: "Disini terdapat Musamus (rumah semut) raksasa. Merauke adalah titik paling timur 'Sabang sampai Merauke'. Wilayahnya datar dan banyak rawa.",
    details: {
      house: { name: "Gotad", desc: "Rumah Suku Marind.", img: "https://images.unsplash.com/photo-1598896537224-108629c28862?auto=format&fit=crop&w=800&q=80" }, // Placeholder generic Papua
      clothing: { name: "Pummi", desc: "Rok rumbai sagu.", img: "https://images.unsplash.com/photo-1621746173781-62b55534234f?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Panahan", desc: "Tradisi berburu." }],
      food: [{ name: "Sagu Sep", desc: "Sagu bakar batu." }],
      arts: [{ name: "Tari Gatzi", desc: "Tari Suku Marind." }],
      tourism: ["Taman Nasional Wasur", "Tugu 0 KM Merauke"]
    }
  },
  // 36. PAPUA TENGAH
  {
    id: 36,
    slug: "papua-tengah",
    name: "Papua Tengah",
    region: "Papua",
    capital: "Nabire",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/5/57/Carstensz_Pyramid_1.jpg",
    desc: "Rumah Puncak Jaya (Salju Abadi).",
    story: "Provinsi ini memiliki puncak tertinggi di Indonesia, Carstensz Pyramid, yang tertutup salju abadi. Juga terdapat tambang emas Grasberg.",
    details: {
      house: { name: "Honai", desc: "Rumah adat pegunungan tanpa jendela.", img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Honai.jpg" },
      clothing: { name: "Koteka", desc: "Penutup kemaluan pria dari labu air.", img: "https://images.unsplash.com/photo-1598896537224-108629c28862?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Lempar Tombak", desc: "Ketangkasan." }],
      food: [{ name: "Ubi Bakar", desc: "Makanan pokok pegunungan." }],
      arts: [{ name: "Tari Perang", desc: "Simbol keberanian." }],
      tourism: ["Puncak Jaya", "Danau Paniai"]
    }
  },
  // 37. PAPUA PEGUNUNGAN
  {
    id: 37,
    slug: "papua-pegunungan",
    name: "Papua Pegunungan",
    region: "Papua",
    capital: "Wamena",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Baliem_Valley.jpg/1200px-Baliem_Valley.jpg",
    desc: "Satu-satunya provinsi landlocked (terkurung daratan).",
    story: "Terkenal dengan Lembah Baliem dan Festival Budaya Lembah Baliem yang mendunia. Suku Dani, Lani, dan Yali mendiami wilayah ini.",
    details: {
      house: { name: "Honai", desc: "Rumah jerami hangat.", img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Honai.jpg" },
      clothing: { name: "Koteka & Wah", desc: "Pakaian adat.", img: "https://images.unsplash.com/photo-1618635221848-3a4a316f56c1?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Pikon", desc: "Musik dan permainan alat tiup." }],
      food: [{ name: "Udang Selingkuh", desc: "Udang capit besar." }],
      arts: [{ name: "Perang Sukuan", desc: "Atraksi festival budaya." }],
      tourism: ["Lembah Baliem", "Danau Habema"]
    }
  },
  // 38. PAPUA BARAT DAYA
  {
    id: 38,
    slug: "papua-barat-daya",
    name: "Papua Barat Daya",
    region: "Papua",
    capital: "Sorong",
    coverImg: "https://images.unsplash.com/photo-1515876305430-10695318ee19?auto=format&fit=crop&w=1200&q=80",
    desc: "Gerbang menuju Surga Raja Ampat.",
    story: "Provinsi termuda (ke-38). Wilayah ini adalah pintu gerbang utama menuju Raja Ampat, destinasi selam terbaik di dunia.",
    details: {
      house: { name: "Rumah Kaki Seribu", desc: "Rumah panggung kayu tinggi.", img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Rumah_Kaki_Seribu.jpg" },
      clothing: { name: "Kain Rumput", desc: "Anyaman rumput kering.", img: "https://images.unsplash.com/photo-1598896537224-108629c28862?auto=format&fit=crop&w=400&q=80" },
      games: [{ name: "Lomba Dayung", desc: "Tradisi pesisir." }],
      food: [{ name: "Sate Ulat Sagu", desc: "Sumber protein tinggi." }],
      arts: [{ name: "Tari Suanggi", desc: "Tari roh halus." }],
      tourism: ["Raja Ampat", "Taman Burung Aimas"]
    }
  }
];