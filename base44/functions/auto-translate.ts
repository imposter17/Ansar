export default async function handler(req: Request) {
  const { text, language } = await req.json();
  // Replace with provider integration (e.g. DeepL/OpenAI) in production.
  return Response.json({ language, translated: text });
}
