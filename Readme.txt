Her har vi en for loop, som vil fortsette å calle på createBar(), så lenge i er mindre en antallet items i arrayet.
For hver gang den gjør det vokser indexen med 1. 
når den caller createbar() sender den med 2 parameter. Den ene basert på tallet som er lagret i numbers array. Plasseringen
den henter ut i arrayet er også besert på index sin value. Og det andre parameteret er index sin value + 1. Dette er igjen
med på å skape en typ id til hver bar i programmet. Og for hver gang showChart() blir kalt, så changes svgTag sin innerHTML
til å være lik det som blir returnert av createBar().

1.Så har vi da createBar(). Den får inn to parametere basert på hva som ble sendt inn når den ble kaldt. Disse blir jo da number[i] og i+1.
Så første gang createBar() blir kadlt så vil disse verdiene være 7 og 1. Disse blir igjen brukt til å genere høyde og posisjonen til rectanglene
basert på height, x og y. Så lager vi en variabel som vi skal bruke som farge. Dette ved å sende med 3 parameter til funksjonen calcColor().
Vi caller på checkIfSelected sånn at den blir oppdatert. Også kommer en ifsettning som tegner opp en firkant, med eller uten border.
Hvis square = barNo som bare vil skje om square har fått en value fra onclick() assignID. DVS hvis firkanten er trykket på. så tenger den
opp firkanten med en border. Og hvis dette ikke er sant så tenger den opp en firkant uten border. 

2.Det første som skjer i firkantene er at de får en width verdi, basert på variablene width og spacing. Som da alltid vil resultere i 10.
De får en høyde basert på tallet i numbers arrayet * 10.
så har dem en x og y verdi som jeg ikke helt karer å forklare, men dette har med posisjonen på firkantene å gjøre. 
Color får dem generert fra calcColor() også en onclick funksjon som sender med barNo som vi trenger til å generere en value til variablen
square. 


3.Funksjonen assignId() får med parameteret chosenSquare som igjen vil si barno sin verdi. I den første baren som blir laget vil denne ha
en verdi på 1. Så når jeg klikker på en av firkantene vil den først sjekke ( har square allerede fått en verdi ) oprinnelig vil square ha verdien 0
med mindre en firkant er trykket på. Hvis den allerede har en verdi (da har den også en border rundt seg) så vil den forandre square til 0
og calle på showChart() på nytt. ( da vil argumentet i createBar ikke stemme ) på noen, så den vil ikke tegne opp noen border.
Hvis den stemmer vil den endre square til å være lik chosenSquare (barNo) også kalle på showchart(), da vil argumentet her stemme for
en av firkantene, når dette skjer vil den tegne opp firkanten med en border.

4.Så kommer vi til funksjonen checkIfSelected(). Denne sjekker om en firkant er valgt basert på om square har fått en value. Den vil jo
da kun ha en value hvis en firkant er trykket på. Så hvis square = 0 så vil changeButton og removeButton være disabled. Hvis ikke ( som da skjer
hvis square har en value) så vil dem ikke være disabled. Har caller jeg også på chosenBarNr hver gang for å oppdatere chosenBarNr siden 
checkIfSelected blir calt hver gang createBar().


5.Så har vi funksjonen addSquare() som blir brukt som en onlick til legg til stople knappen. Den har et argument som sier at hvis input er
mindre enn 1 eller høyere enn 10 så kommer det opp en feilmelding med bruk av alert. Hvis ikke vil den legge til input verdien i arrayet. 
så caller den showChart() på nytt.

6.Så har vi en funksjon til å endre stolpe. Samme skjer igjen om man ikke har en verdi mellom 1-10. Hvis den har det. Numbers sin square - 1.
til å være lik input. Disse knappene vil jo kun være synelig hvis square har fått en verdi så la oss si at du har klikket på
firkant 3, square vil da ha fått en verdi som er 3. Så når du klikker på endre med f.eks verdien 4 vil den gå inn i numbers sin item
nr 3-1 som blir 2 og da teller vi opp fra 0,1,2 som er bar nummer 3 og endrer verdien til å være 4 og caller showChart() på nytt.

7.Så har vi en funksjon som fjerner en stolpe med splice. Den tar inn 2 verdier første er fra hvilken item i arrayet og neste er antall den skal fjerne
til høyre for. La oss si at bar nr er 3, dette blir 2 så fjerner den neste verdi og fjerner 1 verdi. 

8.så har jeg en funksjon som vider hvilken stolpe som er valgt basert på square sin verdi. Vi har en if settning som sier at hvis 
square ikke har noen verdi, så vil chosenBar sin innerHTML være "ingen". Hvis da square har en verdi, så vil chosenBar sin innerHTML
være lik square. 

9.Så har vi siste funksjonen. Denne var jo allerede skrevet ned, men jeg kan jo forklare hva den gjør. Når funksjonen kalles, så sender man med
3 parameter, som vi skal bruke vidre i funksjonen. Dette sender vi med i createBar. Utifra hva vi ser her så vil alltid, de 2 første verdiene
vi sender med være 1 og 10 så har vi en verdi som er basert på barNo. Det skjer litt forskjellig ting her. Det som skjer er at det blir en typ
random farge basert på barNo og dette sender vi tilbake vedhjelp av en variabel som heter colString. Denne lager en en string som sender en typ
HSL kode basert på disse variablene.,

