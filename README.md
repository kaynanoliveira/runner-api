# 🏃‍♂️ Runner API

API Restful desenvolvida em Node.js com Fastify, Prisma ORM e MongoDB para o gerenciamento e acompanhamento de treinos de corrida de rua.

O objetivo do projeto foi aplicar boas práticas de arquitetura de software no backend, utilizando TypeScript, separação clara de responsabilidades em camadas (*Controllers* e *Services*) e tratamento defensivo de erros.

---

## 🚀 Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript
* **[Fastify](https://www.fastify.io/)** — Framework web focado em alta performance e baixa sobrecarga
* **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para maior segurança no código
* **[Prisma ORM](https://www.prisma.io/)** — Mapeamento objeto-relacional para integração com o banco de dados
* **[MongoDB](https://www.mongodb.com/)** — Banco de dados NoSQL orientado a documentos

---

## 🛠️ Arquitetura e Boas Práticas

* **Camada de Controllers:** Responsável pelo recebimento das requisições HTTP, extração de parâmetros (`request.params`, `request.body`) e envio das respostas.
* **Camada de Services:** Isola a regra de negócio e a comunicação direta com o banco de dados via Prisma.
* **Tratamento Defensivo de Erros:** Validação de IDs do MongoDB (ObjectIDs via Regex/Service) para evitar exceções inesperadas na aplicação e retornar status HTTP adequados (`200`, `201`, `400`, `404`, `500`).
* **Atualização Parcial Flexível:** Suporte a edições de registros via `PUT` utilizando o operador de coalescência nula (`??`), permitindo alterar apenas os campos enviados e mantendo os dados originais.

---

## 📌 Rotas da API

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/runner` | Cadastra um novo treino de corrida |
| `GET` | `/runner` | Lista todas as corridas registradas |
| `PUT` | `/runner/:id` | Atualiza os dados de um treino existente passando o ID na rota |
| `DELETE` | `/runner/:id` | Deleta o registro de um treino pelo ID |

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
* **Node.js** instalado (v18+)
* Uma instância do **MongoDB** rodando localmente ou uma URL do **MongoDB Atlas**

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
   cd NOME_DO_REPOSITORIO
