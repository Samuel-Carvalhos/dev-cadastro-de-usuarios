import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    { id: 1, name: "João", age: 30, email: "joao@example.com" },
    { id: 2, name: "Maria", age: 25, email: "maria@example.com" },
    { id: 3, name: "Pedro", age: 28, email: "pedro@example.com" },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="E-mail" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
