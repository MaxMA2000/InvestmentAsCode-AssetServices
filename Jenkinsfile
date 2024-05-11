pipeline {
  agent any
    
    stages{

        stage('Build Docker image') {
            steps {
                script {
                docker.build('InvestmentAsCode-AssetServices')
                }
            }
        }
        
        stage('Run Docker container') {
            steps {
                script {
                docker.image('InvestmentAsCode-AssetServices').run()
                }
            }
        }

    }
}