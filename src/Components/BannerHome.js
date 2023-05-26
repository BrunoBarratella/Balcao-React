import './configs.css'
import Logo from "../img/logo.png"
import SearchBox from "./SearchBox/SearchBox"


function BannerHome() {
  return (
    <div className="bg-verdinho w-full">
      <div className="w-full flex flex-wrap justify-center ">
        <img src={Logo} alt="Logo do balcão de empregos, com o nome da empresa escrito e um balão de fala com icones de pessoas dentro"
          className="w-60 p-5" />

      </div>
      <div className="flex justify-center flex-wrap">
        <h1 className="textBanner mt-3 text-xl ">Procure por vagas de emprego </h1>
        <h2 className="textBanner mb-3 text-sm ">São mais de 3.000 Vagas !!</h2>
      </div>

      <div className="flex justify-center">
        <SearchBox />
      </div>
    </div>
  )
}

export default BannerHome