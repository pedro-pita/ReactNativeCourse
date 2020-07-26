class Releases{
    constructor(name="Generic",value = "0"){
        this.name = name;
        this.value = value;
    }
}

class FinancialCycle{
    constructor(month,year){
        this.month = month;
        this.year = year;
        this.releases = [];
    }

    addReleases(...releases){ //receive one or more releases and concatenate in an array
        releases.forEach(l => this.releases.push(l));
    }

    summary(){
        let consolidatedValue = 0;
        this.releases.forEach(l => {
            consolidatedValue += l.value;
        });
        return consolidatedValue;
    }
}

const salary = new Releases('Salary',1000);
const water = new Releases('Water',-80);
const house = new Releases('House',-400);
const car = new Releases('Car',-100);

const counts = new FinancialCycle(7,2020);
counts.addReleases(salary,water,house,car);
console.log(counts.summary())