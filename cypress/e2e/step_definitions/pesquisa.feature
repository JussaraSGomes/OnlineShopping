Feature: Pesquisar produto no site

Scenario: Pesquisar um produto
Given usuário tenha acessado o site e realizado o login
When usuário clica no botão de Busca
	And Site apresenta um campo de pesquisa
	And usuário informa o produto a ser pesquisado
	And site apresenta um pop-up com o resultado da pesquisa
	And usuário clica no link View All 
Then Site deve apresentar uma página completa com o resultado da pesquisa