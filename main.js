var names=[];

function submit(){
    var student1=document.getElementById("input0").value;
    var student2=document.getElementById("input1").value;
    var student3=document.getElementById("input2").value;
    var student4=document.getElementById("input3").value;
    var student5=document.getElementById("input4").value;

    names.push(student1);
    names.push(student2);
    names.push(student3);
    names.push(student4);
    names.push(student5);

    console.log(names);
    document.getElementById("displayfornames").innerHTML=names;

    document.getElementById("buttonforsubmit").style.display="none";
    document.getElementById("buttontosortthenames").style.display="inline-block";
}

function sort(){
    names.sort()

    console.log(names);

    document.getElementById("displayfornames").innerHTML=names;
}