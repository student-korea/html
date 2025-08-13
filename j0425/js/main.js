$(function(){
    $("#dataOpen").click(function(){
        alert("게시글 데이터를 가져옵니다.");
        $.ajax({
            url:"js/board.json",
            type:"get",
            data:{"bno":1,"bhit":50},
            dataType:"json",
            success:function(data){
                alert("성공");
                console.log(data);
                console.log("1번째 : ",data[0]);
                console.log("1번째 : ",data[0].bno);
                console.log("총개수 : ",data.length);
                let hdata=``;
                for(let i=0;i<data.length;i++){
                    hdata+=`<tr id="${data[i].bno}">`;
                    hdata+=`<td>${data[i].bno}</td>`;
                    hdata+=`<td>${data[i].title}</td>`;
                    hdata+=`<td>${data[i].id}</td>`;
                    hdata+=`<td>${data[i].bdate}</td>`;
                    hdata+=`<td>${data[i].bhit}</td>`;
                    hdata+=`<td>`;
                    hdata+=`<button type="button" class="updateBtn">수정</button>`;
                    hdata+=`<button type="button" class="deleteBtn">삭제</button>`;
                    hdata+=`</td>`;
                    hdata+=`</tr>`;
                }
                
                $("#tbody").html(hdata);
            },
            error:function(){
                alert("실패");
            }
        });
    });
    // html 서버 통신 x, 웹프로그래밍, ajax방법
    // html 일부데이터만 화면전환없이 변경이 가능
    
});

