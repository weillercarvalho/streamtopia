FROM nginx:1.15.0

# removendo a configuraçao padrão
RUN rm /etc/nginx/conf.d/default.conf

# copiando a configuração que vamos criar
COPY nginx.conf /etc/nginx/conf.d