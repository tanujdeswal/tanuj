console. log("-------welcome in js-------");


    cons url = "https://restcountries.com/v3.1/all";

    async functi fetchData(){
        try{
            const response = await fetch(url);
            const response = await response.json();
            console.log(data);



        } catch (error) {
            console.log("------error-----:", error. message);
        }
    }

    
