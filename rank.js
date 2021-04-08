$(document).ready(function (){
    $("button").on("click", submitRank);
    $("input#qty1").on("change", orderTotal);
    $("input#qty2").on("change", orderTotal);
});

function orderTotal (event)
{
    let orderOne = parseFloat($("#qty1").val());

    let orderTwo = parseFloat($("#qty2").val());

    let totalOne = orderOne * 39.99;
    let totalTwo = orderTwo * 14.99;

    let grandTotal = totalOne + totalTwo;

    $("p#first-order").text(`${totalOne}`);
    $("p#second-order").text(`${totalTwo}`);

    $("p#grand-total").text(`$${grandTotal.toFixed(2)}`);
}


function submitRank(event)
{
    let first = document.getElementById("first-name").value;
    let last = document.getElementById("last-name").value;


    let checkedRadio = $("input[name=rank]:checked");


    let rankChosen = $("input[name=rank]:checked").data("standing");
    let rankColor = $("input[name=rank]:checked").data("color");

    $("p#submit").text(`Hello, ${rankChosen} ${first} ${last} `);
    $("p#submit").css("color", rankColor);
}