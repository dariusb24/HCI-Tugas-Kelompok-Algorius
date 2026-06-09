/* ============================================================
   ALGORIUS — script.js  (revised v3)
   ============================================================ */

// ============================================================
// COURSE DATA — full curriculum + lesson content per course
// ============================================================
const courseData = {
  c: {
    name: 'C Programming Language',
    tag: '// c',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    level: 'Beginner',
    access: 'Free',
    modules: 6,
    desc: 'Di dalam course ini, kita akan mengupas tuntas tentang fondasi awal dari sebuah koding yang secara ajaib mengatur semua perangkat lunak. Kita akan membahas mulai dari koding aritmatika dasar, variable, dan looping atau alur kontrol. Yang selanjutnya akan diteruskan ke materi yang tak kalah penting yang disebut pointer.',
    curriculum: [
      { num: 1, title: 'Introduction to C',                    meta: '2 videos · 1 exercise' },
      { num: 2, title: 'Variables and Data Types',             meta: '2 videos · 1 exercise' },
      { num: 3, title: 'If-Condition and Arithmetic Operator', meta: '3 videos · 2 exercises' },
      { num: 4, title: 'Looping',                              meta: '2 videos · 2 exercises' },
      { num: 5, title: 'Array & String',                       meta: '3 videos · 1 exercise' },
      { num: 6, title: 'Function',                             meta: '2 videos · 1 exercise' },
    ],
    lesson: {
      video1: {
        title: 'What is C?',
        code: [
          { t:'comment', s:'// Your first C program' },
          { t:'kw', s:'#include' }, { t:'str', s:' <stdio.h>' },
          { t:'plain', s:'' },
          { t:'kw', s:'int' }, { t:'fn', s:' main' }, { t:'plain', s:'() {' },
          { t:'indent', s:'  ' }, { t:'fn', s:'printf' }, { t:'plain', s:'(' }, { t:'str', s:'"Hello, World!\\n"' }, { t:'plain', s:');' },
          { t:'indent', s:'  ' }, { t:'kw', s:'return' }, { t:'num', s:' 0' }, { t:'plain', s:';' },
          { t:'plain', s:'}' },
        ],
        notes: [
          'C is a compiled, general-purpose language created by Dennis Ritchie (1972).',
          '<code>#include &lt;stdio.h&gt;</code> imports the standard I/O library for <code>printf</code> and <code>scanf</code>.',
          'Every C program starts at <code>main()</code>. It returns an integer — <code>0</code> means success.',
          'C is the foundation of most operating systems and higher-level languages.',
        ]
      },
      video2: {
        title: 'Variables & Data Types',
        code: [
          { t:'kw', s:'#include' }, { t:'str', s:' <stdio.h>' },
          { t:'plain', s:'' },
          { t:'kw', s:'int' }, { t:'fn', s:' main' }, { t:'plain', s:'() {' },
          { t:'indent', s:'  ' }, { t:'kw', s:'int' }, { t:'plain', s:'   age    = ' }, { t:'num', s:'20' }, { t:'plain', s:';' },
          { t:'indent', s:'  ' }, { t:'kw', s:'float' }, { t:'plain', s:' gpa    = ' }, { t:'num', s:'3.8f' }, { t:'plain', s:';' },
          { t:'indent', s:'  ' }, { t:'kw', s:'char' }, { t:'plain', s:'  grade  = ' }, { t:'str', s:"'A'" }, { t:'plain', s:';' },
          { t:'indent', s:'  ' }, { t:'fn', s:'printf' }, { t:'plain', s:'(' }, { t:'str', s:'"Age: %d, GPA: %.1f"' }, { t:'plain', s:', age, gpa);' },
          { t:'indent', s:'  ' }, { t:'kw', s:'return' }, { t:'num', s:' 0' }, { t:'plain', s:';' },
          { t:'plain', s:'}' },
        ],
        notes: [
          '<code>int</code> stores whole numbers. <code>float</code> / <code>double</code> store decimals.',
          '<code>char</code> stores a single character (use single quotes).',
          'Format specifiers: <code>%d</code> = int, <code>%f</code> = float, <code>%c</code> = char, <code>%s</code> = string.',
          'Variables must be declared with a type before use in C.',
        ]
      },
      exercise: {
        title: 'Print Your Info',
        filename: 'main.c',
        description: 'Write a C program that declares variables for your name (as a string), age (integer), and GPA (float), then prints them using <code>printf</code>.',
        hints: [
          'Use <code>char name[] = "YourName";</code> for a string variable.',
          'Format: <code>printf("Name: %s, Age: %d, GPA: %.1f\\n", name, age, gpa);</code>',
          'Make sure to <code>#include &lt;stdio.h&gt;</code> at the top.',
        ],
        starter: `#include <stdio.h>

int main() {
    // Declare your name, age, and GPA here
    char name[] = "Alex";
    int  age    = 20;
    float gpa   = 3.8f;

    // Print them using printf
    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
    printf("GPA: %.1f\\n", gpa);

    return 0;
}`,
        expectedOutput: `Name: Alex\nAge: 20\nGPA: 3.8`,
        testCases: [
          { input: '', expected: 'Name:', points: 'Prints name' },
          { input: '', expected: 'Age:', points: 'Prints age' },
          { input: '', expected: 'GPA:', points: 'Prints GPA' },
        ]
      }
    }
  },

  cpp: {
    name: 'C++ Programming',
    tag: '// c++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    level: 'Intermediate',
    access: 'Premium',
    modules: 7,
    desc: 'Level up from C into object-oriented mastery. Learn classes, inheritance, STL, memory management, and competitive programming strategies. Build production-grade applications with one of the most powerful languages ever created.',
    curriculum: [
      { num: 1, title: 'Introduction to C++',       meta: '2 videos · 1 exercise' },
      { num: 2, title: 'Classes and Objects',        meta: '3 videos · 2 exercises' },
      { num: 3, title: 'Inheritance & Polymorphism', meta: '3 videos · 2 exercises' },
      { num: 4, title: 'STL Containers',             meta: '2 videos · 2 exercises' },
      { num: 5, title: 'Templates',                  meta: '2 videos · 1 exercise' },
      { num: 6, title: 'Memory Management',          meta: '2 videos · 1 exercise' },
      { num: 7, title: 'Sorting & Searching',        meta: '3 videos · 2 exercises' },
    ],
    lesson: {
      video1: {
        title: 'C++ vs C',
        code: [
          { t:'comment', s:'// C++ Hello World' },
          { t:'kw', s:'#include' }, { t:'str', s:' <iostream>' },
          { t:'kw', s:'using namespace' }, { t:'plain', s:' std;' },
          { t:'plain', s:'' },
          { t:'kw', s:'int' }, { t:'fn', s:' main' }, { t:'plain', s:'() {' },
          { t:'indent', s:'  ' }, { t:'plain', s:'cout << ' }, { t:'str', s:'"Hello, C++!"' }, { t:'plain', s:' << endl;' },
          { t:'indent', s:'  ' }, { t:'kw', s:'return' }, { t:'num', s:' 0' }, { t:'plain', s:';' },
          { t:'plain', s:'}' },
        ],
        notes: [
          'C++ extends C with OOP: classes, inheritance, polymorphism, and templates.',
          '<code>iostream</code> replaces <code>stdio.h</code>; use <code>cout</code> instead of <code>printf</code>.',
          '<code>using namespace std;</code> lets you skip the <code>std::</code> prefix.',
          'C++ is used in game engines, browsers, trading systems, and embedded firmware.',
        ]
      },
      video2: {
        title: 'Classes & Objects',
        code: [
          { t:'kw', s:'class' }, { t:'fn', s:' Student' }, { t:'plain', s:' {' },
          { t:'kw', s:'public:' },
          { t:'indent', s:'  ' }, { t:'plain', s:'string name;' },
          { t:'indent', s:'  ' }, { t:'kw', s:'int' }, { t:'plain', s:' age;' },
          { t:'plain', s:'' },
          { t:'indent', s:'  ' }, { t:'kw', s:'void' }, { t:'fn', s:' greet' }, { t:'plain', s:'() {' },
          { t:'indent', s:'    ' }, { t:'plain', s:'cout << ' }, { t:'str', s:'"Hi, I\'m "' }, { t:'plain', s:' << name;' },
          { t:'indent', s:'  ' }, { t:'plain', s:'}' },
          { t:'plain', s:'};' },
        ],
        notes: [
          'A <code>class</code> is a blueprint for objects — it bundles data and behavior.',
          '<code>public:</code> members are accessible outside the class.',
          'Create an object: <code>Student s; s.name = "Alex";</code>',
          'The dot operator <code>.</code> accesses members of an object.',
        ]
      },
      exercise: {
        title: 'Build a Student Class',
        filename: 'main.cpp',
        description: 'Create a <code>Student</code> class with <code>name</code> (string) and <code>grade</code> (char) attributes. Add a <code>display()</code> method that prints both. Create two Student objects and call <code>display()</code> on each.',
        hints: [
          'Declare the class before <code>main()</code>.',
          'Remember to include <code>#include &lt;iostream&gt;</code> and <code>#include &lt;string&gt;</code>.',
          'Set values with dot notation: <code>s.name = "Alice";</code>',
        ],
        starter: `#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    char grade;

    void display() {
        cout << "Student: " << name << ", Grade: " << grade << endl;
    }
};

int main() {
    Student s1;
    s1.name  = "Alice";
    s1.grade = 'A';
    s1.display();

    Student s2;
    s2.name  = "Bob";
    s2.grade = 'B';
    s2.display();

    return 0;
}`,
        expectedOutput: `Student: Alice, Grade: A\nStudent: Bob, Grade: B`,
        testCases: [
          { input: '', expected: 'Alice', points: 'First student shown' },
          { input: '', expected: 'Bob',   points: 'Second student shown' },
        ]
      }
    }
  },

  python: {
    name: 'Python',
    tag: '// python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    level: 'Beginner',
    access: 'Free',
    modules: 8,
    desc: 'Clean syntax, powerful libraries, and endless possibilities. Python is the go-to language for data science, automation, and modern web backends. Start from zero and build real projects from day one.',
    curriculum: [
      { num: 1, title: 'Introduction to Python',  meta: '2 videos · 1 exercise' },
      { num: 2, title: 'Variables & Data Types',   meta: '2 videos · 1 exercise' },
      { num: 3, title: 'Control Flow',             meta: '3 videos · 2 exercises' },
      { num: 4, title: 'Functions',                meta: '2 videos · 2 exercises' },
      { num: 5, title: 'Lists & Tuples',           meta: '2 videos · 1 exercise' },
      { num: 6, title: 'Dictionaries & Sets',      meta: '2 videos · 1 exercise' },
      { num: 7, title: 'File I/O',                 meta: '2 videos · 1 exercise' },
      { num: 8, title: 'Modules & Packages',       meta: '2 videos · 1 exercise' },
    ],
    lesson: {
      video1: {
        title: 'Why Python?',
        code: [
          { t:'comment', s:'# Your first Python program' },
          { t:'fn', s:'print' }, { t:'plain', s:'(' }, { t:'str', s:'"Hello, World!"' }, { t:'plain', s:')' },
          { t:'plain', s:'' },
          { t:'plain', s:'name = ' }, { t:'str', s:'"Alex"' },
          { t:'plain', s:'age  = ' }, { t:'num', s:'20' },
          { t:'fn', s:'print' }, { t:'plain', s:'(' }, { t:'str', s:'f"My name is {name}, I am {age}"' }, { t:'plain', s:')' },
        ],
        notes: [
          'Python reads almost like English — no semicolons or curly braces needed.',
          '<code>print()</code> outputs text to the terminal.',
          'f-strings (<code>f"..."</code>) embed variables directly inside strings — very powerful.',
          'Python is used in AI/ML, data science, web backends (Django/Flask), and scripting.',
        ]
      },
      video2: {
        title: 'Lists & Loops',
        code: [
          { t:'plain', s:'fruits = [' }, { t:'str', s:'"apple"' }, { t:'plain', s:', ' }, { t:'str', s:'"banana"' }, { t:'plain', s:', ' }, { t:'str', s:'"mango"' }, { t:'plain', s:']' },
          { t:'plain', s:'' },
          { t:'kw', s:'for' }, { t:'plain', s:' fruit ' }, { t:'kw', s:'in' }, { t:'plain', s:' fruits:' },
          { t:'indent', s:'    ' }, { t:'fn', s:'print' }, { t:'plain', s:'(' }, { t:'str', s:'f"I like {fruit}"' }, { t:'plain', s:')' },
          { t:'plain', s:'' },
          { t:'fn', s:'print' }, { t:'plain', s:'(' }, { t:'str', s:'f"Total: {len(fruits)}"' }, { t:'plain', s:')' },
        ],
        notes: [
          'Lists use square brackets <code>[]</code> and can store any mix of types.',
          '<code>for item in list:</code> iterates over every element automatically.',
          '<code>len()</code> returns the number of items in a list.',
          'Lists are mutable — you can add, remove, and change items after creation.',
        ]
      },
      exercise: {
        title: 'FizzBuzz',
        filename: 'main.py',
        description: 'Write a Python script that prints numbers 1 to 20. For multiples of 3 print <code>"Fizz"</code>, for multiples of 5 print <code>"Buzz"</code>, and for multiples of both print <code>"FizzBuzz"</code>.',
        hints: [
          'Use <code>range(1, 21)</code> to loop from 1 to 20 inclusive.',
          'Check the most specific condition first: <code>if n % 3 == 0 and n % 5 == 0</code>.',
          'The modulo operator <code>%</code> gives the remainder of division.',
        ],
        starter: `for i in range(1, 21):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`,
        expectedOutput: `1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz`,
        testCases: [
          { input: '', expected: 'Fizz',     points: 'Multiples of 3 → Fizz' },
          { input: '', expected: 'Buzz',     points: 'Multiples of 5 → Buzz' },
          { input: '', expected: 'FizzBuzz', points: 'Multiples of 15 → FizzBuzz' },
        ]
      }
    }
  },

  html: {
    name: 'HTML',
    tag: '// html',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 'Beginner',
    access: 'Free',
    modules: 5,
    desc: 'The building block of every website on the internet. Learn how to structure content, work with semantic HTML5 elements, forms, and accessibility best practices. The first step to becoming a web developer.',
    curriculum: [
      { num: 1, title: 'Introduction to HTML',      meta: '2 videos · 1 exercise' },
      { num: 2, title: 'Text Elements & Headings',  meta: '2 videos · 1 exercise' },
      { num: 3, title: 'Links & Images',            meta: '2 videos · 1 exercise' },
      { num: 4, title: 'Lists & Tables',            meta: '2 videos · 2 exercises' },
      { num: 5, title: 'Forms & Inputs',            meta: '3 videos · 2 exercises' },
    ],
    lesson: {
      video1: {
        title: 'HTML Structure',
        code: [
          { t:'str', s:'<!DOCTYPE html>' },
          { t:'kw', s:'<html' }, { t:'plain', s:' lang=' }, { t:'str', s:'"en"' }, { t:'kw', s:'>' },
          { t:'indent', s:'  ' }, { t:'kw', s:'<head>' },
          { t:'indent', s:'    ' }, { t:'kw', s:'<title>' }, { t:'plain', s:'My Page' }, { t:'kw', s:'</title>' },
          { t:'indent', s:'  ' }, { t:'kw', s:'</head>' },
          { t:'indent', s:'  ' }, { t:'kw', s:'<body>' },
          { t:'indent', s:'    ' }, { t:'kw', s:'<h1>' }, { t:'plain', s:'Hello World' }, { t:'kw', s:'</h1>' },
          { t:'indent', s:'    ' }, { t:'kw', s:'<p>' }, { t:'plain', s:'My first paragraph.' }, { t:'kw', s:'</p>' },
          { t:'indent', s:'  ' }, { t:'kw', s:'</body>' },
          { t:'kw', s:'</html>' },
        ],
        notes: [
          '<code>&lt;!DOCTYPE html&gt;</code> tells browsers this is HTML5.',
          '<code>&lt;head&gt;</code> contains metadata (invisible); <code>&lt;body&gt;</code> contains visible content.',
          'Tags come in pairs: opening <code>&lt;tag&gt;</code> and closing <code>&lt;/tag&gt;</code>.',
          'Indentation is for readability only — browsers ignore whitespace between tags.',
        ]
      },
      video2: {
        title: 'Common Tags',
        code: [
          { t:'kw', s:'<h1>' }, { t:'plain', s:'Main Heading' }, { t:'kw', s:'</h1>' },
          { t:'kw', s:'<p>' }, { t:'plain', s:'A paragraph of text.' }, { t:'kw', s:'</p>' },
          { t:'plain', s:'' },
          { t:'kw', s:'<a' }, { t:'plain', s:' href=' }, { t:'str', s:'"https://algorius.id"' }, { t:'kw', s:'>' }, { t:'plain', s:'Visit' }, { t:'kw', s:'</a>' },
          { t:'plain', s:'' },
          { t:'kw', s:'<img' }, { t:'plain', s:' src=' }, { t:'str', s:'"logo.png"' }, { t:'plain', s:' alt=' }, { t:'str', s:'"Logo"' }, { t:'kw', s:' />' },
        ],
        notes: [
          '<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> define headings in decreasing importance.',
          '<code>&lt;a href="url"&gt;</code> creates a clickable hyperlink.',
          '<code>&lt;img src="..." alt="..."&gt;</code> embeds images — <code>alt</code> is required for accessibility.',
          'Self-closing tags like <code>&lt;img /&gt;</code> and <code>&lt;br /&gt;</code> don\'t need a closing tag.',
        ]
      },
      exercise: {
        title: 'Build a Profile Page',
        filename: 'index.html',
        description: 'Create an HTML page with: an <code>&lt;h1&gt;</code> with your name, a <code>&lt;p&gt;</code> with a short bio, and an <code>&lt;a&gt;</code> link to your favourite website. Make sure the structure is valid.',
        hints: [
          'Start with the full boilerplate: DOCTYPE, html, head, and body tags.',
          'Put content inside <code>&lt;body&gt;</code>.',
          'For the link: <code>&lt;a href="https://example.com"&gt;Link Text&lt;/a&gt;</code>',
        ],
        starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My Profile</title>
</head>
<body>
  <h1>Alex Johnson</h1>
  <p>I'm a beginner programmer learning HTML on Algorius.</p>
  <a href="https://algorius.id">Visit Algorius</a>
</body>
</html>`,
        expectedOutput: `Alex Johnson\nI'm a beginner programmer learning HTML on Algorius.\nVisit Algorius`,
        testCases: [
          { input: '', expected: '<h1>',  points: 'Has heading tag' },
          { input: '', expected: '<p>',   points: 'Has paragraph tag' },
          { input: '', expected: 'href=', points: 'Has a link' },
        ]
      }
    }
  },

  css: {
    name: 'CSS',
    tag: '// css',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    level: 'Beginner',
    access: 'Free',
    modules: 7,
    desc: 'Di course CSS kalian akan diajarkan cara mengatur warna, teks, jarak, tata letak, dan penyesuaian layar agar tampilannya menjadi cantik, dan nyaman dilihat di perangkat apa pun.',
    curriculum: [
      { num: 1, title: 'Introduction to CSS',       meta: '2 videos · 1 exercise' },
      { num: 2, title: 'Selectors & Specificity',   meta: '2 videos · 1 exercise' },
      { num: 3, title: 'Box Model',                 meta: '2 videos · 2 exercises' },
      { num: 4, title: 'Flexbox',                   meta: '3 videos · 2 exercises' },
      { num: 5, title: 'CSS Grid',                  meta: '3 videos · 2 exercises' },
      { num: 6, title: 'Responsive Design',         meta: '2 videos · 2 exercises' },
      { num: 7, title: 'Animations & Transitions',  meta: '2 videos · 1 exercise' },
    ],
    lesson: {
      video1: {
        title: 'CSS Basics',
        code: [
          { t:'comment', s:'/* Basic CSS rule */' },
          { t:'fn', s:'body' }, { t:'plain', s:' {' },
          { t:'indent', s:'  ' }, { t:'plain', s:'background: ' }, { t:'str', s:'#09090e' }, { t:'plain', s:';' },
          { t:'indent', s:'  ' }, { t:'plain', s:'color:      ' }, { t:'str', s:'#e8e8f0' }, { t:'plain', s:';' },
          { t:'indent', s:'  ' }, { t:'plain', s:'font-family: ' }, { t:'str', s:'sans-serif' }, { t:'plain', s:';' },
          { t:'plain', s:'}' },
          { t:'plain', s:'' },
          { t:'fn', s:'h1' }, { t:'plain', s:' { color: ' }, { t:'str', s:'#4ade80' }, { t:'plain', s:'; font-size: ' }, { t:'num', s:'2rem' }, { t:'plain', s:'; }' },
        ],
        notes: [
          'CSS rules = selector + <code>{ property: value; }</code> pairs.',
          'Colors: hex (<code>#4ade80</code>), RGB (<code>rgb(74,222,128)</code>), or named (<code>green</code>).',
          'CSS cascades — later rules override earlier ones of equal specificity.',
          'Link CSS to HTML with <code>&lt;link rel="stylesheet" href="style.css" /&gt;</code> in <code>&lt;head&gt;</code>.',
        ]
      },
      video2: {
        title: 'Flexbox Layout',
        code: [
          { t:'fn', s:'.container' }, { t:'plain', s:' {' },
          { t:'indent', s:'  ' }, { t:'plain', s:'display:         ' }, { t:'str', s:'flex' }, { t:'plain', s:';' },
          { t:'indent', s:'  ' }, { t:'plain', s:'align-items:     ' }, { t:'str', s:'center' }, { t:'plain', s:';' },
          { t:'indent', s:'  ' }, { t:'plain', s:'justify-content: ' }, { t:'str', s:'space-between' }, { t:'plain', s:';' },
          { t:'indent', s:'  ' }, { t:'plain', s:'gap:             ' }, { t:'num', s:'16px' }, { t:'plain', s:';' },
          { t:'plain', s:'}' },
        ],
        notes: [
          '<code>display: flex</code> turns a container into a flex container.',
          '<code>justify-content</code> controls horizontal axis; <code>align-items</code> the vertical.',
          '<code>gap</code> adds spacing between flex children without margin hacks.',
          '<code>flex: 1</code> on a child makes it grow to fill available space equally.',
        ]
      },
      exercise: {
        title: 'Style a Card Component',
        filename: 'style.css',
        description: 'Write CSS for a <code>.card</code> class: dark background (<code>#111119</code>), <code>24px</code> padding, <code>12px</code> border-radius, a subtle border, and a box-shadow. Then centre the card on the page using flexbox on <code>body</code>.',
        hints: [
          'Use <code>border: 1px solid rgba(255,255,255,0.08);</code> for a subtle border.',
          'Shadow: <code>box-shadow: 0 4px 24px rgba(0,0,0,0.5);</code>',
          'Centre: <code>body { display: flex; align-items: center; justify-content: center; min-height: 100vh; }</code>',
        ],
        starter: `/* Style the card component */
body {
  background: #09090e;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}

.card {
  background: #111119;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 4px 24px rgba(0,0,0,0.5);
  color: #e8e8f0;
  width: 320px;
}`,
        expectedOutput: `body { display: flex }\n.card { background: #111119 }\nborder-radius: 12px`,
        testCases: [
          { input: '', expected: 'border-radius', points: 'Card has border-radius' },
          { input: '', expected: 'box-shadow',    points: 'Card has box-shadow' },
          { input: '', expected: 'display: flex', points: 'Body uses flexbox' },
        ]
      }
    }
  },

  js: {
    name: 'JavaScript',
    tag: '// javascript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 'Intermediate',
    access: 'Premium',
    modules: 9,
    desc: 'Make the web interactive, dynamic, and alive. JavaScript powers everything from simple dropdowns to complex SPAs. Learn modern ES6+ syntax, DOM manipulation, async programming, and real-world project patterns.',
    curriculum: [
      { num: 1, title: 'Introduction to JavaScript', meta: '2 videos · 1 exercise' },
      { num: 2, title: 'Variables & Data Types',     meta: '2 videos · 1 exercise' },
      { num: 3, title: 'Functions & Scope',          meta: '3 videos · 2 exercises' },
      { num: 4, title: 'DOM Manipulation',           meta: '3 videos · 2 exercises' },
      { num: 5, title: 'Events',                     meta: '2 videos · 2 exercises' },
      { num: 6, title: 'Arrays & Objects',           meta: '3 videos · 2 exercises' },
      { num: 7, title: 'Async & Promises',           meta: '3 videos · 2 exercises' },
      { num: 8, title: 'Fetch & APIs',               meta: '2 videos · 2 exercises' },
      { num: 9, title: 'ES6+ Features',              meta: '3 videos · 1 exercise' },
    ],
    lesson: {
      video1: {
        title: 'What is JavaScript?',
        code: [
          { t:'comment', s:'// Variables' },
          { t:'kw', s:'let' }, { t:'plain', s:' name  = ' }, { t:'str', s:'"Alex"' }, { t:'plain', s:';' },
          { t:'kw', s:'const' }, { t:'plain', s:' age = ' }, { t:'num', s:'20' }, { t:'plain', s:';' },
          { t:'plain', s:'' },
          { t:'comment', s:'// Output' },
          { t:'plain', s:'console.' }, { t:'fn', s:'log' }, { t:'plain', s:'(' }, { t:'str', s:'`Hello ${name}!`' }, { t:'plain', s:');' },
          { t:'plain', s:'' },
          { t:'comment', s:'// DOM interaction' },
          { t:'plain', s:'document.' }, { t:'fn', s:'getElementById' }, { t:'plain', s:'(' }, { t:'str', s:'"btn"' }, { t:'plain', s:')' },
          { t:'indent', s:'  ' }, { t:'plain', s:'.' }, { t:'fn', s:'addEventListener' }, { t:'plain', s:'(' }, { t:'str', s:'"click"' }, { t:'plain', s:', () => {' },
          { t:'indent', s:'    ' }, { t:'fn', s:'alert' }, { t:'plain', s:'(' }, { t:'str', s:'"Clicked!"' }, { t:'plain', s:');' },
          { t:'indent', s:'  ' }, { t:'plain', s:'});' },
        ],
        notes: [
          '<code>let</code> and <code>const</code> are modern variable declarations — prefer <code>const</code> by default.',
          '<code>console.log()</code> prints to the browser DevTools console.',
          'Template literals (<code>`...${}`</code>) are the cleanest way to embed values in strings.',
          'JavaScript runs directly in the browser — no compilation needed.',
        ]
      },
      video2: {
        title: 'Arrow Functions',
        code: [
          { t:'comment', s:'// Classic function' },
          { t:'kw', s:'function' }, { t:'fn', s:' add' }, { t:'plain', s:'(a, b) { ' }, { t:'kw', s:'return' }, { t:'plain', s:' a + b; }' },
          { t:'plain', s:'' },
          { t:'comment', s:'// Arrow function' },
          { t:'kw', s:'const' }, { t:'fn', s:' multiply' }, { t:'plain', s:' = (a, b) => a * b;' },
          { t:'plain', s:'' },
          { t:'comment', s:'// Array method with arrow' },
          { t:'kw', s:'const' }, { t:'plain', s:' nums = [' }, { t:'num', s:'1' }, { t:'plain', s:','}, { t:'num', s:'2' }, { t:'plain', s:','}, { t:'num', s:'3' }, { t:'plain', s:'];' },
          { t:'kw', s:'const' }, { t:'plain', s:' doubled = nums.' }, { t:'fn', s:'map' }, { t:'plain', s:'(n => n * ' }, { t:'num', s:'2' }, { t:'plain', s:');' },
        ],
        notes: [
          'Arrow functions <code>(a, b) => a + b</code> are concise alternatives to <code>function</code>.',
          'Single-expression arrows can omit the <code>return</code> keyword and braces.',
          'Arrow functions don\'t have their own <code>this</code> — important in class methods.',
          '<code>map()</code>, <code>filter()</code>, <code>reduce()</code> use arrow functions heavily.',
        ]
      },
      exercise: {
        title: 'Array Transformation',
        filename: 'main.js',
        description: 'Given the array <code>const scores = [45, 82, 91, 67, 55, 78];</code>, use array methods to: (1) filter scores ≥ 70, (2) multiply each passing score by 1.1, and (3) log the result.',
        hints: [
          'Chain methods: <code>scores.filter(...).map(...)</code>',
          'Filter: <code>.filter(s => s >= 70)</code>',
          'Map: <code>.map(s => Math.round(s * 1.1))</code>',
        ],
        starter: `const scores = [45, 82, 91, 67, 55, 78];

// 1. Filter: keep only scores >= 70
// 2. Map: multiply each by 1.1 (round to nearest integer)
// 3. Log the result

const result = scores
  .filter(s => s >= 70)
  .map(s => Math.round(s * 1.1));

console.log(result);`,
        expectedOutput: `[90, 100, 86]`,
        testCases: [
          { input: '', expected: '90',  points: '82 * 1.1 = 90' },
          { input: '', expected: '100', points: '91 * 1.1 = 100' },
          { input: '', expected: '86',  points: '78 * 1.1 = 86' },
        ]
      }
    }
  },

  sql: {
    name: 'SQL',
    tag: '// sql',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    level: 'Intermediate',
    access: 'Premium',
    modules: 6,
    desc: 'Query, manage, and master relational databases. SQL is an essential skill for developers, analysts, and data engineers. Learn SELECT, JOINs, aggregations, subqueries, and database design from scratch.',
    curriculum: [
      { num: 1, title: 'Introduction to SQL',   meta: '2 videos · 1 exercise' },
      { num: 2, title: 'SELECT & Filtering',    meta: '2 videos · 2 exercises' },
      { num: 3, title: 'Sorting & Aggregation', meta: '2 videos · 2 exercises' },
      { num: 4, title: 'JOINs',                 meta: '3 videos · 2 exercises' },
      { num: 5, title: 'Subqueries',            meta: '2 videos · 1 exercise' },
      { num: 6, title: 'Database Design',       meta: '2 videos · 1 exercise' },
    ],
    lesson: {
      video1: {
        title: 'Databases & Tables',
        code: [
          { t:'comment', s:'-- Create a table' },
          { t:'kw', s:'CREATE TABLE' }, { t:'plain', s:' students (' },
          { t:'indent', s:'  ' }, { t:'plain', s:'id    ' }, { t:'kw', s:'INT PRIMARY KEY' }, { t:'plain', s:',' },
          { t:'indent', s:'  ' }, { t:'plain', s:'name  ' }, { t:'str', s:'VARCHAR(100)' }, { t:'plain', s:',' },
          { t:'indent', s:'  ' }, { t:'plain', s:'gpa   ' }, { t:'str', s:'DECIMAL(3,2)' },
          { t:'plain', s:');' },
          { t:'plain', s:'' },
          { t:'comment', s:'-- Select all rows' },
          { t:'kw', s:'SELECT' }, { t:'plain', s:' * ' }, { t:'kw', s:'FROM' }, { t:'plain', s:' students;' },
        ],
        notes: [
          'A database stores structured data in tables — rows (records) and columns (fields).',
          '<code>PRIMARY KEY</code> uniquely identifies each row — every table should have one.',
          '<code>SELECT * FROM table</code> retrieves all columns and rows.',
          'SQL is case-insensitive but convention is UPPERCASE for keywords.',
        ]
      },
      video2: {
        title: 'WHERE & ORDER BY',
        code: [
          { t:'kw', s:'SELECT' }, { t:'plain', s:' name, gpa' },
          { t:'kw', s:'FROM' }, { t:'plain', s:' students' },
          { t:'kw', s:'WHERE' }, { t:'plain', s:' gpa > ' }, { t:'num', s:'3.5' },
          { t:'indent', s:'  ' }, { t:'kw', s:'AND' }, { t:'plain', s:' name ' }, { t:'kw', s:'LIKE' }, { t:'plain', s:' ' }, { t:'str', s:"'A%'" },
          { t:'kw', s:'ORDER BY' }, { t:'plain', s:' gpa ' }, { t:'kw', s:'DESC' }, { t:'plain', s:';' },
        ],
        notes: [
          '<code>WHERE</code> filters rows before they are returned.',
          '<code>LIKE \'A%\'</code> matches any value starting with "A" — <code>%</code> is a wildcard.',
          '<code>ORDER BY ... DESC</code> sorts results high → low; <code>ASC</code> is the default.',
          'Multiple conditions: <code>AND</code> requires both; <code>OR</code> requires either.',
        ]
      },
      exercise: {
        title: 'Query the Students Table',
        filename: 'query.sql',
        description: 'The <code>students</code> table has columns: <code>id</code>, <code>name</code>, <code>gpa</code>, <code>major</code>. Write a query that returns only <code>name</code> and <code>gpa</code> for students with GPA ≥ 3.0, ordered by GPA descending.',
        hints: [
          'List only the columns you need: <code>SELECT name, gpa</code>',
          'Filter with: <code>WHERE gpa >= 3.0</code>',
          'Sort with: <code>ORDER BY gpa DESC</code>',
        ],
        starter: `-- students table: id INT, name VARCHAR, gpa DECIMAL, major VARCHAR

SELECT name, gpa
FROM students
WHERE gpa >= 3.0
ORDER BY gpa DESC;`,
        expectedOutput: `name    | gpa\n--------+------\nAlex    | 3.8\nMaya    | 3.5\nJordan  | 3.2\nRiley   | 3.0`,
        testCases: [
          { input: '', expected: 'SELECT name, gpa', points: 'Correct columns selected' },
          { input: '', expected: 'WHERE gpa >= 3.0', points: 'Correct filter applied' },
          { input: '', expected: 'ORDER BY gpa DESC', points: 'Correct sort order' },
        ]
      }
    }
  },

  java: {
    name: 'Java',
    tag: '// java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    level: 'Intermediate',
    access: 'Premium',
    modules: 8,
    desc: 'Robust, cross-platform object-oriented programming at scale. Java powers Android apps, enterprise backends, and big data systems. Learn OOP principles, collections, exceptions, and real-world application development.',
    curriculum: [
      { num: 1, title: 'Introduction to Java',      meta: '2 videos · 1 exercise' },
      { num: 2, title: 'Variables & Data Types',    meta: '2 videos · 1 exercise' },
      { num: 3, title: 'Control Flow',              meta: '2 videos · 2 exercises' },
      { num: 4, title: 'Classes & Objects',         meta: '3 videos · 2 exercises' },
      { num: 5, title: 'Inheritance & Interfaces',  meta: '3 videos · 2 exercises' },
      { num: 6, title: 'Collections Framework',     meta: '3 videos · 2 exercises' },
      { num: 7, title: 'Exception Handling',        meta: '2 videos · 1 exercise' },
      { num: 8, title: 'File I/O & Streams',        meta: '2 videos · 1 exercise' },
    ],
    lesson: {
      video1: {
        title: 'Java Introduction',
        code: [
          { t:'comment', s:'// HelloWorld.java' },
          { t:'kw', s:'public class' }, { t:'fn', s:' HelloWorld' }, { t:'plain', s:' {' },
          { t:'indent', s:'  ' }, { t:'kw', s:'public static void' }, { t:'fn', s:' main' }, { t:'plain', s:'(String[] args) {' },
          { t:'indent', s:'    ' }, { t:'plain', s:'System.out.' }, { t:'fn', s:'println' }, { t:'plain', s:'(' }, { t:'str', s:'"Hello, Java!"' }, { t:'plain', s:');' },
          { t:'indent', s:'  ' }, { t:'plain', s:'}' },
          { t:'plain', s:'}' },
        ],
        notes: [
          'Java is statically typed, compiled (to bytecode), and runs on the JVM.',
          'Every Java program is a class. The filename must match the class name exactly.',
          '<code>public static void main(String[] args)</code> is the entry point of any Java app.',
          '<code>System.out.println()</code> prints text with a newline; <code>print()</code> without.',
        ]
      },
      video2: {
        title: 'Variables & Types',
        code: [
          { t:'kw', s:'int' }, { t:'plain', s:'    age     = ' }, { t:'num', s:'20' }, { t:'plain', s:';' },
          { t:'kw', s:'double' }, { t:'plain', s:' gpa     = ' }, { t:'num', s:'3.8' }, { t:'plain', s:';' },
          { t:'kw', s:'boolean' }, { t:'plain', s:' enrolled = ' }, { t:'kw', s:'true' }, { t:'plain', s:';' },
          { t:'plain', s:'String  name    = ' }, { t:'str', s:'"Alex"' }, { t:'plain', s:';' },
          { t:'plain', s:'' },
          { t:'plain', s:'System.out.' }, { t:'fn', s:'println' }, { t:'plain', s:'(' }, { t:'str', s:'"Name: "' }, { t:'plain', s:' + name);' },
          { t:'plain', s:'System.out.' }, { t:'fn', s:'printf' }, { t:'plain', s:'(' }, { t:'str', s:'"GPA: %.1f%n"' }, { t:'plain', s:', gpa);' },
        ],
        notes: [
          'Primitive types: <code>int</code>, <code>double</code>, <code>boolean</code>, <code>char</code>.',
          '<code>String</code> is an object type — note the capital S.',
          'String concatenation uses <code>+</code>; <code>printf</code> uses format specifiers like C.',
          '<code>final</code> makes a variable a constant — equivalent to <code>const</code> in other languages.',
        ]
      },
      exercise: {
        title: 'Simple Calculator',
        filename: 'Calculator.java',
        description: 'Create a <code>Calculator</code> class with three <code>static</code> methods: <code>add(a, b)</code>, <code>subtract(a, b)</code>, and <code>multiply(a, b)</code>. In <code>main()</code>, call all three with values 5 and 3 and print the results.',
        hints: [
          'Methods: <code>public static int add(int a, int b) { return a + b; }</code>',
          'Call from main: <code>System.out.println(add(5, 3));</code>',
          'The class name must match the filename: <code>Calculator.java</code>',
        ],
        starter: `public class Calculator {

    public static int add(int a, int b) {
        return a + b;
    }

    public static int subtract(int a, int b) {
        return a - b;
    }

    public static int multiply(int a, int b) {
        return a * b;
    }

    public static void main(String[] args) {
        System.out.println("add(5,3)      = " + add(5, 3));
        System.out.println("subtract(5,3) = " + subtract(5, 3));
        System.out.println("multiply(5,3) = " + multiply(5, 3));
    }
}`,
        expectedOutput: `add(5,3)      = 8\nsubtract(5,3) = 2\nmultiply(5,3) = 15`,
        testCases: [
          { input: '', expected: '= 8',  points: 'add(5,3) = 8' },
          { input: '', expected: '= 2',  points: 'subtract(5,3) = 2' },
          { input: '', expected: '= 15', points: 'multiply(5,3) = 15' },
        ]
      }
    }
  }
};

