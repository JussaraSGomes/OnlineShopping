Feature: Validação dos produtos no carrinho na página de pagamento

Scenario: Validar na pagina de pagamento os produtos apresentados
Given usuário tenha acessado o site e realizado o login
	And tenha produtos adicionados no carrinho
When usuário clica na imagem do Carrinho de compras
	And Site direciona o usuário para a página Shopping Cart
	And Confirmar que as informações do pedido estão corretas
	And clica no botão Checkout
Then site deve direcionar o usuário para a página Order Payment
    And apresentar o Order Summary com as informações do pedido