function loadData() {
    $.ajax(
        'members.csv',
        {
            success: function (data) {
                window.memberList = $.csv.toArrays(data);
            }
        }
    );
}

loadData();

function handle(evt) {
    let memberNum = document.getElementById("memberNum").value;
    let lastName = document.getElementById("lastName").value;
    console.log(evt);
    for (var idx = 0; idx < memberList.length; idx++) {
        if (memberNum === memberList[idx][0] && lastName === memberList[idx][1]) {
            localStorage.setItem( "loggedInMember", memberNum );
            return true;
        }
    }
    evt.preventDefault();
    evt.stopPropagation();
    return false;
}

document.getElementById("submit-btn").onclick = handle;

/*Use local storage to recognize if member has already logged in*/
function memberCount() {
    memberStorage = window.localStorage;


}
/*var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
;*/
/*function popUpVideo(){
    if(handle() == true){

    }
}*/

