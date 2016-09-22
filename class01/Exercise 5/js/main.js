// Exersize 5: create a variable named 'grade' with a numeric value of a grade.
// Have it pass through an if else statement that sets the letter grade to
//
// A for a grade that is 90 and above
// B for a grade that is 80 and above
// C for a grade that is 70 and above
// D for a grade that is 60 and above
// F for a grade for anything below a D
//
// replace the text in the html with the appropriate letter grade

var gradePrompt = prompt('Enter a numeric grade value');
var grade = parseInt(gradePrompt);
var letterGrade ='';

if (grade >= 90)
{
  letterGrade = 'A';
  if else (letterGrade >= 80)
  {
    letterGrade = 'B'
  }
  if else (letterGrade >= 70)
  {
    letterGrade = 'C'
  }
}
$('.grade').text(grade);
$(.letterGrade).text(letterGrade);
