# Guia de Deploy no Cloudflare Pages

## 🚀 Implantação da Elara Tecnologia no Cloudflare Pages

Deploy no Cloudflare **NÃO é difícil**! Seguindo este guia, você consegue em 5 minutos.

---

## Pré-requisitos

1. **Conta Cloudflare** - Crie uma em [cloudflare.com](https://cloudflare.com)
2. **Git** - O projeto precisa estar em um repositório Git (GitHub, GitLab, etc.)
3. **Repositório remoto** - Hospede o código em GitHub, GitLab ou Gitea

---

## Passo 1: Preparar o Repositório Git

```bash
# Se ainda não tiver Git iniciado
cd /home/ubuntu/elara-tecnologia
git init
git add .
git commit -m "Initial commit: Elara Tecnologia landing page"

# Adicionar repositório remoto (exemplo com GitHub)
git remote add origin https://github.com/seu-usuario/elara-tecnologia.git
git branch -M main
git push -u origin main
```

---

## Passo 2: Conectar ao Cloudflare Pages

### Opção A: Via Dashboard Cloudflare (Mais Fácil)

1. Acesse [dash.cloudflare.com](https://dash.cloudflare.com)
2. Vá para **Pages** no menu lateral
3. Clique em **Create a project**
4. Selecione **Connect to Git**
5. Autorize e selecione seu repositório `elara-tecnologia`
6. Configure as opções de build:
   - **Framework preset**: Vite
   - **Build command**: `pnpm run build`
   - **Build output directory**: `dist/public`
   - **Root directory**: `/` (deixe em branco)
7. Clique em **Save and Deploy**

### Opção B: Via Wrangler CLI

```bash
# Instalar Wrangler globalmente
npm install -g wrangler

# Fazer login
wrangler login

# Deploy
cd /home/ubuntu/elara-tecnologia
wrangler pages deploy dist/public
```

---

## Passo 3: Configurar Domínio (Opcional)

Se você tiver um domínio próprio (ex: elaratecnologia.com.br):

1. No Cloudflare Dashboard, vá para **Pages** > seu projeto
2. Clique em **Custom domains**
3. Adicione seu domínio
4. Siga as instruções para apontar o DNS

---

## Passo 4: Verificar Deploy

Após o deploy, você receberá uma URL como:
```
https://elara-tecnologia.pages.dev
```

Acesse e verifique se o site está funcionando corretamente.

---

## Troubleshooting

### ❌ Erro: "Cannot modify Vite config"

**Solução**: Certifique-se de que o arquivo `vite.config.ts` existe e tem um array `plugins` definido.

### ❌ Erro: "Build failed"

**Solução**: Verifique se:
- Todas as dependências estão instaladas: `pnpm install`
- O comando de build funciona localmente: `pnpm run build`
- Não há erros de TypeScript: `pnpm check`

### ❌ Erro: "Cannot find module"

**Solução**: Certifique-se de que:
- Todos os imports usam o alias `@` corretamente
- As imagens estão usando URLs CDN (não caminhos locais)

---

## ✅ Próximos Passos

Após o deploy bem-sucedido:

1. **Configurar domínio personalizado** - Use seu próprio domínio
2. **Adicionar analytics** - Integre Google Analytics ou Cloudflare Analytics
3. **Configurar email** - Conecte o formulário a um serviço de email (SendGrid, Mailgun)
4. **Otimizar SEO** - Adicione meta tags e sitemap

---

## 📚 Recursos Úteis

- [Documentação Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Guia Wrangler](https://developers.cloudflare.com/workers/wrangler/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## 💡 Dicas

- **Deploy automático**: Cada push para `main` faz deploy automaticamente
- **Rollback**: Você pode reverter para versões anteriores no dashboard
- **Variáveis de ambiente**: Configure em **Settings** > **Environment variables**
- **Performance**: Cloudflare Pages é extremamente rápido (CDN global)

---

**Pronto para deploy!** 🎉
