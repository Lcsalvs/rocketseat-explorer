import { FiArrowLeft } from "react-icons/fi"
import { FaRegClock } from "react-icons/fa"

import { Container, Content } from "./styles"

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Raiting } from '../../components/Raiting'

import { Link } from "react-router-dom"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Link to="/">
            <FiArrowLeft /> Voltar
        </Link>

        <Content>
          <div className="title">
            <h1>Interestellar</h1> 
            <div className="raiting">
              <Raiting />
            </div>
          </div>

          <div className="author-content">
            <Link to="/profile">
              <img src="https://github.com/lcsalvs.png" alt="Imagem do usuario" />
            </Link>
            <p>Por Lucas Alves</p>
            <FaRegClock />
            <p>23/05/22 às 08:00</p>
          </div>

          <div className="tags">
            <Tag title="Ficção Científica"/>
            <Tag title="Drama"/>
            <Tag title="Família"/>
          </div>

          <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o
            "fantasma" é uma inteligência desconhecida que está enviando
            mensagens codificadas através de radiação gravitacional, deixando
            coordenadas em binário que os levam até uma instalação secreta da
            NASA liderada pelo professor John Brand. O cientista revela que um
            buraco de minhoca foi aberto perto de Saturno e que ele leva a
            planetas que podem oferecer condições de sobrevivência para a
            espécie humana. As "missões Lázaro" enviadas anos antes
            identificaram três planetas potencialmente habitáveis orbitando o
            buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em
            homenagem aos astronautas que os pesquisaram. Brand recruta Cooper
            para pilotar a nave espacial Endurance e recuperar os dados dos
            astronautas; se um dos planetas se mostrar habitável, a humanidade
            irá seguir para ele na instalação da NASA, que é na realidade uma
            enorme estação espacial. A partida de Cooper devasta Murphy.
          </p>

        </Content>
    </main>
    </Container>
  )
}