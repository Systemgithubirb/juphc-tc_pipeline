install:
	npm install

test:
	npm test

run:
	npm start

docker-build:
	docker build -t tax-calculator:1.0 .

docker-run:
	docker run -d --name tax-calculator -p 3000:3000 tax-calculator:1.0

docker-stop:
	docker rm -f tax-calculator || true
