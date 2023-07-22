const body =document.querySelector("body")
const sidebar =body.querySelector(".sidebar")
const toggle =body.querySelector(".toggle")
const searchbtn =body.querySelector(".search-box")
const modeswitch =body.querySelector(".toggle-switch")
const modetext =body.querySelector(".mode-text")
const notification =body.querySelector(".text1")
const barchart =body.querySelector(".text2")
const piechart =body.querySelector(".text3")
const like =body.querySelector(".text4")
const wallet =body.querySelector(".text5")
const logout =body.querySelector(".text6")
const Dashboard =body.querySelector(".text7")
let home1 = document.getElementById('home1')

toggle.addEventListener("click",()=>{
    sidebar.classList.toggle("close"); 
})
searchbtn.addEventListener("click",()=>{
    sidebar.classList.remove("close"); 
})

modeswitch.addEventListener("click",()=>{
    body.classList.toggle("dark"); 
    if(body.classList.contains("dark")){
        modetext.innerHTML="Light Mode"
    }else{
        modetext.innerHTML="Dark Mode"
    }
})
notification.addEventListener("click",()=>{
    home1.innerHTML=``
    home1.innerHTML=`<div class="text">There Is No Notificatiion!</div>`
})
barchart.addEventListener("click",()=>{
    home1.innerHTML=``
    home1.innerHTML=`<div class="text">There Is No Notificatiion!</div>`
})
piechart.addEventListener("click",()=>{
    home1.innerHTML=``
    home1.innerHTML=`<div class="text">There Is No Notificatiion!</div>`
})
like.addEventListener("click",()=>{
    home1.innerHTML=``
    home1.innerHTML=`<div class="text">There Is No Like</div>`
})
wallet.addEventListener("click",()=>{
    home1.innerHTML=``
    home1.innerHTML=`<div class="text">There Is No Wallet hear!</div>`
})
logout.addEventListener("click",()=>{
    home1.innerHTML=``
    home1.innerHTML=`<div class="text">This Dashboard doesn't have login so..</div>`
})
Dashboard.addEventListener("click",()=>{
    home1.innerHTML=`<section class="home" id="home1">
    
    <div class="text">Dashboard</div>
    
    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
            Pie charts are very popular for showing a compact overview of a
            composition or comparison. While they can be harder to read than
            column charts, they remain a popular choice for small datasets.
        </p>
    </figure>
    <figure class="highcharts-figure">
        <div id="container1"></div>
        <p class="highcharts-description">
            Bar chart showing horizontal columns. This chart type is often
            beneficial for smaller screens, as the user can scroll through the data
            vertically, and axis labels are easy to read.
        </p>
    </figure>
   </section>`
   
})






