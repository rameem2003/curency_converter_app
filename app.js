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



    // indeian rupee to all
    if(curOne == "INR" && curTwo == "BDT"){
        output.value = value_one * 1.14;
    }

    if(curOne == "INR" && curTwo == "USD"){
        output.value = value_one * 0.013;
    }

    if(curOne == "INR" && curTwo == "AED"){
        output.value = value_one * 0.049;
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


}