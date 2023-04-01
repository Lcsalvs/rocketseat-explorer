
import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Movie } from "../../components/Movie"
import { Button } from "../../components/Button"

import { Link } from 'react-router-dom'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <section className="content">
          <h1>Meus Filmes</h1>
          <Link to="/new">
            <Button title="+ Adicionar filme"/>
          </Link>
        </section>
          
          <section className="movies">
            <Movie title="Interestellar"/>
            <Movie title="Interestellar"/>
            <Movie title="Interestellar"/>
          </section>
      </main>

    </Container>
  )
}