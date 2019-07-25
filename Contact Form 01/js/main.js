$( document ).ready(function() 
{

	'use strict';
	
	/* Start Popup Contact Form */
	function setupPopupContactForm()
	{

		var popupContactFormOpener = $('#popupContactFormOpener');
		var popupContactForm = $('#popupContactForm');
		var dismiss = popupContactForm.find('.content #dismiss');
		var show = 'block';
		var hide = 'none';

		// Open Form
		popupContactFormOpener.on('click', function()
		{
			popupContactForm.css('display', show);
			popupContactFormOpener.css('display', hide);
		});
		// Close Form
		dismiss.on('click', function()
		{
			popupContactForm.css('display', hide);
			popupContactFormOpener.css('display', show);
		});

	}
	/* End Popup Contact Form */

	// Call Functions
	setupPopupContactForm();

});