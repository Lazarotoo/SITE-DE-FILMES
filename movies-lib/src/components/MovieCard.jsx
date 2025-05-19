// Importa o Link para criar um botão que muda de página sem recarregar o site
import { Link } from "react-router-dom";

// Importa o desenho da estrela para mostrar a nota do filme
import { FaStar } from "react-icons/fa";

// Pega o endereço das imagens de um lugar especial chamado variável de ambiente
const imagesURL = import.meta.env.VITE_IMG;

// Criamos um cartão para mostrar as informações do filme
const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card"> {/* Caixa que vai guardar tudo do filme */}

      {/* Aqui mostramos a foto do filme usando o endereço da imagem */}
      <img src={imagesURL + movie.poster_path} alt={movie.title} />

      {/* Mostra o nome do filme */}
      <h2>{movie.title}</h2>

      {/* Mostra a estrela e a nota do filme */}
      <p>
        <FaStar /> {movie.vote_average}
      </p>

      {/* Se quiser, mostramos o botão para ver mais detalhes do filme */}
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

// Exporta o cartão para usar em outras partes do site
export default MovieCard;
