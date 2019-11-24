/* eslint-disable no-return-await */
/* eslint-disable no-underscore-dangle */
class WeightService {
  _apiBase = 'https://us-central1-smart-258619.cloudfunctions.net/weight'

  getData = async (weight, user) => {
    const res = await fetch(`${this._apiBase}?weight=${weight}&user=${user}`)
    // const res = await fetch(
    //   `https://us-central1-smart-258619.cloudfunctions.net/weight?weight=2&user=govno`
    // )
    return await res.json()
  }

  postWeight = async (weight, user) => await this.getData(weight, user)
}

export default WeightService
