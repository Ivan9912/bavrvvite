//$(npm bin)/cypress open (comando de appertura de  cypress)//

describe('Home de https://www.buenosairesvrv.com.ar/', () => {
    beforeEach(() => {
        cy.visit('https://www.buenosairesvrv.com.ar/')
    })
    it('Espera', () => {
        cy.wait(3000)
    })
    it('Botón Residencial', () => {
        cy.get('[href="/categoria/residencial"]').should('have.text', 'Residencial').click()
        cy.get('.footerImg').wait(3000).click()
    })
    it('Boton Comercial', () => {
        cy.get('[href="/categoria/comercial"]').click()
        cy.get('.footerImg').wait(3000).click()
    })
    it('Boton Servicios',()=>{
        cy.get('[href="/categoria/services"]').click()
        cy.get('.footerImg').wait(3000).click()
    })
    it('Boton Trabajos',()=>{
        cy.get('[href="/categoria/trabajos"]').click()
        cy.get('[src="https://i.imgur.com/6kwQpeg.mp4"]').wait(2000).click()
        cy.get('.footerImg').wait(4000).click()
    })
})

