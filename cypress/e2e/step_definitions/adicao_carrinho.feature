Feature: Adição de produto no carrinho

Scenario: Adicionar um produto no carrinho
Given usuário tenha acessado o site e realizado o login
	And realiza a busca de um produto
When usuário clica sobre a imagem do produto
	And Site apresenta uma pagina detalhada sobre o produto
	And usuário seleciona a cor
	And usuário informa a quantidade que será comprada	
	And clica no botão Add To Cart
Then site deve apresentar um pop-up informando que o produto está no carrinho