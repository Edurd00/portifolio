# Portfólio Profissional - Luiz Eduardo Silva

Site estático profissional com foco em freelancer para landing pages, formulários, sites, sistemas simples para pequenos negócios e automações. Usa Tailwind CSS, JavaScript e estrutura simples para publicar no Netlify.

## Novas Funcionalidades e Aprimoramentos

### 1. Filtro Dinâmico de Projetos
- Adicionados botões de filtro no topo da seção de projetos ("Todos", "E-commerce/SaaS", "Formulários/Automação").
- Lógica implementada em `scripts/main.js` para filtrar os cards dinamicamente na página sem necessidade de recarregamento, mantendo o visual limpo e interativo.

### 2. Modal de Visualização de Certificados (Lightbox)
- Em vez de abrir os certificados em uma nova aba diretamente, os usuários agora podem clicar na imagem de pré-visualização de qualquer certificado para visualizá-lo em tela cheia diretamente na página através de um modal lightbox responsivo.
- O modal pode ser fechado clicando no botão de fechar (ícone `x`), clicando fora da imagem do certificado ou simplesmente pressionando a tecla `ESC` no teclado.

### 3. Botão Flutuante do WhatsApp
- Adicionado um botão fixo no canto inferior direito para acesso rápido ao WhatsApp com mensagem de orçamento personalizada e um efeito hover elástico e suave.

### 4. Acessibilidade (A11y) & SEO
- Inclusão de atributos `aria-label` descritivos e acessíveis para leitores de tela em todos os botões e links.
- Meta Tags do Open Graph e Twitter Cards incluídas para uma exibição profissional de preview de link em redes sociais (WhatsApp, LinkedIn, etc.).
- Favicon dinâmico em formato SVG inline incluído para uma aba de navegador personalizada.

## Como editar seus links

Abra `scripts/data.js` e altere o bloco `contacts`:

- Instagram: coloque seu usuário e link.
- LinkedIn: coloque seu perfil público.
- GitHub: coloque seu usuário.
- WhatsApp: use o formato `https://wa.me/55DDDNUMERO`.
- E-mail: use `mailto:seuemail@email.com`.

## Como adicionar novos projetos

No arquivo `scripts/data.js`, adicione um novo item dentro de `projects`:

```js
{
  title: "Nome do Projeto",
  description: "Descrição curta e profissional do projeto.",
  tags: ["HTML", "CSS", "JavaScript"],
  demoUrl: "https://seu-projeto.netlify.app",
  codeUrl: "https://github.com/seu-usuario/seu-repositorio",
}
```

## Como adicionar novos certificados

Coloque o arquivo do certificado dentro da pasta `certificados`. Pode ser PDF ou imagem (`.png`, `.jpg`, `.webp`).

Depois, no arquivo `scripts/data.js`, adicione um novo item dentro de `certificates`:

```js
{
  title: "Nome do Curso",
  issuer: "Nome da instituição",
  type: "PDF",
  fileUrl: "certificados/nome-do-arquivo.pdf",
  credentialUrl: "https://link-publico-do-certificado.com",
}
```

Se quiser usar o próprio PDF ou imagem como link, repita o mesmo caminho em `credentialUrl`.

## Como usar como portfólio freelancer

- Publique os projetos de demonstração no Netlify.
- Troque `demoUrl` pelos links públicos das demonstrações.
- Troque `codeUrl` pelos links do GitHub, se quiser mostrar o código.
- Envie o link deste portfólio para potenciais clientes pelo WhatsApp, Instagram, LinkedIn e plataformas de freelancer.
- Use os projetos de patrimônio e cadastro como prova de que você já criou formulários reais com validação, responsividade e integração com planilhas.
- Conforme criar sistemas para restaurantes e outros pequenos negócios, adicione cada solução como novo projeto em `projects`.

## Ideias de sistemas para adicionar futuramente

- Cardápio online para restaurantes.
- Sistema simples de pedidos com envio para WhatsApp ou Google Sheets.
- Controle de reservas.
- Cadastro de clientes.
- Controle básico de estoque.
- Painel administrativo simples para acompanhar solicitações.

## Como testar no computador

Você pode abrir o arquivo `index.html` diretamente no navegador.

Se preferir rodar como servidor local:

```bash
python -m http.server 5500
```

Depois acesse:

```text
http://localhost:5500
```

## Como publicar no Netlify

1. Crie uma conta ou entre em `https://app.netlify.com`.
2. Clique em **Add new site**.
3. Escolha **Deploy manually** para enviar a pasta do portfólio, ou **Import an existing project** se usar GitHub.
4. Se for manual, arraste a pasta `Portiflolio` para a área de deploy.
5. Se for via GitHub, suba estes arquivos para um repositório e conecte o repositório no Netlify.
6. Como é um site estático, não precisa configurar build command.
7. O campo de publish directory pode ficar como raiz do projeto.

## Tecnologias usadas

- HTML5
- Tailwind CSS via CDN
- CSS3 customizado
- JavaScript Vanilla
- Lucide Icons
