## API relacionada a um encurtador de URLs

Projeto realizado para praticar algumas skills no desenvolvimento de api's.

### Instruções Gerais

#### Defina as Variávels de Ambiente

- Crie arquivo: `.env.local` com as variáveis que constam no arquivo `.env.exemple`

  - `SERVER_PORT` a porta que você irá acessar via localhost
  - `DATABASE` o link direto para acessar o banco de dados
    - postgres://user:password@localhost:5432/db_name
  - `EXPIRES_MINUTES` quantos minutos a url encurtada será valida

#### Procedimentos para Rodar Localmente

- Clone este repositório
- Execute o comando: `yarn` para instalar das dependências do projeto
- Execute o comando: `docker compose up -d` para criar o docker do postegresql para uso da aplicação
  - Importante: O restart do container não está automático. Então a cada reinicio da máquina precisa subir o container com `docker start container_name`
- Execute o comando: `yarn migrate:local` para criar a tabela no banco de dados
- Execute o comando: `yarn local` para iniciar o servidor

#### No Gerenciador de Requisições HTTP

- Criar URL Encurtada
  - POST "/"
    - "original": "http://url.original.aqui"
      - Irá criar a url
  - GET "/:short"
    - Irá redirecionar, para a url original, a partir da url encurtada enviada no parâmetro
- Observação: A coleção de requisições está na raiz do projeto
  - O Insomnia foi o software utilizado

#### Documentação Swagger

- Acessar endpoint `/docs`
