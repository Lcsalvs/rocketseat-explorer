import { Container } from "./styles";
import { Tag } from "../Tag";
import { Raiting} from '../Raiting'

export function Movie({ title }) {
  return (
    <Container>

      <h2>{title}</h2>
      <Raiting />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam numquam, suscipit, voluptatibus et laudantium facilis accusantium nobis molestiae rerum adipisci sit id, mollitia delectus eos temporibus voluptatem quisquam? Voluptatem, facere.
      </p>

      <div>
        <Tag title="Ficção Científica"/>
        <Tag title="Drama"/>
        <Tag title="Família"/>
      </div>
      
    </Container>
  )
}