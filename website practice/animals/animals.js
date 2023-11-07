const animals = [{
    name: 'Asian Elephant',
    picture: '/images/Elephant.jpg',
    species: 'Elephas maximu',
    facts: 'Asian elephants are smaller than their African counterparts, standing around 6.6 to 9.8 feet (2 to 3 meters) tall at the shoulder and weighing between 4,500 to 11,000 pounds (2,041 to 4,990 kilograms). Their ears are smaller and more rounded compared to African elephants.',
    link: 'https://www.natgeokids.com/uk/discover/animals/general-animals/elephant-facts/'
}, {
    name: 'Nile Hippopotamus',
    picture: '/images/Hippo.jpg',
    species: ' Hippopotamus amphibius',
    facts: 'Hippos, short for Hippopotamuses, are large, stocky animals with barrel-shaped bodies. They can weigh between 1,500 to 4,000 pounds (680 to 1,814 kilograms) and stand about 4 to 5 feet (1.2 to 1.5 meters) tall at the shoulder. Despite their large size, hippos are incredibly agile in water.' ,
    link: 'https://www.natgeokids.com/uk/discover/animals/general-animals/ten-hippo-facts/'
},{
    name: 'Axolotl',
    picture: '/images/Axolotl.jpg',
    species: ' Ambystoma mexicanum',
    facts: 'Axolotls (Ambystoma mexicanum) are found exclusively in the ancient lakes of Xochimilco and Chalco in central Mexico. These lakes are diminishing due to urbanization and pollution, making the axolotl critically endangered in the wild.',
    link: 'https://kids.nationalgeographic.com/animals/amphibians/facts/mexican-axolotl'
}];


let generatedHTML = '';

animals.forEach((animal) => {
    generatedHTML+= `
<div class="animal-container">
    <div class="animal-picture-div">
        <img class="animal-picture" src="${animal.picture}" alt="">
    </div>
    <div class="animal-species">
        <p> Species name : ${animal.species}</p>
    </div>
    <div class="animal-common-name">
        <p>Common name: ${animal.name}</p>
    </div>
    <div class="animal-facts">
        <p> Fun Fact: ${animal.facts}</p>
    </div>
    <form action="${animal.link}" target="_blank">
    <input type="submit" value="More Facts">
    </form>
</div>`
document.querySelector('.grid').innerHTML = generatedHTML;

});

