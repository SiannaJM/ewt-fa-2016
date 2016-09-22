// ---------------------------------------
// Exersize 4: Create an array with a list of your skillsets
// Loop through them and append each one to
// append them to the <ul class="skillsets"> as <li> elements

var skillsets = ['HTML', 'CSS', 'Javascript'];

for(var i = 0; i< skillsets.length; i++)
{
$('.skillsets').append('<li>'+ skillsets[i] +'</li>');
};
