import fetch from 'node-fetch'
import nconf from 'nconf'

nconf.argv()
  .env()
  .file({ file: 'config.json' })

const serialize = (options) =>
  Object
    .keys(options)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(options[k])}`)
    .join('&')

const getData = (route, options) => {
  const base = 'http://brp3.netono.se/crossfitbrponline/api/ver2/'

  options = Object.assign({}, options, {
    apikey: nconf.get('apikey'),
    businessunitids: '1'
  })

  const query = serialize(options)

  return fetch(`${base}${route}?${query}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${nconf.get('token')}`
      },
      method: 'GET'
    })
    .then(res => res.json())
}

export default getData
