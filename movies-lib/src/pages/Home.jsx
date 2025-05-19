// Estamos importando o React para criar o componente
import React, { useEffect, useState } from "react";

// Importamos uma ferramenta do React Router que ajuda a navegar entre as páginas
import { Link } from "react-router-dom";

// Importamos nossa função que pega os filmes do serviço (API)
import { getPopularMovies } from "../services/movieService";

// Aqui criamos o componente chamado "Home"
function Home() {
  // Aqui guardamos a lista de filmes em uma "caixinha mágica" chamada estado (state)
  const [movies, setMovies] = useState([]);

  // Esse bloco roda automaticamente quando a página é aberta
  useEffect(() => {
    // Chamamos a função que busca os filmes populares
    async function fetchData() {
      const data = await getPopularMovies(); // Esperamos os dados chegarem
      setMovies(data.results); // Colocamos os filmes na nossa caixinha
    }

    fetchData(); // Chamamos a função que busca os filmes
  }, []); // Esse colchete vazio significa que isso só vai acontecer 1 vez quando a página carregar

  // Aqui mostramos os filmes na tela
  return (
    <div className="container">
      <h1>Filmes Populares</h1>

      {/* Aqui criamos um quadradinho para cada filme usando .map */}
      <div className="movie-grid">
        {movies.map((movie) => (
          // Cada filme é um Link clicável que leva para a página do filme
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} // Mostra o pôster do filme
              alt={movie.title}
            />
            <h2>{movie.title}</h2> {/* Mostra o nome do filme */}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Aqui exportamos o componente para que ele possa ser usado no App.js
export default Home;
