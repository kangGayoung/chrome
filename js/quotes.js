const quotes = [
    {
        quote:"상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",
        author:"존 우든", 
    },
    {
        quote:"추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
        author:"월트 디즈니",
    },
    {
        quote:"지옥을 겪고 있다면 계속 겪어 나가라.",
        author:"윈스턴 처칠",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;