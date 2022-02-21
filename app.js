function convert(){
    // take the value

    var value_one = document.getElementById("input").value;
    var curOne = document.getElementById("curency_one").value;
    var curTwo = document.getElementById("curency_two").value;

    // define output

    var output = document.getElementById("output");
    output.value;


    // same curency
    if(curOne == curTwo){
        output.value = value_one * 1;
    }

    // bangladeshi taka to all
    if(curOne == "BDT" && curTwo == "INR"){
        output.value = value_one * 0.87;
    }

    if(curOne == "BDT" && curTwo == "USD"){
        output.value = value_one * 0.012;
    }

    if(curOne == "BDT" && curTwo == "AED"){
        output.value = value_one * 0.043;
    }

    if(curOne == "BDT" && curTwo == "PKR"){
        output.value = value_one * 2.04;
    }

    if(curOne == "BDT" && curTwo == "JPN"){
        output.value = value_one * 1.34;
    }



    // indian rupee to all
    if(curOne == "INR" && curTwo == "BDT"){
        output.value = value_one * 1.14;
    }

    if(curOne == "INR" && curTwo == "USD"){
        output.value = value_one * 0.013;
    }

    if(curOne == "INR" && curTwo == "AED"){
        output.value = value_one * 0.049;
    }

    if(curOne == "INR" && curTwo == "PKR"){
        output.value = value_one * 2.36;
    }

    if(curOne == "INR" && curTwo == "JPN"){
        output.value = value_one * 1.54;
    }


    // american doller to all
    if(curOne == "USD" && curTwo == "BDT"){
        output.value = value_one * 85.96;
    }

    if(curOne == "USD" && curTwo == "INR"){
        output.value = value_one * 75.08;
    }

    if(curOne == "USD" && curTwo == "AED"){
        output.value = value_one * 3.67;
    }

    if(curOne == "USD" && curTwo == "PKR"){
        output.value = value_one * 175.84;
    }

    if(curOne == "USD" && curTwo == "JPN"){
        output.value = value_one * 114.98;
    }




    // arab emirates dirhams to all
    if(curOne == "AED" && curTwo == "BDT"){
        output.value = value_one * 23.40;
    }

    if(curOne == "AED" && curTwo == "INR"){
        output.value = value_one * 20.44;
    }

    if(curOne == "AED" && curTwo == "USD"){
        output.value = value_one * 0.27;
    }

    if(curOne == "AED" && curTwo == "PKR"){
        output.value = value_one * 47.87;
    }

    if(curOne == "AED" && curTwo == "JPN"){
        output.value = value_one * 31.30;
    }

    // pakistan rupee to all
    if(curOne == "PKR" && curTwo == "BDT"){
        output.value = value_one * 0.49;
    }
    
    if(curOne == "PKR" && curTwo == "INR"){
        output.value = value_one * 0.42;
    }

    if(curOne == "PKR" && curTwo == "USD"){
        output.value = value_one * 0.0057;
    }

    if(curOne == "PKR" && curTwo == "AED"){
        output.value = value_one * 0.021;
    }

    if(curOne == "PKR" && curTwo == "JPN"){
        output.value = value_one * 0.65;
    }



    // Japan yen to all
    if(curOne == "JPN" && curTwo == "BDT"){
        output.value = value_one * 0.75;
    }
    
    if(curOne == "JPN" && curTwo == "INR"){
        output.value = value_one * 0.65;
    }

    if(curOne == "JPN" && curTwo == "USD"){
        output.value = value_one * 0.0087;
    }

    if(curOne == "JPN" && curTwo == "AED"){
        output.value = value_one * 0.032;
    }

    if(curOne == "JPN" && curTwo == "PKR"){
        output.value = value_one * 1.53;
    }


}