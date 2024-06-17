# Aula 22 - jogo da velha - Versão 1.1

## Introdução
> Esta videoaula é a quinta de uma série de oito aulas, voltada a apresentar o desenvolvimento de uma aplicação do mundo real, um jogo da velha, fazendo uso dos conhecimentos das aulas anteriores. O presente vídeo é o primeiro (de três) que trata a implementação da aplicação. Corresponde ao conteúdo da seção 7.5 do capítulo 7 do livro 'React essencial e acelerado'.
[Professor Ricardo Pereira e Silva - Descrição Aula 22](https://www.youtube.com/watch?v=1rp27bprtQw&list=PLQb3t1uw-rpFCJlfyglJkJ_8Zz_gMIa7A&index=22&ab_channel=ModelagemOrientadaaObjetoscomUML)

# Aula 24 - O exemplo jogo da velha - código 3 - React essencial e acelerado
> Esta videoaula é a sétima de uma série de oito aulas, voltada a apresentar o desenvolvimento de uma aplicação do mundo real, um jogo da velha, fazendo uso dos conhecimentos das aulas anteriores. O presente vídeo é o terceiro (de três) que trata a implementação da aplicação. Corresponde ao conteúdo da seção 7.5 do capítulo 7 do livro 'React essencial e acelerado'.
[Professor Ricardo Pereira e Silva - Descrição Aula 24](https://www.youtube.com/watch?v=7obIdrXjEVQ&ab_channel=ModelagemOrientadaaObjetoscomUML)

## Tela do App
![image](https://github.com/wfrsilva/React-essencial-e-acelerado/assets/8933834/5399830e-4158-403b-bef8-3a63732ea3d1)



## Versão 1.1
Alterações, melhorias e complementos adicionados que não estão presentes na videoaula nem no repositório do professor.
- Icone [jogo-velha.svg](https://github.com/wfrsilva/React-essencial-e-acelerado/blob/main/Aula_22_-_O_exemplo_jogo_da_velha/public/jogo-velha.svg)
- Diretorio [documents](https://github.com/wfrsilva/React-essencial-e-acelerado/tree/main/Aula_22_-_O_exemplo_jogo_da_velha/src/documents)/
    - Diagrama [Jogo-Velha-Componentes.svg](https://raw.githubusercontent.com/wfrsilva/React-essencial-e-acelerado/7403e80ff1ce9fc7628d0f390765f1bafe1b427b/Aula_22_-_O_exemplo_jogo_da_velha/src/documents/Jogo-Velha-Componentes.svg)
- Usar ```async/await``` em vez de ```.then()```: Isso torna o código mais fácil de ler e entender.
- Funções Auxiliares Fora do Componente:
    - As funções ```generateId``` e ```getUserId``` para fora do componente App.
- Simplificação do useState:
    - Removida as funções anônimas dos ```useState``` porque não são necessárias.
- Tratamento de Erros:
    - Adicionados blocos ```try/catch``` para tratar erros nas chamadas de API.

 ### [jogo-velha.svg](https://github.com/wfrsilva/React-essencial-e-acelerado/blob/main/Aula_22_-_O_exemplo_jogo_da_velha/public/jogo-velha.svg)
 
 <img src="https://github.com/wfrsilva/React-essencial-e-acelerado/blob/main/Aula_22_-_O_exemplo_jogo_da_velha/public/jogo-velha.svg" alt="Logo jogo da Velha" width="75" height="75">

### Diagrama [Jogo-Velha-Componentes.svg](https://raw.githubusercontent.com/wfrsilva/React-essencial-e-acelerado/7403e80ff1ce9fc7628d0f390765f1bafe1b427b/Aula_22_-_O_exemplo_jogo_da_velha/src/documents/Jogo-Velha-Componentes.svg)

<img src="https://raw.githubusercontent.com/wfrsilva/React-essencial-e-acelerado/7403e80ff1ce9fc7628d0f390765f1bafe1b427b/Aula_22_-_O_exemplo_jogo_da_velha/src/documents/Jogo-Velha-Componentes.svg" alt="Diagrama Jogo-Velha-Componentes" style="max-width: 100%;">


## Links
- [Video-aulas React essencial e acelerado](https://www.youtube.com/watch?v=Wdto4xO981g&list=PLQb3t1uw-rpFCJlfyglJkJ_8Zz_gMIa7A&index=1&ab_channel=ModelagemOrientadaaObjetoscomUML);
- [Livro React essencial e acelerado](https://www.amazon.com.br/React-essencial-acelerado-Ricardo-Pereira-ebook/dp/B0CS4MT24K/ref=sr_1_1?crid=KYMXD3Y1SRYA&keywords=react+essencial+e+acelerado&qid=1705929956&sprefix=react+essen%2Caps%2C191&sr=8-1);
