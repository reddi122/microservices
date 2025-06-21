# microservices

# Microservices Application

This project is a modern microservices-based application with:

- **Frontend**: ReactJS
- **Services**: Node.js (Home, Cart, Fashion)
- **Database**: PostgreSQL
- **Cache**: Redis
- **Orchestration**: Kubernetes
- **CI/CD**: Jenkins pipeline

---

## 📁 Project Structure

```
microservices/
├── frontend/              # React UI
├── home-service/          # Home microservice
├── cart-service/          # Cart microservice
├── fashion-service/       # Fashion microservice
├── k8s/                   # Kubernetes YAML files
│   ├── postgres/
│   ├── redis/
│   └── ...
├── Jenkinsfile            # Jenkins pipeline script
└── .gitignore             # Git ignored files
```

---

## 🚀 Getting Started

### Prerequisites
- Docker
- Kubernetes (Minikube or Cloud Provider)
- Jenkins (with Docker and K8s CLI)

### Running Locally

```bash
# Build Docker images
$ docker build -t frontend:latest ./frontend
$ docker build -t home-service:latest ./home-service
$ docker build -t cart-service:latest ./cart-service
$ docker build -t fashion-service:latest ./fashion-service

# Apply Kubernetes manifests
$ kubectl apply -f k8s/
```

### Jenkins CI/CD
- Configure DockerHub credentials in Jenkins as `dockerhub-creds`
- Trigger the pipeline using `Jenkinsfile`

---

## 📦 Services

- **Frontend**: Loads home/cart/fashion data from services
- **Home Service**: Port 5001
- **Cart Service**: Port 5002
- **Fashion Service**: Port 5003

---

## 📚 Authors & License
This project is open-source and maintained by [Your Name].
