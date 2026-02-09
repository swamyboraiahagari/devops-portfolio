pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/swamyboraiahagari/devops-portfolio.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // This builds the image using the Dockerfile you pushed
                    sh 'docker build -t my-portfolio:latest .'
                }
            }
        }
        stage('Deploy Container') {
            steps {
                script {
                    // Stop any old versions running so we can start the new one
 pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/swamyboraiahagari/devops-portfolio.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    
                    sh 'docker build -t my-portfolio:latest .'
                }
            }
        }
        stage('Deploy Container') {
            steps {
                script {
                    // Stop any old versions running so we can start the new one
                    sh 'docker stop portfolio-site || true'
                    sh 'docker rm portfolio-site || true'
                    // Start the new container on Port 81 
                    sh 'docker run -d --name portfolio-site -p 81:80 my-portfolio:latest'
                }
            }
        }
    }
}                   sh 'docker stop portfolio-site || true'
                    sh 'docker rm portfolio-site || true'
                    // Start the new container on Port 81 
                    sh 'docker run -d --name portfolio-site -p 81:80 my-portfolio:latest'
                }
            }
        }
    }
}
