pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Using 'checkout scm' automatically finds the right branch (main) and URL
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Builds your image
                    sh 'docker build -t my-portfolio:latest .'
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    // Stop and remove old container if it exists
                    sh 'docker stop portfolio-site || true'
                    sh 'docker rm portfolio-site || true'
                    // Start the new container on Port 81
                    sh 'docker run -d --name portfolio-site -p 81:80 my-portfolio:latest'
                }
            }
        }
    }

    post {
        always {
            // Clean up unused images to keep the EC2 healthy
            sh 'docker image prune -f'
        }
    }
}
