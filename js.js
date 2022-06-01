const dictionary = { "Понедельник": "Monday", "Вторник": "Tuesday" };
        const weekDays = {
            "Mo": "Понедельник",
            "Tu": "Вторник",
        }
 
        function translate(obj, dictionary) {
            for (let key in obj) {
                let ru = obj[key];
                let en = dictionary[ru];
                obj[key] = en;
            }
        }
        translate(weekDays, dictionary);
        console.log(weekDays);