// ============================================================
// STATE
// ============================================================
let currentCourse  = 'c';
let videoTimers    = {};
let videoProgress  = { 1: 0, 2: 0 };
let videoPlaying   = { 1: false, 2: false };

// ============================================================
// PAGE NAVIGATION
// ============================================================
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  closeDropdown();
  closeMobileMenu();

  // show/hide back-to-top & scroll-progress only on scrollable pages
  const noScroll = ['lesson'];
  const btt = document.getElementById('back-to-top');
  if (btt) btt.style.display = noScroll.includes(pageId) ? 'none' : '';

  // active nav link highlight
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('onclick')?.match(/showPage\('([^']+)'\)/)?.[1];
    link.classList.toggle('nav-link-active', linkPage === pageId);
  });

  // init pages on first visit
  if (pageId === 'leaderboard') renderLeaderboard(currentLBFilter || 'all');
  if (pageId === 'compiler') initCompiler();
}

// ============================================================
// SCROLL PROGRESS + BACK TO TOP
// ============================================================
window.addEventListener('scroll', () => {
  // progress bar
  const bar = document.getElementById('scroll-progress');
  if (bar) {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = pct + '%';
  }
  // back to top visibility
  const btt = document.getElementById('back-to-top');
  if (btt) btt.classList.toggle('visible', window.scrollY > 400);
  // navbar shadow
  const nav = document.getElementById('navbar');
  if (nav) nav.style.background = window.scrollY > 20
    ? 'rgba(9,9,14,0.97)' : 'rgba(9,9,14,0.85)';
}, { passive: true });

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// MOBILE HAMBURGER
// ============================================================
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.getElementById('hamburger');
  if (!menu) return;
  const open = menu.classList.toggle('open');
  if (btn) btn.innerHTML = open ? '✕' : '☰';
}
function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.getElementById('hamburger');
  if (!menu) return;
  menu.classList.remove('open');
  if (btn) btn.innerHTML = '☰';
}

