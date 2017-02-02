// Given the following array of objects:
function StudentsAndInstructors(){
var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
    ]
  for(var i=0; i<students.length; i++){
  console.log(students[i].first_name, students[i].last_name);
  }
}
StudentsAndInstructors();

function StudentsAndInstructors2(){
var users = {
  'students': [
     {first_name:  'Michael', last_name : 'Jordan', num: '13'},
     {first_name : 'John', last_name : 'Rosales', num: '11'},
     {first_name : 'Mark', last_name : 'Guillen', num: '11'},
     {first_name : 'KB', last_name : 'Tonel', num: '7'}
   ],
   'instructors': [
       {first_name : 'Michael', last_name : 'Choi', num: '11'},
       {first_name : 'Martin', last_name : 'Puryear', num: '13'}
    ]
}
console.log("Students");
  for(var i=0; i<users.students.length; i++){
  console.log(i+1 + ' - ' + users.students[i].first_name+ " " + users.students[i].last_name + ' - ' + users.students[i].num);
  }
console.log("Instructors");
  for(var i=0; i<users.instructors.length; i++){
    console.log(i+1 + ' - ' , users.instructors[i].first_name + " "+ users.instructors[i].last_name + ' - ' + users.instructors[i].num);
  }
}
StudentsAndInstructors2();
