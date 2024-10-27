import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';

const client = new BedrockRuntimeClient({ region: 'us-east-1' });

export async function handler(event: any) {
  const prompt = JSON.parse(event.body).prompt;
  const input = {
    modelId: 'ai21.j2-mid-v1',
    contentType: 'application/json',
    accept: '*/*',
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'POST'
    },
    body: JSON.stringify({
      prompt: prompt,
      maxTokens: 200,
      temperature: 0.7,
      topP: 1,
      stopSequences: [],
      countPenalty: { scale: 0 },
      presencePenalty: { scale: 0 },
      frequencyPenalty: { scale: 0 }
    })
  };

  try {
    const data = await client.send(new InvokeModelCommand(input));
    const jsonString = Buffer.from(data.body).toString('utf8');
    const parsedData = JSON.parse(jsonString);
    const text = parsedData.completions[0].data.text;
    return text;
  } catch (error) {
    console.error(error);
  }
}