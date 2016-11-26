/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Steven Eng",
    role: "Front-End Developer",
    contacts: {
        mobile: "718-673-7085",
        email: "Steven.eng94@gmail.com",
        github: "steve",
        location: "New York, New York",
        linkedIn: "https://www.linkedin.com/in/engsteven"
    },
    welcomeMessage: "Hello world and other people from other worlds",
    skills: ["JavaScript", "HTML", "CSS", "Python", "Lasers"],
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedbiopic);
        var formattedWM = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWM);
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
        var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedlin = HTMLtwitter.replace("%data%", bio.contacts.linkedIn);
        $("#topContacts").append(formattedlin, formattedemail, formattedmobile, formattedgithub, formattedLocation);
        $("#footerContacts").append(formattedlin, formattedemail, formattedmobile, formattedgithub, formattedLocation);

    },
    biopic: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAP8AAAAJGI4ZDg4NGVlLWY4YzMtNDkzNC05MTk1LTFhNTI3NTAxMDVkNA.jpg"
};

bio.display();

var work = {
    jobs: [{
        employer: "CPC",
        title: "Assistant Teacher",
        location: "New York, New York",
        dates: "January 2016 - On going",
        description: "Provided academic mentoring to classes of 25 students to encourage better studying habits"
    }, {
        employer: "Baruch College",
        title: "Strategy Consultant",
        location: "New York, New York",
        dates: "November 2015 - Present",
        description: "Consulted small businesses to optimize wholesale operations"
    }],
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedworkLocation);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
        })
    }
};


work.display();

var education = {
    schools: [{
        name: "Baruch College",
        location: "New York, New York",
        degree: "BA",
        majors: ["Actuarial Science", "Economics"],
        dates: "2016",
        url: "http://www.baruch.cuny.edu/"
    }],

    onlineCourses: [{
        title: "Front-End Web Development",
        school: "Udacity",
        dates: "2016",
        url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],

    display: function() {
        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function(school) {

            var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedschoolLocation);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var nameDegree = formattedschoolName + formattedschoolDegree;
            $(".education-entry:last").append(nameDegree);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedschoolDates);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedschoolMajor);
            var formattedschoolurl = HTMLschoolURL.replace("%data%", school.url);
            $(".education-entry:last").append(formattedschoolurl);
        });

        education.onlineCourses.forEach(function(online) {
            $(".education-entry").append(HTMLonlineClasses);
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", online.title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", online.school);
            var titleschool = formattedonlineTitle + formattedonlineSchool;
            $(".education-entry:last").append(titleschool);
            var formattedonlineDate = HTMLonlineDates.replace("%data%", online.dates);
            $(".education-entry:last").append(formattedonlineDate);
            var formattedURl = HTMLonlineURL.replace("%data%", online.url);
            $(".education-entry:last").append(formattedURl);
        });
        $(".education-entry h3").css({
            'padding-left': '0'
        });
    },

};

education.display();

var projects = {
    projects: [{
        title: "Trading card",
        dates: "June 2016",
        description: "trading card contains fun facts about the animal",
        images: ["images/card.jpg"]
    }, {
        title: "Portfolio Website",
        dates: "July 2016",
        description: "Webiste shows a small portfolio of images. website is developed by bootstrap",
        images: ["images/portfolio.jpg"]
    }, {
        title: "Cloning Project",
        dates: "July 3016",
        description: "generating an army of drunk robots for galactic domination",
        images: ["http://vignette4.wikia.nocookie.net/powerlisting/images/8/8b/Bender_clones.jpg/revision/latest?cb=20140430015545"]
    }],
    display: function() {
        projects.projects.forEach(function(pro) {
            $("#projects").append(HTMLprojectStart);
            var formatedprojectTitle = HTMLprojectTitle.replace("%data%", pro.title);
            var formattedprojectDate = HTMLprojectDates.replace("%data%", pro.dates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", pro.description);
            var formattedprojectImage = HTMLprojectImage.replace("%data%", pro.images);
            $(".project-entry:last").append(formatedprojectTitle, formattedprojectDate, formattedprojectDescription, formattedprojectImage);
        });
    }
};


projects.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
};

$('#main').append(internationalizeButton);
$('#skills').removeClass('flex-box');

$('#mapDiv').append(googleMap);
