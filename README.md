# AgendaSaúde 

Plataforma de agendamento de consultas médicas, mobile-first.

## Stack

| Camada   | Tecnologia                          |
|----------|-------------------------------------|
| Frontend | Next.js 14 + React 18 + TypeScript + Tailwind CSS |
| Backend  | NestJS + Node.js + TypeScript       |

## Estrutura

```
agenda-saude-frontend-backend/
├── frontend/   # Next.js (App Router)
│   ├── app/          # páginas
│   ├── components/   # UI (SRP: um componente, uma responsabilidade)
│   ├── services/     # funções puras + client da API
│   ├── data/         # mocks (substituível pela API)
│   └── types/        # contratos compartilhados
└── backend/    # NestJS
    └── src/
        ├── doctors/        # módulo de médicos
        └── appointments/   # módulo de agendamentos
```

## Princípios aplicados (SOLID)

- **S**RP: controllers só roteiam; services contêm a regra de negócio; repositories isolam persistência.
- **O**CP: novos repositórios (ex.: Postgres/Prisma) entram sem alterar os services.
- **L**SP/**I**SP: interfaces de repositório enxutas e substituíveis.
- **D**IP: services dependem de abstrações (`IDoctorsRepository`), injetadas via DI do Nest.

## Rodando projeto local 

```bash
# Backend (porta 3001)
cd backend && npm install && npm run start:dev

# Frontend (porta 3000)
cd frontend && npm install && npm run dev
```
