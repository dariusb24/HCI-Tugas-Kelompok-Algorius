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
});
