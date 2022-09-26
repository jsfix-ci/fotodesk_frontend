pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/iSchoolProjects/fotodesk_frontend', branch: 'main')
      }
    }

    stage('Install packages') {
      steps {
        sh 'npm i'
      }
    }

    stage('Lint project JS/TS') {
      steps {
        sh ' npm run lint:check'
        sh 'npm run css:lint'
      }
    }

  }
}