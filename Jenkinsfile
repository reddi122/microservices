pipeline {
  agent any

  environment {
    DOCKER_REGISTRY = 'reddi122'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker Images') {
      steps {
        script {
          def services = ['frontend', 'home-service', 'cart-service', 'fashion-service']
          for (service in services) {
            sh "docker build -t $DOCKER_REGISTRY/${service}:latest ./${service}"
          }
        }
      }
    }

    stage('Push Docker Images') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
          script {
            def services = ['frontend', 'home-service', 'cart-service', 'fashion-service']
            for (service in services) {
              sh "docker push $DOCKER_REGISTRY/${service}:latest"
            }
          }
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}