// ============================================================
// COURSES DROPDOWN
// ============================================================
function toggleDropdown() {
  const menu  = document.getElementById('dropdown-menu');
  const arrow = document.getElementById('drop-arrow');
  if (!menu) return;
  const isOpen = menu.classList.contains('open');
  if (isOpen) {
    menu.classList.remove('open');
    if (arrow) arrow.style.transform = 'rotate(0deg)';
  } else {
    menu.classList.add('open');
    if (arrow) arrow.style.transform = 'rotate(180deg)';
  }
}
function closeDropdown() {
  const menu  = document.getElementById('dropdown-menu');
  const arrow = document.getElementById('drop-arrow');
  if (!menu) return;
  menu.classList.remove('open');
  if (arrow) arrow.style.transform = 'rotate(0deg)';
}
document.addEventListener('click', e => {
  const dd = document.querySelector('.courses-dropdown');
  if (dd && !dd.contains(e.target)) closeDropdown();
});

// ============================================================
// COURSE DETAIL
// ============================================================
function showCourse(courseKey) {
  const course = courseData[courseKey];
  if (!course) { showToast('Course not found'); return; }
  currentCourse = courseKey;

  document.getElementById('cd-tag').textContent   = course.tag;
  document.getElementById('cd-title').textContent = course.name;
  document.getElementById('cd-desc').textContent  = course.desc;
  document.getElementById('cd-modules-count').textContent = course.modules;
  document.getElementById('cd-breadcrumb').textContent    = course.name;

  // Level badge colour
  const lb = document.getElementById('cd-level-badge');
  lb.textContent = course.level;
  lb.className = 'cd-level-badge ' + (course.level === 'Beginner' ? 'badge-beginner' : 'badge-intermediate');

  // Access badge
  const ab = document.getElementById('cd-access-badge');
  ab.textContent = course.access;
  ab.className = 'cd-stat cd-access ' + (course.access === 'Free' ? 'access-free' : 'access-premium');

  // Icon
  document.getElementById('cd-icon').innerHTML =
    `<img src="${course.icon}" alt="${course.name}" />`;

  // Curriculum
  const currList = document.getElementById('curriculum-list');
  currList.innerHTML = course.curriculum.map(item => `
    <div class="curr-item" onclick="showLesson('${courseKey}', ${item.num - 1})">
      <div class="curr-num">${String(item.num).padStart(2,'0')}</div>
      <div class="curr-title">${item.title}</div>
      <div class="curr-meta">${item.meta}</div>
      <div class="curr-arrow">→</div>
    </div>
  `).join('');

  showPage('course-detail');
}

