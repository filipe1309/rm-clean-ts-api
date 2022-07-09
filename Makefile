up:
	docker-compose up -d

down:
	docker-compose down

build:
	npm run build
#	docker run -it clean-node-api npm run build

test-integration:
	npm run test:integration
#	 docker run -it clean-node-api npm run test:integration

test-ci:
	npm run test:ci
#	 docker run -it clean-node-api npm run test:integration

deploy:
	./deploy.sh -a
