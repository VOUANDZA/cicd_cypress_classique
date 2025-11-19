pipeline {
    agent {
        docker {
            image 'cypress/included:latest'
            args '-u root --entrypoint=""'
        }
    }
    stages {
        stage('Check Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Run Cypress tests') {
            steps {
                sh 'npx cypress run --spec="cypress/e2e/login.cy.js"'
            }
        }
    }
}