// ============================================================
// LESSON PAGE
// ============================================================
function showLesson(courseKey, moduleIndex) {
  courseKey   = courseKey   || currentCourse;
  moduleIndex = moduleIndex || 0;
  const course = courseData[courseKey];
  if (!course) return;
  currentCourse = courseKey;

  // Reset video state
  videoProgress = { 1: 0, 2: 0 };
  videoPlaying  = { 1: false, 2: false };
  Object.values(videoTimers).forEach(clearInterval);
  videoTimers = {};

  // Sidebar header
  document.getElementById('ls-lang').textContent   = course.name;
  document.getElementById('ls-module').textContent = course.curriculum[moduleIndex]?.title || course.curriculum[0].title;
  document.getElementById('lesson-mob-course').textContent = course.name;

  // Sidebar nav (only the 3 fixed panels)
  document.getElementById('ls-nav').innerHTML = `
    <button class="ls-item active" onclick="switchLesson('video1', this)">📺 Video 1</button>
    <button class="ls-item"        onclick="switchLesson('video2', this)">📺 Video 2</button>
    <button class="ls-item"        onclick="switchLesson('exercise', this)">⌨️ Exercise</button>
  `;

  // Populate video panels
  populateVideo(1, course.lesson.video1, course);
  populateVideo(2, course.lesson.video2, course);
  populateExercise(course.lesson.exercise, course);

  // Reset to video1
  switchLesson('video1', null);
  showPage('lesson');
}

function populateVideo(num, data, course) {
  // Title
  const titleEl = document.getElementById(`lc-title-video${num}`);
  if (titleEl) titleEl.textContent = data.title;

  // Code block
  const codeEl = document.getElementById(`vp-code-${num}`);
  if (codeEl) {
    codeEl.innerHTML = data.code.map(token => {
      if (token.t === 'comment') return `<div class="vp-line"><span class="code-comment">${token.s}</span></div>`;
      if (token.t === 'plain')   return token.s === '' ? '<div class="vp-line">&nbsp;</div>' : `<span class="vp-inline">${escHtml(token.s)}</span>`;
      if (token.t === 'indent')  return `<span class="vp-inline">${token.s}</span>`;
      return `<span class="code-${token.t}">${escHtml(token.s)}</span>`;
    }).reduce((acc, cur, i, arr) => {
      // Group inline spans into lines
      return acc + cur;
    }, '');

    // Re-render: build lines properly
    let lines = [];
    let line = [];
    data.code.forEach(token => {
      if (token.t === 'comment') {
        if (line.length) { lines.push(line); line = []; }
        lines.push([{ t:'comment', s: token.s }]);
      } else if (token.t === 'plain' && token.s === '') {
        if (line.length) { lines.push(line); line = []; }
        lines.push([]);
      } else {
        line.push(token);
      }
    });
    if (line.length) lines.push(line);

    codeEl.innerHTML = lines.map(tokens => {
      if (!tokens.length) return '<div class="vp-line">&nbsp;</div>';
      const html = tokens.map(t => {
        if (t.t === 'comment') return `<span class="code-comment">${escHtml(t.s)}</span>`;
        if (t.t === 'indent')  return t.s; // whitespace
        return `<span class="code-${t.t}">${escHtml(t.s)}</span>`;
      }).join('');
      return `<div class="vp-line">${html}</div>`;
    }).join('');
  }

  // Notes
  const notesEl = document.getElementById(`lc-notes-video${num}`);
  if (notesEl) {
    notesEl.innerHTML = `
      <div class="lc-notes-inner">
        <h4>Key Takeaways</h4>
        <ul>${data.notes.map(n => `<li>${n}</li>`).join('')}</ul>
      </div>`;
  }

  // Reset overlay
  const overlay = document.getElementById(`vp-overlay-${num}`);
  if (overlay) { overlay.style.opacity = '1'; overlay.style.pointerEvents = 'auto'; }
  const fill = document.getElementById(`vp-fill-${num}`);
  if (fill) fill.style.width = '0%';
  const ctrl = document.getElementById(`vp-ctrl-${num}`);
  if (ctrl) ctrl.textContent = '▶';
  const playBtn = document.getElementById(`play-btn${num}`);
  if (playBtn) playBtn.textContent = '▶';
  const timeEl = document.getElementById(`vp-time-${num}`);
  if (timeEl) timeEl.textContent = '0:00 / 10:00';
}

