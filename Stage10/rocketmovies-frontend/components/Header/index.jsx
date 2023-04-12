import { Container } from "./styles";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { useAuth } from "../../hooks/auth";

export function Header({ onChange }) {
  const { signOut, user } = useAuth();

  function HandleSignOut() {
    navigate("/");
    signOut();
  }

  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <div className="header">
        <h1>
          <a onClick={() => navigate("/")}>
            RocketMovies
          </a>
        </h1>

        <Input placeholder="Pesquisar pelo título" onChange={onChange} />

        <div className="profile">
          <div>
            <a onClick={() => navigate("/profile")}>{user.name}</a>
            <a onClick={HandleSignOut}>sair</a>
          </div>

          <a onClick={() => navigate("/profile")}>
            <img src={avatarUrl} alt={user.name} />
          </a>
        </div>
      </div>
    </Container>
  );
}
