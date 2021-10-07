import Noticia from './Noticia'

const ListadoNoticias = ({noticias}) => {
    return ( 

        <div className='row'>
            {noticias.map((noticia) => {
                return (
                    <Noticia 
                        key={noticia.url}
                        noticia={noticia}
                    />
                )
            })}
        </div>

    );
}
 
export default ListadoNoticias;