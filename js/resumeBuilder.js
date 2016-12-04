/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var firstName = "Mujun Zhang";
 var role = "Web Developer";
 // var awesomeThought = "I'm awesome!";
 // var funThought = awesomeThought.replace("awesome","fun");

 var formattedName = HTMLheaderName.replace("%data%",firstName);
 var formattedRole = HTMLheaderRole.replace("%data%",role);

 // var skills = ["Web Developing","Video Editing","Graphic Design","Python"]

 // $("#main").append(skills.length);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 // bio.work.city = "Ann Arbor";
 // bio.education["Undergraduate School"] = "Wuhan University";

 // $("#main").append(bio.education["Undergraduate School"]);

 var bio = {
 	"name": "MJ Zhang",
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
 		"title": "Instructional Designer",
 		"employer": "The SearchLite",
 		"location": "Ann Arbor",
 		"date": 2016,
 		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit felis purus, in congue leo ultricies vel. Aenean et finibus massa, ut dignissim ante. Vestibulum nunc nibh, vehicula ac lectus eget, mollis ornare nunc. Donec suscipit porttitor odio, porta gravida sem rutrum vel. Quisque eget lacus sed tellus faucibus viverra. Duis hendrerit est erat, id pretium massa interdum id. Fusce dictum ipsum id ipsum scelerisque, eget blandit sapien interdum. Mauris dictum lacus placerat convallis elementum. Sed feugiat in tortor nec aliquam. Cras a odio egestas, efficitur dui non, accumsan nulla. Duis at eros massa. Pellentesque eu dolor congue, commodo orci nec, tempus orci. Integer vitae lectus venenatis, egestas massa id, viverra turpis."
 	},
 	{
 		"title": "Operative Manager",
 		"employer": "Guokr",
 		"location": "Beijing",
 		"date": 2014,
 		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit felis purus, in congue leo ultricies vel. Aenean et finibus massa, ut dignissim ante. Vestibulum nunc nibh, vehicula ac lectus eget, mollis ornare nunc. Donec suscipit porttitor odio, porta gravida sem rutrum vel. Quisque eget lacus sed tellus faucibus viverra. Duis hendrerit est erat, id pretium massa interdum id. Fusce dictum ipsum id ipsum scelerisque, eget blandit sapien interdum. Mauris dictum lacus placerat convallis elementum. Sed feugiat in tortor nec aliquam. Cras a odio egestas, efficitur dui non, accumsan nulla. Duis at eros massa. Pellentesque eu dolor congue, commodo orci nec, tempus orci. Integer vitae lectus venenatis, egestas massa id, viverra turpis."
 	}
 	]
 };

 var education = {
 		"schools":[
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
	})
}

displayWork();

function inName(oldname){
	var name = oldname.split(" ");
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name = name.join(" ");
	return name;
}

$("#main").append(internationalizeButton);