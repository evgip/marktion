import { CreateChatCompletionRequest, OpenAIApi } from 'openai-edge';
import { StreamingTextResponse, OpenAIStream } from 'ai';
import { limitFree } from '@/libs/utils/rate-limit';

import { getOpenAIConfig } from './config';

const openai = new OpenAIApi(getOpenAIConfig()!);

export const runtime = 'edge';

export async function POST(req: Request): Promise<Response> {
  const body = (await req.json()) as CreateChatCompletionRequest;
  const { messages, stream = true } = body;

  const ip = req.headers.get('x-forwarded-for');

  const { success, limit, remaining } = await limitFree.check(`marktion_ratelimit_${ip}`);

  if (!success) {
    return new Response('You have reached your request limit for the day.', {
      status: 429,
      headers: {
        'X-RateLimit-Limit': limit.toString(),
        'X-RateLimit-Remaining': remaining.toString()
      }
    });
  }

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: messages,
    stream
  });

  const aiStream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(aiStream);
}
