// import PresentationCard from './PresentationCard';
// import Temporizador from './temporizador/Temporizador';
// import Counter from './counter/Counter';
import Headerceci from './header/Headerceci';
import Proyectos from './proyectos/Proyectos';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Hablemos from './hablemos/Hablemos';

// import FilterList from './filter/FilterList';
// import TooltipText from './tooltip/TooltipText';
// import Formulario from './formulario/Formulario';


function App() {
  return (
    <div className="bg-gradient-to-tr min-h-screen from-pink-300 via-pink-100 to-pink-300 pt-9 pb-9">
      {
        
        <><style>
        @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
        </style><Headerceci/><Proyectos/><Hablemos/></>
      }
    </div>
    
  );
}

export default App;

