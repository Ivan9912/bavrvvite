describe('Home de https://www.buenosairesvrv.com.ar/', ()=>{
    beforeEach (() =>{
        cy.visit('https://www.buenosairesvrv.com.ar/')
    })
    it ('debe tener un titulo', ()=>{
        cy.title().should('include', 'Buenos Aires')
    })
    it('Hay un botón llamado Residencial en el header',()=>{
        cy.get('[href="/categoria/residencial"]').should('have.text', 'Residencial').click
   
})
})