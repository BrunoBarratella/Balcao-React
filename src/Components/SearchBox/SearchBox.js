import Lupa from '../../img/icons8-pesquisar.svg'

function SearchBox(){
  return(
    <div className="flex items-center justify-between bg-white p-2 w-11/12 my-4">
      <form className="w-8/12">
        <input type="search" className="w-full h-10 px-2" placeholder="Digite um cargo, cidade ou estado" />
      </form>
      <a href="" className="linkSearchBox">
        <img src={Lupa} alt="Lupa de pesquisa" className='w-8' />
        Buscar
      </a>
    </div>
  )
}

export default SearchBox