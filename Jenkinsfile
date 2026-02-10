pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // We use --no-cache to ensure your changes always show up
                sh 'docker build --no-cache -t my-portfolio:latest .'
            }
        }
        
        stage('Deploy Container') {
            steps {
                script {
                    // 1. Stop and remove the old container if it exists
                    // The "|| true" prevents the pipeline from failing if the container isn't running
                    sh 'docker stop portfolio-site || true'
                    sh 'docker rm portfolio-site || true'
                    
                    // 2. Start the new container with the correct port mapping
                    sh 'docker run -d --name portfolio-site -p 80:3000 my-portfolio:latest'
                }
            }
        }
    }
}
