pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install Dependencies') {
      steps {
        script {
          try {
            sh 'npm install'
          } catch (Exception e) {
            error 'Failed to install dependencies'
          }
        }
      }
    }
    stage('Test') {
      steps {
        script {
          try {
            sh 'npm test'
          } catch (Exception e) {
            error 'Tests failed'
          }
        }
      }
    }
    stage('Build') {
      steps {
        script {
          try {
            sh 'npm run build'
          } catch (Exception e) {
            error 'Build failed'
          }
        }
      }
    }
  }
  post {
    always {
      echo 'Pipeline finished.'
    }
    success {
      echo 'Pipeline succeeded.'
    }
    failure {
      echo 'Pipeline failed.'
    }
  }
}
