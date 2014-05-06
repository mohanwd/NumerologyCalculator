

function myFunction() {
            var Name = document.getElementById("BabyName").value;
            var n = Name.split("");
            var count = 0;
            for (var i = 0; i < n.length; i++) {
                if (n[i] === "a" || n[i] === "i" || n[i] === "q" || n[i] === "y" || n[i] === "j") {
                    count += 1;
                } else if (n[i] === "b" || n[i] === "k" || n[i] === "r") {


                    count += 2;
                }
                else if (n[i] === "c" || n[i] === "g" || n[i] === "l" || n[i] === "s") {


                    count += 3;
                }
                else if (n[i] === "d" || n[i] === "m" || n[i] === "t") {


                    count += 4;
                }
                else if (n[i] === "e" || n[i] === "h" || n[i] === "n" || n[i] === "x") {


                    count += 5;
                }
                else if (n[i] === "u" || n[i] === "v" || n[i] === "w") {


                    count += 6;
                }
                else if (n[i] === "o" || n[i] === "z") {


                    count += 7;
                }
                else if (n[i] === "f" || n[i] === "p") {


                    count += 8;
                }




            }
            alert(count);




        }
