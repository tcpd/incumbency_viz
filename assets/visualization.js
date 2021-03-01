//Declare the data
const data = [{
  "State_Name": "West_Bengal",
  "State_Code": "WB",
  "File_Prefix": "wb",
  "Min_Assembly":3,
  "Max_Assembly" : 16,
  "Name": "West Bengal Vidhan Sabha"
  },{
    "State_Name": "Bihar",
    "State_Code": "BH",
    "File_Prefix": "bh",
    "Min_Assembly": 3,
    "Max_Assembly":17,
    "Name": "Bihar Vidhan Sabha"
    },{
      "State_Name": "Delhi",
      "State_Code": "DL",
      "File_Prefix": "dl",
      "Min_Assembly": 2,
      "Max_Assembly":11,
      "Name": "Delhi Vidhan Sabha"
    },
    {
      "State_Name": "Lok_Sabha",
      "State_Code": "LS",
      "File_Prefix": "ge",
      "Min_Assembly": 3,
      "Max_Assembly":17,
      "Name": "Lok Sabha"
    },
    {
      "State_Name": "Haryana",
      "State_Code": "HR",
      "File_Prefix": "hr",
      "Min_Assembly": 1,
      "Max_Assembly":13,
      "Name": "Haryana Vidhan Sabha"
    },
    {
      "State_Name": "Jharkhand",
      "State_Code": "JH",
      "File_Prefix": "jh",
      "Min_Assembly": 1,
      "Max_Assembly":4,
      "Name": "Jharkhand Vidhan Sabha"
    },
    {
      "State_Name": "Maharashtra",
      "State_Code": "MH",
      "File_Prefix": "mh",
      "Min_Assembly": 1,
      "Max_Assembly":13,
      "Name": "Maharashtra Vidhan Sabha"
    },
    {
      "State_Name": "Arunachal_Pradesh",
      "State_Code": "AR",
      "File_Prefix": "ar",
      "Min_Assembly":1,
      "Max_Assembly" : 10,
      "Name": "Arunachal Pradesh Vidhan Sabha"
    },
    {
      "State_Name": "Sikkim",
      "State_Code": "SK",
      "File_Prefix": "sk",
      "Min_Assembly":1,
      "Max_Assembly" : 9,
      "Name": "Sikkim Vidhan Sabha"
    },
    {
      "State_Name": "Assam",
      "State_Code": "AS",
      "File_Prefix": "as",
      "Min_Assembly":3,
      "Max_Assembly" : 14,
      "Name": "Assam Vidhan Sabha"
    },
    {
      "State_Name": "Manipur",
      "State_Code": "MN",
      "File_Prefix": "mn",
      "Min_Assembly":1,
      "Max_Assembly" : 12,
      "Name": "Manipur Vidhan Sabha"
    },
    {
      "State_Name": "Meghalaya",
      "State_Code": "ML",
      "File_Prefix": "ml",
      "Min_Assembly":1,
      "Max_Assembly" : 10,
      "Name": "Meghalaya Vidhan Sabha"
    },
    {
      "State_Name": "Mizoram",
      "State_Code": "MZ",
      "File_Prefix": "mz",
      "Min_Assembly":1,
      "Max_Assembly" : 12,
      "Name": "Mizoram Vidhan Sabha"
    },
    {
      "State_Name": "Nagaland",
      "State_Code": "NL",
      "File_Prefix": "nl",
      "Min_Assembly":1,
      "Max_Assembly" : 13,
      "Name": "Nagaland Vidhan Sabha"
    },
    {
      "State_Name": "Tripura",
      "State_Code": "TR",
      "File_Prefix": "tr",
      "Min_Assembly":1,
      "Max_Assembly" : 11,
      "Name": "Tripura Vidhan Sabha"
      }]
//const data = require('./Assemblies.json');

var params = new URL(document.location).searchParams;
var st = params.get('s') ? params.get('s') : data[0].State_Code;
// $('#assembly option[value="select"').html(st).change();
var assembly= data.filter(function(i){return i.State_Code === st})
$('.assembly-name').html(assembly[0].Name);
var assemblyNo = params.get('a') ? parseInt(params.get('a')) : parseInt(assembly[0].Max_Assembly);
$('.assembly-number').html(assemblyNo == 1 ? "1st" :assemblyNo == 2 ? "2nd" :assemblyNo == 3 ? "3rd" : (assemblyNo + "th"));

