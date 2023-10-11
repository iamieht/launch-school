function calculateBMI(heightCm, weightKg) {
  let heightInMeters = heightCm / 100;
  let bmi = weightKg / heightInMeters ** 2;

  return bmi.toFixed(2);
}

// Example
console.log(calculateBMI(180, 80)); // "24.69"
