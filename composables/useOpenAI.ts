export const useOpenAI = () => {
  const config = useRuntimeConfig()

  const callopenAI = async () => {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.public.openAiKey}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'hello this is keisuke',
        temperature: 0.7,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log('ada', json.choices[0].text))
      .catch((err) => console.log('err', err))
  }

  return { callopenAI }
}
