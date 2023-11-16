# Use a imagem oficial do Node.js como base
FROM node:20-alpine3.17

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos para o contêiner
COPY . .

# Exponha a porta que sua aplicação Next.js está usando (geralmente 3000)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
