class ItemModel {
  constructor({
    id,
    name,
    stateProvince,
    webPages,
    domains,
    alphaTwoCode,
    country,
  }) {
    this.id = id;
    this.name = name;
    this.stateProvince = stateProvince;
    this.webPages = webPages;
    this.domains = domains;
    this.alphaTwoCode = alphaTwoCode;
    this.country = country;
  }
}

export default ItemModel;
