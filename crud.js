let data=[
    {id:1, name:"anurag", email:"anuragrawat950@gamil.com"},
    {id:2, name:"pro", email:"pro222@gmail.com"},
]
function readAll(){
    localStorage.setItem("Object", JSON.stringify(data));
    var tabledata= document.querySelector(".data_table");

    var object= localStorage.getItem('object');
    var objectdata= JSON.parse(object);
    var elements= "";

    objectdata.map(record =>(
        elements += <tr>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
            </tr>
    ))
    tabledata.innerHTML= elements;
}

function create(){
    document.querySelector(".formclass").style.display = "block";
    document.querySelector(".updateform").style.display="none";
}