// Object for the userprofile. Contains data on contact information,logg inn details etc 
let user01 = {
    username: 'Sara',
    password: 'Sara',
    email: 'Sara@thecaretag.com',
    firstName: 'Sara',
    lastName: 'care',
    birthDate: '05.05.05',
    phone: '99 99 99 99',
    necklaces = {
        necklaceName: 'sara',
        birthDate: '05.05.05',
        contactPersonNumber: '99 99 99 99',
        allergies: {
            allergy1: 'morfine'
        },
        organDonor: 'yes',
        psychological: {
            diagnose1: 'angst',
            diagnose2: 'bipolar',
            diagnose3: 'ADHD'
        },
        organFaults: {
            fault1: 'heart failure',
            fault2: 'kols'
        },
        other: {
            other1: 'diabetes 2'
        }
    }
};

// List of necklaces. Linking to the necklace object itself. 
let listOfNecklaces = {
    necklace01: necklaceProfile1,
    necklace02: 'tbd'
}