describe('Home de https://www.buenosairesvrv.com.ar/', ()=>{
    beforeEach (() =>{
        cy.visit('https://www.buenosairesvrv.com.ar/')
    })
    it ('debe tener un titulo', ()=>{
        cy.title().should('include', 'Buenos Aires')
    })
    it('Hay un botón llamado Residencial en el header',()=>{
        cy.get('[href="/categoria/residencial"]').should('have.text', 'Residencial')
   })
   it('Hay un botón llamado Comercial en el header',()=>{
    cy.get('[href="/categoria/comercial"]').should('have.text', 'Comercial')
   })
   it('Hay un botón llamado Servicios en el header',()=>{
    cy.get('[href="/categoria/services"]').should('have.text', 'Servicios')
   })
   it('Hay un boton llamado Trabajos en el header',()=>{
    cy.get('[href="/categoria/trabajos"]').should('have.text', 'Trabajos')
   })
})
