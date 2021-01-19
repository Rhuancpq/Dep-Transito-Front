import "./Proprietarios.css";
import SearchBar from "../SearchBar/SearchBar";
import React from "react";
import Axios from "axios";

class Proprietarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  handleSubmit(e, v) {
    e.preventDefault();
    console.log(v);
  }

  componentDidMount() {
    const response = Axios({
      method: "get",
      url: "http://localhost:8000/app/proprietarios",
      headers: {
        Accept: "application/json",
      },
    });
    response.then((res) => {
      this.setState({ items: res.data });
    });
  }

  render() {
    return (
      <>
        <SearchBar onSubmit={(e, v) => this.handleSubmit(e, v)} />
        <table className="Items">
          <thead>
            <tr className="Cabecalho">
              <th>Nome</th>
              <th>CPF</th>
              <th>Data de Nascimento</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((e) => {
              let data = new Date(e.dataNascimento);
              let dia = data.getDate();
              dia = dia <= 9 ? "0" + dia : dia;
              let mes = data.getMonth() + 1;
              mes = mes <= 9 ? "0" + mes : mes;
              const ano = data.getFullYear();
              return (
                <tr>
                  <td className="Nome">{e.nome}</td>
                  <td>{e.cpf}</td>
                  <td>{dia + "/" + mes + "/" + ano}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Proprietarios;
