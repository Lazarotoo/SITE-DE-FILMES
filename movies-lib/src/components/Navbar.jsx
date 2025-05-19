// Importa o hook useState para guardar o texto que o usuário digita na busca
// Importa Link para criar links dentro da página sem recarregar
// Importa useNavigate para mudar de página programaticamente
// Importa ícones de câmera e lupa para decorar a navbar
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

// Importa o CSS para estilizar a navbar
import "./Navbar.css";

const Navbar = () => {
  // Guarda o valor do campo de busca (texto digitado)
  const [search, setSearch] = useState("");
  // Cria uma função para navegar entre páginas
  const navigate = useNavigate();

  // Função que roda quando o formulário é enviado (quando clica no botão ou aperta enter)
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que a página recarregue

    if (!search) return; // Se o campo de busca estiver vazio, não faz nada

    // Muda para a página de busca, passando o texto digitado como parâmetro na URL
    navigate(`/search?q=${search}`, { replace: true });
    // Limpa o campo de busca depois de enviar
    setSearch("");
  };

  return (
    <nav id="navbar">
      {/* Título com link para a página inicial */}
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib {/* Ícone de câmera + nome do site */}
        </Link>
      </h2>

      {/* Formulário de busca */}
      <form onSubmit={handleSubmit}>
        {/* Campo para digitar o nome do filme */}
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)} // Atualiza o estado quando digita
          value={search} // Mantém o valor do campo sincronizado com o estado
        />
        {/* Botão para enviar a busca, com ícone de lupa */}
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
