// Converti il seguente codice da JavaScript a TypeScript

class Article {


  constructor( private _description: string, private _sky: string, private _price: number)
    {

    }

  getDescription() 
    {

    return this._description

    }

  getSku()
  {
    return this._sky
  }

  getPrice() 
  {

    return this._price

    }
}

class Articles {
  constructor(private _article: string)
    {
    //this.articles = [];
    }

  add(_article) 
  {
    var _artcle = new _article();

    _article.add(_article);

  }

  retrieve(_articleId) 
  {
    var _artcleId = new _articleId();

    return _articleId.filter((_article) => _article.id === _articleId);

  }

  list() {

    for (const article of this._article) 
    {
      console.log(article);
    }

  }
}

function makeArticle(_description, _sku, _price) 
    {

        return new Article(_description, _sku, _price);

    }

function makeArticleList()
    {

        return  new Articles("cane");

    }

const redHat = makeArticle("Red Hat", "k66734", 99.88);

const whiteHat = makeArticle("White Hat", "k66731", 99.88);

const catalog = makeArticleList();

catalog.add(redHat);

catalog.add(whiteHat);

catalog.list();