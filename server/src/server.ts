import express from 'express'

const app = express()

/* 
1° parâmetro: rota
2° parâmetro: Função que será executada assim que o usuário acessar essa rota. O request é utilizado para obter dados  da requisição que está acontecendo na aplicação. O response serve para devolver uma resposta para p browser ou para qualquer aplicação que esteja consumindo essa rota.
*/
app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    // Retornando dados no formato de json
    response.json([
        'Matheus',
        'Pipo',
        'Puco',
        'Teste'
    ])
})

app.listen(3333)