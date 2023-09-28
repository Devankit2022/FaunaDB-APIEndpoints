# Fauna Database API-endpoints

#### [Live-URL](https://devankit-faunadb-api.onrender.com/)

## About The Project

Designed and implemented API endpoints for seamless data access on a Fauna database while concurrently gaining expertise in Docker and Kubernetes, with a primary focus on enhancing containerization and orchestration skills.

### Built With

-   [Express](https://expressjs.com/)
-   [Fauna](https://fauna.com/)
-   [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

-   Install [Node.JS](https://nodejs.org/en)
-   Install [Git](https://git-scm.com/)

### Installation

1. Clone the repo

    ```sh
    git clone https://github.com/Devankit2022/FaunaDB-APIEndpoints.git
    ```

2. Install NPM packages

    ```sh
    npm install
    ```

## Usage

### Using Node

1.  Run following command to see the website which runs on `localhost:3000`

        npm run dev

### Using Docker

1.  Install Docker following this [documentation](https://docs.docker.com/get-docker/)

2.  Create an account on [Docker Hub](https://hub.docker.com/)

3.  Start **Docker Desktop App**

4.  You need my `FAUNA_SECRET_KEY`, so mail me at `devankit2022@gmail.com`

5.  Open terminal and run

        docker run --name my-container -e FAUNA_SECRET_KEY=env-varible -p 3000:3000 -d devankit2022/devankit-faundadb-api:0.0.2.RELEASE

6.  **OR** Open terminal and `cd` to project root directory and run

        docker-compose -f compose.yaml up

7.  Website will be live at `localhost:3000`

### Using Kubernetes

1.  Install kubectl following this [documentation](https://kubernetes.io/docs/tasks/tools/#kubectl)

2.  Install minikube following this [documentation](https://minikube.sigs.k8s.io/docs/start/)

3.  Open terminal and run

        minikube start

4.  Open terminal and `cd` to to project root directory and run the following commands

        kubectl apply -f .\kubernetes\secret.yaml
        kubectl apply -f .\kubernetes\config.yaml
        kubectl apply -f .\kubernetes\deployment.yaml
        kubectl apply -f .\kubernetes\service.yaml

5.  To view the website on localhost, run

        minikube service api-service

## Deploy

Deploy it on [Render](https://render.com/)

# Thank You