$('.representative-name').html(st==="LS"?"MP":"MLA");
// $('#assemblies1 option[value="select"').html((assemblyNo == 1 ? "1st" :assemblyNo == 2 ? "2nd" :assemblyNo == 3 ? "3rd" : (assemblyNo + "th")) +  " Assembly").change();

$("#assembly").change(function() {
    // var optionValue = $(this).val();
    // var url = window.location.href.split("?")[0];
    // window.location = url + "?s=" + optionValue;
    var val = $(this).val(); // This should be the new CurrencyCode, extracted from a select box
         var pag = window.location.pathname;
         var url = window.location.search;
             url = url.replace("?", "").split("&"); // Clean up the URL, and create an array with each query parameter

         var n = -1;
         for (var count = 0; count < url.length; count++) {
             if (!url[count].indexOf("s")) { // Figure out if if/where the Currency is set in the array, then break out
                 n = count;
                 break;
             }
         }

         if (n !=-1) {
            url.splice(n,1); // If the Currency was set, remove it from the array
         }

         var len = url.length;
         var newUrl = url.join("&"); // Restringify the array

         if (len > 0) { // Check whether or not the currency is the only parameter, then build new URL with ? or &
            newUrl = pag + "?" + newUrl + "&s=" + val;
         } else {
            newUrl = pag + newUrl + "?s=" + val;
         }

         window.location.href = newUrl; // Finished, let's go!
});


$("#assemblies").change( function(){
  var val = $(this).val(); // This should be the new CurrencyCode, extracted from a select box
       var pag = window.location.pathname;
       var url = window.location.search;
           url = url.replace("?", "").split("&"); // Clean up the URL, and create an array with each query parameter

       var n = -1;
       for (var count = 0; count < url.length; count++) {
           if (!url[count].indexOf("a")) { // Figure out if if/where the Currency is set in the array, then break out
               n = count;
               break;
           }
       }

       if (n !=-1) {
          url.splice(n,1); // If the Currency was set, remove it from the array
       }

       var len = url.length;
       var newUrl = url.join("&"); // Restringify the array

       if (len > 0) { // Check whether or not the currency is the only parameter, then build new URL with ? or &
          newUrl = pag + "?" + newUrl + "&a=" + val;
       } else {
          newUrl = pag + newUrl + "?a=" + val;
       }

       window.location.href = newUrl; // Finished, let's go!
} );




var sel = document.getElementById('assembly');
var fragment = document.createDocumentFragment();


data.forEach(function(data, index) {
    var opt = document.createElement('option');
    opt.innerHTML = data.State_Name.replace("_"," ");
    opt.value = data.State_Code;
    if(data.State_Code=== st){
      opt.setAttribute("selected", "selected");
    }
    fragment.appendChild(opt);
});

sel.appendChild(fragment);


var sel1 = document.getElementById('assemblies');
var fragment1 = document.createDocumentFragment();
var assemblies = [];
for(i = parseInt(assembly[0].Min_Assembly); i < parseInt(assembly[0].Max_Assembly) +1; i++){assemblies.push(i)}
assemblies.forEach(function(i,index){
  var opt = document.createElement('option');
  opt.innerHTML = (i ===1 ? "1st": i=== 2 ? "2nd" : i===3 ? "3rd" : i +"th") + " Assembly";
  opt.value =  i;
  if(i == assemblyNo){
    opt.setAttribute("selected", "selected");
  }
  fragment1.appendChild(opt)
});
sel1.appendChild(fragment1)

var pre = assembly[0].File_Prefix;
var url = 'data/'+ pre+'-incumbency-' + assemblyNo + '.csv'; //change json source here

// document.getElementById('downloadlink').href = url;

if(st==="LS"){
  var ld_url = "https://lokdhaba.ashoka.edu.in/browse-data?et=GE&st=all&an="+assemblyNo;
}else{
  var ld_url = "https://lokdhaba.ashoka.edu.in/browse-data?et=AE&st="+assembly[0].State_Name+"&an="+assemblyNo;
}

document.getElementById('browselink').href = ld_url;

