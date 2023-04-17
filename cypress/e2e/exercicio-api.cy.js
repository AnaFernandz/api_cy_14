/// <reference types= "cypress" />

import contrato from '../contracts/usuarios.contract'


describe('Testes da Funcionalidade Usuários', () => {

    it('Deve validar contrato de usuários', () => {
         //TODO: 
         cy.request('usuarios').then(response => {
          return contrato.validate(response.body)
      })
    });

    it('Deve listar usuários cadastrados', () => {
         //TODO: 
          cy.request({
               method: 'GET',
               url: 'Usuarios'
          }).then((response) => {
               expect(response.status).to.equal(200)
          })


    });

    it('Deve cadastrar um usuário com sucesso', () => {
         cy.request({
          method: 'POST',
          url: 'Usuarios',
          body: {
                    "nome": 'Ana Fernandez',
                    "email": "fernandez@qa.com.br",
                    "password": "teste",   
                     "administrador": "true" 
          }
         }).then((response) => {
          expect(response.status).to.equal(201)
          expect(response.body.message).contain('Cadastro realizado com sucesso')

     })
    });

    it('Deve validar um usuário com email inválido', () => {
     cy.request({
          failOnStatusCode: false,
          method: 'POST',
          url: 'Usuarios',
          body: {
                    "nome": 'Ana Fernandez',
                    "email": "fernandez@qa.com.br",
                    "password": "teste",   
                     "administrador": "true" 
          }
         }).then((response) => {
          expect(response.status).to.equal(400)
          expect(response.body.message).contain('Este email já está sendo usado')

     })


    });

    it('Deve editar um usuário previamente cadastrado', () => {
         //TODO: 
         cy.request('usuarios').then(response => {
          let id = response.body.usuarios[0]._id

        cy.request({
          method: 'PUT',
          url: `usuarios/${id}`,
          body: {
                    "nome": 'Ana Fernandez novo',
                    "email": "fernandez_novo@qa.com.br",
                    "password": "teste",   
                     "administrador": "true" 
          }
         }).then((response) => {
          expect(response.status).to.equal(200)
          expect(response.body.message).contain('Registro alterado com sucesso')

     }) 
})

    });

    it('Deve deletar um usuário previamente cadastrado', () => {
        //TODO: 
        cy.request('usuarios').then(response => {
          let id = response.body.usuarios[0]._id
          
        cy.request({
          method: 'DELETE',
          url: `usuarios/${id}`,
          body: {
                    "nome": 'Ana Fernandez novo',
                    "email": "fernandez_novo@qa.com.br",
                    "password": "teste",   
                     "administrador": "true" 
          }
         }).then((response) => {
          expect(response.status).to.equal(200)
          expect(response.body.message).contain('Registro excluído com sucesso')

     }) 
})

    });

    });


