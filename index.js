const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High-level Text Markup Language", "Hyper Transfer Markup Language", "Hyperlink and Text Markup Language"],
      correctAnswer: 0,
    },
    {
      question: "Which HTML tag is used to define an ordered list?",
      options: ["<ul>", "<ol>", "<li>", "<dl>"],
      correctAnswer: 1,
    },
    {
      question: "Which HTML element is used for creating links to other web pages?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correctAnswer: 1,
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheet", "Creative Style Sheet", "Computer Style Sheet", "Colorful Style Sheet"],
      correctAnswer: 0,
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: ["font-color", "text-color", "color", "text-style"],
      correctAnswer: 2,
    },
    {
      question: "Which CSS selector is used to select elements with a specific class name?",
      options: ["#", ".", ":", "/"],
      correctAnswer: 1,
    },
    {
      question: "What is the correct way to declare a JavaScript variable?",
      options: ["var myVar;", "v myVar;", "variable myVar;", "int myVar;"],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["Number", "Boolean", "Character", "String"],
      correctAnswer: 2,
    },
    {
      question: "What does the 'if' statement do in JavaScript?",
      options: ["It defines a loop.", "It executes a block of code only if a condition is true.", "It declares a variable.", "It repeats a block of code a specific number of times."],
      correctAnswer: 1,
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<url>", "<link>", "<a>", "<href>"],
      correctAnswer: 2,
    },
    {
      question: "What is the purpose of the HTML <meta> tag?",
      options: ["To define a paragraph of text.", "To create a clickable link.", "To provide metadata about the document.", "To define a list of items."],
      correctAnswer: 2,
    },
    {
      question: "Which CSS property is used to control the spacing between elements on a web page?",
      options: ["padding", "margin", "border", "space"],
      correctAnswer: 0,
    },
    {
      question: "What is the CSS box model?",
      options: ["A model for creating boxes in web design.", "A model for determining the size and spacing of elements.", "A model for creating 3D effects in web design.", "A model for creating animations in web design."],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of the JavaScript 'querySelector' method?",
      options: ["To select and manipulate HTML elements.", "To define a new variable.", "To create a loop.", "To add comments to the code."],
      correctAnswer: 0,
    },
    {
      question: "What does the JavaScript 'parseInt()' function do?",
      options: ["It parses a string and returns an integer.", "It converts a number to a string.", "It generates a random integer.", "It checks if a variable is an integer."],
      correctAnswer: 0,
    },
    {
      question: "What does the JavaScript 'addEventListener' method do?",
      options: ["It defines a new function.", "It sets the background color of an element.", "It attaches an event handler to an element.", "It creates a new variable."],
      correctAnswer: 2,
    },
  ];
let index=0;
const loadQuestion=()=>{
    const data=questions[index];
    console.log(data);
    ques.innerText=`${index+1}.  ${data.question}`;
    options[0].innerText=data.options[0];
    options[1].innerText=data.options[1];
    options[2].innerText=data.options[2];
    options[3].innerText=data.options[3];
}
const options=document.getElementsByTagName('label');
const ques=document.getElementById('ques');
const check=document.getElementsByTagName('input')

const submitQuiz=()=>{
   const ans=getAnswer(); 
}
const getAnswer=()=>{
    check.forEach(element => {
        if(element.checked){
            console.log('Y');
        }
    });
}
loadQuestion();