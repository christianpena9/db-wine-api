$(document).ready(function() {
 	const staticURL = 'http://services.wine.com/api/';
	const apiKey = '19d5e48bcd64c0d4fe119f1fa28acf39';
	const version = 'beta2';
	const service = 'service.svc';
	const format = 'JSON';
	const resource = 'catalog';
	const parameters = 'filter=categories(490+125)';
	const finalURL = staticURL + version + '/' + service + '/' + format + '/' + resource + '?' + 'apikey=' + apiKey + '&' + parameters;

	console.log(finalURL);

	$.ajax({
		url: finalURL,
		type: 'get',
		dataType: 'json',
		success: function(data, textStatus, jqXHR) {
			const dataObject = data;
			console.log(dataObject);
			for(i in dataObject.Products.List) {
				console.log(dataObject.Products.List[i].Name + " - " + dataObject.Products.List[i].Varietal.Name);
				$("#wine-content").append("<div>" + dataObject.Products.List[i].Name + " - " + dataObject.Products.List[i].Varietal.Name + "</div>");
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("The following error occurred: " + textStatus, errorThrown);
		}
	});
});
