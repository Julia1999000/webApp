export default class RestApi {
  constructor() {
    this._apiBase = "http://localhost:8081/api/v1/";
  }

  getAllNews = async (url) => {
    const result = await fetch(`${this._apiBase}${url}`);
    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status : ${result.status}`);
    }
    return await result.json();
  };

  getNews = async (id) => {
    const result = this.getAllNews(`news/getAllNews/${id}`);
    return result;
  };

  getInfo = async (url) => {
    const result = await fetch(`${this._apiBase}${url}`);
    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status : ${result.status}`);
    }
    return await result.json();
  };
}
