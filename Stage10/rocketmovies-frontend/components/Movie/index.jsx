import { Container } from "./styles";
import { Tag } from "../Tag";
import { Raiting } from "../Raiting";

export function Movie({ data, title, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <Raiting rate={data.raiting} />
      <p>{data.description}</p>

      <div className="movie-content">
      {data.tags.map(tag => (
          <Tag key={tag.id} title={tag.name} />
        ))}
      </div>
    </Container>
  );
}
