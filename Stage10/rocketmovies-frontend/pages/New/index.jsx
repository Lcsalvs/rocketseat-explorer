import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { api } from "../../services";

import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescripton] = useState("");
  const [raiting, setRaiting] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite um título para a nota!");
    }

    if (newTag) {
      return alert("Favor checar os campos alterados e não salvos.");
    }

    api.post("/notes", {
      title,
      description,
      raiting,
      tags,
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <a onClick={() => navigate(-1)}>
              <FiArrowLeft /> Voltar
            </a>
            <h1>Novo Filme</h1>
          </header>

          <div className="inputs">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
              onChange={(e) => setRaiting(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescripton(e.target.value)}
          />

          <h2>Marcadores</h2>
          <div className="movie-tag">
            {tags.map((tag, index) => (
              <MovieItem
                key={String(index)}
                value={tag}
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              />
            ))}

            <MovieItem
              isNew
              placeholder="Novo marcador"
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>

          <div className="buttons">
            <Button title="Salvar alterações" onClick={handleNewNote} />
          </div>
        </Form>
      </main>
    </Container>
  );
}
