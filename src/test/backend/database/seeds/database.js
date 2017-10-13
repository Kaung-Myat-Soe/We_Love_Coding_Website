exports.seed = (knex, Promise) => {
  return Promise.all([
    knex('categories').del(),
    knex('categories').insert([
      {
        "id": 1,
        "name": "Windows Phone",
        "color": "#19A2DE",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "windows-phone",
      },
      {
        "id": 2,
        "name": "Java",
        "color": "#E61400",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "java",
      },
      {
        "id": 3,
        "name": "PHP",
        "color": "#643EBF",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "php",
      },
      {
        "id": 4,
        "name": "Theorie",
        "color": "#9C5100",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "theorie",
      },
      {
        "id": 5,
        "name": "Windows 7",
        "color": "#2672EC",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "windows-7",
      },
      {"id": 6, "name": "C", "color": "#EF9608", "created_at": knex.fn.now(), "updated_at": knex.fn.now(), "slug": "c"},
      {
        "id": 7,
        "name": "Android",
        "color": "#8CBE29",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "android",
      },
      {
        "id": 8,
        "name": "C++",
        "color": "#F8CA00",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "c++",
      },
      {
        "id": 9,
        "name": "Ruby",
        "color": "#95040B",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "ruby",
      },
      {
        "id": 10,
        "name": "C#",
        "color": "#00C2D6",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "c-sharp",
      },
      {
        "id": 11,
        "name": "HTML5",
        "color": "#F14A29",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "html5",
      },
      {
        "id": 12,
        "name": "MySQL",
        "color": "#FF6D34",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "mysql",
      },
      {
        "id": 13,
        "name": "Windows Store",
        "color": "#00ADEF",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "windows-store",
      },
      {
        "id": 14,
        "name": "JavaScript",
        "color": "#0093F8",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "javascript",
      },
      {
        "id": 15,
        "name": "Python",
        "color": "#3C4B6B",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "python",
      },
      {
        "id": 16,
        "name": "iPhone",
        "color": "#999999",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "iphone",
      },
      {
        "id": 17,
        "name": "Objective-C",
        "color": "#999999",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "objective-c",
      },
      {
        "id": 18,
        "name": "Linux",
        "color": "#669900",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "linux",
      },
      {
        "id": 19,
        "name": "Visual Basic",
        "color": "#0099CC",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "visual-basic",
      },
      {
        "id": 20,
        "name": "Delphi",
        "color": "#7B9FCF",
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
        "slug": "delphi",
      },
    ]),
    knex('languages').del(),
    knex('languages').insert([
      {"id": 1, "code": "en"},
      {"id": 2, "code": "de"},
    ]),
    knex('providers').del(),
    knex('providers').insert([
      {"id": 1, "name": "YouTube"},
      {"id": 2, "name": "Vimeo"},
    ]),
    knex('playlists').del(),
    knex('playlists').insert([
      {
        "category_id": 2,
        "code": "F544CEEC9432BF67",
        "created_at": "2013-12-31 12:17:10.0",
        "description": "In diesen Videos wird gezeigt, wie man die Verbindung zu einer MySQL-Datenbank herstellt und Persistent Entites generiert. Außerdem wird gezeigt, wie auf diese Persistent Entities über eine Session Bean innerhalb eines Web-Servlets zugegriffen werden kann.",
        "enabled": true,
        "id": 5,
        "language_id": 2,
        "name": "Praktischer Einstieg in die Java Enterprise Edition (JEE)",
        "provider_id": 1,
        "slug": "praktischer-einstieg-in-die-java-enterprise-edition-jee",
        "updated_at": "2013-12-31 12:17:10.0",
      },
    ]),
  ]);
};