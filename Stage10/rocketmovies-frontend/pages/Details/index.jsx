import { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Content } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Raiting } from "../../components/Raiting";


export function Details() {
  const [data, setData] = useState(null);

  const { user } = useAuth();

  const params = useParams();
  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNotes();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <a onClick={() => navigate(-1)}>
          <FiArrowLeft /> Voltar
        </a>

        {data && (
          <Content>
            <div className="title">
              <h1>{data.title}</h1>
              <div className="raiting">
                <Raiting rate={data.raiting}/>
              </div>
            </div>

            <div className="author-content">
              <a onClick={() => navigate("/profile")}>
                <img src={avatarUrl} alt={user.name} />
              </a>
              <p>por {user.name}</p>
              <FaRegClock />
              <p>{data.updated_at}</p>
            </div>

            <div className="tags">
              {data.tags.map((tag) => (
                <Tag key={tag.id} title={tag.name} />
              ))}
            </div>

            <p>{data.description}</p>
          </Content>
        )}

        <Button isActive={false} title="Excluir filme" onClick={handleRemove} />
      </main>
    </Container>
  );
}
