/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var firstName = "MJ";
 var role = "Web Developer";
 // var awesomeThought = "I'm awesome!";
 // var funThought = awesomeThought.replace("awesome","fun");

 var formattedName = HTMLheaderName.replace("%data%",firstName);
 var formattedRole = HTMLheaderRole.replace("%data%",role)

 // var skills = ["Web Developing","Video Editing","Graphic Design","Python"]

 // $("#main").append(skills.length);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 // bio.work.city = "Ann Arbor";
 // bio.education["Undergraduate School"] = "Wuhan University";

 // $("#main").append(bio.education["Undergraduate School"]);

 var bio = {
 	"name": "MJ",
 	"role": "role",
 	"contact info": {
 		"email": "mj@zhangmujun.com",
 		"url": "zhangmujun.com",
 		"github": "MujunZ",
 		"location": "Ann Arbor"
 	},
 	"picture url": "images/fry.jpg",
 	"welcome msg": "Hello, ",
 	"skills": ["Web Developing","Video Editing","Graphic Design","Python"]
 };

 var work = {
 	"jobs": [
 	{
 		"position": "Instructional Designer",
 		"employer": "The SearchLite",
 		"location": "Ann Arbor",
 		"date": "2014.11 - Present"
 	},
 	{
 		"position": "Operative Manager",
 		"employer": "Guokr",
 		"location": "Beijing",
 		"date": "2010 - 2014"
 	}
 	]
 };

 var education = {
 		"Schools":[
 			{
 			"name": "the University of Michigan",
 			"location": "Ann Arbor",
 			"major": "Education",
 			"degree": "Master",
 			"date": 2015
 			},
 			{
 			"name": "Wuhan University",
 			"location": "Wuhan",
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

 var projects = {
 	"projects": [
	 	{
	 		"title": "MAC-Lidar",
	 		"date": 2016.11,
	 		"discription": "lorem ipsom",
	 		"images": "images/fry.jpg"
	 	},
	 	{
	 		"title": "Portfolio page",
	 		"date": 2016.11,
	 		"discription": "lorem ipsom",
	 		"images": "images/fry.jpg"
	 	}
 	]
 };

 if (bio.skills.length > 0 ){
 	formattedHTMLskills = HTMLskills.replace("%data%", bio.skills.join(", "));
 	$("#header").append(HTMLskillsStart);
 	$("#skills").append(formattedHTMLskills);
 } else {
 	$("#header").append(HTMLskillsStart);
 	$("#skills").append(HTMLskills.replace("%data%", "Add more skills!"));
 }


