
import './ingresa.css'
import Link from 'next/link';

export default function Page() {
    return (<>
      
      <p style={{color:'blue', fontSize: '28px', fontWeight: 'bolder' }}>Blue To Go Sports ahora es Sky+</p>

      <p style={{color:'gray', fontSize: '16px', fontWeight: '600' }}>Introduce los datos de tu cuenta BTG Sports</p>

      <form >
            <label>Usuario</label>
            <input placeholder="Usuario" value={"text"}/>
            <label>Password</label>
            <input placeholder="Contraseña" 
            value={"text"}/>
            <div className="TodoForm-buttonContainer">
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">
                        Iniciar sesión
                </button>
            </div>
    </form>
    </>);
}