var pids_url = 'data/'+ pre +'-pids.csv';

var party_color_url = 'data/colours.csv';
var party_names_url = 'data/'+pre+'-party-expanded.csv';



function LOG(s) {
	if (console) {
		console.log(s);
	}
}

function sum( obj ) {
  return Object.keys(obj).reduce((sum,key)=>sum+parseFloat(obj[key]||0),0);
}

function getKeyAbovePercentage(object, value) {
	const total = Object.values(object).reduce((t, n) => t + n)
	LOG('total seats: ' + total)
	for (var i in object) { // we do the conversion here
  object[i] = (object[i] / total * 100) ;
	}
	//var perc = Object.keys(object).reduce()
  return Object.keys(object).filter(key => object[key] >= value);
}

var fixedPartyColours = [];
d3.csv(party_color_url, function(party_cols) {
	party_cols.forEach(function(d){
		fixedPartyColours[d.Party] = d.Color;
	})
});


var partyNames =[];
d3.csv(party_names_url, function(party_names) {
	party_names.forEach(function(d){
		partyNames[d.Party] = d.Expanded_Party_Name;
	})
});

function commatize(nStr) {
	if (!nStr) return '';
	nStr += '';
	var x = nStr.split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

// read the pids file and then the raw data file
d3.csv(pids_url, function(pids_data) {
	d3.csv(url, function(data) {
		function isInArray(value, array) {
			return array.indexOf(value) > -1;
		}
		function isTopParty(p) {
			return isInArray(p, topParties);
		}

		var allRows = data; // data.rows;

		// check data and convert strings to ints
		allRows.forEach(function(d) {
			d.Position = parseInt(d.Position);
			d.No_Mandates = parseInt(d.Terms);
			d.Contested = parseInt(d.Terms_Contested);
			d.Assembly_No = parseInt(d.Assembly_No);
      d.Poll_No = parseInt(d.Poll_No);
			d.Age = parseInt(d.Age);
			d.Year = parseInt(d.Year);
			// enable these rows if we want to show more info in the person's info box
			//            d.Votes = parseInt(d.Votes);
			//            d.Margin = parseInt(d.Margin);
			//            d.Age = parseInt (d.Age);
		});

		//get list of all parties
		var allParties = [];
		for (var i = 0; i < allRows.length; i++) {
			if (!isInArray(allRows[i].Party, allParties)) {
				allParties.push(allRows[i].Party);
			}
			if (!isInArray(allRows[i].Last_Party, allParties)) {
				allParties.push(allRows[i].Last_Party);
			}
		}

    let yr = allRows.find(function(i){
      return i.Assembly_No === assemblyNo && i.Poll_No === 0
    }).Year;
    $('.year-of-election').html('('+yr+')');

    // # of seats won by party (all assemblies, not just the one being shown). This will be used for generating the sort order of parties.
		var numSeats = { Other: 0 };
		allRows.forEach(function(data) {
			var party = data.Party;
			if (data.Position === 1 && data.Assembly_No === assemblyNo) {
				if (numSeats[party]) numSeats[party]++;
				else numSeats[party] = 1;
			}
		});

		LOG('num seats: ' + numSeats);
		//LOG('new top parties:' + getKeyAbovePercentage(numSeats,2 ));

		allParties = allParties.sort(function(partyA, partyB) {
			var aCount = !numSeats[partyA] ? 0 : numSeats[partyA];
			var bCount = !numSeats[partyB] ? 0 : numSeats[partyB];
			return bCount - aCount;
		});

		LOG('all parties: ' + allParties);
		// top parties have their own column in the viz. all others are clubbed into "Other"
		//var topParties = allParties.slice(0, Math.min(allParties.length, MAX_PARTIES_TO_SHOW));
		//keeping parties with seatshares greater >= 2 as top parties
		var topParties = getKeyAbovePercentage(numSeats,2 )
		// e.g. topParties is something like ['BJP', 'INC', 'AITC', 'DMK', 'SHS', 'YSRCP', 'TRS', 'BJD'];
		LOG('top parties: ' + topParties);

		// if Last_Party is not set, set it to the same as Party, so the color of the box remains the same as their party
		allRows.forEach(function(row) {
			// last party is not set for someone's first election.
			if (!row.Last_Party) {
				row.Last_Party = row.Party;
			}
		});

		// If not top party, change party and last_party of a row to Other.
		// but save these fields in Oth_Current and Oth_last, so we can show the info accurately on hover
		allRows.forEach(function(row) {
			row.Oth_Current = row.Party;
			row.Oth_Last = row.Last_Party;
			if (!isTopParty(row.Party)) {
				row.Oth_Current = row.Party;
				row.Party = 'Other';
			}
			if (!isTopParty(row.Last_Party)) {
				row.Oth_Last = row.Last_Party;
				row.Last_Party = 'Other';
			}
		});

		//generate colour range for parties (after Other has been set for the non-top parties)
		{
			var colourRange = randomColor({
				count: allParties.length,
				luminosity: 'dark',
				format: 'rgb' // e.g. 'rgb(225,200,20)'
			});

			//dict of party and colour
			var partyColours = {};
			for (var i = 0; i < allParties.length; i++) {
				var party = allParties[i];
				partyColours[party] = fixedPartyColours[party] ? fixedPartyColours[party] : colourRange[i];
			}
		}

		var generateViz = function(mydata, assemblyNo, labels, wonlost, turncoats, sex, searchTerm) {
			function do_mouseover(d) {
				var tooltip = d3.select('.tooltip');
				tooltip.transition().duration(200).style('opacity', 1.0);
				tooltip
					.html(function() {
						function string_for_row(row) {
							var win_or_lose_class = row.Position === 1 ? 'won' : 'lost';
							var result =
								'<span class="' +
								win_or_lose_class +
								'">' +
								row.Constituency_Name +
								' (' +
                row.Assembly_No+
                'a, '+
								row.Year +
								') ' +
								row.Oth_Current +
								', #' +
								row.Position +
								'</span>';
							if (row.Poll_No > 0) {
								result += '<span class="bypoll">BYE POLL</span>';
							}
							return result;
						}

						// get the img link - first matching link in pids table, or empty if no match
						var img_link = '';
						var pid = d.pid;
						for (var x = 0; x < pids_data.length; x++) {
							if (pids_data[x].pid === pid) {
								img_link = pids_data[x].link;
								break;
							}
						}

						// add the initial tooltip
						var tooltipText = '<img class="profile-pic" src="' + img_link + '"/> ' + '<br/>';
						tooltipText += '<span class="cand-name">' + d.Candidate.toUpperCase() + '</span><br/>';
						tooltipText += string_for_row(d) + '<br/>';
						if (d.Age) tooltipText += d.Age + ' years<br/>';
						// tooltipText += '<i>Votes</i>: ' + commatize(d.Votes) + ' (' + d.Vote_Share_Percentage + '%) <br/>';
						// tooltipText += '<i>Margin</i>: ' + commatize(d.Margin) + ' (' + d.Margin_Percentage + '%) <br/>';

						// then add the history. This is only the history in prev. assemblies.
						// note this is history on all rows, not just currently filtered rows
						// Possible improvement: show in history if same cand. has contested another seat in the same assembly also.
						var candHistory = mydata.filter(function(k) {
							return k.pid === d.pid && d.Assembly_No > k.Assembly_No;
						});
						candHistory.sort(function(a, b) {
							return b.Year - a.Year;
						});
						tooltipText += '<hr style="color:darkgray;background-color:darkgray;margin-bottom:3px;"/>';
						candHistory.forEach(function(k) {
							tooltipText += string_for_row(k) + '<br/>';
						});

						//LOG(tooltipText);
						return tooltipText;
					})
					.style('left', d3.event.pageX + 5 + 'px') // offset the tooltip location a bit from the event's pageX/Y
					.style('top', d3.event.pageY - 28 + 'px');
			}

			function pty_mouseover(e) {
				var tooltip = d3.select('.tooltip');
				tooltip.transition().duration(200).style('opacity', 1.0);
				tooltip
					.html(function() {
						// add the initial tooltip
						//LOG(e)
						var tooltipText = partyNames[e.replace(/[\[\]'0-9]+/g,'')];
						//LOG(tooltipText);
						return tooltipText;
					})
					.style('left', d3.event.pageX + 5 + 'px') // offset the tooltip location a bit from the event's pageX/Y
					.style('top', d3.event.pageY - 28 + 'px');
			}


			function do_mouseout() {
				var tooltip = d3.select('.tooltip');
				tooltip.transition().duration(500).style('opacity', 0);
			}

			// actual code for generateViz begins
			LOG(
				'generating graph with ' +
					mydata.length +
					' rows for assembly#' +
					assemblyNo +
					' labels ' +
					labels +
					' wonlost=' +
					wonlost +
					' turncoats=' +
					turncoats +
					' sex=' +
					sex
			);

			// get current assembly rows
			var filteredRows;
			{
				filteredRows = mydata.filter(function(i) {
					return i.Assembly_No === parseInt(assemblyNo);
				});

				if (wonlost === '1') {
					filteredRows = filteredRows.filter(function(i) {
						return i.Position === 1;
					});
				} // else all candidates, do nothing

				if (turncoats === 'TURNCOATS') {
					filteredRows = filteredRows.filter(function(i) {
						return i.Turncoat === 'TRUE';
					});
				} else if (turncoats === 'PREVIOUSLY_CONTESTED') {
					filteredRows = filteredRows.filter(function(i) {
						return i.Contested > 1;
					});
				} else if (turncoats === 'NEWCOMERS') {
					filteredRows = filteredRows.filter(function(i) {
						return i.Contested === 1;
					});
				}

				if (sex === 'FEMALE') {
					filteredRows = filteredRows.filter(function(i) {
						return i.Sex === 'F';
					});
				} else if (sex === 'MALE') {
					filteredRows = filteredRows.filter(function(i) {
						return i.Sex === 'M';
					});
				} else if (sex === 'OTHER') {
					filteredRows = filteredRows.filter(function(i) {
						return i.Sex === 'O';
					});
				}

				LOG('filtered rows ' + filteredRows.length);
			}

			// get parties in these rows and sort them by importance (# seats won in this dataset)
			var parties = [];
			{
				var lookup = {};
				for (var i = 0; i < filteredRows.length; i++) {
					var Party = filteredRows[i].Party;
					if (!(Party in lookup)) {
						lookup[Party] = 1;
						parties.push(Party);
					}
				}

				// sort by the # of seats. But other's count is set to 0, so it is always shown last
				parties = parties.sort(function(a, b) {
					return numSeats[b] - numSeats[a];
				});
			}

			//get current assembly entries by party
			var partywise = [];
			{
				for (i = 0; i < parties.length; i++) {
					var currentParty = parties[i];
					var currentEntries = filteredRows.filter(function(i) {
						if (currentParty === 'IND') {
							return i.Party === currentParty && i.Last_Party !== 'None'; // If Ind, filter out candidates whose last_party is None
						} else {
							return i.Party === currentParty;
						}
					});
					// currentEntries.sort(function(a,b) {return (a.Last_Party > b.Last_Party) ? 1 : ((b.Last_Party > a.Last_Party) ? -1 : 0);} );
					partywise.push(currentEntries);
				}
			}

			//sort other by last party and move 'none' to end
			if (parties.indexOf('Other') !== -1) {
				partywise[parties.indexOf('Other')].sort(function(a, b) {
					return a.Last_Party > b.Last_Party ? 1 : b.Last_Party > a.Last_Party ? -1 : 0;
				});
				partywise[parties.indexOf('Other')].forEach(function(v, i) {
					if (v.Last_Party === 'None') {
						partywise[parties.indexOf('Other')].push(partywise[parties.indexOf('Other')][i]);
						partywise[parties.indexOf('Other')].splice(i, 1);
					}
				});
				partywise[parties.indexOf('Other')].forEach(function(v, i) {
					if (v.Position === 1) {
						var a = partywise[parties.indexOf('Other')].splice(i, 1); // removes the item
						partywise[parties.indexOf('Other')].unshift(a[0]); // adds it back to the beginning
					}
				});
			}

			partywise.forEach(function(party_rows) {
				var party_count_for_last_party = [];
				party_rows.forEach(function(d) {
					if (party_count_for_last_party[d.Last_Party]) party_count_for_last_party[d.Last_Party]++;
					else party_count_for_last_party[d.Last_Party] = 1;
				});

				party_count_for_last_party['Other'] = -1; // let this rank at the bottom

				// sort the boxes within a given party column
				party_rows.sort(function(a, b) {
					// rows with last_party = higher count will come before rows with last_party = lower count
					if (party_count_for_last_party[a.Last_Party] !== party_count_for_last_party[b.Last_Party])
						return party_count_for_last_party[b.Last_Party] - party_count_for_last_party[a.Last_Party];

					// rows_with_last_party is same for a and b (may or may not be the same last_party)
					// if so, sort partywise in alpha order
					if (a.Last_Party > b.Last_Party) {
						return 1;
					} else if (a.Last_Party < b.Last_Party) {
						return -1;
					}

					// last_party for a and b is the same
					// put winners before losers

					if (a.Position === 1 && b.Position > 1) return -1;
					else if (a.Position > 1 && b.Position === 1) return 1;

					// if no other difference, sort by # terms or terms_contested.
					// IMP: Don't use # mandates here. Different rows for the same PID have different No_Mandates, but # Terms is the same
					if (a.Terms !== b.Terms) {
						return b.Terms - a.Terms;
					}
					return b.Terms_Contested - a.Terms_Contested;
				});
			});

			// set legend parties, colors and colorscale
			{
				var legendParties = [];
				for (i = 0; i < partywise.length; i++) {
					if (partywise[i][0]) {
						legendParties.push(partywise[i][0].Party +'['+partywise[i].length+']');
					} else {
						partywise.splice(i, 1);
					}
				}

				//get colour range for legend parties
				var legendColours = [];
				for (i = 0; i < legendParties.length; i++) {
					legendColours.push(partyColours[legendParties[i].replace(/[\[\]'0-9]+/g,'')]);
				}

				//declare colour scale
				var colourScale = d3.scaleOrdinal().domain(legendParties).range(legendColours);
			}

			var symbolSize = 180;
			var SYMBOLS_PER_ROW = 5;
			var MAX_SYMBOLS_IN_ONE_PARTY = 0;
			for (var k = 0; k < partywise.length; k++) {
				if (partywise[k].length > MAX_SYMBOLS_IN_ONE_PARTY) {
					MAX_SYMBOLS_IN_ONE_PARTY = partywise[k].length;
				}
			}

			var TOP_MARGIN = 30;
			var LEGEND_MARGIN = 300; // in x dimension

			var width = (SYMBOLS_PER_ROW + 1) * partywise.length * (Math.sqrt(symbolSize) + 3); // horizontal
			var height = (TOP_MARGIN + MAX_SYMBOLS_IN_ONE_PARTY / SYMBOLS_PER_ROW) * Math.sqrt(symbolSize);

			var svg = d3.select('#viz').append('svg').attr('width', width + LEGEND_MARGIN).attr('height', height);

			//generate shapes for this col
			var col = -SYMBOLS_PER_ROW;
			var row = -1;
			for (k = 0; k < partywise.length; k++) {
				svg
					.selectAll('u')
					.data(partywise[k])
					.enter()
					.append('path')
					.attr(
						'd',
						d3
							.symbol()
							.type(function(d) {
								return d.Position === 1 ? d3.symbolSquare : d3.symbolCircle;
							})
							.size(function() {
								return symbolSize;
							})
					)
					.attr('transform', function(d, i) {
						if (i === 0) {
							col += SYMBOLS_PER_ROW + 1;
						}
						var x = (i % SYMBOLS_PER_ROW + col) * (symbolSize / 11);
						if (i % SYMBOLS_PER_ROW === 0 && i !== 0) {
							row += 1;
						}
						if (i === 0) {
							row = 0;
						}
						var y = (row + 3) * (symbolSize / 10);
						return 'translate(' + x + ',' + y + ')';
					})
					.style('fill', function(d) {
						var pattern = new RegExp(searchTerm, 'i');
						// remember to test Oth_Current because the part we are looking for may be there
						return pattern.test(d.Candidate) ||
						pattern.test(d.Constituency_Name) ||
						pattern.test(d.Party) ||
						pattern.test(d.Oth_Current)
							? partyColours[d.Last_Party]
							: '#dddddd';
					})
					//.style('opacity', 0.5)
					.on('mouseover', do_mouseover)
					.on('mouseout', do_mouseout);
			}

			// generate label
			if (labels !== 'NO_LABEL') {
				col = -SYMBOLS_PER_ROW;
				row = -1;
				var letterArray = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ];
				for (var j = 0; j < partywise.length; j++) {
					svg
						.selectAll(letterArray[j])
						.data(partywise[j])
						.enter()
						.append('text')
						.attr('x', function(d, i) {
							if (i === 0) {
								col += SYMBOLS_PER_ROW + 1;
							}
							if (labels === 'TIMES_CONTESTED') {
								if (d.Contested > 9) {
									return (i % SYMBOLS_PER_ROW + col) * (symbolSize / 11) - 5;
								} else {
									return (i % SYMBOLS_PER_ROW + col) * (symbolSize / 11) - 3;
								}
							}
							if (labels === 'TIMES_WON') {
								if (d.No_Mandates > 9) {
									return (i % SYMBOLS_PER_ROW + col) * (symbolSize / 11) - 5;
								} else {
									return (i % SYMBOLS_PER_ROW + col) * (symbolSize / 11) - 3;
								}
							}
						})
						.attr('y', function(d, i) {
							if (i % SYMBOLS_PER_ROW === 0 && i !== 0) {
								row += 1;
							}
							if (i === 0) {
								row = 0;
							}
							return (row + 3) * (symbolSize / 10) + 4;
						})
						.text(function(d) {
							if (labels === 'TIMES_CONTESTED') {
								return d.Contested; // well, contested can't be == 0.
							}
							if (labels === 'TIMES_WON') {
								if (d.No_Mandates > 0) {
									return d.No_Mandates;
								}
							}
						})
						.style('fill', 'white')
						.style('font-family', 'Montserrat')
						.style('font-size', function(d) {
							if (labels === 'TIMES_CONTESTED') {
								if (d.Contested > 9) {
									return '10px';
								} else {
									return '11px';
								}
							}
							if (labels === 'TIMES_WON') {
								if (d.No_Mandates > 9) {
									return '10px';
								} else {
									return '11px';
								}
							}
						})
						.on('mouseover', do_mouseover)
						.on('mouseout', do_mouseout);
				}
			}

			//create legends
			{
				svg
					.append('g')
					.attr('class', 'legendOrdinal')
					.attr('transform', 'translate(' + width / (partywise.length * 2.5) + ',' + 5 + ')');

				var legendOrdinal = d3
					.legendColor()
					.orient('horizontal')
					//.shape("path", d3.symbol().type(d3.symbolTriangle).size(100)())
					.shapeWidth(25)
					.shapePadding(width / (partywise.length * 1.35))
					.scale(colourScale)
          .on('cellover', pty_mouseover)
					.on('cellout', do_mouseout);

				svg.select('.legendOrdinal').call(legendOrdinal);

				// create symbol legend, but only if we're showing losers. no need to show it if we are only showing winners.
				if (wonlost === '2') {
					// only show legend if we're showing all
					var circle = d3.symbol().type(d3.symbolCircle).size(200)();
					var square = d3.symbol().type(d3.symbolSquare).size(200)();

					var symbolScale = d3.scaleOrdinal().domain([ 'Winner', 'Loser' ]).range([ square, circle ]);

					svg
						.append('g')
						.attr('class', 'legendSymbol')
						.attr('transform', 'translate(' + (width + 20) + ', 100)');

					var legendPath = d3.legendSymbol().scale(symbolScale).orient('vertical');

					svg.select('.legendSymbol').call(legendPath);
				}
			}
		};

		var refresh = function() {
			//var assemblyNo = $('#assemblies').val();
			var labels = $('.select-label').val();
			var wonlost = $('.select-wonlost').val();
			var turncoats = $('.select-turncoats').val();
			var sex = $('.select-sex').val();
			var searchTerm = $('.select-search').val();
			//d3.selectAll("svg").transition().duration(400).style("opacity", 0).remove();
			d3.selectAll('svg').remove();
			generateViz(allRows, assemblyNo, labels, wonlost, turncoats, sex, searchTerm);
		};

		// handle on click event
		$('.select-assemblies,.select-label,.select-wonlost,.select-turncoats,.select-sex,.select-search').on(
			'change',
			refresh
		);
		$('.select-search').on('keyup', refresh);

		refresh();
	});
});
