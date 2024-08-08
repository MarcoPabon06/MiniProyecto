let data = []
let selectedposition = ""


let save = function() {
    

    let name = document.getElementById("name").value
    let lastname1 = document.getElementById("lastname1").value
    let usercode = document.getElementById("usercode").value

    data.push({name:name, lastname1:lastname1, usercode:usercode})
    localStorage.setItem("database",JSON.stringify(data))
    load()
    cleandata()


}

let load = function() {

    data = JSON.parse(localStorage.getItem("database"))

    let maindata = document.getElementById("maindata")
    maindata.innerHTML = ""

    for (let a = 0; a < data.length; a++) {

        maindata.innerHTML = maindata.innerHTML + `<tr>
                                                        <th scope="row">${a+1}</th>
                                                        <td onclick="selectinput(${a})">${data[a].name}</td>
                                                        <td onclick="selectinput(${a})">${data[a].lastname1}</td>
                                                        <td onclick="selectinput(${a})">${data[a].usercode}</td>
                                                        <td><button type="button" class="btn btn-danger" onclick="deleteinfo(${a})">Remover</button></td>
                                                    </tr>`
        
        
    }


}


let cleandata = function() {
    document.getElementById("name").value = "";
    document.getElementById("lastname1").value = "";
    document.getElementById("usercode").value = "";
    document.getElementById("searchbar").value = "";

}

let deleteinfo = function(position){
    data.splice(position,1)
    localStorage.setItem("database",JSON.stringify(data))
    load()

}

let deletebyinput = function() {
    let searchbar = document.getElementById("searchbar").value
    let position = data.findIndex((item) => item.usercode === searchbar)
    if (position == -1) {
        alert("El codigo no se encuentra registrado en nuestra base de datos.")
    }
    else{
        data.splice(position,1)
        localStorage.setItem("database",JSON.stringify(data))
        load()
        cleandata()

    }
}

let update = function() {
    data[selectedposition].name = document.getElementById("name").value
    data[selectedposition].lastname1 = document.getElementById("lastname1").value
    data[selectedposition].usercode = document.getElementById("usercode").value
    localStorage.setItem("database",JSON.stringify(data))
    load()
    cleandata()

}

let selectinput = function (position) {
    selectedposition = position
    document.getElementById("name").value = data[position].name;
    document.getElementById("lastname1").value = data[position].lastname1;
    document.getElementById("usercode").value = data[position].usercode;
}

load()