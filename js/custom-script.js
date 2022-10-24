// window.addEventListener('DOMContentLoaded', event => {

// Toggle the side navigation
const sidebarToggle = document.body.querySelector('#sidebarToggle');
if (sidebarToggle) {
	// Uncomment Below to persist sidebar toggle between refreshes
	if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
		document.body.classList.toggle('sb-sidenav-toggled');
	}
	sidebarToggle.addEventListener('click', event => {
		event.preventDefault();
		document.body.classList.toggle('sb-sidenav-toggled');
		localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
	});
}

// Data Table Script


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}





// Delete Row Button
$('a[type="button"]').click(function (e) {
	$(this).closest('tr').remove()
})

// Select All Button
$("#selectAll").click(function () {
	$("input[type=checkbox]").prop("checked", $(this).prop("checked"));
});

$("input[type=checkbox]").click(function () {
	if (!$(this).prop("checked")) {
		$("#selectAll").prop("checked", false);
	}
});

jackHarnerSig();


// For Select Option
$("select").click(function () {
	var open = $(this).data("isopen");
	if (open) {
		window.location.href = $(this).val()
	}
	//set isopen to opposite so next time when use clicked select box
	//it wont trigger this event
	$(this).data("isopen", !open);
});