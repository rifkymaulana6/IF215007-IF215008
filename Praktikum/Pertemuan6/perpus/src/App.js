import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HalamanUbahBuku = () => {

  const param = useParams()
  
  return (
    <div>Ini halaman ubah buku {param.idBuku}</div>
  )
}

const HalamanListBuku = () => {
  return (
    <div>Ini halaman list buku</div>
  )
}

const HalamanTambahBuku = () => {
  return (
    <div>Ini halaman tambah buku</div>
  )
}

const HalamanDepan = () => {

  const [faktaKucing, setFaktaKucing] = useState("")

  useEffect(() => {
    axios.get("https://catfact.ninja/fact")
      .then((responDariServer) => {
        const faktaKucingWS = responDariServer.data[""]
      })
  }, [])

  return (
    <div>Ini halaman depan</div>
  )
}

const App = () => {
  return (
   <HashRouter>
    <Routes>
      <Route path="/" element={<HalamanDepan/>}/>
      <Route path="/buku/tambah" element={<HalamanTambahBuku/>}/>
      <Route path="/buku/list" element={<HalamanListBuku/>}/>
      <Route path="/buku/ubah/:idBuku" element={<HalamanUbahBuku/>}/>
    </Routes>
   </HashRouter>
  );
}

export default App;
