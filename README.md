# Negai Sushi

> **Site institucional premium** do restaurante Negai Sushi - Cozinha Oriental em Barra de Sirinhaém, PE.

## 🎨 Sobre o Projeto

Website de alta performance e design premium para o restaurante Negai Sushi. Criado com foco em **experiência visual cinematográfica**, **conversão de pedidos online** e **fortalecimento de marca**.

### Características

- 🖤 **Design premium dark** - Identidade visual sofisticada com preto profundo e vermelho assinatura
- ⚡ **Performance otimizada** - Vite + React 18 + lazy loading de imagens
- 📱 **Totalmente responsivo** - Experiência impecável em desktop, tablet e mobile
- 🎭 **Animações refinadas** - Framer Motion para transições suaves e elegantes
- 🔍 **SEO completo** - Meta tags, Schema.org, Open Graph e Twitter Cards
- 🍣 **Cardápio interativo** - Sistema de filtros para explorar pratos e drinks
- 🛒 **CTA direto para pedidos** - Integração com Anota AI para delivery

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React | 18.3+ | Biblioteca UI |
| Vite | 5.x | Build tool e dev server |
| TypeScript | 5.x | Tipagem estática |
| Tailwind CSS | 3.4+ | Estilização utilitária |
| shadcn/ui | latest | Componentes UI acessíveis |
| Framer Motion | 11.x | Animações e transições |
| Lucide React | latest | Ícones elegantes |
| React Router DOM | 6.x | Navegação SPA |

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes shadcn/ui (buttons, cards, dialog, etc)
│   ├── Header.tsx       # Navegação sticky com glassmorphism
│   ├── HeroSection.tsx  # Hero cinematográfico com CTA principal
│   ├── ExperienceSection.tsx  # Seção institucional "A Experiência Negai"
│   ├── MenuHighlights.tsx     # Cardápio interativo com filtros
│   ├── AmbienceSection.tsx    # Seção de ambiente e atmosfera
│   ├── DifferentialsSection.tsx  # Grid de diferenciais da marca
│   ├── OrderCTA.tsx           # Call-to-action para pedidos
│   ├── LocationSection.tsx    # Localização e contato
│   ├── ManifestoStrip.tsx     # Faixa com manifesto da marca
│   ├── Footer.tsx           # Rodapé premium
│   └── NavLink.tsx          # Componente de link de navegação
├── pages/
│   ├── Index.tsx        # Página principal (SPA)
│   └── NotFound.tsx     # Página 404
├── assets/              # Imagens geradas (hero, pratos, drinks, ambiente)
├── hooks/               # Custom React hooks
├── lib/
│   └── utils.ts         # Utilitários (cn helper)
├── index.css            # Design system e variáveis CSS
├── tailwind.config.ts   # Configuração Tailwind com tokens customizados
└── main.tsx             # Entry point da aplicação

public/
├── favicon.png          # Ícone da marca
├── robots.txt           # Configuração de crawlers
└── placeholder.svg      # Placeholder para imagens
```

## 🚀 Comandos Disponíveis

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Executar testes
npm run test
```

## 🎨 Sistema de Design

### Paleta de Cores

| Token | Valor | Uso |
|-------|-------|-----|
| `--background` | `#050505` | Fundo principal |
| `--primary` | `#C1121F` | Cor de destaque (vermelho assinatura) |
| `--foreground` | `#FAFAFA` | Texto principal |
| `--muted` | `#8A8A8A` | Texto secundário |
| `--card` | `#0A0A0A` | Superfícies elevadas |
| `--border` | `#2A2A2A` | Bordas sutis |

### Tipografia

- **Títulos**: *Playfair Display* (serifada elegante)
- **Corpo**: *DM Sans* (sans-serif moderna e legível)
- **Tracking**: Amplo em elementos premium (`tracking-[0.3em]`)

### Animações

- `fade-in`: Entrada suave ao scroll (Framer Motion)
- `hover-lift`: Elevação em cards interativos
- `gradient-pulse`: Brilho sutil no CTA principal

## 🔗 Links Externos Integrados

- **Pedido Online**: https://pedido.anota.ai/loja/negaisushi
- **Instagram**: https://www.instagram.com/_negaisushi

## 📦 Deployment

O projeto é otimizado para deploy em plataformas modernas:

1. **Lovable**: Deploy automático com hot reload
2. **Vercel/Netlify**: Configuração zero com `dist/` após build
3. **GitHub Pages**: Exportação estática configurada

## 📝 SEO Configurado

- Title: "Negai Sushi"
- Meta description otimizada para restaurante premium
- Schema.org Restaurant com LocalBusiness
- Open Graph e Twitter Cards para compartilhamento social
- Canonical URL: https://negaisushi.com.br

## 🏗️ Próximos Passos Sugeridos

- [ ] Substituir imagens geradas por fotos reais do restaurante
- [ ] Adicionar galeria de fotos com lightbox
- [ ] Integrar widget de WhatsApp flutuante
- [ ] Implementar reservas online
- [ ] Blog de conteúdo gastronômico

## 📄 Licença

© Negai Sushi - Todos os direitos reservados.

---

**Desenvolvido com foco em excelência visual e experiência do usuário.**
