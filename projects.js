/*
<div style="text-align:center;background-color:#e6f3ff;border-radius:20px;padding:3%;">
	<!-- Project must have a url, name, image -->
	<a href={{projectdetaildata.url}}>
		<h2>{{projectdetaildata.name}}</h2>
	</a>
	<br />
	<table>
		<tr>
			<td width="50%">
				<img src={{projectdetaildata.image}} style="height: auto; width: 500px;"/>
			</td>
			<td style="padding: 5%;">
				<p>{{projectdetaildata.description}}</p>
			</td>
		</tr>
	</table>
</div>
*/

$(document).ready(function() {
  console.log('JS Running');
  var project_template = "<div style='text-align:center;background-color:#e6f3ff;border-radius:20px;padding:3%;margin-bottom:2%;'><!-- Project must have a url, name, image --><a href={{url}}><h2>{{name}}</h2></a><br /><table><tr><td width='50%'><img src={{image}} style='height: auto; width: 500px;'/></td><td style='padding: 5%;'><p>{{description}}</p></td></tr></table></div>";
  for (var i=0; i<15; i++) {
    $.get('projects/project' + i + '.txt', function(data) {
      var name = data.split('%$')[0];
      var url = data.split('%$')[1];
      var image = data.split('%$')[2];
      var description = data.split('%$')[3];

      var data = {
        name: name,
        url: url,
        image: image,
        description: description
      };

      var html = Mustache.render(project_template, data);
      $("#projectcontainer").append(html);
    }, "text");
  }

  /*
  var fs = require('fs');
  var projectList = [];
	var filesRead = 0;
	var filesList = [];
	fs.readdir(__dirname+"/public/projects/", function(err, filenames){
		console.log(filenames);
		for (var i=0; i<filenames.length; i++) {
        	var filePath = path.join(__dirname+"/public/projects/", filenames[i]);
    		filesList.push(filePath);
    		console.log(filePath);
    	}
    	for(var filex in filesList){
			var fileName = filesList[filex];
			fs.readFile(fileName, {encoding: 'utf-8'}, function(err,data){
			    if (!err){
			   		var name = data.split('%$')[0];
			   		var url = data.split('%$')[1];
			   		var image = data.split('%$')[2];
			   		var description = data.split('%$')[3];
			    	var project = {name:name, url:url, image:image, description:description};
			    	projectList.push(project);
			    	filesRead += 1;
			    	if(filesRead == filesList.length){
			    		res.json(projectList);
			    	}
			    }else{
			        console.log(err);
			    }
			});
		}
	});
  */
});
