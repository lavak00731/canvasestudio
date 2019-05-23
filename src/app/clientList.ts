import { ClientType } from './client-type';
export const CLIENTS: ClientType[] = [
  {
    "name": "Estética Femenina Gabriela Gatto",
    "url": "https://esteticafemeninagabrielagatto.com",
    "picture": "../assets/portfolio/esteticagabriela.jpg",
    "description": "Responsive Site created on Wordpress, its main feature is that user can book or cancel any service from the website. It includes blog in order to show the latest news, a newsletter in order to offer some products and inform about events. The website is a PWA (progressive web application) which can work offline and it is another way to book a service without any effort from the user perspective.",
    "tags": [{"name":"RWD"}, {"name":"PWA"}, {"name":"content-strategy"}, {"name":"Wordpress"}, {"name":"Print"}],
    "print": {
        "isPrinted": true,
        "printWork": [
            {
              "artwork": "../assets/portfolio/print/esteticagabrielagatto/tarjetapersonalesteticagabriela1.jpg",
              "alt": 'Estética Gabriela Gatto Frente'
            },
            {
              "artwork": "../assets/portfolio/print/esteticagabrielagatto/tarjetapersonalesteticagabriela2.jpg",
              "alt": 'Tarjeta Estética Gabriela Gatto Dorso'
            }
        ]        
    }
  },
  {
    "name": "Rosario Ventiladores",
    "url": "http://rosarioventiladores.com",
    "picture": "../assets/portfolio/rosarioventiladores.jpg",
    "description": "Online Shop created on  Wordpress, it is a responsive site with newsletter. Products can be filtered by type of product and its label. Besides it has a news section and products can be updated in bulk.",
    "tags": [{"name":"RWD"}, {"name":"e-Commerce"}, {"name":"Wordpress"}],
    "print": {
      "isPrinted": false,
      "printWork": []
    }
  },
  {
    "name": "Jorge A López",
    "url": "http://jorgealopez.com",
    "picture": "../assets/portfolio/jorgealopez.jpg",
    "description": "Responsive Online Shop done with Wordpress, it is aimed to sell a wide range of products, so there are two types of filtering of them: filter by label or category. This site has a news section and customer can be offered special deals by a newsletter.",
    "tags": [{"name":"RWD"}, {"name":"e-Commerce"}, {"name":"Wordpress"}],
    "print": {
      "isPrinted": false,
      "printWork": []
    }
  },
  {
    "name": "Carlos Paz Centro Alquiler",
    "url": "http://carlospazcentroalquiler.com",
    "picture": "../assets/portfolio/carlospazcentroalquiler.jpg",
    "description": "Website which aims to offer renting departments temporaly in Carlos Paz city.",
    "tags": [{"name":"RWD"}, {"name":"static-html"}, {"name":"Print"}],
    "print": {
      "isPrinted": true,
      "printWork": [
        {
          "artwork": "../assets/portfolio/print/carlospazcentroalquiler/tarjetacpca.png",
          "alt": 'Carlos Paz Centro Alquiler Business Card'
        },
        {
          "artwork": "../assets/portfolio/print/carlospazcentroalquiler/folletocpca.png",
          "alt": 'Carlos Paz Centro Alquiler flyer'
        }
      ]
    }
  },
  {
    "name": "Cerrajería Pampa",
    "url": "http://cerrajeriapampa.com",
    "picture": "../assets/portfolio/cerrajeriapampa.jpg",
    "description": "Single page website, focused on quick engaging by the user. Contact using Whatsapp, CSS for Print, seal is put to be used by a cell phone user who needs a locksmith service immediately.",
    "tags": [{"name":"RWD"}, {"name":"static-html"}, {"name":"SPA"}],
    "print": {
      "isPrinted": false,
      "printWork": []
    }
  },
  {
    "name": "Industrias Titanio",
    "url": "http://industriastitanio.com",
    "picture": "../assets/portfolio/industriastitanio.jpg",
    "description": "online-portfolio of a wide range a products from a factory.",
    "tags": [{"name":"RWD"}, {"name":"online-portfolio"}, {"name":"static-html"}],
    "print": {
      "isPrinted": false,
      "printWork": []
    }
  },
  {
    "name": "Vivero La Cumbrecita",
    "url": "http://viverolacumbrecita.com",
    "picture": "../assets/portfolio/viverolacumbrecita.jpg",
    "description": "Online catalog of products and plants for a big plant nursery",
    "tags": [{"name":"Wordpress"}, {"name":"online-portfolio"}],
    "print": {
      "isPrinted": false,
      "printWork": []
    }
  }
]
