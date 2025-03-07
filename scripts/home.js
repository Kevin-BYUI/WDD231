const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
const courseName = document.querySelector('.course-list');
const allCourses = document.querySelector('.all');
const cseCourses = document.querySelector('.cse');
const wddCourses = document.querySelector('.wdd');

allCourses.addEventListener('click', ()=>{
    courseName.innerHTML = '';
    
    courses.forEach(course=>{
        const div = document.createElement('div');
        div.classList.add('course-item')
        
        const courseDetails = document.createElement('button');
        courseDetails.classList.add('course-details');
       
        const courseDescription = course.subject;
        const courseNumber = course.number;
        courseDetails.innerHTML = `${courseDescription}${courseNumber}`;
        if (course.completed){
            courseDetails.style.backgroundColor = '#641c00'
            courseDetails.style.color = 'white'
        }else{
            courseDetails.style.backgroundColor = 'white'
            courseDetails.style.color = 'black'
        }
        div.appendChild(courseDetails);
        courseName.appendChild(div);   
    })
})
cseCourses.addEventListener('click', ()=>{
    courseName.innerHTML = '';
    courses
        .filter(cse=>cse.subject === 'CSE')
        .forEach(course=>{
            const div = document.createElement('div');
            const button = document.createElement('button')
            button.classList.add('course-details');
            button.innerHTML = `${course.subject}${course.number}`
            if (course.completed){
                button.style.backgroundColor = '#641c00';
                button.style.color = 'white';
            }else{
                button.style.backgroundColor = 'white';
                button.style.color = 'black';

            }
            div.appendChild(button);
            courseName.appendChild(div);
            
        })
})
wddCourses.addEventListener('click', ()=>{
    courseName.innerHTML = '';

    courses
        .filter(wdd=>wdd.subject==='WDD')
        .forEach(wdd=>{
            const wddDiv = document.createElement('div');
            const wddCourseList = document.createElement('button');
            wddCourseList.classList.add('course-details');
            wddCourseList.innerHTML = `${wdd.subject}${wdd.number}`;

            if (wdd.completed){
                wddCourseList.style.backgroundColor = '#641c00';
                wddCourseList.style.color = 'white';
            }else{
                wddCourseList.style.backgroundColor = 'white';
                wddCourseList.style.color = 'black';
            }
            wddDiv.appendChild(wddCourseList);
            courseName.appendChild(wddDiv)


        })
        
})
const openButton = document.querySelector('.hum');
const closeButton = document.querySelector('.close');
const menu = document.querySelector('nav ul');
const copyrightYear = document.querySelector('.copyright-year');
const lastModified = document.querySelector('.last-modified');
const modificationYear = new Date(document.lastModified);

copyrightYear.textContent = `©${modificationYear.getFullYear()} 🎀 Kevin Ouma Ogutu, Kenya 🎀`;
lastModified.textContent = `Last Updated: ${modificationYear.toUTCString()}`;

openButton.addEventListener('click', ()=>{
    openButton.classList.add('hidden');
    closeButton.classList.remove('hidden');
    menu.classList.add('open');
})
closeButton.addEventListener('click', ()=>{
    openButton.classList.remove('hidden');
    closeButton.classList.add('hidden');
    menu.classList.remove('open')
})