const courseList = [{
    code : "ACIT 1620",
    name : "Fundamental Web Technologies"
}, 
{ 
    code : "ORGB 1100",
    name : "Organizational Behaviour"
},
{
    code : "COMM 1116",
    name : "Business Communications 1"
}
]

let user_input = 0;

do {
    user_input = prompt(`Enter a four digit number: `)
} while (isNaN(user_input) || user_input.length != 4);

let included = false

for (let course of courseList){
    if (course['code'].includes(user_input)){
        console.log(`Yes, I am taking the course: ${course.code} - ${course.name}`)
        included = true
    }
}

if (included != true){
courseList.push({
    code : user_input,
    name : null
})
console.log(`Added new course ${user_input} to the course list.`)
}
    
