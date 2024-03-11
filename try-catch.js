function checkAge() {
    // console.log('Button click')
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');


    try{
        const age  = parseInt(ageText);
        if(isNaN(age)){
            throw "Please Enter Valid Number ";
        }
        else if(age < 18){
            throw "Bacca Kacca Not Allowed";
        }
        errorTag.innerHTML = '';
    }
    catch(err){
        console.log('Error :',err);
        errorTag.innerHTML = 'Error ' + err;
    }
    finally{
        console.log('Thank u')

    }

    console.log(111)

}