function populateExercise(ex, course) {
  document.getElementById('lc-title-exercise').textContent = ex.title;
  document.getElementById('ex-title').textContent = ex.title;
  document.getElementById('ex-desc').innerHTML = ex.description;
  document.getElementById('editor-filename').textContent = ex.filename;

  document.getElementById('ex-hints').innerHTML = `
    <h4>Hints</h4>
    <ol>${ex.hints.map(h => `<li>${h}</li>`).join('')}</ol>
  `;

  // Set starter code (plain text, not HTML)
  const editor = document.getElementById('code-editor');
  editor.textContent = ex.starter;

  // Store for run/submit
  editor.dataset.expected = ex.expectedOutput;
  editor.dataset.course   = course.tag;
  editor.dataset.tests    = JSON.stringify(ex.testCases);

  // Reset output
  const out = document.getElementById('editor-output');
  if (out) out.style.display = 'none';
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ============================================================
// LESSON SWITCHING
// ============================================================
function switchLesson(lessonId, btn) {
  document.querySelectorAll('.lesson-content').forEach(c => c.classList.remove('active'));
  const target = document.getElementById('lesson-' + lessonId);
  if (target) target.classList.add('active');

  document.querySelectorAll('.ls-item').forEach(b => b.classList.remove('active'));
  if (btn) {
    btn.classList.add('active');
  } else {
    const map = { video1: 0, video2: 1, exercise: 2 };
    document.querySelectorAll('.ls-item')[map[lessonId]]?.classList.add('active');
  }

  // Close mobile sidebar
  closeLessonSidebar();
}

// ============================================================
// LESSON SIDEBAR (mobile)
// ============================================================
function toggleLessonSidebar() {
  const sb = document.getElementById('lesson-sidebar');
  if (sb) sb.classList.toggle('open');
}
function closeLessonSidebar() {
  const sb = document.getElementById('lesson-sidebar');
  if (sb) sb.classList.remove('open');
}

// ============================================================
// VIDEO PLAYER (simulated)
// ============================================================
function togglePlay(num) {
  const overlay = document.getElementById(`vp-overlay-${num}`);
  const ctrl    = document.getElementById(`vp-ctrl-${num}`);
  const playBtn = document.getElementById(`play-btn${num}`);
  const fill    = document.getElementById(`vp-fill-${num}`);
  const timeEl  = document.getElementById(`vp-time-${num}`);

  if (videoPlaying[num]) {
    // Pause
    videoPlaying[num] = false;
    clearInterval(videoTimers[num]);
    if (overlay) { overlay.style.opacity='1'; overlay.style.pointerEvents='auto'; }
    if (ctrl)    ctrl.textContent = '▶';
    if (playBtn) playBtn.textContent = '▶';
    showToast('⏸ Paused');
  } else {
    // Play
    videoPlaying[num] = true;
    if (overlay) { overlay.style.opacity='0'; overlay.style.pointerEvents='none'; }
    if (ctrl)    ctrl.textContent = '⏸';
    if (playBtn) playBtn.textContent = '⏸';
    showToast('▶ Playing');

    const totalSecs = 600; // 10 min
    videoTimers[num] = setInterval(() => {
      videoProgress[num] = Math.min(videoProgress[num] + 0.5, 100);
      if (fill)   fill.style.width = videoProgress[num] + '%';
      if (timeEl) timeEl.textContent = formatTime(videoProgress[num] / 100 * totalSecs) + ' / 10:00';
      if (videoProgress[num] >= 100) {
        clearInterval(videoTimers[num]);
        videoPlaying[num] = false;
        if (overlay) { overlay.style.opacity='1'; overlay.style.pointerEvents='auto'; }
        if (ctrl)    ctrl.textContent = '▶';
        if (playBtn) playBtn.textContent = '↺';
        showToast('✓ Video complete!');
        // mark sidebar item done
        const idx = num === 1 ? 0 : 1;
        document.querySelectorAll('.ls-item')[idx]?.classList.add('completed');
      }
    }, 200);
  }
}

function seekVideo(event, num) {
  const bar  = event.currentTarget;
  const pct  = event.offsetX / bar.offsetWidth * 100;
  videoProgress[num] = pct;
  const fill = document.getElementById(`vp-fill-${num}`);
  if (fill) fill.style.width = pct + '%';
  const timeEl = document.getElementById(`vp-time-${num}`);
  if (timeEl) timeEl.textContent = formatTime(pct / 100 * 600) + ' / 10:00';
}

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2,'0')}`;
}

// ============================================================
// CODE EDITOR
// ============================================================
function runCode() {
  const editor  = document.getElementById('code-editor');
  const output  = document.getElementById('editor-output');
  const content = document.getElementById('eo-content');
  if (!editor || !output || !content) return;

  output.style.display = 'block';
  content.innerHTML = '<span style="color:var(--text-muted)">Running…</span>';
  showToast('▶ Running code…');

  const code     = editor.textContent || editor.innerText || '';
  const expected = editor.dataset.expected || '';
  const tests    = JSON.parse(editor.dataset.tests || '[]');

  setTimeout(() => {
    // Simulate: check if code roughly contains expected patterns
    let lines = expected.split('\\n');
    // Show simulated output
    content.innerHTML =
      `<span style="color:var(--green)">✓ Compiled successfully</span>\n` +
      lines.map(l => `<span style="color:var(--text)">${escHtml(l)}</span>`).join('\n') +
      `\n<span style="color:var(--text-dim)">Process exited with code 0</span>`;
    showToast('✓ Code ran');
  }, 500);
}

function submitCode() {
  const editor = document.getElementById('code-editor');
  const output = document.getElementById('editor-output');
  const content = document.getElementById('eo-content');
  if (!editor || !output || !content) return;

  output.style.display = 'block';
  content.innerHTML = '<span style="color:var(--text-muted)">Submitting…</span>';

  const code  = editor.textContent || editor.innerText || '';
  const tests = JSON.parse(editor.dataset.tests || '[]');

  setTimeout(() => {
    const results = tests.map(tc => {
      // Simple check: does code contain expected string?
      const pass = code.length > 20; // non-empty reasonable submission
      return `<span style="color:${pass ? 'var(--green)' : 'var(--red)'}">
        ${pass ? '✓' : '✗'} ${tc.points}</span>`;
    });

    content.innerHTML =
      results.join('\n') +
      `\n<span style="color:var(--green)">🎉 Exercise complete! +50 XP</span>`;

    document.querySelectorAll('.ls-item')[2]?.classList.add('completed');
    showToast('🎉 Exercise submitted!');
  }, 700);
}

function resetCode() {
  const course = courseData[currentCourse];
  if (!course) return;
  const editor = document.getElementById('code-editor');
  if (editor) {
    editor.textContent = course.lesson.exercise.starter;
    document.getElementById('editor-output').style.display = 'none';
    showToast('Code reset ↺');
  }
}

function closeOutput() {
  const out = document.getElementById('editor-output');
  if (out) out.style.display = 'none';
}

// ============================================================
// FORM VALIDATION
// ============================================================
function clearErrors(fields) {
  fields.forEach(id => {
    const errEl   = document.getElementById('err-' + id);
    const inputEl = document.getElementById(id);
    if (errEl)   errEl.textContent = '';
    if (inputEl) inputEl.classList.remove('input-error');
  });
}
function setError(id, msg) {
  const errEl   = document.getElementById('err-' + id);
  const inputEl = document.getElementById(id);
  if (errEl)   errEl.textContent = msg;
  if (inputEl) inputEl.classList.add('input-error');
}

function validateSignup() {
  const fields = ['su-username','su-password','su-confirm','su-email','su-agree'];
  clearErrors(fields);

  const username = document.getElementById('su-username').value.trim();
  const password = document.getElementById('su-password').value;
  const confirm  = document.getElementById('su-confirm').value;
  const email    = document.getElementById('su-email').value.trim();
  const agreed   = document.getElementById('su-agree').checked;
  let valid = true;

  if (!username)          { setError('su-username','✖ Username is required'); valid=false; }
  else if (username.length < 3) { setError('su-username','✖ Min. 3 characters'); valid=false; }
  else if (/\s/.test(username)) { setError('su-username','✖ No spaces allowed'); valid=false; }

  if (!password)          { setError('su-password','✖ Password is required'); valid=false; }
  else if (password.length < 8) { setError('su-password','✖ Min. 8 characters'); valid=false; }

  if (!confirm)           { setError('su-confirm','✖ Please confirm password'); valid=false; }
  else if (confirm !== password) { setError('su-confirm','✖ Passwords do not match'); valid=false; }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email)             { setError('su-email','✖ Email is required'); valid=false; }
  else if (!emailRe.test(email)) { setError('su-email','✖ Enter a valid email'); valid=false; }

  if (!agreed)            { setError('su-agree','✖ Please agree to the Terms'); valid=false; }

  if (valid) {
    showToast('🎉 Account created! Welcome to Algorius.');
    setTimeout(() => showPage('courses'), 1000);
  }
}

function validateLogin() {
  const fields = ['li-identifier','li-password'];
  clearErrors(fields);

  const identifier = document.getElementById('li-identifier').value.trim();
  const password   = document.getElementById('li-password').value;
  let valid = true;

  if (!identifier) { setError('li-identifier','✖ Username or email required'); valid=false; }
  if (!password)   { setError('li-password','✖ Password is required'); valid=false; }
  else if (password.length < 8) { setError('li-password','✖ Min. 8 characters'); valid=false; }

  if (valid) {
    showToast('✓ Logged in! Welcome back.');
    setTimeout(() => showPage('courses'), 1000);
  }
}

// ============================================================
// AUTH TABS
// ============================================================
function switchTab(tab) {
  ['signup','login'].forEach(t => {
    document.getElementById('tab-' + t)?.classList.remove('active');
    document.getElementById('form-' + t)?.classList.remove('active');
  });
  document.getElementById('tab-'  + tab)?.classList.add('active');
  document.getElementById('form-' + tab)?.classList.add('active');
  // Clear errors
  document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
  document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
}

// ============================================================
// PAYMENT METHODS
// ============================================================
document.addEventListener('click', e => {
  const btn = e.target.closest('.pm-btn');
  if (btn) {
    document.querySelectorAll('.pm-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
});

function showPaymentSuccess() {
  showToast('🎉 Payment successful! Welcome to Algorius Premium!');
  setTimeout(() => showPage('courses'), 1500);
}

// ============================================================
// TOAST
// ============================================================
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2600);
}

// ============================================================
// HERO CODE RAIN
// ============================================================
function initCodeRain() {
  const container = document.getElementById('code-rain');
  if (!container || container.children.length > 0) return;

  const snippets = [
    'int','main()','printf','return','while','for','if','else',
    '#include','void','class','def','import','const','let','var',
    'function','SELECT','FROM','WHERE','JOIN','{ }','[ ]','=>',
    '0xFF','NULL','true','false','&&','||','!='
  ];

  const cols = Math.floor(window.innerWidth / 60);
  for (let i = 0; i < cols; i++) {
    const col = document.createElement('div');
    col.className = 'code-rain-col';
    col.style.left            = (i * 60 + Math.random() * 20) + 'px';
    col.style.animationDuration = (8 + Math.random() * 12) + 's';
    col.style.animationDelay   = (-Math.random() * 20) + 's';
    col.style.fontSize          = (10 + Math.random() * 4) + 'px';
    col.style.opacity           = (0.2 + Math.random() * 0.4).toString();
    col.textContent = snippets[Math.floor(Math.random() * snippets.length)];
    container.appendChild(col);
  }
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initCodeRain();

  // Scroll-triggered fade-in for static cards (home page only, no opacity:0 pre-set)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.why-card, .featured-card').forEach(el => {
    el.classList.add('fade-in-target');
    observer.observe(el);
  });

  initCompiler();
  initLeaderboard();
  initAboutTeam();
});

// ============================================================
// COMPILER PAGE
// ============================================================

// ============================================================
// TOKENIZER — shared by all simulators
// Splits source into: string literals, numbers, identifiers, operators, punctuation
// ============================================================
function tokenize(src) {
  const tokens = [];
  let i = 0;
  while (i < src.length) {
    // Skip line comments
    if (src[i] === '/' && src[i+1] === '/') {
      while (i < src.length && src[i] !== '\n') i++;
      continue;
    }
    // Skip block comments
    if (src[i] === '/' && src[i+1] === '*') {
      i += 2;
      while (i < src.length && !(src[i] === '*' && src[i+1] === '/')) i++;
      i += 2;
      continue;
    }
    // Skip hash-comments (Python)
    if (src[i] === '#') {
      while (i < src.length && src[i] !== '\n') i++;
      continue;
    }
    // Newline
    if (src[i] === '\n') { tokens.push({ type: 'newline' }); i++; continue; }
    // Whitespace
    if (src[i] === ' ' || src[i] === '\t' || src[i] === '\r') { i++; continue; }
    // String: double-quoted
    if (src[i] === '"') {
      let s = '';
      i++; // skip opening "
      while (i < src.length && src[i] !== '"') {
        if (src[i] === '\\' && i+1 < src.length) {
          const esc = src[i+1];
          if (esc === 'n') s += '\n';
          else if (esc === 't') s += '\t';
          else if (esc === '\\') s += '\\';
          else if (esc === '"') s += '"';
          else s += src[i+1];
          i += 2;
        } else {
          s += src[i]; i++;
        }
      }
      i++; // skip closing "
      tokens.push({ type: 'string', value: s });
      continue;
    }
    // String: single-quoted (Python/JS)
    if (src[i] === "'") {
      let s = '';
      i++;
      while (i < src.length && src[i] !== "'") {
        if (src[i] === '\\' && i+1 < src.length) {
          const esc = src[i+1];
          if (esc === 'n') s += '\n';
          else if (esc === 't') s += '\t';
          else s += src[i+1];
          i += 2;
        } else { s += src[i]; i++; }
      }
      i++;
      tokens.push({ type: 'string', value: s });
      continue;
    }
    // Template literal (JS)  `...${expr}...`
    if (src[i] === '`') {
      let s = '';
      i++;
      while (i < src.length && src[i] !== '`') {
        if (src[i] === '$' && src[i+1] === '{') {
          // collect expression inside ${}
          i += 2;
          let expr = '';
          let depth = 1;
          while (i < src.length && depth > 0) {
            if (src[i] === '{') depth++;
            else if (src[i] === '}') { depth--; if (depth === 0) { i++; break; } }
            expr += src[i]; i++;
          }
          s += '\x00EXPR\x00' + expr + '\x00'; // placeholder
        } else if (src[i] === '\\' && i+1 < src.length) {
          const esc = src[i+1];
          if (esc === 'n') s += '\n';
          else if (esc === 't') s += '\t';
          else s += src[i+1];
          i += 2;
        } else { s += src[i]; i++; }
      }
      i++;
      tokens.push({ type: 'template', raw: s });
      continue;
    }
    // f-string (Python)  f"...{expr}..."  or  f'...'
    if ((src[i] === 'f' || src[i] === 'F') && (src[i+1] === '"' || src[i+1] === "'")) {
      const q = src[i+1];
      i += 2;
      let s = '';
      while (i < src.length && src[i] !== q) {
        if (src[i] === '{' && src[i+1] !== '{') {
          i++;
          let expr = '';
          let depth = 1;
          while (i < src.length && depth > 0) {
            if (src[i] === '{') depth++;
            else if (src[i] === '}') { depth--; if (depth === 0) { i++; break; } }
            expr += src[i]; i++;
          }
          // strip format spec  :  .2f  etc
          const colonIdx = expr.indexOf(':');
          if (colonIdx !== -1) expr = expr.slice(0, colonIdx);
          s += '\x00EXPR\x00' + expr.trim() + '\x00';
        } else if (src[i] === '\\' && i+1 < src.length) {
          const esc = src[i+1];
          if (esc === 'n') s += '\n';
          else if (esc === 't') s += '\t';
          else s += src[i+1];
          i += 2;
        } else { s += src[i]; i++; }
      }
      i++;
      tokens.push({ type: 'template', raw: s });
      continue;
    }
    // Numbers (int or float)
    if ((src[i] >= '0' && src[i] <= '9') || (src[i] === '-' && src[i+1] >= '0' && src[i+1] <= '9' && tokens.length && ['op','punct','newline'].includes(tokens[tokens.length-1]?.type))) {
      let n = '';
      if (src[i] === '-') { n += '-'; i++; }
      while (i < src.length && ((src[i] >= '0' && src[i] <= '9') || src[i] === '.' || src[i] === 'f')) {
        if (src[i] !== 'f') n += src[i];
        i++;
      }
      tokens.push({ type: 'number', value: parseFloat(n) });
      continue;
    }
    // Identifiers / keywords
    if ((src[i] >= 'a' && src[i] <= 'z') || (src[i] >= 'A' && src[i] <= 'Z') || src[i] === '_') {
      let w = '';
      while (i < src.length && ((src[i] >= 'a' && src[i] <= 'z') || (src[i] >= 'A' && src[i] <= 'Z') || (src[i] >= '0' && src[i] <= '9') || src[i] === '_')) {
        w += src[i]; i++;
      }
      tokens.push({ type: 'ident', value: w });
      continue;
    }
    // Two-char operators
    if (i+1 < src.length) {
      const two = src[i] + src[i+1];
      if (['==','!=','<=','>=','&&','||','++','--','+=','-=','*=','/=','<<','>>'].includes(two)) {
        tokens.push({ type: 'op', value: two }); i += 2; continue;
      }
    }
    // Single-char punctuation / operators
    const ch = src[i];
    if ('(){}[];,'.includes(ch)) { tokens.push({ type: 'punct', value: ch }); i++; continue; }
    if ('=+-*/<>!%&|^~'.includes(ch)) { tokens.push({ type: 'op', value: ch }); i++; continue; }
    // anything else (e.g. : . @)
    tokens.push({ type: 'other', value: ch }); i++;
  }
  return tokens;
}

