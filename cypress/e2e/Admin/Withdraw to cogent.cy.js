describe('Login for admin portal',function(){
    it('Login of admin',function(){
        cy.viewport(1920,1080)
        cy.wait(2000)
        cy.visit('https://admin-qa.coyni.com/login')

    })

    it('Enter email and password and click on next', function(){
        cy.viewport(1920,1080)
        cy.wait(2000)
        cy.get('#Email').type('swathim@ideyalabs.com')
        cy.get('#Password').type('Admin@123')
        cy.contains('Next').click()
    })
    it('Enter Two step authentication', function(){
        cy.viewport(1920,1080)
        cy.wait(2000)
        cy.get('.verification-input  ').eq(0).type('1')
        cy.get('.verification-input  ').eq(1).type('2')
        cy.get('.verification-input  ').eq(2).type('3')
        cy.get('.verification-input  ').eq(3).type('4')
        cy.get('.verification-input  ').eq(4).type('5')
        cy.get('.verification-input  ').eq(5).type('6')
    })
it('click on withdraw and transaction should be done',function(){
    cy.viewport(1920,1080)
        cy.wait(5000)
        cy.get('.text-cgy4.block > .flex').click()
        cy.contains('Withdraw To Cogent').click()
        cy.wait(3000)
        cy.get('#amount').type('1')
        cy.wait(5000)
        cy.get('[for="message"]').type('Hi Dan We are sending the 1 cyn to you')
        cy.wait(4000)
        cy.get('.bottom-6 > [data-testid]').click()
        cy.get('.absolute > [data-testid]').click()
        //verify your identity
        cy.get('.verification-input  ').eq(0).type('1')
        cy.get('.verification-input  ').eq(1).type('2')
        cy.get('.verification-input  ').eq(2).type('3')
        cy.get('.verification-input  ').eq(3).type('4')
        cy.get('.verification-input  ').eq(4).type('5')
        cy.get('.verification-input  ').eq(5).type('6')
        cy.contains('Done').click()
        cy.get(':nth-child(3) > .cell-col-2').click()
})
})