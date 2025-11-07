FROM python:3.14.0-alpine3.22

WORKDIR /app

COPY app/ /app

COPY requirements.txt /app

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]


##“funciona y listo, aunque podría añadir más flags a Gunicorn, pero meh”