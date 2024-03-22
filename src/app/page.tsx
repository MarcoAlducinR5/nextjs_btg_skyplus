import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p style={{color:'blue', fontSize: '28px', fontWeight: '400' }}>Bienvenido, recuerda que</p>
      <p style={{color:'blue', fontSize: '28px', fontWeight: 'bolder' }}>Blue To Go Sports ahora es Sky+</p>

      <p style={{color:'gray', fontSize: '16px', fontWeight: '600' }}>Podrás ver completamente en VIVO las ligas deportivas más importantes del mundo, estés donde estés. Sólo para MX .</p>

      <div>

        <Link href="/ingresa">
          <button style={{marginRight: '40px'}}>Iniciar sesión</button> 
        </Link>

        <Link href="/validarEmail">
          <button>Quiero contratar</button>
        </Link>
      </div>
    </>
  );
}
