// Importamos React e ferramentas úteis
import React, { useEffect, useState } from "react";

// useLocation serve para acessar a URL e pegar o que o usuário digitou
import { Link, useLocation } from "react-router-dom";

// Função que busca os filmes com base no que foi digitado
import { searchMovies } from "../services/movieService";

// Esta função ajuda a pegar o texto que o usuário buscou na URL
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Componente da página de busca
function Search() {
  // Guardamos os filmes encontrados nessa caixinha
  const [movies, setMovies] = useState([]);

  // Pegamos o que o usuário digitou na busca (por exemplo: ?q=batman)
  const query = useQuery();
  const searchTerm = query.get("q"); // Pegamos o valor de "q"

  // Quando o componente abrir ou o texto buscado mudar, isso vai rodar
  useEffect(() => {
    async function fetchData() {
      if (searchTerm) { // Só buscamos se tiver algo digitado
        const data = await searchMovies(searchTerm); // Buscamos os filmes
        setMovies(data.results); // Guardamos os resultados
      }
    }

    fetchData(); // Chamamos a função
  }, [searchTerm]); // Isso roda sempre que o "searchTerm" mudar

  // Agora mostramos os filmes encontrados
  return (
    <div className="container">
      <h1>Resultados para: "{searchTerm}"</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          // Criamos um link clicável para cada filme encontrado
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Exportamos o componente para usá-lo em outras partes
export default Search;
