const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "You miss 100% of the shots you don’t take.",
  "Dream big and dare to fail.",
  "Act as if what you do makes a difference. It does.",
  "The future depends on what you do today.",
  "Don’t limit your challenges. Challenge your limits.",
  "A year from now you may wish you had started today.",
  "Push yourself, because no one else is going to do it for you.",
  "Start where you are. Use what you have. Do what you can.",
  "Great things never come from comfort zones.",
  "Opportunities don't happen. You create them.",
  "Success doesn’t come to you. You go to it.",
  "If you want to fly, give up everything that weighs you down.",
  "It always seems impossible until it’s done.",
  "Do something today that your future self will thank you for.",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quote.length) {
    usedIndexes.clear();
  }

  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue;

    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}
