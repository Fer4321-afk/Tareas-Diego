const GREETING = 
['Hello world!',
'Hola mi gente de League of Tech!', 
'Hola Profe!', 
'Hola zangano master!', 
'HOLA DIEGO, APRUÉBAME :)'];


module.exports = async (req, res) => {


        const randomIndex = Math.floor(Math.random() * greeting.length);
        const GREETING = greeting [randomIndex];

    res.send({
        greeting: GREETING,
    });
};
