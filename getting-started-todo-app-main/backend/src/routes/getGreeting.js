const GREETING =
[
    'Hello world!',
    'Hola zangano master',
    'Hola maquina',
    'Hola aprendiz de programador',
    'Hola y apruebame'
];

export const getGreeting= () =>
    {
        const randomIndex = Math.floor(Math.random() * GREETING.length);
        return GREETING[randomIndex];
    };
