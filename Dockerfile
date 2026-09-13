FROM nginx

COPY public/favicon.ico /usr/share/nginx/html/favicon.ico
COPY public/index.html /usr/share/nginx/html/index.html
COPY public/script.js /usr/share/nginx/html/script.js
COPY public/style.css /usr/share/nginx/html/style.css
COPY src/taxCalculator.js /usr/share/nginx/html/taxCalculator.js