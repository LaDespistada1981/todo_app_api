
const Usuario = require("../models/usuario");
const Tarefa = require("../models/tarefa");

module.exports = {
    usuarios:
    [ 
      new Usuario("Roberta Santos","robertasantosrj@gmail.com","castell_01"), 
      new Usuario("Dayane Mello","dmelo@gmail.com","castell_02"),
      new Usuario("Rosalinda Cannavò","a_devesco@gmail.com","castell_03"),
      new Usuario("Samantha De Grenet","degrenet_sam@gmail.com","castell_04")
    ],

    tarefas: 
    [
      new Tarefa("Aprender a tocar Anunciação","Estudar a canção no ukulele no cifra clube","A fazer","21/01/2021"),
      new Tarefa("Participar de Il Grand Fratello Italia","Vencer ao Grand Fratelleo","A fazer","21/01/2021"),
      new Tarefa("Participar de Il Grand Fratello Italia","Sobreviver ao boy lixo","A fazer","21/01/2021"),
      new Tarefa("Participar de Il Grand Fratello Italia","Atuar como terapeuta de casal","A fazer","21/01/2021"),
    ]
}