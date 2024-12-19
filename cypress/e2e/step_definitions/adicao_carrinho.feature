Feature: Adição de produto no carrinho

Scenario: Adicionar um produto no carrinho
Given usuário tenha acessado o site e realizado o login
	And realiza a busca de um produto Tablet
When usuário clica no produto escolhido
	And apresenta a pagina detalhada sobre o produto
	And seleciona a cor do produto
	And informa a quantidade que será comprada	
	And clica no botão Add To Cart
Then site deve apresentar um pop-up informando que o produto está no carrinho