import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {

  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=3690407e2f694336a341a7d2334d7383`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      setNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])

  return (
    <>
      <Header
        titulo='Buscador de noticias'
      />
      <div className='containter white'>
        <Formulario
          setCategoria={setCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
