// Importamos React e ferramentas úteis
import React, { useEffect, useState } from "react";

// useParams permite pegar o "id" do filme que está na URL
import { useParams } from "react-router-dom";

// Função que busca os detalhes de um filme específico
import { getMovieDetails } from "../services/movieService";

// Componente que mostra os detalhes de um filme
function Movie() {
  // Pegamos o id do filme a partir da URL
  const { id } = useParams();

  // Criamos uma "caixinha" para guardar os dados do filme
  const [movie, setMovie] = useState(null);

  // Isso aqui roda automaticamente quando o componente é aberto ou quando o id muda
  useEffect(() => {
    async function fetchData() {
      const data = await getMovieDetails(id); // Pegamos os dados do filme usando o ID
      setMovie(data); // Guardamos os dados na nossa caixinha
    }

    fetchData(); // Chamamos a função para buscar os dados
  }, [id]); // Sempre que o ID mudar, isso roda de novo

  // Se os dados ainda não chegaram, mostramos uma mensagem
  if (!movie) {
    return <div>Carregando...</div>;
  }

  // Quando os dados estiverem prontos, mostramos tudo isso
  return (
    <div className="container">
      <h1>{movie.title}</h1>

      {/* Mostramos a imagem do pôster */}
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />

      {/* Mostramos o resumo da história do filme */}
      <p>{movie.overview}</p>

      {/* Mostramos a nota do filme */}
      <strong>Nota: {movie.vote_average}</strong>
    </div>
  );
}

// Exportamos esse componente para ser usado no App.js
export default Movie;
