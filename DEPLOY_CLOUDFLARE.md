# 🚀 Deploy no Cloudflare Pages - SUPER SIMPLES

## O que fazer agora:

### 1️⃣ Fazer Push para GitHub

```bash
cd /home/ubuntu/elara-tecnologia
git add .
git commit -m "Pronto para deploy no Cloudflare Pages"
git push origin main
```

### 2️⃣ Conectar ao Cloudflare Pages

1. Acesse: https://dash.cloudflare.com
2. Clique em **Pages** (menu lateral)
3. Clique em **Create a project** → **Connect to Git**
4. Selecione seu repositório `elara-tecnologia`
5. Configure assim:
   - **Framework preset**: Vite
   - **Build command**: `pnpm run build`
   - **Build output directory**: `dist/public`
   - **Root directory**: `/` (deixe vazio)
6. Clique em **Save and Deploy**

**Pronto!** 🎉 Seu site estará online em ~2 minutos.

---

## ✅ Checklist Final

- [x] Site funciona localmente (`pnpm dev`)
- [x] Build compila sem erros (`pnpm build`)
- [x] Código está no GitHub
- [ ] Conectado ao Cloudflare Pages
- [ ] Site online em `https://seu-projeto.pages.dev`

---

## 📝 Notas Importantes

- **Cada push para `main` faz deploy automático**
- **Você pode reverter versões antigas no dashboard**
- **Domínio personalizado**: Configure em Settings > Custom domains
- **Variáveis de ambiente**: Configure em Settings > Environment variables

---

## 🆘 Se der erro:

1. Verifique se o repositório está público
2. Verifique se o `package.json` tem o script `build: "vite build"`
3. Verifique se o `dist/public` foi gerado localmente

**Dúvidas?** Consulte: https://developers.cloudflare.com/pages/
