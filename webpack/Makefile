CONTAINER := smutdose_webpack
IMAGE := smutdose/webpack
PWD = $(shell pwd)

all: container

bash:
	docker exec -it ${CONTAINER} bash

clean:
	docker rm -f ${CONTAINER}
	#docker rmi ${IMAGE}

container: image
	docker run -dit --name ${CONTAINER} -p 8080:8080 -v ${PWD}:${PWD} -w ${PWD} ${IMAGE}

image:
	docker build -t ${IMAGE} .

server:
	webpack-dev-server --host=0.0.0.0
