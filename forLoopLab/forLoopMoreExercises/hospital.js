function hospital(input) {
    let period = Number(input[0]);

    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let patients = 0;

    for (let i = 1; i <= period; i++) {
        patients = Number(input[i]);
        if (i % 3 !== 0) {
            if (patients <= doctors) {
                treatedPatients += patients;
            } else if (patients > doctors) {
                treatedPatients += doctors;
                untreatedPatients += patients - doctors;
            }

        } else if (i % 3 === 0) {
            if (untreatedPatients > treatedPatients) {
                doctors++;
            }
            if (patients <= doctors) {
                treatedPatients += patients;
            } else if (patients > doctors) {
                treatedPatients += doctors;
                untreatedPatients += patients - doctors;
            }

        }

    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);

}

hospital([6, "25", "25", "25", "25", "25", "2 "]);