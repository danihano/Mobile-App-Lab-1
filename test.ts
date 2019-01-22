function addition(value: string)
    {
    console.log("Value is: " + value);
    }
    let firstVal: number = 42;
    let secondVal: number = 2;
    let sumOfVals: string = (firstVal + secondVal).toLocaleString();

    let flag: boolean = false;
    console.log("Value assigned to flag is: "+flag);

    let decimal: number = 6;
    console.log("Value assigned to decimal is: "+decimal);

    let hex: number = 0xf00d;
    console.log("Value assigned to hex is: "+hex);
    
    let binary: number = 0b1010;
    console.log("Value assigned to binary is: "+binary);

    let octal: number = 0o744;
    console.log("Value assigned to octal is: "+octal);

    let textEnt: String = "Hello World!";

    let textEnt2: String = "Hello World!";

    let spaceOn: boolean = false;


    stringCount(textEnt);

    stringCountSpace(textEnt2);

    ifString(spaceOn,textEnt);

    function stringCount(textEnt:String)
    {
        let letters: number = textEnt.length;
        console.log("Number of letters is: "+letters);
    }

    function stringCountSpace(textEnt2:String)
    {
        let letters2: number = textEnt2.replace(/\s+/, "").length;
        console.log("Number of letters without space is: "+letters2);
    }

    function ifString(spaceOn:boolean, textEnt:String)
    {
        if(spaceOn == true)
        {
            let letters: number = textEnt.length;
            console.log("<IF>Number of letters is: "+letters);  
        }
        else
        {
            let letters: number = textEnt.replace(/\s+/, "").length;
            console.log("<IF>Number of letters without space is: "+letters);
        }
    }

    addition(sumOfVals);
    