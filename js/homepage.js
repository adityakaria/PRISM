$( document ).ready(function(){
	$("#sidenav").sideNav();
	$(document).scroll(function() { 
		var $nav = $('.navbar-fixed');
		$nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.home-page-banner').height());
		$nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.home-page-banner').height());
    });
	
	$(".dropdown-button").dropdown();
    $('.dropdown-button').dropdown({
		hover: true, // Activate on hover
		belowOrigin: true, // Displays dropdown below the button
		alignment: 'left', // Displays dropdown with edge aligned to the left of button
	});
	
	$('.carousel.carousel-slider').carousel({ fullWidth: true });

	loadTechTeam();
	loadContentTeam();
	loadHelpdeskTeam();
});

var currentYear = "2017";

function loadTechTeam() {
	var tech_team_filtered = tech_team.filter(function(arr) {
		return arr.year === currentYear;
	});
	for (var i = 0; i < tech_team_filtered.length; i++) {
		member = tech_team_filtered[i];
		var container = document.createElement('div');

		if (tech_team_filtered.length % 3 === 0) {
			container.className = "member-container col s12 m4 l4";
		}
		else {
			container.className = "member-container col s12 m6 l6";
		}

		var image = document.createElement('img');
		image.src = "img/team/" + member.image;
		image.className = "circle responsive-img member-image";

		container.appendChild(image);

		var name = document.createElement('div');
		name.className = "member-name";
		name.innerText = member.name;

		container.appendChild(name);

		var description = document.createElement('div');
		description.className = "member-description";
		description.innerText = member.description;
		description.setAttribute('style', 'text-align:center');

		container.appendChild(description);

		var link = document.createElement('a');
		link.className = 'member-link';
		link.setAttribute('href', member.facebook);

		var icon = document.createElement('img');
		icon.src = "img/fb_icon.png";
		icon.className = "link-icon";

		link.appendChild(icon);
		container.appendChild(link);

		// console.log(container.innerText);

		$('#tech-team-container').append(container);
	}
}

function loadContentTeam() {
	var content_team_filtered = content_team.filter(function(arr) {
		return arr.year === currentYear;
	});
	for (var i = 0; i < content_team_filtered.length; i++) {
		if (content_team_filtered.length % 3 != 0) {
			
			if(i%2===0) {
				var row = document.createElement('div');
				row.className = "row";
				row.id = "content-row-" + i/2;

				$('#content-team-container').append(row);
			}
		}
		member = content_team_filtered[i];
		var container = document.createElement('div');
		if (content_team_filtered.length % 3 === 0) {
			container.className = "member-container col s12 m4 l4";
		}
		else {
			container.className = "member-container col s12 m6 l6";
		}
		
		var image = document.createElement('img');
		image.src = "img/team/" + member.image;
		image.className = "circle responsive-img member-image";

		container.appendChild(image);

		var name = document.createElement('div');
		name.className = "member-name";
		name.innerText = member.name;

		container.appendChild(name);

		var description = document.createElement('div');
		description.className = "member-description";
		description.innerText = member.description;
		description.setAttribute('style', 'text-align:center');

		container.appendChild(description);

		var link = document.createElement('a');
		link.className = 'member-link';
		link.setAttribute('href', member.facebook);

		var icon = document.createElement('img');
		icon.src = "img/fb_icon.png";
		icon.className = "link-icon";

		link.appendChild(icon);
		container.appendChild(link);

		// console.log(container.innerText);

		if (content_team_filtered.length == 3) {
			$('#content-team-container').append(container);
		}
		else {
			$('#content-row-'+parseInt(i/2)).append(container);
		}
	}
}

function loadHelpdeskTeam() {
	var helpdesk_team_filtered = helpdesk_team.filter(function(arr) {
		return arr.year === currentYear;
	});
	for (var i = 0; i < helpdesk_team_filtered.length; i++) {
		member = helpdesk_team_filtered[i];
		var container = document.createElement('div');

		if (helpdesk_team_filtered.length % 3 === 0) {
			container.className = "member-container col s12 m4 l4";
		}
		else {
			container.className = "member-container col s12 m6 l6";
		}

		var image = document.createElement('img');
		image.src = "img/team/" + member.image;
		image.className = "circle responsive-img member-image";

		container.appendChild(image);

		var name = document.createElement('div');
		name.className = "member-name";
		name.innerText = member.name;

		container.appendChild(name);

		var description = document.createElement('div');
		description.className = "member-description";
		description.innerText = member.description;
		description.setAttribute('style', 'text-align:center;');

		container.appendChild(description);

		var number = document.createElement('div');
		number.className = "member-number";
		number.innerText = member.number;
		number.setAttribute('style', 'padding-bottom:25px;');

		container.appendChild(number);

		// console.log(container.innerText);

		$('#helpdesk-team-container').append(container);
	}
}