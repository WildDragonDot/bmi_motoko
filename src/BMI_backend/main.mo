actor {
    public func calculateBMI(weightInKg: Float, heightInCM: Float) : async (Float, Text) {
        let bmi = (weightInKg  / heightInCM / heightInCM)*10000;
        let category =
            if (bmi < 18.5) {
                "Underweight"
            } else if (bmi >= 18.5 and bmi < 24.9) {
                "Normal weight"
            } else if (bmi >= 24.9 and bmi < 29.9) {
                "Overweight"
            } else {
                "Obesity"
            };
        
        return (bmi, category);
    }

};

