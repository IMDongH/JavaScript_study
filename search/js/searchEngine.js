		var itemList = [];

		var textArr;
		var searchS;

		async function loadFile(file) { //파일 불러오는 함수 서버에서 값 받아오도록 해야함
		  var text = await file.text();
		  var textStr = text;
		  textArr = text.split('\n'); 
			   
		}
		
		var addBtn = document.querySelector("#add");
		addBtn.addEventListener("click", addList);
		
		function addList() {
			var item = document.querySelector("#item").value;  
			if (item != null) {
				runAlgorithm(item);
				
			}
			showList();
		}
		
		function showList() {
			var list = "<ul>"; 
			for (var i=0; i<itemList.length; i++) {  
				list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>"; 
			}
			list += "</ul>";   
			
			document.querySelector('#itemList').innerHTML = list;  
			
			var remove = document.querySelectorAll(".close"); 
			for(var i = 0; i < remove.length; i++) {  
				remove[i].addEventListener("click", removeList);  
			}
		}
		
		function removeList() {
			var id = this.getAttribute("id"); 
			itemList.splice(id, 1);  
			showList(); 
		}
		function editDistance(s,t)
           {
                var m = s.length-1;
                var n = t.length;
                var d = new Array(m+1);
                for(var i=0; i<d.length; i++)
                {
                    d[i]=new Array(n+1);
                }
                d[0][0]=0;
                for(var i=1; i<m; i++)
                {
                    d[i][0]=i;
                }
                for( var j =1; j<n; j++)
                {
                    d[0][j]=j;
                }

                for(var j=1; j<=n; j++)
                {
                    for(var i=1; i<=m; i++)
                    {
                        if(s[i]==t[j])
                        {
                            d[i][j]=d[i-1][j-1];
                        }
                        else
                        {
                            d[i][j]=getMin(d[i-1][j],d[i][j-1],d[i-1][j-1])+1;
                        }
                    }

                }
                
                return d[m-1][n-1];
           }
		   function getMin(n1,n2,n3)
            {
                var minN=n1;
                if(minN>n2)
                minN=n2;
                if(minN>n3)
                minN=n3;

                return minN;
            }
            
            function runAlgorithm(inputString)
            {
                
               
                for(var i=0; i<textArr.length-1; i++)
                {
                    var strA = textArr[i];
                    var strB = inputString;

                    var result = editDistance(strA,strB);
                   
                    if((result == 1) || (result == 0))
                    {
						itemList.push(textArr[i]);  
						document.querySelector("#item").value = ""; 
						document.querySelector("#item").focus(); 
                        
                    }
                }
            }