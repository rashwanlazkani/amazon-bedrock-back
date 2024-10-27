import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';

const client = new BedrockRuntimeClient({ region: 'us-east-1' });

export async function handler(event: any) {
  const prompt = JSON.parse(event.body).prompt;
  const input = {
    modelId: 'amazon.titan-image-generator-v1',
    contentType: 'application/json',
    accept: 'application/json',
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'POST'
    },
    body: JSON.stringify({
      textToImageParams: {
        text: prompt
      },
      taskType: 'TEXT_IMAGE',
      imageGenerationConfig: {
        cfgScale: 10,
        seed: 0,
        width: 512,
        height: 512,
        numberOfImages: 1
      }
    })
  };

  try {
    const command = new InvokeModelCommand(input);
    const response = await client.send(command);

    const blobAdapter = response.body;

    const textDecoder = new TextDecoder('utf-8');
    const jsonString = textDecoder.decode(blobAdapter.buffer);

    try {
      const parsedData = JSON.parse(jsonString);
      return parsedData.images[0];
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return 'TextError';
    }
  } catch (error) {
    console.error(error);
  }
}
