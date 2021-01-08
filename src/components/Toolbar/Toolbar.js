import './Toolbar.css';
import {Link} from 'react-router-dom';

function Toolbar() {
  return (
    <div className="Toolbar">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/proprietarios'>Proprietários</Link></li>
        <li><Link to='/veiculos'>Veiculos</Link></li>
        <li><Link to='/infracoes'>Infrações</Link></li>
        <li><Link to='/locais'>Locais</Link></li>
      </ul>
    </div>
  );
}

export default Toolbar;
