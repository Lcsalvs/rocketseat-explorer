import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { Button } from "../../components/Button";

import { api } from "../../services";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const [counter, setCounter] = useState(0);

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);
  

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />

      <main>
        <section className="content">
          <h1>Meus Filmes</h1>

          <a onClick={() => navigate("/new")}>
            <Button title="+ Adicionar filme" />
          </a>
        </section>

        <section className="movies">
          {notes &&
            notes.map((note) => (
              <Movie
                key={note.id}
                data={note}
                onClick={() => {handleDetails(note.id)}}
              />
            ))}
        </section>
      </main>
    </Container>
  );
}
