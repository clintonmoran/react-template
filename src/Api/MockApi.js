const items = [
  { id: 1, abstract: "This is an abstract harhahrharhar", title: "title1" },
  { id: 2, abstract: "This is an abstract harhahrharhar", title: "title2" },
  { id: 3, abstract: "This is an abstract harhahrharhar", title: "title3" },
  { id: 4, abstract: "This is an abstract harhahrharhar", title: "title4" },
  { id: 5, abstract: "This is an abstract harhahrharhar", title: "title5" },
  { id: 6, abstract: "This is an abstract harhahrharhar", title: "title6" },
  { id: 7, abstract: "This is an abstract harhahrharhar", title: "title7" },
  { id: 8, abstract: "This is an abstract harhahrharhar", title: "title8" },
  { id: 9, abstract: "This is an abstract harhahrharhar", title: "title9" }
];

class Api {
  static getItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      });
    });
  }

  static getItemContent(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: id,
          content: "<img src='https://www.placecage.com/c/460/30" + id + "'/>"
        });
      });
    });
  }
}

export default Api;
