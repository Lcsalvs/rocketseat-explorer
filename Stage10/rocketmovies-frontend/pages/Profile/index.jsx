import { useState } from "react";
import { FiUser, FiCamera, FiLock, FiMail, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    passwordOld: "",
    passwordNew: "",
  });

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name: formData.name,
      email: formData.email,
      password: formData.passwordNew,
      old_password: formData.passwordOld,
    };

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <a onClick={() => navigate(-1)}>
          <FiArrowLeft /> Voltar
        </a>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type=""
          icon={FiUser}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <Input
          placeholder="Email"
          type=""
          icon={FiMail}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) =>
            setFormData({ ...formData, passwordOld: e.target.value })
          }
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={(e) =>
            setFormData({ ...formData, passwordNew: e.target.value })
          }
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
