// JavaScript Document

//load google charts
		google.charts.load('current', {'packages':['corechart']});
		google.charts.load('current', {'packages':['table']});
		
		//load the callback function that runs when page loads
		google.charts.setOnLoadCallback(drawAllSheets);
		
		function drawAllSheets(){
			drawSheetName('totalSpending',
						  'SELECT A,Y',
						 totalSpendingbyCountryHandler);	
			drawSheetName('finalData',
						  'SELECT A,B,C,D,E,F,G,I,J,L,M,O,P',
						dataTableHandler);
		   
			drawSheetName('totalSpending',
						  'SELECT A,O,P,Q,R,S,T',
						totalSpendingbyCountryPerCapitaHandler);	
			drawSheetName('totalSpending',
						  'SELECT A,Y,AE',
						totalGDPvsSpendingResponseHandler);
			drawSheetName('CompareSpending',
						  'SELECT A,B,C,D,E,F',
						 totalCompareMilitaryResponseHandler);
			drawSheetName('CompareSpending',
						  'SELECT A,O,P,Q,R,S',
						totalCompareHCResponseHandler);
			drawSheetName('CompareSpending',
						  'SELECT A,I,J,K,L,M',
						totalCompareEduResponseHandler);
			drawSheetName('CompareSpending',
						  'SELECT U,V',
						totalCompareHEMHandler);
			drawSheetName('growthedu1',
						  'SELECT A,B,C,D,E,F,G,H,I,J,K,L,M,N,O',
						EducationGrowthHandler);
			drawSheetName('growthedu1',
						  'SELECT Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE',
						EducationGrowthPercHandler);
			drawSheetName('growthhc1',
						  'SELECT A,B,C,D,E,F,G,H,I,J,K,L,M,N,O',
						HCGrowthHandler);
			drawSheetName('growthhc1',
						  'SELECT Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE',
						HCGrowthPercHandler);
			 //education only
			drawSheetName('eduspending1',
						  'SELECT A,B,C,D,E,F,G,H,I,J,K,L,M,N,O',
			             eduShareofGDP);
			/*V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ'*/
			drawSheetName('eduspending',
						  'SELECT A,W,X,Y,Z,AA,AB',
			             eduCapitaHandler);
			drawSheetName('eduspending',
						  'SELECT A,P,Q,R,S,T,U',
			             PerCapitaGDPHandler);
			drawSheetName('eduspending1',
						  'SELECT A,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD',
			             edupercOfGDPCapitaHandler);
			
			//HC only
			drawSheetName('HCspending1',
						  'SELECT A,B,C,D,E,F,G,H,I,J,K,L,M,N,O',
			            HCShareofGDPHandler);
			drawSheetName('HCspending',
						  'SELECT A,O,P,Q,R,S,T',
			              HCCapitaHandler);
			drawSheetName('HCspending',
						  'SELECT A,AJ,AK,AL,AM,AN,AO',
			              PerCapitaGDPHandlerHC);
			drawSheetName('HCspending1',
						  'SELECT A,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD',
			              HCpercOfGDPCapitaHandler);
			
		    //Military only
			drawSheetName('militaryspending1',
						  'SELECT A,B,C,D,E,F,G,H,I,J,K,L,M,N,O',
			            MShareofGDPHandler);
			drawSheetName('militaryspending',
						  'SELECT A,I,J,K,L,M,N',
			              MCapitaHandler);
			drawSheetName('militaryspending',
						  'SELECT A,AP,AQ,AR,AS,AT,AU',
			              PerCapitaGDPHandlerM);
			drawSheetName('militaryspending1',
						  'SELECT A,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD',
			              MpercOfGDPCapitaHandler);
			
			
			//Extra
			drawSheetName('extra1',
						  'SELECT A,B,C,D,E,F,G,H,I,J,K,L,M,N,O',
			           ExtraGDPHandler);
			drawSheetName('extra1',
						  'SELECT A,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD',
			           ExtraSpendingHandler);
			
			drawSheetName('finalData',
						  'SELECT A,C,F,B,D',
			           BubGDPSpendingHandler);
			drawSheetName('finalData',
						  'SELECT A,C,D,B,F',
			           bubPopGDPSpendingHandler);
			drawSheetName('finalData',
						  'SELECT A,J,M,B,E',
			           bubHESpendingHandler);
			drawSheetName('finalData',
						  'SELECT A,M,O,B,E',
			           bubHMSpendingHandler);
	    	drawSheetName('finalData',
						  'SELECT A,J,O,B,E',
			          bubEMSpendingHandler);

		  
		  
			 
		}//drawAllSheets
		
		
		//column starts with 0 header starts with 1
		function drawSheetName(sheetName, query, responseHandler) {
			var queryString = encodeURIComponent(query);
			var query = new google.visualization.Query(
			'https://docs.google.com/spreadsheets/d/1uKmtH7-ffnWg8lGuLzVuCAkFCQedU9plgbcWWVYtNDs/gviz/tq?sheet=' + sheetName + '&headers=1&tq=' + queryString);
			//
			//https://docs.google.com/spreadsheets/d/1-NwogHiqjRPfIEeh7XxgDYj1CIjyzrz7hxYus4I2VQY/
			query.send(responseHandler);
		}//drawSheetName
		
		
		function  totalSpendingbyCountryHandler(response) {
			var data = response.getDataTable();
			data.sort({column:1, desc:true});
			
			var options = {
					height: '100%',
					width: '80%',
					colorAxis: {colors: ['#2A55BD','#FFD85C']}, //orange to blue
					title: 'Top 14 GDP Country Overall Spending in Billions ($) '
			};
		    var chart = new google.visualization.GeoChart(
						document.getElementById('tot_spending_div'));
			chart.draw(data, options);			
			
		} // totalSpendingbyCountryResponseHandler
		
		
				
		function  dataTableHandler(response) {
			var data = response.getDataTable();
			data.sort({column:1, desc:true});
			
			var options = {
					showRowNumber: true, width: '100%', height: '100%'
			};
		    var table = new google.visualization.Table(
						document.getElementById('dataTable_div'));
			table.draw(data, options);			
			
		} //  dataTableHandler
		
		function  totalSpendingbyCountryPerCapitaHandler(response) {
				var data = response.getDataTable();
			data.sort({column:5, desc:true})
			var options = {
					    width: '80%',
                        height: '100%',
				        chartArea:{ 
							       bottom: 120},
						vAxis: {title: 'Spending in Billions ($)'},
						hAxis: {title: 'Country',
				        slantedText:true,
                        slantedTextAngle:45},
				        seriesType: 'bars',
                        series: {5: {type: 'line'}},
				        colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
			};
			
			var chart = new google.visualization.ComboChart(
				document.getElementById('totSpendCapita_div'));
			chart.draw(data, options);
		} // totalSpendingbyCountryPerCapitaHandler
		
		function totalGDPvsSpendingResponseHandler(response) {
			var data = response.getDataTable();
			data.sort({column: 1, desc: true});
			
			var options = {
						height: '100%',
				        width:'80%',
				        bar: {groupWidth: "80%"},
						legend: 'right',
						bars: 'horizontal',
						isStacked: false,
						annotations: {alwaysOutside: true},
						title: 'Spending vs. GDP 2017',
						vAxis: {title: 'Country'},
						hAxis: {title: 'Spending in billions ($)'},
						colors: ['#44B580','#FFD85C']
														
			};
			var chart = new google.visualization.BarChart(document.getElementById(
			'total_gdp_spending_div'
			));
			chart.draw(data, options);
		
		}//totalGDPvsSpendingResponseHandler
		
				


		function  totalCompareMilitaryResponseHandler(response) {
			var data = response.getDataTable();
			data.sort({column: 5, desc: true});
			var options ={
						width: '100%',
						height: '350',
				         chartArea:{
                                   top: 30,
								   left: 85,
							       bottom: 40,
							       right: 30,
                                   width: '100%',
                                   height: '350',},
				  
						legend: {position: 'top', maxLines: 1},
						hAxis: {title: 'Military Spending in Billions ($)'},
						bar: {groupWidth: '75%'},
						isStacked: true,
				 		colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
			};
	
			var chart = new google.visualization.BarChart(document.getElementById(
			'compareSpendM_div'
			));
			chart.draw(data, options);
		} //  totalCompareMilitaryResponseHandler
		
			function totalCompareHCResponseHandler(response) {
			var data = response.getDataTable();
			data.sort({column: 5, desc: true});
			var options ={
						width: '100%',
						height: '350',
				          chartArea:{
                                   top: 30,
								   left: 85,
							       bottom: 40,
							       right: 30,
                                   width: '100%',
                                   height: '350',},
				  
						legend: {position: 'top', maxLines: 1},
				        hAxis: {title: 'Healthcare Spending in Billions ($)'},
						bar: {groupWidth: '75%'},
						isStacked: true,
				 		colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
			};
	
			
			var chart = new google.visualization.BarChart(
				document.getElementById('compareSpendHC_div'));
			chart.draw(data, options);
		} // totalCompareHCResponseHandler
	
			function totalCompareEduResponseHandler(response) {
			var data = response.getDataTable();
			data.sort({column: 5, desc: true});
			var options ={
						width: '100%',
						height: '350',
				            chartArea:{
                                   top: 30,
								   left: 85,
							       bottom: 40,
							       right: 30,
                                   width: '100%',
                                   height: '350',},
				  
						legend: {position: 'top', maxLines: 1},
						hAxis: {title: 'Education Spending in Billions ($)'},
						bar: {groupWidth: '75%'},
						isStacked: true,
				 		colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
			};
	
			
			var chart = new google.visualization.BarChart(
				document.getElementById('compareSpendEdu_div'));
			chart.draw(data, options);
		} //totalCompareEduResponseHandler
		
		
		   function totalCompareHEMHandler(response) {
			var data = response.getDataTable();
			var options ={
						width: '100%',
						height: '350',
				            chartArea:{
                                   top: 60,
								   left: 60,
							       bottom: 20,
							       right: 40,
                                   width: '100%',
                                   height: '350',},
				  
						legend: {position: 'right', maxLines: 1},
						title: 'Compare Averaged Spendings in Billions ($) 2013 - 2017',
						bar: {groupWidth: '75%'},
						isStacked: true,
				 		colors: ['#FFD85C','#D1DBD4', '#44B580', '#5D89D2', '#4B4A9A']
			};
	
			
			var chart = new google.visualization.PieChart(
				document.getElementById('compareHEM_div'));
			chart.draw(data, options);
		} //totalCompareHEMHandler
		
	
		function  EducationGrowthHandler(response) {
				var data = response.getDataTable();
				var options = {
					        chartArea:{
                                   top: 60,
								   left: 40,
							       bottom: 60,
							       right: 40,
                                   width: '100%',
                                   height: '400',},
					    width: '100%',
                        height: '400',
				       legend: {position:'top', maxLines: 2}, 
					   title: 'Education Spending Growth Rate in fixed value Billions ($)',
					   hAxis: {title: 'Year'}
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.LineChart(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, options);
		} // EducationGrowthHandler
		
		
		function  EducationGrowthPercHandler(response) {
				var data = response.getDataTable();
				var options = {
					        chartArea:{
                                   top: 60,
								   left: 40,
							       bottom: 60,
							       right: 40,
                                   width: '100%',
                                   height: '400',},
					    width: '100%',
                        height: '400',
				       legend: {position:'top', maxLines: 2}, 
					   title: 'Education Spending Growth Rate in %',
					hAxis: {title: 'Year'},
					 curveType: 'function'
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.LineChart(
				document.getElementById('EducationGrowth1_div'));
			chart.draw(data, options);
		} // EducationGrowthPercHandler
		
		
		function  HCGrowthHandler(response) {
				var data = response.getDataTable();
				var options = {
					        chartArea:{
                                   top: 60,
								   left: 40,
							       bottom: 60,
							       right: 40,
                                   width: '100%',
                                   height: '400',},
					    width: '100%',
                        height: '400',
				       legend: {position:'top', maxLines: 2}, 
					   title: 'Healthcare Spending Growth Rate in fixed value Billions ($)',
					   hAxis: {title: 'Year'}
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.LineChart(
				document.getElementById('HCGrowth_div'));
			chart.draw(data, options);
		} // HCGrowthHandler
		
		
		function  HCGrowthPercHandler(response) {
				var data = response.getDataTable();
				var options = {
					        chartArea:{
                                   top: 60,
								   left: 40,
							       bottom: 60,
							       right: 40,
                                   width: '100%',
                                   height: '400',},
					    width: '80%',
                        height: '400',
				       legend: {position:'top', maxLines: 2}, 
					   title: 'Healthcare Spending Growth Rate in %',
					 hAxis: {title: 'Year'},
					 curveType: 'function'
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.LineChart(
				document.getElementById('HCGrowth1_div'));
			chart.draw(data, options);
		} // HCGrowthPercHandler
		
//Education only
		
		function  eduShareofGDP(response) {
				var data = response.getDataTable();
				var options = {
					        chartArea:{
                                   top: 30,
								   left: 50,
							       bottom: 60,
							       right: 70,
                                   width: '100%',
                                   height: '400',},
					    width: '100%',
                        height: '400',
				       legend: {position:'top', maxLines: 2}, 
					  
					   hAxis: {title: 'Year'},
					   vAxis: {title: '% of GDP'},
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.LineChart(
				document.getElementById('eduShare_div'));
			chart.draw(data, options);
		} // eduShareofGDP 
     
		function  eduCapitaHandler(response) {
				var data = response.getDataTable();
			    data.sort({column:5, desc:true})
			    
				var options = {

					    width: '100%',
                        height: '350',
					    chartArea:{
                                   top: 30,
								   left: 65,
							       bottom: 80,
							       right: 30,
                                   width: '100%',
                                   height: '100%',},
				       legend: {position:'top', maxLines: 2}, 
					   
					   hAxis: {title: 'Country', slantedText:true,
                        slantedTextAngle:45},
					   vAxis: {title: 'Spending in $'},
					   title: 'Education Expenditure Per Capita in $',
					    seriesType: 'bars',
                        series: {5: {type: 'line'}},
					  colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
					  
			};
			
			
			
			var chart = new google.visualization.ComboChart(
				document.getElementById('perEduCapita_div'));
			chart.draw(data, options);
		} // eduCapitaHandler
		
		
		function  PerCapitaGDPHandler(response) {
				var data = response.getDataTable();
			    data.sort({column:5, desc:true})
			    
				var options = {

					    width: '100%',
                        height: '350',
					    chartArea:{
                                   top: 30,
								   left: 65,
							       bottom: 80,
							       right: 30,
                                   width: '100%',
                                   height: '100%',},
				       legend: {position:'top', maxLines: 2}, 
					   title: 'GDP Per Capita in $',
					   hAxis: {title: 'Country', slantedText:true,
                        slantedTextAngle:45},
					   vAxis: {title: 'Spending in $'},
					    seriesType: 'bars',
                        series: {5: {type: 'line'}},
					  colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
					  
			};
			
			
			
			var chart = new google.visualization.ComboChart(
				document.getElementById('perCapitaGDP_div'));
			chart.draw(data, options);
		} // PerCapitaGDPHandler
		
		function  edupercOfGDPCapitaHandler(response) {
				var data = response.getDataTable();
				var options = {
					        chartArea:{
                                   top: 30,
								   left: 75,
							       bottom: 60,
							       right: 30,
                                   width: '100%',
                                   height: '400',},
					    width: '100%',
                        height: '400',
				       legend: {position:'top', maxLines: 2}, 
					   hAxis: {title: 'Year'},
					   vAxis: {title: '% of GDP per Capita'},
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.LineChart(
				document.getElementById('edupercOfGDPCap_div'));
			chart.draw(data, options);
		} //edupercOfGDPCapita
		
		
		
		
//HC only
		
		function  HCShareofGDPHandler(response) {
				var data = response.getDataTable();
				var options = {
					        chartArea:{
                                   top: 60,
								   left: 50,
							       bottom: 60,
							       right: 50,
                                   width: '100%',
                                   height: '400',},
					    width: '100%',
                        height: '400',
				       legend: {position:'top', maxLines: 2}, 
					   
					   hAxis: {title: 'Year'},
					   vAxis: {title: '% of GDP'},
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.LineChart(
				document.getElementById('HCShare_div'));
			chart.draw(data, options);
		} // HCShareofGDP 
     
		function  HCCapitaHandler(response) {
				var data = response.getDataTable();
			    data.sort({column:5, desc:true})
			    
				var options = {

					    width: '100%',
                        height: '350',
					    chartArea:{
                                   top: 30,
								   left: 65,
							       bottom: 80,
							       right: 10,
                                   width: '100%',
                                   height: '100%',},
				       legend: {position:'top', maxLines: 2}, 
					   title: 'Healthcare Expenditure Per Capita in $',
					   hAxis: {title: 'Country', slantedText:true,
                        slantedTextAngle:45},
					   vAxis: {title: 'Spending in $'},
					    seriesType: 'bars',
                        series: {5: {type: 'line'}},
					  colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
					  
			};
			
			
			
			var chart = new google.visualization.ComboChart(
				document.getElementById('perHCCapita_div'));
			chart.draw(data, options);
		} // HCCapitaHandler
		
		
		function  PerCapitaGDPHandlerHC(response) {
				var data = response.getDataTable();
			    data.sort({column:5, desc:true})
			    
				var options = {

					    width: '100%',
                        height: '350',
					    chartArea:{
                                   top: 30,
								   left: 65,
							       bottom: 80,
							       right: 10,
                                   width: '100%',
                                   height: '100%',},
				       legend: {position:'top', maxLines: 2}, 
					   title: 'GDP Per Capita in $',
					   hAxis: {title: 'Country', slantedText:true,
                        slantedTextAngle:45},
					   vAxis: {title: 'Spending in $'},
					    seriesType: 'bars',
                        series: {5: {type: 'line'}},
					  colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
					  
			};
			
			
			
			var chart = new google.visualization.ComboChart(
				document.getElementById('perCapitaGDPHC_div'));
			chart.draw(data, options);
		} // PerCapitaGDPHandler
		
		function  HCpercOfGDPCapitaHandler(response) {
				var data = response.getDataTable();
				var options = {
					        chartArea:{
                                   top: 60,
								   left: 80,
							       bottom: 60,
							       right: 50,
                                   width: '100%',
                                   height: '400',},
					    width: '100%',
                        height: '400',
				       legend: {position:'top', maxLines: 1}, 
		
					   hAxis: {title: 'Year'},
					   vAxis: {title: '% of GDP per Capita'},
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.LineChart(
				document.getElementById('HCperCapOfGDPCap_div'));
			chart.draw(data, options);
		} //edupercOfGDPCapita
		
		
//Military only
		function  MShareofGDPHandler(response) {
				var data = response.getDataTable();
				var options = {
					        chartArea:{
                                   top: 60,
								   left: 60,
							       bottom: 60,
							       right: 50,
                                   width: '100%',
                                   height: '400',},
					    width: '100%',
                        height: '400',
				       legend: {position:'top', maxLines: 1}, 
					  
					   hAxis: {title: 'Year'},
					   vAxis: {title: '% of GDP'},
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.LineChart(
				document.getElementById('MShare_div'));
			chart.draw(data, options);
		} // HCShareofGDP 
     
		function  MCapitaHandler(response) {
				var data = response.getDataTable();
			    data.sort({column:5, desc:true})
			    
				var options = {

					    width: '100%',
                        height: '350',
					    chartArea:{
                                   top: 30,
								   left: 55,
							       bottom: 80,
							       right: 20,
                                   width: '100%',
                                   height: '350',},
				       legend: {position:'top', maxLines: 2}, 
					   title: 'Military Expenditure Per Capita in $',
					   hAxis: {title: 'Country', slantedText:true,
                        slantedTextAngle:45},
					   vAxis: {title: 'Spending in $'},
					    seriesType: 'bars',
                        series: {5: {type: 'line'}},
					  colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
					  
			};
			
			
			
			var chart = new google.visualization.ComboChart(
				document.getElementById('perMCapita_div'));
			chart.draw(data, options);
		} // HCCapitaHandler
		
		
		function  PerCapitaGDPHandlerM(response) {
				var data = response.getDataTable();
			    data.sort({column:5, desc:true})
			    
				var options = {

					    width: '100%',
                        height: '350',
					    chartArea:{
                                   top: 30,
								   left: 55,
							       bottom: 80,
							       right: 20,
                                   width: '100%',
                                   height: '350',},
				       legend: {position:'top', maxLines: 2}, 
					   title: 'GDP Per Capita in $',
					   hAxis: {title: 'Country', slantedText:true,
                        slantedTextAngle:45},
					   vAxis: {title: 'Spending in $'},
					    seriesType: 'bars',
                        series: {5: {type: 'line'}},
					  colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
					  
			};
			
			
			
			var chart = new google.visualization.ComboChart(
				document.getElementById('perCapitaGDPM_div'));
			chart.draw(data, options);
		} // PerCapitaGDPHandler
		
		function  MpercOfGDPCapitaHandler(response) {
				var data = response.getDataTable();
				var options = {
					        chartArea:{
                                   top: 60,
								   left: 80,
							       bottom: 60,
							       right: 20,
                                   width: '100%',
                                   height: '400',},
					    width: '100%',
                        height: '400',
				       legend: {position:'top', maxLines: 2}, 
					  
					   hAxis: {title: 'Year'},
					   vAxis: {title: '% of GDP per Capita'},
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.LineChart(
				document.getElementById('MperCapOfGDPCap_div'));
			chart.draw(data, options);
		} //edupercOfGDPCapita
		
		
//Extras
		
	function  ExtraGDPHandler(response) {
				var data = response.getDataTable();
				var options = {
					  chartArea:{
                                   top: 60,
								   left: 50,
							       bottom: 60,
							       right: 50,
                                   width: '100%',
                                   height: '500',},    
					    width: '100%',
                        height: '500',
					   isStacked: 'relative',
				       legend: {position:'top', maxLines: 2}, 
					   title: 'GDP Comparison Count in Billions ($)',
					   hAxis: {title: 'Year'},
					   vAxis: {minValue:0},
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.AreaChart(
				document.getElementById('extraGDP_div'));
			chart.draw(data, options);
		} //edupercOfGDPCapita	
		
		
	function  ExtraSpendingHandler(response) {
				var data = response.getDataTable();
				var options = {
					 chartArea:{
                                   top: 60,
								   left: 50,
							       bottom: 60,
							       right: 50,
                                   width: '100%',
                                   height: '500',},
					    width: '100%',
                        height: '500',
					   isStacked: 'relative',
				       legend: {position:'top', maxLines: 2}, 
					   title: 'Spending Comparison Count in Billions ($)',
					   hAxis: {title: 'Year'},
					   vAxis: {minValue:0},
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.AreaChart(
				document.getElementById('extraSpending_div'));
			chart.draw(data, options);
		} //edupercOfGDPCapita	
			
		
	//Bubble chart
	function  BubGDPSpendingHandler(response) {
				var data = response.getDataTable();
				var options = {
					 chartArea:{
                                   top: 60,
								   left: 90,
							       bottom: 60,
							       right: 50,
                                   width: '100%',
                                   height: '500',},
					    width: '100%',
                        height: '500',
					   isStacked: 'relative',
				       legend: {position:'top', maxLines: 2}, 
					   title: 'Spending Comparison Count in Billions ($)',
					   hAxis: {title: 'GDP in Billions ($)'},
					   vAxis: {title: 'Total Spending in Billions ($)'},
					   bubble: {textStyle: {fontSize: 11}},
					  colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.BubbleChart(
				document.getElementById('bubGDPSpending_div'));
			chart.draw(data, options);
		} //edupercOfGDPCapita	

	function bubPopGDPSpendingHandler(response) {
				var data = response.getDataTable();
				var options = {
					 chartArea:{
                                   top: 60,
								   left: 80,
							       bottom: 60,
							       right: 50,
                                   width: '100%',
                                   height: '500',},
					    width: '100%',
                        height: '500',
					   isStacked: 'relative',
				       legend: {position:'top', maxLines: 2}, 
					   title: 'Spending Comparison Count in Billions ($)',
					   hAxis: {title: 'GDP in Billions ($)'},
					   vAxis: {title: 'Population in Millions'},
					   bubble: {textStyle: {fontSize: 11}},
					  colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.BubbleChart(
				document.getElementById('bubPopGDPSpending_div'));
			chart.draw(data, options);
		} //edupercOfGDPCapita	
		
		
	function bubHESpendingHandler(response) {
				var data = response.getDataTable();
				var options = {
					 chartArea:{
                                   top: 60,
								   left: 80,
							       bottom: 60,
							       right: 50,
                                   width: '100%',
                                   height: '500',},
					    width: '100%',
                        height: '500',
					   isStacked: 'relative',
				       legend: {position:'top', maxLines: 2}, 
					   title: 'Healthcare and Education Correlation',
					   hAxis: {title: 'Education Per Capita'},
					   vAxis: {title: 'Healthcare Per Capita'},
					   bubble: {textStyle: {fontSize: 11}},
					  colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.BubbleChart(
				document.getElementById('bubHESpending_div'));
			chart.draw(data, options);
		} //edupercOfGDPCapita	
	    
	  	function bubHMSpendingHandler(response) {
				var data = response.getDataTable();
				var options = {
					 chartArea:{
                                   top: 60,
								   left: 80,
							       bottom: 60,
							       right: 50,
                                   width: '100%',
                                   height: '500',},
					    width: '100%',
                        height: '500',
					   isStacked: 'relative',
				       legend: {position:'top', maxLines: 2}, 
					   title: 'Healthcare and Military Correlation',
					   hAxis: {title: 'Healthcare Per Capita'},
					   vAxis: {title: 'Military Per Capita'},
					   bubble: {textStyle: {fontSize: 11}},
					  colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.BubbleChart(
				document.getElementById('bubHMSpending_div'));
			chart.draw(data, options);
		} //edupercOfGDPCapita	
	    
			function bubEMSpendingHandler(response) {
				var data = response.getDataTable();
				var options = {
					 chartArea:{
                                   top: 60,
								   left: 80,
							       bottom: 60,
							       right: 50,
                                   width: '100%',
                                   height: '500',},
					    width: '100%',
                        height: '500',
					   isStacked: 'relative',
				       legend: {position:'top', maxLines: 2}, 
					   title: 'Education and Military Correlation',
					   hAxis: {title: 'Education Per Capita'},
					   vAxis: {title: 'Military Per Capita'},
					   bubble: {textStyle: {fontSize: 11}},
					  colors: ['#FFD85C','#D1DBD4',  '#44B580', '#5D89D2', '#4B4A9A']
					  
			};
			
			/*var chart = new google.charts.Line(
				document.getElementById('EducationGrowth_div'));
			chart.draw(data, google.charts.Line.convertOptions(options));*/
			
			var chart = new google.visualization.BubbleChart(
				document.getElementById('bubEMSpending_div'));
			chart.draw(data, options);
		} //edupercOfGDPCapita	
	    