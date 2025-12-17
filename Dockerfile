# Stage 1 — Build
FROM node:18-alpine AS builder
WORKDIR /app

# Abhängigkeiten kopieren und installieren
COPY package.json package-lock.json* ./
RUN npm install --silent

# Quellcode kopieren und bauen
COPY . .
RUN npm run build

# Stage 2 — Production (NGINX für SPA)
FROM socialengine/nginx-spa:latest
# Distordner aus dem Builder in das SPA-Verzeichnis der Image kopieren
COPY --from=builder /app/dist /app
RUN chmod -R 755 /app

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]