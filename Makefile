up:
	docker-compose up -d --build

# Ex: make run cmd="sh"
run: up
	docker run -it api-container $(cmd)

down:
	docker-compose down

build: up
	docker exec -it api-container npm run build

test: up
	docker exec api-container npm run test

test-verbose: up
	docker exec -it api-container npm run test:verbose

test-unit: up
	docker exec -it api-container npm run test:unit

test-integration: up
	docker exec -it api-container npm run test:integration

test-staged: up
	docker exec -it api-container npm run test:staged

test-ci: up
	docker exec -it api-container npm run test:ci
#	 docker run -it clean-node-api npm run test:integration

test-clear: up
	docker exec -it api-container npm run test:clear

deploy:
	./deploy.sh -a
