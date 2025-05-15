import PermutacaoSimples from './Componentes/PermutaçãoSimples';
import PermutacaoComposta from './Componentes/PermutaçãoComposta';
export default function Home() {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-row'>
      <div className='w-[50%] h-full'>
        <PermutacaoSimples />
      </div>
      <div className="w-[50%] h-full">
        <PermutacaoComposta />
      </div>
    </div>
  );
}
