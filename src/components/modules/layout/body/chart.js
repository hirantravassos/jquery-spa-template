async function ModuleChart(parentId,id,title,type,width,heightValue,apiPath,requestBody) {
	if (!ModuleAllowance(parentId)) {return}

	const height = heightValue * 56;

	$(`#${parentId}-body`).append(
			`<div style="width:${width}%;height:${height}px">`+
			`	<canvas id="${id}" height="${height}"></canvas>`+
			`</div>`
	);

	let apiData = ''
	if (apiPath === "chart-demo-data") {
		apiData = JSON.stringify({
			1:"17",
			2:"10",
			3:"5",
			4:"2",
			5:"20",
			6:"30"
		})
		apiData = JSON.parse(apiData)
	} else {
		apiData = API(apiPath,requestParameters)
	}

	const dataLabels = []
	const dataSet = []
	$.each(apiData, function (index, value) { 
		dataLabels.push(index)
		dataSet.push(value)
	});

	console.log(dataLabels,dataSet)
	console.log('id',id)

	const ctx = document.getElementById(`${id}`).getContext("2d");
	new Chart(ctx, {
		type: `${type}`,

		data: {
			labels: dataLabels,
			datasets: [
				{
					label: title,
					backgroundColor: "rgb(255, 99, 132)",
					borderColor: "rgb(255, 99, 132)",
					data: dataSet,
				},
			],
		},

		options: {
			responsive: true,
			maintainAspectRatio: false,
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
				},
			},
		},
	});
}