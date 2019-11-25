/* eslint-disable no-return-await */
/* eslint-disable no-underscore-dangle */
class ImageService {
  _apiBase = 'https://us-central1-smart-258619.cloudfunctions.net/image'

  getData = async (image, user) => {
    const res = await fetch(`${this._apiBase}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image, user }),
      mode: 'no-cors',
    })
    return await res.json()
  }

  postImage = async (image, user) => await this.getData(image, user)
}

export default ImageService
