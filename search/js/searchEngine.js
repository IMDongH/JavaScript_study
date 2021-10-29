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
			var list =  "<ul>"; 
			for (var i=0; i<itemList.length; i++) {  
				list += "<li  class = 'source' id = "+i+">" + itemList[i] +"</li>"; 
			}
			list += "</ul>";   
			
			document.querySelector('#itemList').innerHTML = list;  //itemList라는 div에 list(ul li 로 이루어진 list)
			var click = document.querySelectorAll('.source'); 
            
            for(var i = 0; i < click.length; i++) {  
				click[i].addEventListener("click", showBookInfo);  
			}
			
		}
        function showBookInfo() // 해당 리스트 클릭했을때 띄울거 
        {
            alert(itemList[this.getAttribute("id")]);
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
             for(var i=1; i<=m; i++)
             {
                 d[i][0]=i;
             }
             for( var j =1; j<=n; j++)
             {
                 d[0][j]=j;
             }

             for(var i=0; i<=m; i++)
             {
                 for(var j=1; j<=n; j++)
                 {
                   d[i][j] =
     i === 0
       ? j
       : Math.min(
           d[i - 1][j] + 1,
           d[i][j - 1] + 1,
           d[i - 1][j - 1] + (t[j - 1] === s[i - 1] ? 0 : 1)
         );
                 }

             }
             
             return d[m][n];
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
                    console.log(strA.length, strB.length,result);
                    if((result == 1) || (result == 0))
                    {
						itemList.push(textArr[i]);  //itemList array에 textArr[i]값을 push
						document.querySelector("#item").value = "";  // #item 즉 text창을 비운다
						document.querySelector("#item").focus();  // 모르겠음
                        
                    }
                }
            }