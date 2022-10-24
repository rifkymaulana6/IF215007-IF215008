import './App.css';
import { AppJudul } from './shared/components/AppJudul';
import { AppMenuBawah} from './shared/components/AppMenuBawah';

// Mengurangi Kompleksitas
// Memudahkan berbagi pakai komponen
// Misal komponen tabelCanggih, bisa dipake dimana, tinggal ganti struktry datanya

const App = () => {
  return (
    <div className="App">

      {/* Judul */}
      <AppJudul title={'Rekam Lokasi'}/>
      
      

      {/* Menu Bawah */}
      <AppMenuBawah/>
    </div>
  );
}

export default App;
