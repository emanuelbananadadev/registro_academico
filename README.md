# 📚 Registro Acadêmico

Este projeto é um backend simples para um sistema de **registro acadêmico de professores universitários**, desenvolvido com **Node.js puro**, sem frameworks como Express, com o objetivo de estudo e aprendizado.

Atualmente o sistema permite:
- Cadastro de usuários (professores)
- Cadastro e listagem de produções acadêmicas

## 🚀 Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/emanuelbananadadev/registro_academico.git
````

2. Acesse a pasta do projeto:

```bash
cd registro_academico
````

3. Execite o servidor:

```bash
node server.js
````

O servidor será iniciado em http://localhost:3333.

## 🛠️ Tecnologias usadas

- **Node.js** (sem frameworks)
- **HTTP nativo**
- **Dados armazenados em memória** (sem banco de dados por enquanto)

---

## 📌 Rotas da API

### 📁 Usuários (Register)

#### `POST /register`
Cadastra um novo professor.

**Body JSON:**
```json
{
  "nome": "João Silva",
  "email": "joao@example.com",
  "senha": "123456"
}
````
**Criado automaticamente pelo sistema:**

- `id` → incremental
- `status` → `"ativo"`
- `created_at` → data e hora de criação
- `updated_at` → data e hora da última atualização

### 📁 Produções Acadêmicas

#### `GET /productions`
Retorna todas as produções cadastradas.

---

#### `POST /productions`
Cadastra uma nova produção acadêmica.

**Body JSON:**
```json
{
  "titulo": "Artigo sobre inteligência artificial",
  "ano": 2024,
  "tipo": "Artigo Científico"
}
````
**Criado automaticamente pelo sistema:**

- `id` → incremental
- `status` → `"ativo"`
- `created_at` → data e hora de criação
- `updated_at` → data e hora da última atualização

## ⚠️ Em desenvolvimento

- `PUT /productions/:id` – Atualização de produções
- `DELETE /productions/:id` – Remoção de produções
- `PUT /register/:id` – Atualização de dados do professor
- `DELETE /register/:id` – Remoção de professor
- Integração com banco de dados **PostgreSQL**
- Autenticação (login e segurança de rotas)

## 📌 Observações
Este projeto está em fase inicial e está sendo desenvolvido com foco no aprendizado de Node.js puro e no funcionamento básico de rotas HTTP e manipulação de dados.
