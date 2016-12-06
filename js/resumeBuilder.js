/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // var firstName = "Mujun Zhang";
 // var role = "Web Developer";
 // var awesomeThought = "I'm awesome!";
 // var funThought = awesomeThought.replace("awesome","fun");

 // var formattedName = HTMLheaderName.replace("%data%",firstName);
 // var formattedRole = HTMLheaderRole.replace("%data%",role);

 // var skills = ["Web Developing","Video Editing","Graphic Design","Python"]

 // $("#main").append(skills.length);

 // $("#header").prepend(formattedRole);
 // $("#header").prepend(formattedName);

 // bio.work.city = "Ann Arbor";
 // bio.education["Undergraduate School"] = "Wuhan University";

 // $("#main").append(bio.education["Undergraduate School"]);

 var bio = {
 	"name": "MJ Zhang",
 	"role": "Web Developer",
 	"contacts": {
 		"mobile": "314 159 2653",
 		"email": "mj@zhangmujun.com",
 		"url": "zhangmujun.com",
 		"github": "MujunZ",
 		"location": "Ann Arbor, MI"
 	},
 	"biopic": "images/fry.jpg",
 	"welcomeMessage": "Hello!",
 	"skills": ["Web Developing","Video Editing","Graphic Design","Python"]
 };

 var formattedName = HTMLheaderName.replace("%data%",bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
 // var formattedHTMLcontactGeneric = HTMLcontactGeneric.replace("%data%","Contact");
 var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
 var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
 var formattedHTMLlocation = HTMLgithub.replace("%data%", bio.contacts.location);
 var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
 var formattedHTMLwelcomeMsg= HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 // $("#header").prepend(formattedHTMLcontactGeneric);
 $("#topContacts").prepend(formattedHTMLmobile);
 $("#topContacts").prepend(formattedHTMLemail);
 $("#topContacts").prepend(formattedHTMLgithub);
 $("#topContacts").prepend(formattedHTMLlocation);
 $("#topContacts").after(formattedHTMLbioPic);
 $("#topContacts").after(formattedHTMLwelcomeMsg);

// Work Information
 var work = {
 	"jobs": [
 	{
 		"title": "Instructional Designer",
 		"employer": "The SearchLite",
 		"location": "Ann Arbor, MI",
 		"date": 2016,
 		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit felis purus, in congue leo ultricies vel. Aenean et finibus massa, ut dignissim ante. Vestibulum nunc nibh, vehicula ac lectus eget, mollis ornare nunc. Donec suscipit porttitor odio, porta gravida sem rutrum vel. Quisque eget lacus sed tellus faucibus viverra. Duis hendrerit est erat, id pretium massa interdum id. Fusce dictum ipsum id ipsum scelerisque, eget blandit sapien interdum. Mauris dictum lacus placerat convallis elementum. Sed feugiat in tortor nec aliquam. Cras a odio egestas, efficitur dui non, accumsan nulla. Duis at eros massa. Pellentesque eu dolor congue, commodo orci nec, tempus orci. Integer vitae lectus venenatis, egestas massa id, viverra turpis."
 	},
 	{
 		"title": "Operative Manager",
 		"employer": "Guokr",
 		"location": "Beijing, China",
 		"date": 2014,
 		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit felis purus, in congue leo ultricies vel. Aenean et finibus massa, ut dignissim ante. Vestibulum nunc nibh, vehicula ac lectus eget, mollis ornare nunc. Donec suscipit porttitor odio, porta gravida sem rutrum vel. Quisque eget lacus sed tellus faucibus viverra. Duis hendrerit est erat, id pretium massa interdum id. Fusce dictum ipsum id ipsum scelerisque, eget blandit sapien interdum. Mauris dictum lacus placerat convallis elementum. Sed feugiat in tortor nec aliquam. Cras a odio egestas, efficitur dui non, accumsan nulla. Duis at eros massa. Pellentesque eu dolor congue, commodo orci nec, tempus orci. Integer vitae lectus venenatis, egestas massa id, viverra turpis."
 	}
 	]
 };

// Education Information
 var education = {
 		"schools":[
 			{
 			"name": "the University of Michigan",
 			"location": "Ann Arbor, MI",
 			"major": "Education",
 			"degree": "Master",
 			"date": 2015
 			},
 			{
 			"name": "Wuhan University",
 			"location": "Wuhan, China",
 			"major": "Psychology",
 			"degree": "BS",
 			"date": "2010"
 			}
 		],
 		"onlineCourses":[
 			{
 				"title": "Front End Developer",
 				"School": "Udacity",
 				"date": 2016,
 				"url": "udacity.com"
 			},
 			{
 				"title": "Front End Developer Path",
 				"School": "Lynda",
 				"date": 2016,
 				"url": "Lynda.com"
 			}
 		]
 	};

// Education Information Display
$("#education").append(HTMLschoolStart);
education.schools.forEach(function(school){
	 var formattedHTMLschoolName = HTMLschoolName.replace("%data%",school.name);
	 var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%",school.major);
	 var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
	 var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%",school.location);
	 var formattedHTMLworkDates = HTMLworkDates.replace("%data%",school.date);
	 $(".education-entry").append(formattedHTMLschoolName);
	 $(".education-entry").append(formattedHTMLworkDates);
	 $(".education-entry").append(formattedHTMLschoolMajor);
	 $(".education-entry").append(formattedHTMLschoolDegree);
	 $(".education-entry").append(formattedHTMLschoolLocation);
});

// Online Education Information Display
$(".education-entry").append(HTMLonlineClasses);
education.onlineCourses.forEach(function(course){
	var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%",course.title);
	$(".education-entry").append(formattedHTMLonlineTitle);
});

// Project Information
 var projects = {
 	"projects": [
	 	{
	 		"title": "MAC-Lidar",
	 		"date": 2016.11,
 			"description": "Lorem ipsum",
	 		"image": "images/fry.jpg"
	 	},
	 	{
	 		"title": "Portfolio page",
	 		"date": 2016.11,
 			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit felis purus, in congue leo ultricies vel. Aenean et finibus massa, ut dignissim ante. Vestibulum nunc nibh, vehicula ac lectus eget, mollis ornare nunc. Donec suscipit porttitor odio, porta gravida sem rutrum vel. Quisque eget lacus sed tellus faucibus viverra. Duis hendrerit est erat, id pretium massa interdum id. Fusce dictum ipsum id ipsum scelerisque, eget blandit sapien interdum. Mauris dictum lacus placerat convallis elementum. Sed feugiat in tortor nec aliquam. Cras a odio egestas, efficitur dui non, accumsan nulla. Duis at eros massa. Pellentesque eu dolor congue, commodo orci nec, tempus orci. Integer vitae lectus venenatis, egestas massa id, viverra turpis.",
	 		"image": "images/fry.jpg"
	 	}
 	]
 };

// Skills Information Display
// This is MJ's first version
 // if (bio.skills.length > 0 ){
 // 	$("#header").append(HTMLskillsStart);
 // 	var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills.join(", "));	
 // 	$("#skills").append(formattedHTMLskills);
 // } else {
 // 	$("#header").append(HTMLskillsStart);
 // 	$("#skills").append(HTMLskills.replace("%data%", "Add more skills!"));
 // }

 // Answer from Udacity 
  if (bio.skills.length > 0 ){
 	$("#header").append(HTMLskillsStart);
 	var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[0]);	
 	$("#skills").append(formattedHTMLskills);
 	formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedHTMLskills);
 	formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[2]);
 	$("#skills").append(formattedHTMLskills);
 } else {
 	$("#header").append(HTMLskillsStart);
 	$("#skills").append(HTMLskills.replace("%data%", "Add more skills!"));
 }

