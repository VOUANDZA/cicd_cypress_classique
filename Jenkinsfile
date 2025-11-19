pipeline {
  agent { label 'docker' } // label d'un node qui a Docker
  stages {
    stage('Run in container') {
      steps {
        script {
          docker.image('cypress/included:latest').inside('-u root') {
            sh 'npm ci'
            sh 'npx cypress run --spec="cypress/e2e/login.cy.js"'
          }
        }
      }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'results/*.*', fingerprint: true
      junit 'results/*.xml'
    }
  }
}