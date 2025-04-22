# Etapa 1: Build
FROM node:18 AS builder

WORKDIR /app

# Copia os arquivos de dependências e instala
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install

# Copia o restante do app e builda
COPY . .
RUN npm run build

# Etapa 2: Servir com um servidor leve
FROM nginx:alpine

# Remove a página default do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do build para o nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia o arquivo de config customizado do nginx (opcional)
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
