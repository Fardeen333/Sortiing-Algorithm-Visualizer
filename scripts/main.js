/*
    *****************
    DONE BY:-   Fardeen
    E-MAIL:-    xfardeen333@gmail.com
    *****************
*/

/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");

var left_container = document.getElementById("Info_Cont1");
var right_container = document.getElementById("Info_Cont2");

//var array_speed=document.getElementById('a_speed').value

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble(), Bubble_update_left_container(), Bubble_update_right_container();
                        break;
        case "Selection":Selection_sort(), Selection_update_left_container(), Selection_update_right_container();
                        break;
        case "Insertion":Insertion(), Insertion_update_left_container(), Insertion_update_right_container();
                        break;
        case "Merge":Merge(), Merge_update_left_container(), Merge_update_right_container();
                        break;
        case "Quick":Quick(), Quick_update_left_container(), Quick_update_right_container();
                        break;
        case "Heap":Heap(), Heap_update_left_container(), Heap_update_right_container();
                        break;
    }
}

function Bubble_update_left_container()
{
    left_container.innerText="Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.";
}
function Selection_update_left_container()
{
    left_container.innerText="In computer science, selection sort is an in-place comparison sorting algorithm. It has an O(n²) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort.";
}
function Insertion_update_left_container()
{
    left_container.innerText="Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.";            
}
function Merge_update_left_container()
{
    left_container.innerText="In computer science, merge sort is an efficient, general-purpose, and comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.";
}
function Quick_update_left_container()
{
    left_container.innerText="Quicksort is an in-place sorting algorithm. Developed by British computer scientist Tony Hoare in 1959 and published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be somewhat faster than merge sort and about two or three times faster than heapsort.";
}
function Heap_update_left_container()
{
    left_container.innerText="Heap sort is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements";
}


function Bubble_update_right_container(){
    right_container.innerText="Worst complexity: n^2"+
    "\n\nAverage complexity: n^2"+
    "\n\nBest complexity: n"+
    "\n\nSpace complexity: 1"+
    "\n\nMethod: Exchanging"+
    "\n\nStable: Yes"+
    "\n\nClass: Comparison sort";
}
function Selection_update_right_container(){
    right_container.innerText="Worst complexity: n^2"+
    "\n\nAverage complexity: n^2"+
    "\n\nBest complexity: n^2"+
    "\n\nSpace complexity: 1"+
    "\n\nMethod: Selection"+
    "\n\nStable: No"+
    "\n\nClass: Comparison sort";
}
function Insertion_update_right_container(){
    right_container.innerText="Worst complexity: n^2"+
    "\n\nAverage complexity: n^2"+
    "\n\nBest complexity: n"+
    "\n\nSpace complexity: 1"+
    "\n\nMethod: Insertion"+
    "\n\nStable: Yes"+
    "\n\nClass: Comparison sort";
}
function Merge_update_right_container(){
    right_container.innerText="Worst complexity: n*log(n)"+
    "\n\nAverage complexity: n*log(n)"+
    "\n\nBest complexity: n*log(n)"+
    "\n\nSpace complexity: n"+
    "\n\nMethod: Merging"+
    "\n\nStable: Yes"+
    "\n\nInventor: John von Neumann";
}
function Quick_update_right_container(){
    right_container.innerText="Worst complexity: n^2"+
    "\n\nAverage complexity: n*log(n)"+
    "\n\nBest complexity: n*log(n)"+
    "\n\nMethod: Partitioning"+
    "\n\nStable: No"+
    "\n\nClass: Comparison sort"+
    "\n\nInventor: Tony Hoare";
}
function Heap_update_right_container(){
    right_container.innerText="Worst complexity: n*log(n)"+
    "\n\nAverage complexity: n*log(n)"+
    "\n\nBest complexity: n*log(n)"+
    "\n\nSpace complexity: 1"+
    "\n\nMethod: Selection"+
    "\n\nStable: No"+
    "\n\nInventor: J. W. J. Williams"
}

/*
    *****************
    DONE BY:-   Fardeen
    E-MAIL:-    xfardeen333@gmail.com
    *****************
*/

