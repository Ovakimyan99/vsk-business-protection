export default function(str) {
  const HOST = 'https://apivsk.bexram.online'
  const url = new URL(HOST + '/buisness_protection/send_mail/')

  try {
    return fetch(url.href, {
      method: 'POST',
      body: JSON.stringify({
        title: 'Новый клиент',
        text: str,
        recipient: 'tigr.kman@gmail.com'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (e) {
    throw Error('Что - то пошло не так:', e)
  }
}
