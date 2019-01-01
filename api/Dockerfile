FROM python:3.6

WORKDIR /app
ADD . /app
RUN apt-get update
RUN apt-get install -y
RUN pip3 install -r requirements.txt
RUN python3 manage.py collectstatic

EXPOSE 9000

#CMD ["python", "manage.py", "makemigrations", "projects", "tags", "skills", "hearts"]
#CMD ["python", "manage.py", "migrate"]
CMD ["uwsgi", "--ini", "wsgi.ini", "--static-map", "/static=/app/static"]