// ============================================================
// EXPRESSION EVALUATOR — resolves arithmetic & variable lookups
// ============================================================
function evalExpr(expr, env) {
  expr = expr.trim();
  if (!expr) return '';

  // Try JS eval with env variables injected — safe subset only (numbers, strings, basic ops)
  // Build a tiny scope string
  try {
    const safeKeys = Object.keys(env).filter(k => /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(k));
    const scope = safeKeys.map(k => {
      const v = env[k];
      if (typeof v === 'string') return `var ${k} = ${JSON.stringify(v)};`;
      if (typeof v === 'number') return `var ${k} = ${v};`;
      if (Array.isArray(v)) return `var ${k} = ${JSON.stringify(v)};`;
      return '';
    }).join(' ');
    // Only allow safe expressions (no function calls that could do harm)
    // Strip anything that looks dangerous
    const safe = expr
      .replace(/\bimport\b|\brequire\b|\beval\b|\bFunction\b|\bwindow\b|\bdocument\b|\bprocess\b/g, '0');
    // eslint-disable-next-line no-new-func
    const result = new Function(scope + ' return (' + safe + ');')();
    if (result === undefined || result === null) return '';
    if (typeof result === 'number') {
      // Format nicely: avoid floating garbage like 3.8000000001
      return Number.isInteger(result) ? String(result) : parseFloat(result.toFixed(6)).toString();
    }
    return String(result);
  } catch {
    // fallback: just look it up directly
    if (expr in env) return String(env[expr]);
    return expr;
  }
}

// ============================================================
// VARIABLE EXTRACTOR — walks token stream and builds env map
// Handles: int/float/double/char/String x = val;
//          x = val;   (reassignment)
//          Python: x = val
//          JS: let/const/var x = val
// ============================================================
function extractVars(tokens) {
  const env = {};
  const C_TYPES = new Set(['int','float','double','char','long','short','unsigned','bool','string','String']);
  const SKIP_KW  = new Set(['if','else','while','for','return','printf','print','cout','System','void','class','public','static','include','using','namespace','def','import','from','and','or','not','True','False','None']);

  let i = 0;
  while (i < tokens.length) {
    const tok = tokens[i];

    // C/C++ typed declaration:  int x = 10;  or  int x = 10, y = 20;
    if (tok.type === 'ident' && C_TYPES.has(tok.value) && !SKIP_KW.has(tok.value)) {
      i++;
      // skip pointer/ref chars
      while (i < tokens.length && tokens[i].type === 'op' && '*&'.includes(tokens[i].value)) i++;
      // could be  char name[] = ...
      while (i < tokens.length && tokens[i].type === 'ident') {
        const varName = tokens[i].value;
        i++;
        // skip array brackets []
        if (i < tokens.length && tokens[i].type === 'punct' && tokens[i].value === '[') {
          while (i < tokens.length && tokens[i].value !== ']') i++;
          i++; // skip ]
        }
        // assignment
        if (i < tokens.length && tokens[i].type === 'op' && tokens[i].value === '=') {
          i++; // skip =
          const valTokens = [];
          // collect until ; or , or newline
          while (i < tokens.length && !(tokens[i].type === 'punct' && (tokens[i].value === ';' || tokens[i].value === ',')) && tokens[i].type !== 'newline') {
            valTokens.push(tokens[i]); i++;
          }
          env[varName] = resolveValTokens(valTokens, env);
        }
        // skip comma → next var in same declaration
        if (i < tokens.length && tokens[i].type === 'punct' && tokens[i].value === ',') { i++; continue; }
        break;
      }
      continue;
    }

    // JS: let/const/var x = val
    if (tok.type === 'ident' && (tok.value === 'let' || tok.value === 'const' || tok.value === 'var')) {
      i++;
      if (i < tokens.length && tokens[i].type === 'ident') {
        const varName = tokens[i].value; i++;
        if (i < tokens.length && tokens[i].type === 'op' && tokens[i].value === '=') {
          i++;
          const valTokens = [];
          while (i < tokens.length && !(tokens[i].type === 'punct' && tokens[i].value === ';') && tokens[i].type !== 'newline') {
            valTokens.push(tokens[i]); i++;
          }
          env[varName] = resolveValTokens(valTokens, env);
        }
      }
      continue;
    }

    // Python / plain assignment:  x = val  (ident followed by =)
    if (tok.type === 'ident' && !SKIP_KW.has(tok.value) && !C_TYPES.has(tok.value)) {
      if (i+1 < tokens.length && tokens[i+1].type === 'op' && tokens[i+1].value === '=') {
        // make sure it's not == (already split above)
        const varName = tok.value;
        i += 2; // skip ident and =
        const valTokens = [];
        while (i < tokens.length && !(tokens[i].type === 'punct' && tokens[i].value === ';') && tokens[i].type !== 'newline') {
          valTokens.push(tokens[i]); i++;
        }
        env[varName] = resolveValTokens(valTokens, env);
        continue;
      }
    }

    i++;
  }
  return env;
}

// Turn a slice of tokens into an actual JS value
function resolveValTokens(valTokens, env) {
  if (!valTokens.length) return '';
  // Single string literal
  if (valTokens.length === 1 && valTokens[0].type === 'string') return valTokens[0].value;
  // Single number
  if (valTokens.length === 1 && valTokens[0].type === 'number') return valTokens[0].value;
  // Single ident — look up
  if (valTokens.length === 1 && valTokens[0].type === 'ident') {
    const v = valTokens[0].value;
    if (v === 'true' || v === 'True') return true;
    if (v === 'false' || v === 'False') return false;
    if (v === 'null' || v === 'NULL' || v === 'None') return null;
    return env[v] !== undefined ? env[v] : v;
  }
  // Array literal [ ... ]
  if (valTokens[0].type === 'punct' && valTokens[0].value === '[') {
    const items = [];
    let j = 1;
    while (j < valTokens.length && !(valTokens[j].type === 'punct' && valTokens[j].value === ']')) {
      const chunk = [];
      while (j < valTokens.length && !(valTokens[j].type === 'punct' && (valTokens[j].value === ',' || valTokens[j].value === ']'))) {
        chunk.push(valTokens[j]); j++;
      }
      if (chunk.length) items.push(resolveValTokens(chunk, env));
      if (j < valTokens.length && valTokens[j].value === ',') j++;
    }
    return items;
  }
  // Rebuild as expression string and evaluate
  const exprStr = valTokens.map(t => {
    if (t.type === 'string') return JSON.stringify(t.value);
    if (t.type === 'number') return String(t.value);
    if (t.type === 'ident') return t.value;
    return t.value || '';
  }).join(' ');
  return evalExpr(exprStr, env);
}

// ============================================================
// FORMAT SPECIFIER RESOLVER — handles %d %s %f %.2f %c etc.
// Takes a format string and an ordered list of already-resolved arg values
// ============================================================
function applyFormatSpecifiers(fmt, argValues) {
  let argIdx = 0;
  let out = '';
  let i = 0;
  while (i < fmt.length) {
    if (fmt[i] === '%') {
      i++;
      if (i >= fmt.length) break;
      if (fmt[i] === '%') { out += '%'; i++; continue; }
      // Read optional flags/width/precision: e.g. %.1f, %5d, %-10s
      let spec = '';
      while (i < fmt.length && '0123456789.-+ #'.includes(fmt[i])) { spec += fmt[i]; i++; }
      const conv = fmt[i] || ''; i++;
      const val = argIdx < argValues.length ? argValues[argIdx++] : 0;
      const num = typeof val === 'number' ? val : parseFloat(val);
      if (conv === 'd' || conv === 'i') {
        out += isNaN(num) ? String(val) : Math.trunc(num).toString();
      } else if (conv === 'f' || conv === 'F') {
        const decimals = spec.includes('.') ? parseInt(spec.split('.')[1]) || 6 : 6;
        out += isNaN(num) ? String(val) : num.toFixed(decimals);
      } else if (conv === 'e' || conv === 'E') {
        out += isNaN(num) ? String(val) : num.toExponential();
      } else if (conv === 'g' || conv === 'G') {
        out += isNaN(num) ? String(val) : parseFloat(num.toPrecision(6)).toString();
      } else if (conv === 's') {
        const s = val === null || val === undefined ? '' : String(val);
        if (spec) {
          const width = parseInt(spec.replace(/[^0-9]/g, ''));
          out += spec.startsWith('-') ? s.padEnd(width) : s.padStart(width);
        } else {
          out += s;
        }
      } else if (conv === 'c') {
        if (typeof val === 'string') out += val[0] || '';
        else out += isNaN(num) ? '' : String.fromCharCode(Math.trunc(num));
      } else if (conv === 'n') {
        // %n in Java printf means newline
        out += '\n';
      } else {
        out += '%' + spec + conv;
      }
    } else {
      out += fmt[i]; i++;
    }
  }
  return out;
}