// Work Experience
//note: 
// 1, remember the last ). forEach(function(){}). JS is all about ()[]{}
// 2, the first jquery should be #workExperience. I used #header, which is wrong
// 3, I lost one :lost, which coused some interesting format. 
// 4, Weird: every time I added the last line, Description, the 2nd job disappear. Debug a long time. I finally found I wrote "HTMLWorDescription", insdead of "HTMLWorkDescription"....
// work.jobs.forEach(function(job){
// 	$("#workExperience").append(HTMLworkStart);
// 	var formatedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
// 	var	formatedworkTitle = HTMLworkTitle.replace("%data%", job.title);
// 	var	formatedworkDates = HTMLworkDates.replace("%data%", job.date);
// 	var	formatedworkLocation = HTMLworkLocation.replace("%data%", job.location);
// 	var	formatedworkDescription = HTMLworkDescription.replace("%data%", job.description);
// 	$(".work-entry:last").append(formatedworkEmployer);
// 	$(".work-entry:last").append(formatedworkTitle);
// 	$(".work-entry:last").append(formatedworkDates);
// 	$(".work-entry:last").append(formatedworkLocation);
// 	$(".work-entry:last").append(formatedworkDescription);
// })
function displayWork(){
	$("#workExperience").append(HTMLworkStart);
	work.jobs.forEach(function(job){
	var formatedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
	var	formatedworkTitle = HTMLworkTitle.replace("%data%", job.title);
	var	formatedworkDates = HTMLworkDates.replace("%data%", job.date);
	var	formatedworkLocation = HTMLworkLocation.replace("%data%", job.location);
	var	formatedworkDescription = HTMLworkDescription.replace("%data%", job.description);
	$(".work-entry:last").append(formatedworkEmployer);
	$(".work-entry:last").append(formatedworkTitle);
	$(".work-entry:last").append(formatedworkDates);
	$(".work-entry:last").append(formatedworkLocation);
	$(".work-entry:last").append(formatedworkDescription);
	});
}
displayWork();


// internationalizeButton
function inName(oldname){
	var name = oldname.split(" ");
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name = name.join(" ");
	return name;
}

$("#main").append(internationalizeButton);

// Project Information Display
// Note: 1, remember to check json;
// 2, check class or ID;
// 3, check function(). Don'f forget ().
projects.display = function(){
	$("#projects").append(HTMLprojectStart);
	projects.projects.forEach(function(project){
		var formatedHTMLprojectTitle = HTMLprojectTitle.replace("%data%",project.title);
		var formatedHTMLprojectDates = HTMLprojectDates.replace("%data%",project.date);
		var formatedHTMLprojectDescription = HTMLprojectDescription.replace("%data%",project.description);
		var formatedHTMLprojectImage = HTMLprojectImage.replace("%data%",project.image);
		$(".project-entry:last").append(formatedHTMLprojectTitle);
		$(".project-entry:last").append(formatedHTMLprojectDates);
		$(".project-entry:last").append(formatedHTMLprojectDescription);
		$(".project-entry:last").append(formatedHTMLprojectImage);
	});
};
//play the function!
projects.display();

// Google Map
$("#mapDiv").append(googleMap);