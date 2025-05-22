FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY frontend/ ./

RUN bunx next build

EXPOSE 3000

CMD ["bunx", "run", "start"]