// ============================================================
// ARG LIST PARSER — splits a raw arg-list string like  name, age, gpa
// into individual expression strings, respecting nested parens/brackets
// ============================================================
function splitArgList(src) {
  const args = [];
  let current = '';
  let depth = 0;
  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    if ((ch === '(' || ch === '[' || ch === '{') ) depth++;
    else if ((ch === ')' || ch === ']' || ch === '}')) depth--;
    if (ch === ',' && depth === 0) {
      args.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim()) args.push(current.trim());
  return args;
}

// ============================================================
// EXTRACT PRINT CALLS — language agnostic call finder
// Returns array of { funcName, argsRaw } from the token stream
// ============================================================
function extractCalls(tokens, funcNames) {
  const calls = [];
  let i = 0;
  while (i < tokens.length) {
    // Match:  funcName  (  ...args...  )
    if (tokens[i].type === 'ident' && funcNames.includes(tokens[i].value)) {
      const fn = tokens[i].value;
      i++;
      // optional member access chain like System.out.println — skip dots and idents
      while (i < tokens.length && tokens[i].type === 'other' && tokens[i].value === '.') {
        i++; // skip dot
        if (i < tokens.length && tokens[i].type === 'ident') i++; // skip member
      }
      if (i < tokens.length && tokens[i].type === 'punct' && tokens[i].value === '(') {
        i++; // skip (
        // collect everything until matching )
        let depth = 1;
        const argTokens = [];
        while (i < tokens.length && depth > 0) {
          if (tokens[i].type === 'punct' && tokens[i].value === '(') depth++;
          else if (tokens[i].type === 'punct' && tokens[i].value === ')') { depth--; if (depth === 0) { i++; break; } }
          argTokens.push(tokens[i]); i++;
        }
        calls.push({ fn, argTokens });
        continue;
      }
    }
    i++;
  }
  return calls;
}

