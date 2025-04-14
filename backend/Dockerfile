FROM python:alpine

WORKDIR /backend

RUN pip install poetry

# poetry initでpyproject.tomlを作成する過程で*を後ろに付けて指定する必要がある
COPY pyproject.toml* poetry.lock* ./

RUN poetry config virtualenvs.in-project true
RUN if [ -f pyproject.toml ]; then poetry install --no-root; fi

ENTRYPOINT [ "poetry", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--reload"]
# プロジェクトのルートはbackendディレクトリ