
pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Deploy with Docker') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t webapp-project .'

                echo 'Removing old container if it exists...'
                sh 'docker rm -f webapp-container || true'

                echo 'Starting application container...'
                sh 'docker run -d --name webapp-container -p 3000:3000 webapp-project'
            }
        }
    }

    post {
        success {
            echo 'Application deployed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
