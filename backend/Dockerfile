FROM python:3.13-slim

WORKDIR /app

RUN pip install poetry

COPY pyproject.toml* poetry.lock* ./

RUN poetry config virtualenvs.in-project true
RUN if [ -f pyproject.toml ]; then poetry install --no-root; fi

ENTRYPOINT [ "poetry", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--reload"]