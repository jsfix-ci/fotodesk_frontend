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
        sh 'cd /home/zlaja/projects/fotodesk_frontend && npm i'
      }
    }

  }
}