// Reconstruct a raw string from arg tokens (for splitting)
function argTokensToStr(argTokens) {
  return argTokens.map(t => {
    if (t.type === 'string')   return '"' + t.value.replace(/\n/g,'\\n').replace(/\t/g,'\\t').replace(/"/g,'\\"') + '"';
    if (t.type === 'template') return '`' + t.raw + '`';
    if (t.type === 'number')   return String(t.value);
    if (t.type === 'newline')  return ' ';
    return t.value !== undefined ? t.value : '';
  }).join('');
}

// ============================================================
// RESOLVE A SINGLE ARGUMENT EXPRESSION using env
// ============================================================
function resolveArg(argStr, env) {
  argStr = argStr.trim();
  // Quoted string literal
  if ((argStr.startsWith('"') && argStr.endsWith('"')) ||
      (argStr.startsWith("'") && argStr.endsWith("'"))) {
    return argStr.slice(1, -1).replace(/\\n/g, '\n').replace(/\\t/g, '\t');
  }
  // Template / f-string token was stored with EXPR placeholders → resolve each
  if (argStr.startsWith('`') && argStr.endsWith('`')) {
    return resolveTemplate(argStr.slice(1, -1), env);
  }
  // Number literal
  if (!isNaN(argStr) && argStr !== '') return parseFloat(argStr);
  // Boolean / null
  if (argStr === 'true' || argStr === 'True') return true;
  if (argStr === 'false' || argStr === 'False') return false;
  if (argStr === 'null' || argStr === 'NULL' || argStr === 'None') return null;
  // Evaluate as expression (arithmetic, variable lookup, etc.)
  return evalExpr(argStr, env);
}

function resolveTemplate(raw, env) {
  // raw contains \x00EXPR\x00 expr \x00 placeholders
  const parts = raw.split('\x00');
  let out = '';
  let j = 0;
  while (j < parts.length) {
    if (parts[j] === 'EXPR') {
      j++;
      const exprStr = parts[j] || '';
      j++;
      out += String(evalExpr(exprStr, env));
    } else {
      out += parts[j];
      j++;
    }
  }
  return out;
}

// ============================================================
// PER-LANGUAGE SIMULATORS
// ============================================================

function simulateC(code) {
  const tokens = tokenize(code);
  const env = extractVars(tokens);
  const calls = extractCalls(tokens, ['printf']);
  const output = [];

  for (const { argTokens } of calls) {
    const raw = argTokensToStr(argTokens);
    const args = splitArgList(raw);
    if (!args.length) continue;

    const firstTok = argTokens.find(t => t.type === 'string' || t.type === 'template');
    let fmt;
    if (firstTok) {
      fmt = firstTok.type === 'template' ? resolveTemplate(firstTok.raw, env) : firstTok.value;
    } else {
      fmt = resolveArg(args[0], env);
    }

    // Resolve remaining args
    const resolved = args.slice(1).map(a => resolveArg(a, env));
    const line = applyFormatSpecifiers(String(fmt), resolved);
    // Split on embedded \n
    const parts = line.split('\n');
    for (let k = 0; k < parts.length; k++) {
      if (k < parts.length - 1) output.push(parts[k]);
      else if (parts[k]) output.push(parts[k]);
    }
  }

  if (!output.length) output.push('(no output — add printf() to see results)');
  return { success: true, output: output.join('\n'), lang: 'C' };
}

function simulateCpp(code) {
  const tokens = tokenize(code);
  const env = extractVars(tokens);
  const output = [];

  // Walk tokens looking for:  cout  << expr1 << expr2 << ... << endl ;
  let i = 0;
  while (i < tokens.length) {
    if (tokens[i].type === 'ident' && tokens[i].value === 'cout') {
      i++;
      let line = '';
      let hasEndl = false;
      while (i < tokens.length) {
        // expect <<
        if (!(tokens[i].type === 'op' && tokens[i].value === '<<')) break;
        i++; // skip <<
        if (i >= tokens.length) break;
        const t = tokens[i];
        if (t.type === 'ident' && (t.value === 'endl' || t.value === '\\n')) {
          hasEndl = true; i++; break;
        }
        if (t.type === 'string') { line += t.value; i++; }
        else if (t.type === 'template') { line += resolveTemplate(t.raw, env); i++; }
        else {
          // Expression — collect until next << or ; or endl
          const exprToks = [];
          while (i < tokens.length) {
            const cur = tokens[i];
            if (cur.type === 'op' && cur.value === '<<') break;
            if (cur.type === 'punct' && cur.value === ';') break;
            if (cur.type === 'ident' && cur.value === 'endl') break;
            exprToks.push(cur); i++;
          }
          const exprStr = exprToks.map(t2 => {
            if (t2.type === 'string') return JSON.stringify(t2.value);
            if (t2.type === 'number') return String(t2.value);
            return t2.value || '';
          }).join(' ');
          line += String(evalExpr(exprStr, env));
        }
      }
      // Check for explicit \n in the line
      const parts = line.split('\n');
      for (let k = 0; k < parts.length; k++) {
        if (k < parts.length - 1) output.push(parts[k]);
        else if (parts[k] !== '') output.push(parts[k]);
      }
      if (hasEndl && parts[parts.length - 1] !== '') {
        // endl already ended the line — do nothing extra, the push above handles it
      } else if (!hasEndl && parts.length === 1) {
        // no newline yet — will be joined
      }
      continue;
    }
    // Also handle printf in C++
    if (tokens[i].type === 'ident' && tokens[i].value === 'printf') {
      const result = simulateC(code);
      output.push(...result.output.split('\n'));
      break;
    }
    i++;
  }

  if (!output.length) output.push('(no output — add cout << or printf() to see results)');
  return { success: true, output: output.join('\n'), lang: 'C++' };
}

function simulatePython(code) {
  const tokens = tokenize(code);
  const env = extractVars(tokens);
  const calls = extractCalls(tokens, ['print']);
  const output = [];

  for (const { argTokens } of calls) {
    const raw = argTokensToStr(argTokens);
    const args = splitArgList(raw);
    if (!args.length) { output.push(''); continue; }

    const parts = [];
    for (const arg of args) {
      const t = argTokens.find(tk => tk.type === 'template');
      if (t && args.length === 1) {
        parts.push(resolveTemplate(t.raw, env));
      } else {
        const val = resolveArg(arg, env);
        if (Array.isArray(val)) parts.push('[' + val.join(', ') + ']');
        else parts.push(val === null ? 'None' : String(val));
      }
    }
    const line = parts.join(' ');
    const sublines = line.split('\n');
    for (const sl of sublines) output.push(sl);
  }

  if (!output.length) output.push('(no output — add print() to see results)');
  return { success: true, output: output.join('\n'), lang: 'Python' };
}

function simulateJS(code) {
  // For JavaScript, we can actually use the Function constructor safely
  // since it's already in the browser. Intercept console.log.
  const output = [];
  try {
    const originalLog = console.log;
    const lines = [];
    // Override console.log temporarily
    const fakeLog = (...args) => {
      lines.push(args.map(a => {
        if (Array.isArray(a)) return '[' + a.join(', ') + ']';
        if (a === null) return 'null';
        if (a === undefined) return 'undefined';
        return String(a);
      }).join(' '));
    };
    // Sanitize: remove dangerous APIs
    const safe = code
      .replace(/\bfetch\b/g, 'void')
      .replace(/\bXMLHttpRequest\b/g, 'Object')
      .replace(/\blocalStorage\b/g, '{}')
      .replace(/\bsessionStorage\b/g, '{}')
      .replace(/\bdocument\b/g, '{}')
      .replace(/\bwindow\b/g, '{}')
      .replace(/\beval\b/g, 'void');
    // eslint-disable-next-line no-new-func
    new Function('console', safe)({ log: fakeLog, error: fakeLog, warn: fakeLog });
    output.push(...lines);
  } catch (err) {
    return { success: false, error: err.message, lang: 'JavaScript' };
  }
  if (!output.length) output.push('(no output — add console.log() to see results)');
  return { success: true, output: output.join('\n'), lang: 'JavaScript' };
}

function simulateJava(code) {
  const tokens = tokenize(code);
  const env = extractVars(tokens);
  // Java: System.out.println / System.out.print / System.out.printf
  // extractCalls finds 'println', 'print', 'printf' after skipping System.out
  const calls = extractCalls(tokens, ['println', 'print', 'printf']);
  const output = [];

  for (const { fn, argTokens } of calls) {
    const raw = argTokensToStr(argTokens);
    const args = splitArgList(raw);
    if (!args.length) { if (fn === 'println') output.push(''); continue; }

    if (fn === 'printf') {
      // Same as C printf
      const firstTok = argTokens.find(t => t.type === 'string');
      let fmt = firstTok ? firstTok.value : resolveArg(args[0], env);
      const resolved = args.slice(1).map(a => resolveArg(a, env));
      const line = applyFormatSpecifiers(String(fmt), resolved);
      const parts = line.split('\n');
      for (let k = 0; k < parts.length; k++) {
        if (k < parts.length - 1) output.push(parts[k]);
        else if (parts[k]) output.push(parts[k]);
      }
    } else {
      // println / print: concat all args with + operator already evaluated
      const resolved = resolveArg(args[0], env);
      const line = resolved === null ? 'null' : String(resolved);
      const parts = line.split('\n');
      for (const sl of parts) {
        if (sl !== '' || fn === 'println') output.push(sl);
      }
      if (fn === 'println' && !line.endsWith('\n') && parts[parts.length-1] === '') {
        // already pushed empty above
      }
    }
  }

  if (!output.length) output.push('(no output — add System.out.println() to see results)');
  return { success: true, output: output.join('\n'), lang: 'Java' };
}

// ============================================================
// COMPILER TEMPLATES (starter code only — simulate fns above)
// ============================================================
const compilerTemplates = {
  c: {
    filename: 'main.c',
    code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");

    // Try modifying this code
    int x = 10;
    int y = 20;
    printf("Sum: %d\\n", x + y);

    return 0;
}`,
    simulate: simulateC
  },
  cpp: {
    filename: 'main.cpp',
    code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;

    // Variables and arithmetic
    int a = 15, b = 4;
    cout << "a + b = " << (a + b) << endl;
    cout << "a / b = " << (a / b) << endl;

    return 0;
}`,
    simulate: simulateCpp
  },
  python: {
    filename: 'main.py',
    code: `# Python playground
print("Hello, Python!")

# Lists and loops
fruits = ["apple", "banana", "mango"]
for fruit in fruits:
    print(f"I like {fruit}")

# Simple calculation
result = 55
print(f"Sum 1-10: {result}")`,
    simulate: simulatePython
  },
  js: {
    filename: 'main.js',
    code: `// JavaScript playground
console.log("Hello, JavaScript!");

// Array methods
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

// Template literals
const name = "Algorius";
console.log(\`Welcome to \${name}!\`);`,
    simulate: simulateJS
  },
  java: {
    filename: 'Main.java',
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");

        // Variables
        int x = 10;
        double pi = 3.14159;
        String name = "Algorius";

        System.out.println("Name: " + name);
        System.out.println("x = " + x);
        System.out.printf("Pi = %.2f%n", pi);
    }
}`,
    simulate: simulateJava
  }
};

let currentCompilerLang = 'c';

function initCompiler() {
  const editor = document.getElementById('compiler-code-editor');
  if (!editor) return;
  const tpl = compilerTemplates[currentCompilerLang];
  editor.textContent = tpl.code;
  document.getElementById('compiler-filename').textContent = tpl.filename;
}

function switchCompilerLang(lang, btn) {
  currentCompilerLang = lang;
  document.querySelectorAll('.clang-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const tpl = compilerTemplates[lang];
  const editor = document.getElementById('compiler-code-editor');
  if (editor) editor.textContent = tpl.code;
  const fn = document.getElementById('compiler-filename');
  if (fn) fn.textContent = tpl.filename;
  clearCompilerOutput();
}

function runCompilerCode() {
  const editor = document.getElementById('compiler-code-editor');
  const outputBody = document.getElementById('compiler-output-body');
  if (!editor || !outputBody) return;

  outputBody.innerHTML = '<span style="color:var(--text-muted)">Compiling…</span>';
  showToast('▶ Running…');

  const code = editor.textContent || editor.innerText || '';
  const tpl = compilerTemplates[currentCompilerLang];

  setTimeout(() => {
    const result = tpl.simulate(code);
    if (result.success) {
      outputBody.innerHTML =
        `<span style="color:var(--green)">✓ Compiled (${result.lang}) — Process exited with code 0</span>\n` +
        `<span style="color:var(--text-dim)">─────────────────────────────────────</span>\n` +
        `<span style="color:var(--text)">${escHtml(result.output)}</span>`;
    } else {
      outputBody.innerHTML = `<span style="color:var(--red)">✗ Error: ${escHtml(result.error)}</span>`;
    }
    showToast('✓ Done');
  }, 400);
}

function resetCompilerCode() {
  const tpl = compilerTemplates[currentCompilerLang];
  const editor = document.getElementById('compiler-code-editor');
  if (editor) editor.textContent = tpl.code;
  clearCompilerOutput();
  showToast('↺ Reset');
}

function clearCompilerOutput() {
  const ob = document.getElementById('compiler-output-body');
  if (ob) ob.innerHTML = '<span class="compiler-output-placeholder">// Click "Run" to execute your code</span>';
}

// ============================================================
// IMPROVED EXERCISE RUNNER (language-aware)
// ============================================================
function runCode() {
  const editor  = document.getElementById('code-editor');
  const output  = document.getElementById('editor-output');
  const content = document.getElementById('eo-content');
  if (!editor || !output || !content) return;

  output.style.display = 'block';
  content.innerHTML = '<span style="color:var(--text-muted)">Running…</span>';
  showToast('▶ Running code…');

  const code     = editor.textContent || editor.innerText || '';
  const expected = editor.dataset.expected || '';
  const langTag  = editor.dataset.course || '// c';

  // Detect language from course tag
  let lang = 'c';
  if (langTag.includes('python')) lang = 'python';
  else if (langTag.includes('c++') || langTag.includes('cpp')) lang = 'cpp';
  else if (langTag.includes('js') || langTag.includes('javascript')) lang = 'js';
  else if (langTag.includes('java') && !langTag.includes('javascript')) lang = 'java';
  else if (langTag.includes('html')) lang = 'html';
  else if (langTag.includes('sql')) lang = 'sql';

  setTimeout(() => {
    let outputLines = '';

    if (lang === 'html') {
      outputLines = '<span style="color:var(--text-muted); font-style:italic">HTML renders in browser — your markup looks valid!</span>';
    } else if (lang === 'sql') {
      outputLines = '<span style="color:var(--text-muted); font-style:italic">SQL executed — query returned simulated results.</span>';
    } else if (compilerTemplates[lang]) {
      const result = compilerTemplates[lang].simulate(code);
      outputLines = `<span style="color:var(--text)">${escHtml(result.output)}</span>`;
    } else {
      // fallback: show expected
      const lines = expected.split('\\n');
      outputLines = lines.map(l => `<span style="color:var(--text)">${escHtml(l)}</span>`).join('\n');
    }

    content.innerHTML =
      `<span style="color:var(--green)">✓ Compiled successfully</span>\n` +
      `<span style="color:var(--text-dim)">─────────────────</span>\n` +
      outputLines +
      `\n<span style="color:var(--text-dim)">Process exited with code 0</span>`;
    showToast('✓ Code ran');
  }, 500);
}

// ============================================================
// LEADERBOARD
// ============================================================
const leaderboardData = {
  all: [
    { rank:1, name:'ByteWizard',   nim:'231402001', lang:'Python',  exercises:142, xp:7100, streak:45, avatar:'B' },
    { rank:2, name:'CodeNinja',    nim:'231402017', lang:'C++',     exercises:128, xp:6400, streak:32, avatar:'C' },
    { rank:3, name:'PixelCoder',   nim:'231402034', lang:'Java',    exercises:119, xp:5950, streak:28, avatar:'P' },
    { rank:4, name:'AlgoQueen',    nim:'231402008', lang:'C',       exercises:104, xp:5200, streak:21, avatar:'A' },
    { rank:5, name:'NullPointer',  nim:'231402025', lang:'Python',  exercises:97,  xp:4850, streak:14, avatar:'N' },
    { rank:6, name:'DebugHero',    nim:'231402041', lang:'JS',      exercises:89,  xp:4450, streak:18, avatar:'D' },
    { rank:7, name:'RecursiveKid', nim:'231402012', lang:'C',       exercises:76,  xp:3800, streak:7,  avatar:'R' },
    { rank:8, name:'SQLMaster',    nim:'231402056', lang:'SQL',     exercises:68,  xp:3400, streak:11, avatar:'S' },
    { rank:9, name:'HTMLHero',     nim:'231402063', lang:'HTML',    exercises:61,  xp:3050, streak:5,  avatar:'H' },
    { rank:10,name:'LoopBreaker',  nim:'231402019', lang:'C++',     exercises:55,  xp:2750, streak:9,  avatar:'L' },
  ],
  month: [
    { rank:1, name:'AlgoQueen',    nim:'231402008', lang:'C',       exercises:52,  xp:2600, streak:21, avatar:'A' },
    { rank:2, name:'ByteWizard',   nim:'231402001', lang:'Python',  exercises:48,  xp:2400, streak:18, avatar:'B' },
    { rank:3, name:'DebugHero',    nim:'231402041', lang:'JS',      exercises:39,  xp:1950, streak:12, avatar:'D' },
    { rank:4, name:'CodeNinja',    nim:'231402017', lang:'C++',     exercises:35,  xp:1750, streak:9,  avatar:'C' },
    { rank:5, name:'PixelCoder',   nim:'231402034', lang:'Java',    exercises:28,  xp:1400, streak:7,  avatar:'P' },
    { rank:6, name:'NullPointer',  nim:'231402025', lang:'Python',  exercises:22,  xp:1100, streak:5,  avatar:'N' },
    { rank:7, name:'SQLMaster',    nim:'231402056', lang:'SQL',     exercises:19,  xp: 950, streak:4,  avatar:'S' },
    { rank:8, name:'RecursiveKid', nim:'231402012', lang:'C',       exercises:16,  xp: 800, streak:3,  avatar:'R' },
  ],
  week: [
    { rank:1, name:'DebugHero',    nim:'231402041', lang:'JS',      exercises:14,  xp: 700, streak:7,  avatar:'D' },
    { rank:2, name:'ByteWizard',   nim:'231402001', lang:'Python',  exercises:11,  xp: 550, streak:5,  avatar:'B' },
    { rank:3, name:'AlgoQueen',    nim:'231402008', lang:'C',       exercises:9,   xp: 450, streak:4,  avatar:'A' },
    { rank:4, name:'HTMLHero',     nim:'231402063', lang:'HTML',    exercises:7,   xp: 350, streak:3,  avatar:'H' },
    { rank:5, name:'LoopBreaker',  nim:'231402019', lang:'C++',     exercises:5,   xp: 250, streak:2,  avatar:'L' },
  ]
};

let currentLBFilter = 'all';

function initLeaderboard() {
  renderLeaderboard('all');
}

function filterLeaderboard(filter, btn) {
  currentLBFilter = filter;
  document.querySelectorAll('.lb-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderLeaderboard(filter);
}

function renderLeaderboard(filter) {
  const data = leaderboardData[filter] || leaderboardData.all;
  renderPodium(data.slice(0, 3));
  renderTable(data);
}

function renderPodium(top3) {
  const el = document.getElementById('lb-podium');
  if (!el || top3.length < 3) return;
  const medals = ['🥇','🥈','🥉'];
  const classes = ['lb-podium-1st', 'lb-podium-2nd', 'lb-podium-3rd'];
  const ranks = ['#1', '#2', '#3'];
  el.innerHTML = top3.map((u, i) => `
    <div class="lb-podium-card ${classes[i]}">
      <span class="lb-podium-rank">${ranks[i]}</span>
      <span class="lb-podium-crown">${medals[i]}</span>
      <div class="lb-podium-avatar">${u.avatar}</div>
      <span class="lb-podium-name">${u.name}</span>
      <span class="lb-podium-nim" style="font-size:11px;color:var(--text-dim)">${u.nim}</span>
      <span class="lb-podium-lang">${u.lang}</span>
      <span class="lb-podium-xp">${u.xp.toLocaleString()} XP</span>
    </div>
  `).join('');
}

function renderTable(data) {
  const el = document.getElementById('lb-table-body');
  if (!el) return;
  // skip top 3 already shown in podium
  const rows = data.slice(3);
  if (!rows.length) {
    el.innerHTML = '<div style="padding:24px; text-align:center; color:var(--text-dim); font-size:13px;">No more entries for this period.</div>';
    return;
  }
  el.innerHTML = rows.map(u => `
    <div class="lb-row">
      <span class="lb-row-rank ${u.rank <= 3 ? 'top3' : ''}">#${u.rank}</span>
      <div class="lb-row-user">
        <div class="lb-row-avatar">${u.avatar}</div>
        <div>
          <div class="lb-row-name">${u.name}</div>
          <div class="lb-row-sub">${u.nim}</div>
        </div>
      </div>
      <span class="lb-row-lang-badge">${u.lang}</span>
      <span class="lb-row-exercises">${u.exercises}</span>
      <span class="lb-row-xp">${u.xp.toLocaleString()}</span>
      <span class="lb-row-streak ${u.streak >= 14 ? 'hot' : ''}">🔥 ${u.streak}d</span>
    </div>
  `).join('');
}

// ============================================================
// ABOUT TEAM
// ============================================================
const teamMembers = [
  { name: 'Ketua Tim',       nim: '231402XXX', role: 'Team Lead',        avatar: 'K' },
  { name: 'Anggota 1',       nim: '231402XXX', role: 'Frontend Dev',     avatar: 'A' },
  { name: 'Anggota 2',       nim: '231402XXX', role: 'UI/UX Designer',   avatar: 'B' },
  { name: 'Anggota 3',       nim: '231402XXX', role: 'Content Writer',   avatar: 'C' },
];

function initAboutTeam() {
  const el = document.getElementById('about-team-grid');
  if (!el) return;
  el.innerHTML = teamMembers.map(m => `
    <div class="about-team-card">
      <div class="about-team-avatar">${m.avatar}</div>
      <div class="about-team-name">${m.name}</div>
      <span class="about-team-role">${m.role}</span>
      <span class="about-team-nim">${m.nim}</span>
    </div>
  `).join('');
}
