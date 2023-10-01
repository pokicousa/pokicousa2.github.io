const quotes = [
  {
    id: 1,
    quote: 'Büyük şeyler küçük şeylerin bir araya gelmesidir.',
    author: 'Van Gogh',
  },
  {
    id: 2,
    quote:
      'Açıklamalarla vaktini harcama. İnsanlar sadece duymak istediklerini duyarlar.',
    author: 'Paulo Coelho',
  },
  {
    id: 3,
    quote: 'Her bildiğini söyleme, her söylediğini bil.',
    author: 'Clavdius',
  },
  {
    id: 4,
    quote: 'Savaşın iyisi, barışın kötüsü yoktur.',
    author: 'Benjamin Franklin',
  },
  {
    id: 5,
    quote: 'Mutluluğu tatmanın tek çaresi, onu paylaşmaktır.',
    author: 'Byron',
  },
  {
    id: 6,
    quote: 'Hayatta hep mutlu olursam, Hayalini kuracak neyim kalır.',
    author: 'Dostoyevski',
  },
  {
    id: 7,
    quote:
      'İnsanların seni çok sevdiği zaman, onların işine en çok yaradığın zamandır',
    author: 'Bukowski',
  },
  {
    id: 8,
    quote:
      'Bir kalbi kırdıktan sonra gelen özür, doyduktan sonra sofraya gelen tuz gibidir. İhtiyaç kalmaz!',
    author: 'Pablo Neruda',
  },
  {
    id: 9,
    quote:
      'Ya susmak ya da suskunluktan daha kıymetli bir söz söylemek gerekir.',
    author: 'Pisagor',
  },
  {
    id: 10,
    quote: 'Gülmek için mutlu olmayı beklemeyin belki de gülmeden ölürsünüz.',
    author: 'Victor Hugo',
  },
  {
    id: 11,
    quote: 'Kendini yanlış hikayede bulursan ayrıl.',
    author: 'Mo Willems',
  },
];

// Function to get today's index based on the current date
function getTodaysIndex() {
  const today = new Date();
  return today.getDate() % quotes.length;
}

// Function to get or set the quote in local storage
function getSetDailyQuote() {
  let storedIndex = localStorage.getItem('dailyQuoteIndex');
  if (storedIndex === null) {
    storedIndex = getTodaysIndex();
    localStorage.setItem('dailyQuoteIndex', storedIndex);
  }
  return parseInt(storedIndex);
}

// Display the daily quote
const todaysIndex = getSetDailyQuote();
const quoteContainer = document.getElementById('quote-text');
const quoteContainer2 = document.getElementById('author');
quoteContainer.textContent = quotes[todaysIndex].quote;
quoteContainer2.textContent = quotes[todaysIndex].author;
