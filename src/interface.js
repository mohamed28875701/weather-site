import info from "./info";
export default class inter{
    //compose the elements of the websites
    static main(){
        const content=document.getElementById("content");
        content.appendChild(inter.header());
        content.appendChild(inter.input());
        const wrapper=document.createElement("div");
        wrapper.id="main";
        wrapper.appendChild(inter.cityName())
        wrapper.appendChild(inter.cityMain())
        wrapper.appendChild(inter.cityTmp())
        wrapper.appendChild(inter.cityFeelsLike())
        wrapper.appendChild(inter.cityWind());
        content.appendChild(wrapper);
        }
    //creation of the elements
    static header(){
        const wrapper = document.createElement("div");
        wrapper.id="header";
        const head=document.createElement("h1");
        head.id="name";
        head.textContent="Weather"
        const button =document.createElement("button");
        button.id="switch";
        button.textContent="C";
        wrapper.appendChild(head)
        wrapper.appendChild(button);
        return wrapper;
    }
    static input(){
        const wrapper=document.createElement("div");
        wrapper.id="input";
        const form=document.createElement("form");
        const search=document.createElement("input");
        const button=document.createElement("button");
        search.type="text";
        search.maxLength="30";
        search.placeholder="City name i.e Paris";
        search.id="seach";
        button.type="submit";
        button.id="submit";
        button.innerHTML='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="#000000"><defs><style>.cls-6374f8d9b67f094e4896c660-1{fill:none;stroke:aliceblue;stroke-miterlimit:10;}</style></defs><circle class="cls-6374f8d9b67f094e4896c660-1" cx="9.14" cy="9.14" r="7.64"></circle><line class="cls-6374f8d9b67f094e4896c660-1" x1="22.5" y1="22.5" x2="14.39" y2="14.39"></line></svg>'
        form.appendChild(search)
        form.appendChild(button);
        wrapper.appendChild(form);
        button.addEventListener("click",inter.submitCity);
        return wrapper;
    }
    static cityName(){
        const wrapper=document.createElement("div");
        wrapper.id="city-name";
        wrapper.classList.add("name");
        const name=document.createElement("div");
        const responseName= info.getName("paris").then((inf)=>{
            name.textContent=`${inf.name},${inf.country}`;    
        });
        
        wrapper.appendChild(name);
        return wrapper;
    }
    static  cityTmp(){
        const card=document.createElement("div");
        card.id="city-temp";
        card.classList.add("card");
        const wrapper=document.createElement("div");
        wrapper.id="info-wrapper";
        const referTo=document.createElement("p");
        referTo.textContent="temp";
        const temperture=document.createElement("p");
        temperture.id="temp";
        info.getTmp("paris").then((inf)=>{
            
            if(document.getElementById("switch").textContent==="C"){
                temperture.textContent=`${Math.round(inf-273.15)} C`;
            }
            else{
                temperture.textContent=`${Math.round((inf-273.15)*(9/5)+32)} F`;
            }
        });
        card.innerHTML='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="aliceblue"><defs><style>.cls-637b8b31f95e86b59c57a270-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><circle class="cls-637b8b31f95e86b59c57a270-1" cx="16.3" cy="3.89" r="0.48"></circle><circle class="cls-637b8b31f95e86b59c57a270-1" cx="6.27" cy="17.73" r="0.95"></circle><path class="cls-637b8b31f95e86b59c57a270-1" d="M10.09,14.89V5.32a3.82,3.82,0,0,0-7.64,0v9.57a4.77,4.77,0,1,0,8.6,2.84A4.74,4.74,0,0,0,10.09,14.89Z"></path><line class="cls-637b8b31f95e86b59c57a270-1" x1="6.27" y1="10.09" x2="6.27" y2="16.77"></line><line class="cls-637b8b31f95e86b59c57a270-1" x1="10.09" y1="6.27" x2="12.95" y2="6.27"></line><line class="cls-637b8b31f95e86b59c57a270-1" x1="10.09" y1="10.09" x2="12.95" y2="10.09"></line><line class="cls-637b8b31f95e86b59c57a270-1" x1="10.09" y1="13.91" x2="12.95" y2="13.91"></line><path class="cls-637b8b31f95e86b59c57a270-1" d="M22.5,10.09A1.9,1.9,0,0,1,20.59,12h0a1.91,1.91,0,0,1-1.91-1.91V7.23a1.91,1.91,0,0,1,1.91-1.91h0A1.9,1.9,0,0,1,22.5,7.23"></path></svg>'
        
        wrapper.appendChild(referTo);
        wrapper.appendChild(temperture);
        card.appendChild(wrapper);
        return card;
    }
    static cityFeelsLike(){
        const card=document.createElement("div");
        card.id="city-feelslike";
        card.classList.add("card");
        const wrapper=document.createElement("div");
        wrapper.id="f-wrapper";
        const referTo=document.createElement("p");
        referTo.textContent="feels like";
        const feelsLike=document.createElement("p");
        feelsLike.id="feels-like";
        info.getFeelsLike("paris").then((f)=>{
            
            if(document.getElementById("switch").textContent==="C"){
                feelsLike.textContent=`${Math.round(f-273.15)} C`;
            }
            else{
                feelsLike.textContent=`${Math.round((f-273.15)*(9/5)+32)} F`;
            }
        });
        card.innerHTML='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="aliceblue"><defs><style>.cls-637b8b31f95e86b59c57a270-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><circle class="cls-637b8b31f95e86b59c57a270-1" cx="16.3" cy="3.89" r="0.48"></circle><circle class="cls-637b8b31f95e86b59c57a270-1" cx="6.27" cy="17.73" r="0.95"></circle><path class="cls-637b8b31f95e86b59c57a270-1" d="M10.09,14.89V5.32a3.82,3.82,0,0,0-7.64,0v9.57a4.77,4.77,0,1,0,8.6,2.84A4.74,4.74,0,0,0,10.09,14.89Z"></path><line class="cls-637b8b31f95e86b59c57a270-1" x1="6.27" y1="10.09" x2="6.27" y2="16.77"></line><line class="cls-637b8b31f95e86b59c57a270-1" x1="10.09" y1="6.27" x2="12.95" y2="6.27"></line><line class="cls-637b8b31f95e86b59c57a270-1" x1="10.09" y1="10.09" x2="12.95" y2="10.09"></line><line class="cls-637b8b31f95e86b59c57a270-1" x1="10.09" y1="13.91" x2="12.95" y2="13.91"></line><path class="cls-637b8b31f95e86b59c57a270-1" d="M22.5,10.09A1.9,1.9,0,0,1,20.59,12h0a1.91,1.91,0,0,1-1.91-1.91V7.23a1.91,1.91,0,0,1,1.91-1.91h0A1.9,1.9,0,0,1,22.5,7.23"></path></svg>'
        
        wrapper.appendChild(referTo);
        wrapper.appendChild(feelsLike);
        card.appendChild(wrapper);
        return card;
    }
    static cityWind(){
        const card=document.createElement("div");
        card.id="city-feelslike";
        card.classList.add("card");
        const wrapper=document.createElement("div");
        wrapper.id="f-wrapper";
        const referTo=document.createElement("p");
        referTo.textContent="wind";
        const wind=document.createElement("p");
        wind.id="wind";
        info.getWind("paris").then((f)=>{
            
            if(document.getElementById("switch").textContent==="C"){
                wind.textContent=`${Math.round(f*1.6)} km/h`;
            }
            else{
                wind.textContent=`${Math.round(f)} mph`;
            }
        });
        card.innerHTML='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="aliceblue"><defs><style>.cls-637b8b31f95e86b59c57a275-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><path class="cls-637b8b31f95e86b59c57a275-1" d="M4.33,8.17H19.67a2.88,2.88,0,1,0-2.88-2.88"></path><line class="cls-637b8b31f95e86b59c57a275-1" x1="0.5" y1="8.17" x2="2.42" y2="8.17"></line><path class="cls-637b8b31f95e86b59c57a275-1" d="M19.67,12H4.33a2.88,2.88,0,1,0,2.88,2.88"></path><line class="cls-637b8b31f95e86b59c57a275-1" x1="23.5" y1="12" x2="21.58" y2="12"></line><path class="cls-637b8b31f95e86b59c57a275-1" d="M13.92,15.83h5.75a2.88,2.88,0,1,1-2.88,2.88"></path><line class="cls-637b8b31f95e86b59c57a275-1" x1="10.08" y1="15.83" x2="12" y2="15.83"></line><line class="cls-637b8b31f95e86b59c57a275-1" x1="0.5" y1="4.33" x2="8.17" y2="4.33"></line><line class="cls-637b8b31f95e86b59c57a275-1" x1="10.08" y1="4.33" x2="13.92" y2="4.33"></line><line class="cls-637b8b31f95e86b59c57a275-1" x1="13.92" y1="19.67" x2="8.17" y2="19.67"></line></svg>'
        wrapper.appendChild(referTo);
        wrapper.appendChild(wind);
        card.appendChild(wrapper);
        return card;
    }
    static cityMain(){
        const wrapper = document.createElement("div");
        wrapper.id="city-main";
        wrapper.classList.add("name");
        const p =document.createElement("p");
        p.id="overall";
        info.getMainWeather("paris").then((inf)=>{
            p.textContent=`Overall: ${inf}`;
        })
        wrapper.appendChild(p);
        return wrapper;
    }
    static error(){
        const wrapper=document.createElement("div");
        wrapper.id="error";
        const button =document.createElement("button");
        button.id="close";
        button.textContent="X";
        const message=document.createElement("p");
        message.textContent="There is no such city";
        wrapper.appendChild(button);
        wrapper.appendChild(message);
        return wrapper;
    }
    //update UI
    static updateTemp(city){
        info.getTmp(city).then((inf)=>{
            
            
            if(document.getElementById("switch").textContent==="C"){
                document.getElementById("temp").textContent=`${Math.round(inf-273.15)} C`;
            }
            else{
                document.getElementById("temp").textContent=`${Math.round((inf-273.15)*(9/5)+32)} F`;
            }
        });        
    }
    static updateFeelsLike(city){
        info.getFeelsLike(city).then((f)=>{
            
            if(document.getElementById("switch").textContent==="C"){
                document.getElementById("feels-like").textContent=`${Math.round(f-273.15)} C`;
            }
            else{
                document.getElementById("feels-like").textContent=`${Math.round((f-273.15)*(9/5)+32)} F`;
            }
        });
    }
    static updateWind(city){
        info.getWind(city).then((f)=>{
            
            if(document.getElementById("switch").textContent==="C"){
                document.getElementById("wind").textContent=`${Math.round(f*1.6)} km/h`;
            }
            else{
                document.getElementById("wind").textContent=`${Math.round(f)} mph`;
            }
        });       
    }
    static updateName(city){
        info.getName(city).then((inf)=>{
            document.getElementById("city-name").textContent=`${inf.name},${inf.country}`;    
        });       
    }
    static updateCityMain(city){
        info.getMainWeather(city).then((inf)=>{
            document.getElementById("overall").textContent=`Overall: ${inf}`;
        })
    }
    //events
    static async submitCity(e){
        e.preventDefault();
        const city=document.getElementById("seach");
        const response = await info.getweather(city.value);
        
        if(response===404){
            console.log("fuck");
            return;
        }
            
        inter.updateTemp(city.value)
        inter.updateName(city.value);
        inter.updateFeelsLike(city.value);
        inter.updateWind(city.value);
        inter.updateCityMain(city.value);
    }
}