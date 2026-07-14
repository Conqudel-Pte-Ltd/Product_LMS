# Build Vue frontend, then run FastAPI (API + static site) in one image.

# ----- Stage 1: build frontend -----
FROM node:20-alpine AS frontend

WORKDIR /frontend

COPY package.json package-lock.json ./
RUN npm install

COPY index.html vite.config.js ./
COPY public ./public
COPY src ./src

# Empty API URL = relative /api calls (same origin in this container)
ENV VITE_API_URL=
RUN npm run build


# ----- Stage 2: Python API + serve frontend -----
FROM python:3.12-slim AS runtime

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=8000

COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/app ./app
COPY --from=frontend /frontend/dist ./static

EXPOSE 8000

CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT}"]
