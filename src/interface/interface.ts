interface login {
  email: string;
  password: string;
  role: Roles|string

}

interface register {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  role: string
}

interface userData {
  id: number;
  email: string;
  username: string;
  person: Person;
}

interface Person {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  contact: string;
  biographie: string;
  images: string;
  user: userData;
  roles: string;
}

interface Articles {
  id: number;
  nomArticle: string;
  prix: number;
  quantite: number;
  description: string;
  images: string;
  categories: Categorie;
  personne: Person;
}

interface Categorie extends Articles {
  id: number;
  nomCat: string;
  description: string;
  articles: Articles[];
  vendeur: Person;
}

interface Client {
  id: number;
  nom: string;
  adresse: string;
  contact: string;
  personne: Person;
}

interface Roles {
  id: number;
  roles: string;
  user: userData;
  personne: Person;
}

interface Commande {
  id: number;
  quantite: number;
  article: Articles;
  client: Client;
  categorie: Categorie;
  vendeur: Person;
}


