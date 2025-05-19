// Aqui estamos dizendo que queremos usar algumas ferramentas do React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Esses são os componentes das páginas do nosso site
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

// Esta é a função principal do nosso aplicativo
function App() {
  return (
    // Aqui usamos o "BrowserRouter", que ajuda a navegar entre páginas sem recarregar a tela
    <BrowserRouter>

      {/* "Routes" é como um mapa que mostra qual página mostrar em cada caminho */}
      <Routes>

        {/* Quando o caminho (URL) for "/", mostramos a página Home */}
        <Route path="/" element={<Home />} />

        {/* Quando o caminho for "/movie/:id", mostramos a página de um filme específico.
            O ":id" é como um espaço reservado que muda para o número do filme */}
        <Route path="/movie/:id" element={<Movie />} />

        {/* Quando o caminho for "/search", mostramos a página de busca */}
        <Route path="/search" element={<Search />} />

      </Routes>
    </BrowserRouter>
  );
}

// Aqui estamos dizendo que essa função pode ser usada em outras partes do projeto
export default App;
