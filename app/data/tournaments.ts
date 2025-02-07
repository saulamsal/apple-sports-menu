export interface Tournament {
  name: string;
  slug: string;
  primaryColorHex: string;
  secondaryColorHex: string;
  category: {
    name: string;
    slug: string;
    sport: {
      name: string;
      slug: string;
      id: number;
    };
    id: number;
    flag: string;
    alpha2?: string;
  };
  userCount: number;
  id: number;
  displayInverseHomeAwayTeams: boolean;
}

export const tournaments: Tournament[] = [
      {
        "name": "EURO",
        "slug": "european-championship",
        "primaryColorHex": "#293cdb",
        "secondaryColorHex": "#00ba5d",
        "category": {
          "name": "Europe",
          "slug": "europe",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1465,
          "flag": "europe"
        },
        "userCount": 1009672,
        "id": 1,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "Copa América",
        "slug": "copa-america",
        "primaryColorHex": "#0A2357",
        "secondaryColorHex": "#F70F17",
        "category": {
          "name": "South America",
          "slug": "south-america",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1470,
          "flag": "south-america"
        },
        "userCount": 501538,
        "id": 133,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "Supercopa de España",
        "slug": "supercopa-de-espana",
        "primaryColorHex": "#daac6a",
        "secondaryColorHex": "#4a919d",
        "category": {
          "name": "Spain",
          "slug": "spain",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 32,
          "flag": "spain",
          "alpha2": "ES"
        },
        "userCount": 99102,
        "id": 213,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "World Championship",
        "slug": "world-championship",
        "primaryColorHex": "#d20a11",
        "secondaryColorHex": "#e8bb57",
        "category": {
          "name": "World",
          "slug": "world",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1468,
          "flag": "international"
        },
        "userCount": 743817,
        "id": 16,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "UEFA Champions League",
        "slug": "uefa-champions-league",
        "primaryColorHex": "#062b5c",
        "secondaryColorHex": "#086aab",
        "category": {
          "name": "Europe",
          "slug": "europe",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1465,
          "flag": "europe"
        },
        "userCount": 1324104,
        "id": 7,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "UEFA Europa League",
        "slug": "uefa-europa-league",
        "primaryColorHex": "#f37d25",
        "secondaryColorHex": "#f37d25",
        "category": {
          "name": "Europe",
          "slug": "europe",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1465,
          "flag": "europe"
        },
        "userCount": 577596,
        "id": 679,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "EURO, Qualification",
        "slug": "european-championship-qualification",
        "primaryColorHex": "#182026",
        "secondaryColorHex": "#730000",
        "category": {
          "name": "Europe",
          "slug": "europe",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1465,
          "flag": "europe"
        },
        "userCount": 188420,
        "id": 27,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "Premier League",
        "slug": "premier-league",
        "primaryColorHex": "#3c1c5a",
        "secondaryColorHex": "#f80158",
        "category": {
          "name": "England",
          "slug": "england",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1,
          "flag": "england",
          "alpha2": "EN"
        },
        "userCount": 1358047,
        "id": 17,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "FA Cup",
        "slug": "fa-cup",
        "primaryColorHex": "#bc1821",
        "secondaryColorHex": "#e60411",
        "category": {
          "name": "England",
          "slug": "england",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1,
          "flag": "england",
          "alpha2": "EN"
        },
        "userCount": 246700,
        "id": 19,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "LaLiga",
        "slug": "laliga",
        "primaryColorHex": "#2f4a89",
        "secondaryColorHex": "#f4a32e",
        "category": {
          "name": "Spain",
          "slug": "spain",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 32,
          "flag": "spain",
          "alpha2": "ES"
        },
        "userCount": 911292,
        "id": 8,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "Bundesliga",
        "slug": "bundesliga",
        "primaryColorHex": "#e2080e",
        "secondaryColorHex": "#8e0902",
        "category": {
          "name": "Germany",
          "slug": "germany",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 30,
          "flag": "germany",
          "alpha2": "DE"
        },
        "userCount": 614509,
        "id": 35,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "Serie A",
        "slug": "serie-a",
        "primaryColorHex": "#09519e",
        "secondaryColorHex": "#008fd7",
        "category": {
          "name": "Italy",
          "slug": "italy",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 31,
          "flag": "italy",
          "alpha2": "IT"
        },
        "userCount": 723144,
        "id": 23,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "Ligue 1",
        "slug": "ligue-1",
        "primaryColorHex": "#091c3e",
        "secondaryColorHex": "#a9c011",
        "category": {
          "name": "France",
          "slug": "france",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 7,
          "flag": "france",
          "alpha2": "FR"
        },
        "userCount": 477084,
        "id": 34,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "Eredivisie",
        "slug": "eredivisie",
        "primaryColorHex": "#292766",
        "secondaryColorHex": "#7c79c3",
        "category": {
          "name": "Netherlands",
          "slug": "netherlands",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 35,
          "flag": "netherlands",
          "alpha2": "NL"
        },
        "userCount": 172793,
        "id": 37,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "EFL Cup",
        "slug": "efl-cup",
        "primaryColorHex": "#203e93",
        "secondaryColorHex": "#bc1723",
        "category": {
          "name": "England",
          "slug": "england",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1,
          "flag": "england",
          "alpha2": "EN"
        },
        "userCount": 168690,
        "id": 21,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "Brasileirão Série A",
        "slug": "brasileirao-serie-a",
        "primaryColorHex": "#C7FF00",
        "secondaryColorHex": "#969696",
        "category": {
          "name": "Brazil",
          "slug": "brazil",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 13,
          "flag": "brazil",
          "alpha2": "BR"
        },
        "userCount": 312507,
        "id": 325,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "Africa Cup of Nations",
        "slug": "africa-cup-of-nations",
        "primaryColorHex": "#00752e",
        "secondaryColorHex": "#edc73e",
        "category": {
          "name": "Africa",
          "slug": "africa",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1466,
          "flag": "africa"
        },
        "userCount": 301499,
        "id": 270,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "UEFA Conference League",
        "slug": "uefa-europa-conference-league",
        "primaryColorHex": "#04be15",
        "secondaryColorHex": "#04be15",
        "category": {
          "name": "Europe",
          "slug": "europe",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1465,
          "flag": "europe"
        },
        "userCount": 298543,
        "id": 17015,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "UEFA Nations League",
        "slug": "uefa-nations-league",
        "primaryColorHex": "#3a4179",
        "secondaryColorHex": "#e5a422",
        "category": {
          "name": "Europe",
          "slug": "europe",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1465,
          "flag": "europe"
        },
        "userCount": 273489,
        "id": 10783,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "CONMEBOL Libertadores",
        "slug": "conmebol-libertadores",
        "primaryColorHex": "#573215",
        "secondaryColorHex": "#dfaf49",
        "category": {
          "name": "South America",
          "slug": "south-america",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1470,
          "flag": "south-america"
        },
        "userCount": 224674,
        "id": 384,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "Club World Championship",
        "slug": "club-world-championship",
        "primaryColorHex": "#8d1536",
        "secondaryColorHex": "#0bbda4",
        "category": {
          "name": "World",
          "slug": "world",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1468,
          "flag": "international"
        },
        "userCount": 180375,
        "id": 357,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "World Championship Qual. CONMEBOL",
        "slug": "world-championship-qual-conmebol",
        "primaryColorHex": "#9a1133",
        "secondaryColorHex": "#c11541",
        "category": {
          "name": "South America",
          "slug": "south-america",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1470,
          "flag": "south-america"
        },
        "userCount": 159303,
        "id": 295,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "Olympic Games",
        "slug": "olympic-games",
        "primaryColorHex": "#8b2130",
        "secondaryColorHex": "#b11e33",
        "category": {
          "name": "World",
          "slug": "world",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1468,
          "flag": "international"
        },
        "userCount": 124474,
        "id": 436,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "World Championship Qual. UEFA",
        "slug": "world-championship-qual-uefa",
        "primaryColorHex": "#9a1133",
        "secondaryColorHex": "#c11541",
        "category": {
          "name": "Europe",
          "slug": "europe",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1465,
          "flag": "europe"
        },
        "userCount": 118215,
        "id": 11,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "AFC Asian Cup",
        "slug": "afc-asian-cup",
        "primaryColorHex": "#FCBD00",
        "secondaryColorHex": "#FC1302",
        "category": {
          "name": "Asia",
          "slug": "asia",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1467,
          "flag": "asia"
        },
        "userCount": 96307,
        "id": 246,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "MLS",
        "slug": "mls",
        "primaryColorHex": "#e2231a",
        "secondaryColorHex": "#062f69",
        "category": {
          "name": "USA",
          "slug": "usa",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 26,
          "flag": "usa",
          "alpha2": "US"
        },
        "userCount": 93355,
        "id": 242,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "World Championship Women",
        "slug": "world-championship-women",
        "primaryColorHex": "#3099ff",
        "secondaryColorHex": "#fcc831",
        "category": {
          "name": "World",
          "slug": "world",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1468,
          "flag": "international"
        },
        "userCount": 82698,
        "id": 290,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "World Championship Qual. CAF ",
        "slug": "world-championship-qual-caf",
        "primaryColorHex": "#9a1133",
        "secondaryColorHex": "#c11541",
        "category": {
          "name": "Africa",
          "slug": "africa",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1466,
          "flag": "africa"
        },
        "userCount": 75417,
        "id": 13,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "World Championship Qual. AFC",
        "slug": "world-championship-qual-afc",
        "primaryColorHex": "#9a1133",
        "secondaryColorHex": "#c11541",
        "category": {
          "name": "Asia",
          "slug": "asia",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1467,
          "flag": "asia"
        },
        "userCount": 52169,
        "id": 308,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "Olympic Games Women",
        "slug": "olympic-games-women",
        "primaryColorHex": "#8b2130",
        "secondaryColorHex": "#b11e33",
        "category": {
          "name": "World",
          "slug": "world",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1468,
          "flag": "international"
        },
        "userCount": 35894,
        "id": 437,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "World Championship Qual. CONCACAF",
        "slug": "world-championship-qual-concacaf",
        "primaryColorHex": "#9a1133",
        "secondaryColorHex": "#c11541",
        "category": {
          "name": "North & Central America",
          "slug": "north-central-america",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1469,
          "flag": "north-and-central-america"
        },
        "userCount": 23472,
        "id": 14,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "World Championship Qual., Inter-Confederation",
        "slug": "world-championship-qual-inter-confederation",
        "primaryColorHex": "#d20a11",
        "secondaryColorHex": "#e8bb57",
        "category": {
          "name": "World",
          "slug": "world",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1468,
          "flag": "international"
        },
        "userCount": 16764,
        "id": 10618,
        "displayInverseHomeAwayTeams": false
      },
      {
        "name": "World Championship Qual. OFC",
        "slug": "world-championship-qual-ofc",
        "primaryColorHex": "#9a1133",
        "secondaryColorHex": "#c11541",
        "category": {
          "name": "Oceania",
          "slug": "oceania",
          "sport": {
            "name": "Football",
            "slug": "football",
            "id": 1
          },
          "id": 1471,
          "flag": "oceania"
        },
        "userCount": 9093,
        "id": 309,
        "displayInverseHomeAwayTeams": false
      }
    ]