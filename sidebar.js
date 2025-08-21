document.getElementById("tg-btn").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("collapsed")
    if (document.getElementById("sidebar").classList.contains("collapsed")){
        document.getElementById("wayless_name").textContent = "Wayless"
    }
    else{
        setTimeout(() => {
            document.getElementById("wayless_name").textContent = "Wayless Studios"
        },200)
        
    }
})