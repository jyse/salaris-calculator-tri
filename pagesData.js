let pagesData = [
  {
    id: 0,
    type: 'welcome',
    image: '/assets/welcome.jpeg',
    text: 'Welcome!',
    description:
      'In de volgende stappen gaan we je uitleggen hoe jouw salaris wordt berekend',
  },
  {
    id: 1,
    type: 'question',
    image: '/assets/mic.jpg',
    question: 'Voor hoeveel arbeidscontract-uren per week wil je werken?',
    description:
      'Het maximaal aantal uren contractueel gezien is 40 arbeidsuren.',
    answerOptions: [
      { answer: '32 uren per week' },
      { answer: '36 uren per week' },
      { answer: '40 uren per week' },
    ],
  },
  {
    id: 2,
    type: 'question',
    image: '/assets/welcome.jpeg',
    question: 'Op welk uurtarief verwacht je te worden ingezet?',
    description:
      'Stem dit af met je special agent. Het is o.a. afhankelijk van je technische skills en het aantal jaar werkervaring dat je hebt. ',
    answerOptions: [
      { answer: '€65 p/u' },
      { answer: '€75 p/u' },
      { answer: '€80 p/u', isCorrect: true },
      { answer: '€85 p/u' },
    ],
  },
  {
    id: 3,
    type: 'question',
    image: '/assets/party.jpg',
    question: 'Wil je een lease-auto?',
    description:
      'het bedrag van leasen is afhankelijk van het model auto dat je kiest, de duur van je lease-contract etc. ....',
    answerOptions: [
      { answer: 'Ja' },
      { answer: 'Nee' },
      { answer: 'Misschien' },
      { answer: 'Pas over een aantal maanden' },
    ],
  },
  {
    id: 4,
    type: 'question',
    image: '/assets/surf.jpeg',
    question:
      'Als je geen lease-auto wilt rijden, wat is je verwachte reiskostenvergoeding per maand? ',
    description:
      'Denk hierbij aan OV, KM registratie eigen auto en dergelijke ...',
    answerOptions: [{ answer: '€100 p/m' }, { answer: '€150 p/m' }],
  },
  {
    id: 5,
    type: 'question',
    image: '/assets/letters.jpg',
    question:
      'Wat zijn maandelijkse verwachte brandstofkosten die je zult tanken met de tankpas van Team Rockstars IT?',
    description:
      'Dit is zowel als je met je eigen auto komt of met een lease-auto via Team Rockstars IT',
    answerOptions: [
      { answer: '€200 p/m' },
      { answer: '€250 p/m' },
      { answer: '€300 p/m' },
      { answer: '€350 p/m' },
    ],
  },
  {
    id: 6,
    type: 'question',
    image: '/assets/events.jpeg',
    question:
      'Wat zijn maandelijkse verwachte brandstofkosten die je zult tanken met de tankpas van Team Rockstars IT?',
    description:
      'Dit is zowel als je met je eigen auto komt of met een lease-auto via Team Rockstars IT',
    answerOptions: [
      { answer: '€200 p/m' },
      { answer: '€250 p/m' },
      { answer: '€300 p/m' },
      { answer: '€350 p/m' },
    ],
  },
  {
    id: 7,
    type: 'question',
    image: '/assets/jacket.png',
    question:
      'Wat zijn de opleidingskosten die je per maand denkt te maken (certificering, congres)?',
    description: 'Softskills + events zijn voor onze rekening!',
    answerOptions: [{ answer: '€100 p/m' }, { answer: '€150 p/m' }],
  },
  {
    id: 8,
    type: 'question',
    image: '/assets/girls.png',
    question:
      'Wat gaat het bedrag van de afschrijving van je laptop zijn en eventueel telefoon',
    description:
      'Een laptop wordt afgeschreven in 3 kalenderjaren. Stel je laptop is gekocht voor een prijs van €1.800, dan is je bedrag van afschrijving 50 euro',
    answerOptions: [
      { answer: '€100 p/m' },
      { answer: '€150 p/m' },
      { answer: 'Weet ik nog niet' },
    ],
  },
]

export default pagesData
