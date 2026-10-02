function checkGrade() {
    let studentName = document.getElementById("score").value;
    let number = Number(document.getElementById("score1").value);
    let number2 = Number(document.getElementById("score2").value);
    let number3 = Number(document.getElementById("score3").value);

    let totalMarks = number + number2 + number3;
    let Average= totalMarks / 3;
    let Percentage = (totalMarks / 300 ) * 100;
       
    let grade;
        if (Percentage > 90) {
            grade = "A"
        }
        else if(Percentage > 75) {
           grade = "B" 
        }
        else if(Percentage > 60) {
            grade = "C"
        }
        else if (Percentage > 50) {
              grade = "D"
            
        }
        else{
            grade = "F"
        }
        
        

        let result;
        if (Percentage > 50) {
            result = "Pass"
            
        }
        else{
            result = "fall"
        }
        
        document.getElementById("result").innerHTML = 
        "Student Name:" + " "+ studentName + "<br>"+
         "Total Marks:" + " "+ totalMarks + "<br>"+
          "Average:"+ " "+ Average+ "<br>"+
          "Percentage:" +  " " +Percentage + "%" +"<br>" +
          "Grade:"+ grade+ "<br>"+
          "Result:"+ " "+ result + "<br>";
          
          

        
    }
   
    
    
    

    

    

    
   
    
