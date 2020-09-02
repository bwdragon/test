function numberWithSpaces(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function drawSparklines(num,data) { 
	if (window.innerWidth > 445) {
		var width = 50;
		var height = 50;
		var margin = { top: 15, right: 5, bottom: 5, left: 5 };
	} else {
		var width = 30;
		var height = 50;
		var margin = { top: 10, right: 5, bottom: 5, left: 5 };
	}
	const inner_width  = width - margin.left - margin.right;
	const inner_height = height - margin.top - margin.bottom;
	const x = d3.scaleLinear().domain([0, data.length]).range([0, inner_width]);
	const y = d3.scaleLinear().domain([0, d3.max(data)]).range([inner_height, 0]);
	const svg = d3.select('#corona_trend'+String(num))
		.append('svg')
		.attr('width', width)
		.attr('height', height)
		.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
	
	const line = d3.line()
		.x((d, i) => x(i))
		.y(d => y(d));
	
	var cell = svg.append('path').datum(data)
		.attr('fill', 'none')
		.attr('stroke', '#000000')
		.attr('stroke-width', 1)
		.attr('d', line)
		.text(function(d) { return d; });
	svg.append('circle')
		.attr('r', 2)
		.attr('cx', x(0))
		.attr('cy', y(data[0]))
		.attr('fill', '#000000');
	svg.append('circle')
		.attr('r', 2)
		.attr('cx', x(data.length - 1))
		.attr('cy', y(data[data.length - 1]))
		.attr('fill', '#000000');
}
const columns = [
	{'id':'ill_day','value':'gsx$заболевшихзадень'},
	{'id':'date','value':'gsx$дата'},
	{'id':'ill_all','value':'gsx$заболевших'},
	{'id':'health_day','value':'gsx$выздоровевшихзадень'},
	{'id':'health_all','value':'gsx$выздоровевших'},
	{'id':'dead_day','value':'gsx$погибшихзадень'},
	{'id':'dead_all','value':'gsx$погибших'},
	{'id':'test_day','value':'gsx$тестовзадень'},
	{'id':'test_all','value':'gsx$тестов'}
];
var translateMap= [{"name":"Odessa", "tr": "Одесская"},
			{"name":"Kherson", "tr": "Херсонская"},
			{"name":"Kiev City", "tr": "Киев"},
			{"name":"Zhytomyr", "tr": "Житомирская"},
			{"name":"Sumy", "tr": "Сумская"},
			{"name":"Donets'k", "tr": "Донецкая"},
			{"name":"Dnipropetrovs'k", "tr": "Днепропетровская"},
			{"name":"Kharkiv", "tr": "Харьковская"},
			{"name":"Luhans'k", "tr": "Луганская"},
			{"name":"Poltava", "tr": "Полтавская"},
			{"name":"Zaporizhzhya", "tr": "Запорожская"},
			{"name":"Sevastopol", "tr": "Севастополь"},
			{"name":"Crimea", "tr": "Крым"},
			{"name":"Chernihiv", "tr": "Черниговская"},
			{"name":"Rivne", "tr": "Ровненская"},
			{"name":"Chernivtsi", "tr": "Черновицкая"},
			{"name":"Ivano-Frankivs'k", "tr": "Ивано-Франковская"},
			{"name":"Khmel'nyts'kyy", "tr": "Хмельницкая"},
			{"name":"L'viv", "tr": "Львовская"},
			{"name":"Ternopil'", "tr": "Тернопольская"},
			{"name":"Transcarpathia", "tr": "Закарпатье"},
			{"name":"Volyn", "tr": "Волынь"},
			{"name":"Cherkasy", "tr": "Черкасская"},
			{"name":"Kirovohrad", "tr": "Кировоградская"},
			{"name":"Kiev", "tr": "Киевская"},
			{"name":"Mykolayiv", "tr": "Николаевская"},
			{"name":"Vinnytsya", "tr": "Винницкая"}];
function changeNumbers() {
	$.getJSON('https://www.liga.net/files/general/data/coronavirus/1.json', function(data) 
	/*$.getJSON('https://spreadsheets.google.com/feeds/list/1JP_lGHOwvob1GIn2Ot5kj2_SziENBGh6Jew--gaQPs4/1/public/values?alt=json', function(data)*/
		  {
		var scraped = data['feed']['entry']

		function putNumber(value) {
			var html_value = document.getElementById(value)
			var column_name = columns.filter(d => d.id==value)[0].value
			if (column_name.includes('день') == true) {
				html_value.innerHTML = '+'+numberWithSpaces(scraped[0][column_name]['$t'])
			}   else if (column_name.includes('дата') == true) {
				html_value.innerHTML += numberWithSpaces(scraped[0][column_name]['$t'])
			} else {
				html_value.innerHTML = numberWithSpaces(scraped[0][column_name]['$t'])
			}   
		}
		function putRegionNumber(value) {
			var idd = 'region'+String(value)+'_day'
			var html_value = document.getElementById(idd)
			html_value.innerHTML = '+'+numberWithSpaces(scraped[value]['gsx$regionday']['$t'])

			var html_text = document.getElementById('region'+String(value)+'_text')
			html_text.innerHTML = scraped[value]['gsx$regionname']['$t']
			
			var idd = 'region'+String(value)+'_all'
			var html_value = document.getElementById(idd)
			html_value.innerHTML = numberWithSpaces(scraped[value]['gsx$regionall']['$t'])

			var html_text = document.getElementById('region'+String(value)+'_text')
			html_text.innerHTML = scraped[value]['gsx$regionname']['$t']
		}
		for (i=0;i<3;i++) {
			putRegionNumber(i)
		}
		
		function makeSparklines(value) {
			var filtered = scraped.filter(sc => sc['gsx$measurenames']['$t'] == sparklines[value]);
			var vyp = filtered.map((p) => parseFloat(p['gsx$measurevalues']['$t'].replace(' ','')))
			var vyp = vyp.map(function(v,i) { 
				if (i != vyp.length) 
				return (v - vyp[i-1]); 
			}); 
			var vyp = vyp.slice(vyp.length-7,)
			drawSparklines(value,vyp)
		}

		var columns_names = columns.map(p => p.id)
		var sparklines = ['Кількість підтверджених випадків','Кількість одужань','Кількість смертей', 'Кількість тестів']
		
		for (var value of columns_names) {
			putNumber(value)    
		}
		for (var value in sparklines) {
			makeSparklines(value)
		}
		var filtered = scraped.filter(sc => sc['gsx$code']['$t'] != '');
		var filtered_data = filtered.map((p) => [p['gsx$code']['$t'],parseInt(p['gsx$values']['$t'])])

		Highcharts.mapChart('coronamap', {
			chart: {
				marginTop: 2,
				map: 'countries/ua/ua-all'
			},
			title: {
				text: ' '
			},
			credits: {
				enabled: false
			},
			colorAxis: {
				visible: false,
				minColor: '#e0e0e0',//#f5f5f5
				maxColor:'#e90c29'
			},
			tooltip: {
				formatter: function(){
					return "<b>"+translateMap.filter(a=>a.name==this.point.name)[0].tr+'</b>:<br>'+this.point.value+' забол.'
				}
			},
			series: [{
				borderColor: '#f5f5f5',
				borderWidth: 0.5,
				data: filtered_data,
				name: 'Коронавирус',
				dataLabels: {
					enabled: false
				}
			}]
		});
	})
}
changeNumbers()
