up: build
	docker-compose up -d

# Ex: make run cmd="sh"
run:
	docker run -it clean-node-api $(cmd)

down:
	docker-compose down

build:
	npm run build
#	docker run -it clean-node-api npm run build

test-ci:
	npm run test:ci

test:
	npm run test

test-verbose:
	npm run test:verbose

test-unit:
	npm run test:unit

test-integration:
	npm run test:integration
#	 docker run -it clean-node-api npm run test:integration

test-staged:
	npm run test:staged

test-ci:
	npm run test:ci
#	 docker run -it clean-node-api npm run test:integration

test-clear:
	npm run test:clear

# Ex: make deploy, or make deploy msg="Deploy msg"
deploy:
	./deploy.sh -a $(msg)
