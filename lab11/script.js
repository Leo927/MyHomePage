function ajax_request() {
  	
       // create a variable we need to send to our PHP file
       var letter = document.getElementById("input_letter").value;
       //create XMLHttpRequest object
       var  xmlhttp = new XMLHttpRequest();
       // access the onreadystatechange event for the XMLHttpRequest object
           xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              var to_show;
              var results = JSON.parse(this.responseText);
              if (results.length > 0) 
              {
                  to_show = "<table border='1px'>";
                  to_show += "<tr>";
                  to_show += "<th>"; to_show += "User ID"; to_show += "</th>";
                  to_show += "<th>"; to_show += "Email"; to_show += "</th>";
                  to_show += "<th>"; to_show += "Birthday"; to_show += "</th>";
                  to_show += "</tr>";
                  for (var i = 0; i < results.length; i++) 
                  {
                      var json_result = results[i];
                      
                      to_show += "<tr>";
                      to_show += "<td>"; to_show += json_result.user_id; to_show += "</td>";
                      to_show += "<td>"; to_show += json_result.email; to_show += "</td>";
                      to_show += "<td>"; to_show += json_result.DOB; to_show += "</th>";
                      to_show += "</tr>";
                      
                  }
                  to_show += "</table>";
              }
              else{
                to_show = "There is no user name starts with '"+letter+"'";
              }
              document.getElementById("display_records").innerHTML = to_show;
	      		            
            }
        } 
        xmlhttp.open("GET", "show_records.php?q=" + letter, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send();
    
}
