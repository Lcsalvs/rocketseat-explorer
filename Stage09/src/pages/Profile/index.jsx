import {FiUser, FiCamera, FiLock, FiMail, FiArrowLeft} from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from './styles'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
        <FiArrowLeft />Voltar
        </Link>
      </header>

      <Form>
        
        <Avatar>
          <img 
            src="https://github.com/lcsalvs.png" 
            alt="Foto do usuário" 
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar" 
              type="file"
            />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="" icon={FiUser}/>

        <Input placeholder="Email" type="" icon={FiMail}/>

        <Input placeholder="Senha atual" type="" icon={FiLock}/>

        <Input placeholder="Nova senha" type="" icon={FiLock}/>

        <Button title="Salvar"/>

      </Form>

    </Container>
  )
}