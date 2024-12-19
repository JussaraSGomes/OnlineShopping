import { When, Then, And } from 'cypress-cucumber-preprocessor/steps'


When('usuário realizar uma requisição POST para atualizar a imagem do produto', () => {

    const userId = '453012590';
    const source = 'local'; //indica de onde vem o arquivo local ou remoto
    const filePath = 'imagens/Imagem_teste.jpg';

    cy.fixture(filePath, 'binary').then((fileContent) => {
        const formData = new FormData();
        const blob = Cypress.Blob.binaryStringToBlob(fileContent);
        formData.append('file', blob, 'Imagem_teste.jpg');

        const url = 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}?product_id=1'

        cy.request({
            url: url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo0NTMwMTI1OTAsInN1YiI6IlRlc3RlMTIiLCJyb2xlIjoiVVNFUiJ9.H0Bf8BzIDJ9cX3_eEgwMnT8GhETnu14141zX49gSbYE',
                'Accept': '*/*'
            },
            body: formData,
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(response.body);
        })
    })

})


