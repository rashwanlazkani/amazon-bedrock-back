# Serverless iOS App with AWS Lambda and Amazon Bedrock

This repository contains the code to build a native iOS app with Swift, leveraging Amazon Bedrock's AI capabilities to power chat and image generation features. The app uses a serverless backend built on AWS Lambda with TypeScript, enabling seamless processing without the need for provisioning servers or containers.

## Features

- **AI-Powered Chat**: Generate responses in a chat-like interface using Amazon Bedrock.
- **Image Generation**: Create images from prompts powered by Amazon Bedrock's models.
- **Serverless Backend**: Leverage AWS Lambda and API Gateway to handle backend processing with minimal infrastructure management.

## Architecture

The app follows a serverless architecture to minimize operational overhead. Key AWS services used:

- **Amazon Bedrock**: For AI-driven chat and image capabilities.
- **AWS Lambda**: Serverless compute for processing requests.
- **Amazon API Gateway**: API management for routing requests to Lambda functions.

## Getting Started

### Prerequisites

- **AWS Account**: To access Amazon Bedrock and AWS Lambda services.
- **Node.js**: For managing Lambda function code and dependencies.
- **AWS CLI** *(optional)*: To manage AWS resources directly from the command line.
- **Deployment Tool**: Choose your preferred tool for deploying Lambda functions in this project I have chosen Serverless Framework

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rashwanlazkani/amazon-bedrock-back
   cd amazon-bedrock-back
   ```

2. Configure AWS: Ensure your AWS credentials are set up locally, or configure them using `aws configure`

3. **Initialization**: Run the following commands to install dependencies and build the project:
  ```bash
  yarn
  yarn build
  ```

4. **Deployment**: To deploy the application, run:
  ```bash
  sls deploy
  ````
  Make sure you have completed the steps above and have set the correct AWS region in your configuration.

5. **Endpoints**: After a successful deployment you will be provided with the endpoints to your Lambdas in the console

6. **Sample prompts**:
   * Text:
   ```bash
    Method: POST
    Body:
    {
        "prompt": "Explain the benefits of mindfulness meditation."
    }
   ```


   Image:
   ```bash
    Method: POST
    Body:
    {
        "prompt": "Generate an image of a sunny beach with palm trees."
    }
   ```

## Additional resources
I have also built an iOS app which can be integrated with this solution. You can find it on: [https://github.com/rashwanlazkani/amazon-bedrock-app](https://github.com/rashwanlazkani/amazon-bedrock-app).
<p align="center"><img width="300" alt="iOS app with Amazon Bedrock" src="https://github.com/user-attachments/assets/04b0ca49-d820-40a6-9e05-baac636171db"></p>


## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

## License
This project is licensed under the MIT License.
