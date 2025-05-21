FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install
COPY backend/ ./
COPY . .

EXPOSE 3001

CMD ["bun", "run" "backend/main.ts"]
