🎵 POC - Strategy Pattern para Listagem de Músicas (NestJS)

Esta POC foi criada para demonstrar a aplicação do Design Pattern Strategy em um contexto de API de gerenciamento de músicas, usando NestJS.

✅ Objetivo

Permitir que a API retorne diferentes "listas de músicas" com base em regras de negócio específicas sem criar vários endpoints ou ifs/switches no código. Cada tipo de lista é tratado como uma estratégia independente.

🚀 Tecnologias Utilizadas

NestJS

TypeScript

Padrão de projeto: Strategy Pattern

Repositório fake com array em memória (sem banco de dados)

📂 Estrutura do Projeto

src/
├── app.module.ts
└── music/
    ├── controller/music.controller.ts
    ├── dto/music.dto.ts
    ├── entities/music.entity.ts
    ├── repository/music.repository.ts
    ├── service/music-list.service.ts
    └── strategy/
        ├── music-list.strategy.ts
        ├── contestation.strategy.ts
        ├── released.strategy.ts
        └── pending.strategy.ts

📦 Como rodar localmente

Clone o repositório:

git clone <url-do-repo>
cd music-strategy-poc

Instale as dependências:

npm install

Rode a aplicação:

npm run start:dev

A API estará disponível em: http://localhost:3000

🌐 Endpoints Disponíveis

Todos os endpoints usam:

GET /music/list/:type

Tipo (:type)

Retorna músicas com...

contestation

status CONTESTADA ou EM_ANALISE

released

status LIBERADA

pending

status PENDENTE ou SEM_CONTRATO

Exemplos

GET /music/list/contestation
GET /music/list/released
GET /music/list/pending

🧪 Prints dos Testes no Insomnia

🔹 Lista: pending

Retorna músicas com status PENDENTE ou SEM_CONTRATO


🔹 Lista: contestation

Retorna músicas com status CONTESTADA ou EM_ANALISE


🔹 Lista: released

Retorna músicas com status LIBERADA


📌 Conclusão

O uso de Strategy Pattern facilita a separação de regras de negócio para diferentes tipos de listas.

Adicionar novos tipos de listas é simples e não impacta as outras estratégias.

Código limpo, escalável e com responsabilidade bem definida.